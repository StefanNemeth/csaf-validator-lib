const Ajv = require('ajv/dist/jtd.js').default

const ajv = new Ajv()

const inputSchema = /** @type {const} */ ({
  additionalProperties: true,

  properties: {
    product_tree: {
      additionalProperties: true,

      optionalProperties: {
        branches: {
          elements: {
            additionalProperties: true,

            properties: {},
          },
        },

        full_product_names: {
          elements: {
            additionalProperties: true,

            properties: {},
          },
        },

        relationships: {
          elements: {
            additionalProperties: true,

            properties: {},
          },
        },
      },
    },
  },
})

const fullProductNameSchema = /** @type {const} */ ({
  additionalProperties: true,

  properties: {
    product_id: { type: 'string' },
  },
})

const validate = ajv.compile(inputSchema)
const validateFullProductName = ajv.compile(fullProductNameSchema)

/**
 * @param {any} doc
 */
module.exports = function optionalTest_6_2_1(doc) {
  /** @type {Array<{ message: string; instancePath: string }>} */
  const warnings = []
  const context = { warnings }

  if (!validate(doc)) {
    return context
  }

  doc.product_tree.full_product_names?.forEach(
    (fullProductName, fullProductNameIndex) => {
      if (!validateFullProductName(fullProductName)) return
      if (!isReferenced(doc, fullProductName.product_id)) {
        context.warnings.push({
          instancePath: `/product_tree/full_product_names/${fullProductNameIndex}/product_id`,
          message: 'is not referenced',
        })
      }
    }
  )

  return context
}

const containsProductGroupsSchema = /** @type {const} */ ({
  additionalProperties: true,

  properties: {
    product_tree: {
      additionalProperties: true,

      properties: {
        product_groups: {
          elements: {
            additionalProperties: true,

            optionalProperties: {
              product_ids: {
                elements: { type: 'string' },
              },
            },
          },
        },
      },
    },
  },
})

const containsRelationshipWithReferencesSchema = /** @type {const} */ ({
  additionalProperties: true,

  properties: {
    product_tree: {
      additionalProperties: true,

      properties: {
        relationships: {
          elements: {
            additionalProperties: true,

            optionalProperties: {
              product_reference: { type: 'string' },
              relates_to_product_reference: { type: 'string' },
            },
          },
        },
      },
    },
  },
})

const containsVulnerabilitiesWithReferencesSchema = /** @type {const} */ ({
  additionalProperties: true,

  properties: {
    vulnerabilities: {
      elements: {
        additionalProperties: true,

        optionalProperties: {
          product_status: {
            additionalProperties: true,

            optionalProperties: {
              first_affected: { elements: { type: 'string' } },
              first_fixed: { elements: { type: 'string' } },
              fixed: { elements: { type: 'string' } },
              known_affected: { elements: { type: 'string' } },
              known_not_affected: { elements: { type: 'string' } },
              last_affected: { elements: { type: 'string' } },
              recommended: { elements: { type: 'string' } },
              under_investigation: { elements: { type: 'string' } },
            },
          },
        },
      },
    },
  },
})

const containsVulnerabilitiesWithOptionalReferencesSchema =
  /** @type {const} */ ({
    additionalProperties: true,

    properties: {
      vulnerabilities: {
        elements: {
          additionalProperties: true,

          optionalProperties: {
            remediations: {
              elements: {
                additionalProperties: true,

                optionalProperties: {
                  product_ids: {
                    elements: { type: 'string' },
                  },
                },
              },
            },
            scores: {
              elements: {
                additionalProperties: true,

                optionalProperties: {
                  products: {
                    elements: { type: 'string' },
                  },
                },
              },
            },
            threats: {
              elements: {
                additionalProperties: true,

                optionalProperties: {
                  product_ids: {
                    elements: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
  })

const validateContainsProductGroups = ajv.compile(containsProductGroupsSchema)
const validateContainsRelationshipWithReferences = ajv.compile(
  containsRelationshipWithReferencesSchema
)
const validateContainsVulnerabilitiesWithReferences = ajv.compile(
  containsVulnerabilitiesWithReferencesSchema
)
const validateContainsVulnerabilitiesWithOptionalReferences = ajv.compile(
  containsVulnerabilitiesWithOptionalReferencesSchema
)

/**
 * @param {unknown} doc
 * @param {string} productId
 */
function isReferenced(doc, productId) {
  let referenced = false

  if (!referenced && validateContainsProductGroups(doc)) {
    referenced = doc.product_tree.product_groups.some((group) => {
      return group.product_ids?.includes(productId) ?? false
    })
  }

  if (!referenced && validateContainsRelationshipWithReferences(doc)) {
    referenced = doc.product_tree.relationships.some((relationship) => {
      return (
        relationship.product_reference === productId ||
        relationship.relates_to_product_reference === productId
      )
    })
  }

  if (!referenced && validateContainsVulnerabilitiesWithReferences(doc)) {
    referenced = doc.vulnerabilities.some((vulnerability) => {
      const keys = /** @type {const} */ ([
        'first_affected',
        'first_fixed',
        'fixed',
        'known_affected',
        'known_not_affected',
        'last_affected',
        'recommended',
        'under_investigation',
      ])
      return keys.some(
        (key) =>
          vulnerability.product_status?.[key]?.includes(productId) ?? false
      )
    })
  }

  if (
    !referenced &&
    validateContainsVulnerabilitiesWithOptionalReferences(doc)
  ) {
    referenced = doc.vulnerabilities.some((vulnerability) => {
      return (
        vulnerability.remediations?.some(
          (remediation) => remediation.product_ids?.includes(productId) ?? false
        ) ||
        vulnerability.scores?.some(
          (score) => score.products?.includes(productId) ?? false
        ) ||
        vulnerability.threats?.some(
          (threat) => threat.product_ids?.includes(productId) ?? false
        ) ||
        false
      )
    })
  }

  return referenced
}