export default {
  document: {
    title:
      'Cisco IOS and IOS XE Software Smart Install Remote Code Execution Vulnerability',
    category: 'Cisco Security Advisory',
    csaf_version: '2.0',
    publisher: {
      category: 'vendor',
      contact_details:
        'Emergency Support:\n+1 877 228 7302 (toll-free within North America)\n+1 408 525 6532 (International direct-dial)\nNon-emergency Support:\nEmail: psirt@cisco.com\nSupport requests that are received via e-mail are typically acknowledged within 48 hours.',
      issuing_authority:
        'Cisco product security incident response is the responsibility of the Cisco Product Security Incident Response Team (PSIRT). The Cisco PSIRT is a dedicated, global team that manages the receipt, investigation, and public reporting of security vulnerability information that is related to Cisco products and networks. The on-call Cisco PSIRT works 24x7 with Cisco customers, independent security researchers, consultants, industry organizations, and other vendors to identify possible security issues with Cisco products and networks.\nMore information can be found in Cisco Security Vulnerability Policy available at http://www.cisco.com/web/about/security/psirt/security_vulnerability_policy.html',
      name: 'Cisco PSIRT',
      namespace: 'https://www.cisco.com',
    },
    tracking: {
      id: 'cisco-sa-20180328-smi2',
      status: 'final',
      version: '3.0.0',
      revision_history: [
        {
          number: '1.0.0',
          date: '2018-03-28T15:17:05Z',
          summary: 'Initial public release.',
        },
        {
          number: '1.1.0',
          date: '2018-03-29T17:13:23Z',
          summary: "Added the researcher's company name.",
        },
        {
          number: '1.2.0',
          date: '2018-04-02T13:18:01Z',
          summary: 'Metadata update.',
        },
        {
          number: '1.3.0',
          date: '2018-04-06T19:35:44Z',
          summary: 'Added more details to the Workarounds section.',
        },
        {
          number: '1.4.0',
          date: '2018-04-09T14:20:12Z',
          summary:
            'Emphasized that Smart Install is enabled by default. Added a link to the list of devices that support Smart Install.',
        },
        {
          number: '2.0.0',
          date: '2018-04-16T18:21:34Z',
          summary:
            'Updated IOS Software Checker with products found to be non-vulnerable.',
        },
        {
          number: '3.0.0',
          date: '2018-04-17T15:08:41Z',
          summary:
            'Updated IOS Software Checker with products found to be vulnerable.',
        },
      ],
      initial_release_date: '2018-03-28T16:00:00Z',
      current_release_date: '2018-04-17T15:08:41Z',
      generator: {
        engine: {
          name: 'TVCE',
        },
      },
    },
    notes: [
      {
        title: 'Summary',
        category: 'summary',
        text: 'A vulnerability in the Smart Install feature of Cisco IOS Software and Cisco IOS XE Software could allow an unauthenticated, remote attacker to trigger a reload of an affected device, resulting in a denial of service (DoS) condition, or to execute arbitrary code on an affected device.\n\nThe vulnerability is due to improper validation of packet data. An attacker could exploit this vulnerability by sending a crafted Smart Install message to an affected device on TCP port 4786. A successful exploit could allow the attacker to cause a buffer overflow on the affected device, which could have the following impacts:\n\nTriggering a reload of the device\nAllowing the attacker to execute arbitrary code on the device\nCausing an indefinite loop on the affected device that triggers a watchdog crash\n\nCisco has released software updates that address this vulnerability. There are no workarounds that address this vulnerability.\n\nSmart Install client functionality is enabled by default on switches that are running Cisco IOS Software releases that have not been updated to address Cisco bug ID CSCvd36820 ["https://bst.cloudapps.cisco.com/bugsearch/bug/CSCvd36820"].\n\nThis advisory is available at the following link:\nhttps://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20180328-smi2 ["https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20180328-smi2"]\n\nThis advisory is part of the March 28, 2018, release of the Cisco IOS and IOS XE Software Security Advisory Bundled Publication, which includes 20 Cisco Security Advisories that describe 22 vulnerabilities. For a complete list of the advisories and links to them, see Cisco Event Response: March 2018 Semiannual Cisco IOS and IOS XE Software Security Advisory Bundled Publication ["https://tools.cisco.com/security/center/viewErp.x?alertId=ERP-66682"].',
      },
      {
        title: 'Vulnerable Products',
        category: 'general',
        text: 'This vulnerability affects Cisco devices that are running a vulnerable release of Cisco IOS or IOS XE Software and have the Smart Install client feature enabled.\n\nOnly Smart Install client switches are affected by the vulnerability that is described in this advisory. Cisco devices that are configured as a Smart Install director are not affected by this vulnerability.\n\nFor a list of devices that support Smart Install, see Smart Install Configuration Guide - Supported Devices ["https://www.cisco.com/c/en/us/td/docs/switches/lan/smart_install/configuration/guide/smart_install/supported_devices.html"].\n\nFor information about which Cisco IOS and IOS XE Software releases are vulnerable, see the Fixed Software ["#fixed"] section of this advisory.\n  Notes Regarding Specific Releases\nSmart Install client functionality is enabled by default on switches that are running Cisco IOS Software releases that have not been updated to address Cisco bug ID CSCvd36820 ["https://bst.cloudapps.cisco.com/bugsearch/bug/CSCvd36820"].\n\nSwitches that are running releases earlier than Cisco IOS Software Release 12.2(52)SE are not capable of running Smart Install, but they can be Smart Install clients if they support the archive download-sw privileged EXEC command.\n  Determining Whether the Smart Install Client Feature Is Enabled\nTo determine whether a device is configured with the Smart Install client feature enabled, use the show vstack config privileged EXEC command on the Smart Install client. An output of Role: Client and Oper Mode: Enabled or Role: Client (SmartInstall enabled) from the show vstack config command confirms that the feature is enabled on the device.\n\nThe following examples show the output of the show vstack config command on Cisco Catalyst Switches that are configured as Smart Install clients:\n\n\nswitch1# show vstack config\nRole: Client (SmartInstall enabled)\n.\n.\n.\n\nswitch2# show vstack config\nCapability: Client\nOper Mode: Enabled\nRole: Client\n.\n.\n.\nDetermining the Cisco IOS Software Release\nTo determine which Cisco IOS Software release is running on a device, administrators can log in to the device, use the show version command in the CLI, and then refer to the system banner that appears. If the device is running Cisco IOS Software, the system banner displays text similar to Cisco Internetwork Operating System Software or Cisco IOS Software. The banner also displays the installed image name in parentheses, followed by the Cisco IOS Software release number and release name. Some Cisco devices do not support the show version command or may provide different output.\n\nThe following example shows the output of the command for a device that is running Cisco IOS Software Release 15.5(2)T1 and has an installed image name of C2951-UNIVERSALK9-M:\n\n\nRouter> show version\n  Cisco IOS Software, C2951 Software (C2951-UNIVERSALK9-M), Version 15.5(2)T1, RELEASE SOFTWARE (fc1)  Technical Support: http://www.cisco.com/techsupport  Copyright (c) 1986-2015 by Cisco Systems, Inc.  Compiled Mon 22-Jun-15 09:32 by prod_rel_team  .  .  .\n\nFor information about the naming and numbering conventions for Cisco IOS Software releases, see the Cisco IOS and NX-OS Software Reference Guide ["https://www.cisco.com/c/en/us/about/security-center/ios-nx-os-reference-guide.html"].\nDetermining the Cisco IOS XE Software Release\nTo determine which Cisco IOS XE Software release is running on a device, administrators can log in to the device, use the show version command in the CLI, and then refer to the system banner that appears. If the device is running Cisco IOS XE Software, the system banner displays Cisco IOS Software, Cisco IOS XE Software, or similar text.\n\nThe following example shows the output of the command for a device that is running Cisco IOS XE Software Release 16.2.1 and has an installed image name of CAT3K_CAA-UNIVERSALK9-M:\n\n\nios-xe-device# show version\n  Cisco IOS Software, Catalyst L3 Switch Software (CAT3K_CAA-UNIVERSALK9-M), Version Denali 16.2.1, RELEASE SOFTWARE (fc1)  Technical Support: http://www.cisco.com/techsupport  Copyright (c) 1986-2016 by Cisco Systems, Inc.  Compiled Sun 27-Mar-16 21:47 by mcpre  .  .  .\n\nFor information about the naming and numbering conventions for Cisco IOS XE Software releases, see the Cisco IOS and NX-OS Software Reference Guide ["https://www.cisco.com/c/en/us/about/security-center/ios-nx-os-reference-guide.html"].',
      },
      {
        title: 'Products Confirmed Not Vulnerable',
        category: 'general',
        text: 'No other Cisco products are currently known to be affected by this vulnerability.\n\nCisco has confirmed that this vulnerability does not affect Cisco IOS XR Software or Cisco NX-OS Software.',
      },
      {
        title: 'Details',
        category: 'general',
        text: 'Cisco Smart Install is a ?plug-and-play? configuration and image-management feature that provides zero-touch deployment for new (typically access layer) switches. The feature allows a customer to ship a Cisco switch to any location, install it in the network, and power it on without additional configuration requirements. The Smart Install feature incorporates no authentication by design.\n\nA Smart Install network consists of exactly one Smart Install director switch or router, also known as an integrated branch director (IBD), and one or more Smart Install client switches, also known as integrated branch clients (IBCs). A client switch does not need to be directly connected to the director; the client switch can be up to seven hops away.\n\nThe director provides a single management point for images and configuration of client switches. When a client switch is first installed in the network, the director automatically detects the new switch and identifies the correct Cisco IOS Software image and the configuration file for downloading. The director can also allocate an IP address and hostname to a client.',
      },
      {
        title: 'Workarounds',
        category: 'general',
        text: 'There are no workarounds that address this vulnerability for customers who require the use of Cisco Smart Install. For customers not requiring Cisco Smart Install, the feature can be disabled with the no vstack command. In software releases that are associated with Cisco Bug ID CSCvd36820 ["https://bst.cloudapps.cisco.com/bugsearch/bug/CSCvd36820"], Cisco Smart Install will auto-disable if not in use.\n\nAdministrators are encouraged to consult the informational security advisory on Cisco Smart Install Protocol Misuse ["https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20170214-smi"] and the Smart Install Configuration Guide ["http://www.cisco.com/c/en/us/td/docs/switches/lan/smart_install/configuration/guide/smart_install/concepts.html#23355"].',
      },
      {
        title: 'Fixed Software',
        category: 'general',
        text: 'Cisco has released free software updates that address the vulnerability described in this advisory. Customers may only install and expect support for software versions and feature sets for which they have purchased a license. By installing, downloading, accessing, or otherwise using such software upgrades, customers agree to follow the terms of the Cisco software license:\nhttps://www.cisco.com/c/en/us/products/end-user-license-agreement.html ["https://www.cisco.com/c/en/us/products/end-user-license-agreement.html"]\n\nAdditionally, customers may only download software for which they have a valid license, procured from Cisco directly, or through a Cisco authorized reseller or partner. In most cases this will be a maintenance upgrade to software that was previously purchased. Free security software updates do not entitle customers to a new software license, additional software feature sets, or major revision upgrades.\n\nWhen considering software upgrades, customers are advised to regularly consult the advisories for Cisco products, which are available from the Cisco Security Advisories and Alerts page ["https://www.cisco.com/go/psirt"], to determine exposure and a complete upgrade solution.\n\nIn all cases, customers should ensure that the devices to be upgraded contain sufficient memory and confirm that current hardware and software configurations will continue to be supported properly by the new release. If the information is not clear, customers are advised to contact the Cisco Technical Assistance Center (TAC) or their contracted maintenance providers.\n\nCustomers Without Service Contracts\n\nCustomers who purchase directly from Cisco but do not hold a Cisco service contract and customers who make purchases through third-party vendors but are unsuccessful in obtaining fixed software through their point of sale should obtain upgrades by contacting the Cisco TAC:\nhttps://www.cisco.com/c/en/us/support/web/tsd-cisco-worldwide-contacts.html ["https://www.cisco.com/c/en/us/support/web/tsd-cisco-worldwide-contacts.html"]\n\nCustomers should have the product serial number available and be prepared to provide the URL of this advisory as evidence of entitlement to a free upgrade.\n                      Cisco IOS and IOS XE Software\nTo help customers determine their exposure to vulnerabilities in Cisco IOS and IOS XE Software, Cisco provides a tool, the Cisco IOS Software Checker ["https://tools.cisco.com/security/center/softwarechecker.x"], that identifies any Cisco Security Advisories that impact a specific software release and the earliest release that fixes the vulnerabilities described in each advisory (?First Fixed?). If applicable, the tool also returns the earliest release that fixes all the vulnerabilities described in all the advisories identified (?Combined First Fixed?).\n\nCustomers can use this tool to perform the following tasks:\n\nInitiate a search by choosing one or more releases from a drop-down list or uploading a file from a local system for the tool to parse\nEnter the output of the show version command for the tool to parse\nCreate a custom search by including all previously published Cisco Security Advisories, a specific advisory, or all advisories in the most recent bundled publication\n\nTo determine whether a release is affected by any published Cisco Security Advisory, use the Cisco IOS Software Checker ["https://tools.cisco.com/security/center/softwarechecker.x"] on Cisco.com or enter a Cisco IOS Software or Cisco IOS XE Software release?for example, 15.1(4)M2 or 3.13.8S?in the following field:\n\n\n\n\n\nFor a mapping of Cisco IOS XE Software releases to Cisco IOS Software releases, refer to the Cisco IOS XE 2 Release Notes ["https://www.cisco.com/c/en/us/td/docs/ios/ios_xe/2/release/notes/rnasr21/rnasr21_gen.html#wp3000032"], Cisco IOS XE 3S Release Notes ["https://www.cisco.com/c/en/us/td/docs/ios/ios_xe/3/release/notes/asr1k_rn_3s_rel_notes/asr1k_rn_3s_sys_req.html#wp3069754"], or Cisco IOS XE 3SG Release Notes ["https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst4500/release/note/OL_24726.html#pgfId-2570252"], depending on the Cisco IOS XE Software release.',
      },
      {
        title: 'Vulnerability Policy',
        category: 'general',
        text: 'To learn about Cisco security vulnerability disclosure policies and publications, see the Security Vulnerability Policy ["http://www.cisco.com/web/about/security/psirt/security_vulnerability_policy.html"]. This document also contains instructions for obtaining fixed software and receiving security vulnerability information from Cisco.',
      },
      {
        title: 'Exploitation and Public Announcements',
        category: 'general',
        text: 'The Cisco Product Security Incident Response Team (PSIRT) is not aware of any public announcements or malicious use of the vulnerability that is described in this advisory.',
      },
      {
        title: 'Source',
        category: 'general',
        text: 'Cisco would like to thank George Nosenko from Embedi for reporting this vulnerability via GeekPwn.',
      },
      {
        title: 'Legal Disclaimer',
        category: 'legal_disclaimer',
        text: 'THIS DOCUMENT IS PROVIDED ON AN "AS IS" BASIS AND DOES NOT IMPLY ANY KIND OF GUARANTEE OR WARRANTY, INCLUDING THE WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE. YOUR USE OF THE INFORMATION ON THE DOCUMENT OR MATERIALS LINKED FROM THE DOCUMENT IS AT YOUR OWN RISK. CISCO RESERVES THE RIGHT TO CHANGE OR UPDATE THIS DOCUMENT AT ANY TIME.\n\nA standalone copy or paraphrase of the text of this document that omits the distribution URL is an uncontrolled copy and may lack important information or contain factual errors. The information in this document is intended for end users of Cisco products.',
      },
    ],
    references: [
      {
        url: 'https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20180328-smi2',
        summary:
          'Cisco IOS and IOS XE Software Smart Install Remote Code Execution Vulnerability',
      },
      {
        url: 'https://tools.cisco.com/security/center/content/CiscoSecurityBundle/cisco-sa-20180328-bundle',
        summary:
          'Summary of the Semiannual Cisco IOS and IOS XE Software Security Advisory Bundled Publication, March 28, 2018',
      },
      {
        url: 'http://tools.cisco.com/security/center/viewErp.x?alertId=ERP-66682',
        summary:
          'Cisco Event Response: March 2018 Semiannual Cisco IOS and IOS XE Software Security Advisory Bundled Publication',
      },
      {
        url: 'https://tools.cisco.com/security/center/content/CiscoSecurityBundle/cisco-sa-20180328-bundle',
        summary:
          'Summary of the Semiannual Cisco IOS and IOS XE Software Security Advisory Bundled Publication, March 28, 2018',
      },
      {
        url: 'http://tools.cisco.com/security/center/viewErp.x?alertId=ERP-66682',
        summary:
          'Cisco Event Response: March 2018 Semiannual Cisco IOS and IOS XE Software Security Advisory Bundled Publication',
      },
    ],
  },
  product_tree: {
    branches: [
      {
        name: 'Cisco',
        category: 'vendor',
        branches: [
          {
            name: 'IOS',
            category: 'product_name',
            branches: [
              {
                name: '12.2SE',
                category: 'product_version',
                branches: [
                  {
                    name: '12.2(55)SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-103763',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE',
                    },
                  },
                  {
                    name: '12.2(55)SE3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-105394',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE3',
                    },
                  },
                  {
                    name: '12.2(55)SE2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-105689',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE2',
                    },
                  },
                  {
                    name: '12.2(58)SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-105987',
                      name: 'Cisco IOS 12.2SE 12.2(58)SE',
                    },
                  },
                  {
                    name: '12.2(55)SE1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-106029',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE1',
                    },
                  },
                  {
                    name: '12.2(58)SE1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-109098',
                      name: 'Cisco IOS 12.2SE 12.2(58)SE1',
                    },
                  },
                  {
                    name: '12.2(55)SE4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-109439',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE4',
                    },
                  },
                  {
                    name: '12.2(58)SE2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-109808',
                      name: 'Cisco IOS 12.2SE 12.2(58)SE2',
                    },
                  },
                  {
                    name: '12.2(55)SE5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-111674',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE5',
                    },
                  },
                  {
                    name: '12.2(55)SE6',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-114665',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE6',
                    },
                  },
                  {
                    name: '12.2(55)SE7',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-184125',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE7',
                    },
                  },
                  {
                    name: '12.2(55)SE8',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-189187',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE8',
                    },
                  },
                  {
                    name: '12.2(55)SE9',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-192911',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE9',
                    },
                  },
                  {
                    name: '12.2(55)SE10',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-198542',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE10',
                    },
                  },
                  {
                    name: '12.2(55)SE11',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210732',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE11',
                    },
                  },
                  {
                    name: '12.2(55)SE12',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-228057',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE12',
                    },
                  },
                  {
                    name: '12.2(55)SE13',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230962',
                      name: 'Cisco IOS 12.2SE 12.2(55)SE13',
                    },
                  },
                ],
              },
              {
                name: '12.2EX',
                category: 'product_version',
                branches: [
                  {
                    name: '12.2(55)EX',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-106674',
                      name: 'Cisco IOS 12.2EX 12.2(55)EX',
                    },
                  },
                  {
                    name: '12.2(55)EX1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-108306',
                      name: 'Cisco IOS 12.2EX 12.2(55)EX1',
                    },
                  },
                  {
                    name: '12.2(55)EX2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-109760',
                      name: 'Cisco IOS 12.2EX 12.2(55)EX2',
                    },
                  },
                  {
                    name: '12.2(55)EX3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-111019',
                      name: 'Cisco IOS 12.2EX 12.2(55)EX3',
                    },
                  },
                ],
              },
              {
                name: '12.2EY',
                category: 'product_version',
                branches: [
                  {
                    name: '12.2(55)EY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-103559',
                      name: 'Cisco IOS 12.2EY 12.2(55)EY',
                    },
                  },
                ],
              },
              {
                name: '12.2EZ',
                category: 'product_version',
                branches: [
                  {
                    name: '12.2(55)EZ',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-107283',
                      name: 'Cisco IOS 12.2EZ 12.2(55)EZ',
                    },
                  },
                ],
              },
              {
                name: '15.0EY',
                category: 'product_version',
                branches: [
                  {
                    name: '15.0(1)EY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-104376',
                      name: 'Cisco IOS 15.0EY 15.0(1)EY',
                    },
                  },
                  {
                    name: '15.0(1)EY2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-187269',
                      name: 'Cisco IOS 15.0EY 15.0(1)EY2',
                    },
                  },
                ],
              },
              {
                name: '15.1M',
                category: 'product_version',
                branches: [
                  {
                    name: '15.1(4)M12c',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-233143',
                      name: 'Cisco IOS 15.1M 15.1(4)M12c',
                    },
                  },
                ],
              },
              {
                name: '15.0SE',
                category: 'product_version',
                branches: [
                  {
                    name: '15.0(1)SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-105660',
                      name: 'Cisco IOS 15.0SE 15.0(1)SE',
                    },
                  },
                  {
                    name: '15.0(2)SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-107852',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE',
                    },
                  },
                  {
                    name: '15.0(1)SE1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-111010',
                      name: 'Cisco IOS 15.0SE 15.0(1)SE1',
                    },
                  },
                  {
                    name: '15.0(1)SE2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-113961',
                      name: 'Cisco IOS 15.0SE 15.0(1)SE2',
                    },
                  },
                  {
                    name: '15.0(1)SE3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-115832',
                      name: 'Cisco IOS 15.0SE 15.0(1)SE3',
                    },
                  },
                  {
                    name: '15.0(2)SE1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-115939',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE1',
                    },
                  },
                  {
                    name: '15.0(2)SE2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-116083',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE2',
                    },
                  },
                  {
                    name: '15.0(2)SE3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-189455',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE3',
                    },
                  },
                  {
                    name: '15.0(2)SE4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-190635',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE4',
                    },
                  },
                  {
                    name: '15.0(2)SE5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-192706',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE5',
                    },
                  },
                  {
                    name: '15.0(2)SE6',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-195770',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE6',
                    },
                  },
                  {
                    name: '15.0(2)SE7',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204097',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE7',
                    },
                  },
                  {
                    name: '15.0(2)SE8',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209028',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE8',
                    },
                  },
                  {
                    name: '15.0(2)SE9',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209029',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE9',
                    },
                  },
                  {
                    name: '15.0(2a)SE9',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-212329',
                      name: 'Cisco IOS 15.0SE 15.0(2a)SE9',
                    },
                  },
                  {
                    name: '15.0(2)SE10',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213788',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE10',
                    },
                  },
                  {
                    name: '15.0(2)SE11',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220466',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE11',
                    },
                  },
                  {
                    name: '15.0(2)SE10a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222342',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE10a',
                    },
                  },
                  {
                    name: '15.0(2)SE12',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-234926',
                      name: 'Cisco IOS 15.0SE 15.0(2)SE12',
                    },
                  },
                ],
              },
              {
                name: '15.1SG',
                category: 'product_version',
                branches: [
                  {
                    name: '15.1(2)SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-115477',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG',
                    },
                  },
                  {
                    name: '15.1(2)SG1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-188035',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG1',
                    },
                  },
                  {
                    name: '15.1(2)SG2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-193283',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG2',
                    },
                  },
                  {
                    name: '15.1(2)SG3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-194741',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG3',
                    },
                  },
                  {
                    name: '15.1(2)SG4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-195489',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG4',
                    },
                  },
                  {
                    name: '15.1(2)SG5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-197465',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG5',
                    },
                  },
                  {
                    name: '15.1(2)SG6',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204187',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG6',
                    },
                  },
                  {
                    name: '15.1(2)SG7',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209034',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG7',
                    },
                  },
                  {
                    name: '15.1(2)SG8',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214992',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG8',
                    },
                  },
                  {
                    name: '15.1(2)SG8a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-233796',
                      name: 'Cisco IOS 15.1SG 15.1(2)SG8a',
                    },
                  },
                ],
              },
              {
                name: '15.0EX',
                category: 'product_version',
                branches: [
                  {
                    name: '15.0(2)EX',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-189064',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX',
                    },
                  },
                  {
                    name: '15.0(2)EX1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-189115',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX1',
                    },
                  },
                  {
                    name: '15.0(2)EX2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-192910',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX2',
                    },
                  },
                  {
                    name: '15.0(2)EX3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-194540',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX3',
                    },
                  },
                  {
                    name: '15.0(2)EX4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-194913',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX4',
                    },
                  },
                  {
                    name: '15.0(2)EX5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-195943',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX5',
                    },
                  },
                  {
                    name: '15.0(2)EX6',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-200496',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX6',
                    },
                  },
                  {
                    name: '15.0(2)EX7',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-201366',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX7',
                    },
                  },
                  {
                    name: '15.0(2)EX8',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204831',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX8',
                    },
                  },
                  {
                    name: '15.0(2a)EX5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-205064',
                      name: 'Cisco IOS 15.0EX 15.0(2a)EX5',
                    },
                  },
                  {
                    name: '15.0(2)EX10',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-211570',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX10',
                    },
                  },
                  {
                    name: '15.0(2)EX11',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214797',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX11',
                    },
                  },
                  {
                    name: '15.0(2)EX13',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-225160',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX13',
                    },
                  },
                  {
                    name: '15.0(2)EX12',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230965',
                      name: 'Cisco IOS 15.0EX 15.0(2)EX12',
                    },
                  },
                ],
              },
              {
                name: '15.1SY',
                category: 'product_version',
                branches: [
                  {
                    name: '15.1(1)SY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-112489',
                      name: 'Cisco IOS 15.1SY 15.1(1)SY',
                    },
                  },
                  {
                    name: '15.1(1)SY1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-115285',
                      name: 'Cisco IOS 15.1SY 15.1(1)SY1',
                    },
                  },
                  {
                    name: '15.1(2)SY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-184932',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY',
                    },
                  },
                  {
                    name: '15.1(2)SY1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-188061',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY1',
                    },
                  },
                  {
                    name: '15.1(2)SY2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-189219',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY2',
                    },
                  },
                  {
                    name: '15.1(1)SY2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-191635',
                      name: 'Cisco IOS 15.1SY 15.1(1)SY2',
                    },
                  },
                  {
                    name: '15.1(1)SY3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-194944',
                      name: 'Cisco IOS 15.1SY 15.1(1)SY3',
                    },
                  },
                  {
                    name: '15.1(2)SY3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-198059',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY3',
                    },
                  },
                  {
                    name: '15.1(1)SY4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-198426',
                      name: 'Cisco IOS 15.1SY 15.1(1)SY4',
                    },
                  },
                  {
                    name: '15.1(2)SY4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-201019',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY4',
                    },
                  },
                  {
                    name: '15.1(1)SY5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204109',
                      name: 'Cisco IOS 15.1SY 15.1(1)SY5',
                    },
                  },
                  {
                    name: '15.1(2)SY5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204110',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY5',
                    },
                  },
                  {
                    name: '15.1(2)SY4a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204832',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY4a',
                    },
                  },
                  {
                    name: '15.1(1)SY6',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209043',
                      name: 'Cisco IOS 15.1SY 15.1(1)SY6',
                    },
                  },
                  {
                    name: '15.1(2)SY6',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209044',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY6',
                    },
                  },
                  {
                    name: '15.1(2)SY7',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210406',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY7',
                    },
                  },
                  {
                    name: '15.1(2)SY8',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214052',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY8',
                    },
                  },
                  {
                    name: '15.1(2)SY9',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220440',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY9',
                    },
                  },
                  {
                    name: '15.1(2)SY10',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222650',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY10',
                    },
                  },
                  {
                    name: '15.1(2)SY11',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-227307',
                      name: 'Cisco IOS 15.1SY 15.1(2)SY11',
                    },
                  },
                ],
              },
              {
                name: '12.4JAN',
                category: 'product_version',
                branches: [
                  {
                    name: '12.4(25e)JAN2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-192702',
                      name: 'Cisco IOS 12.4JAN 12.4(25e)JAN2',
                    },
                  },
                ],
              },
              {
                name: '15.2E',
                category: 'product_version',
                branches: [
                  {
                    name: '15.2(1)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-183811',
                      name: 'Cisco IOS 15.2E 15.2(1)E',
                    },
                  },
                  {
                    name: '15.2(2)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-187057',
                      name: 'Cisco IOS 15.2E 15.2(2)E',
                    },
                  },
                  {
                    name: '15.2(1)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-195469',
                      name: 'Cisco IOS 15.2E 15.2(1)E1',
                    },
                  },
                  {
                    name: '15.2(3)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-197483',
                      name: 'Cisco IOS 15.2E 15.2(3)E',
                    },
                  },
                  {
                    name: '15.2(1)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-198060',
                      name: 'Cisco IOS 15.2E 15.2(1)E2',
                    },
                  },
                  {
                    name: '15.2(1)E3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-200488',
                      name: 'Cisco IOS 15.2E 15.2(1)E3',
                    },
                  },
                  {
                    name: '15.2(2)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-201074',
                      name: 'Cisco IOS 15.2E 15.2(2)E1',
                    },
                  },
                  {
                    name: '15.2(2b)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204102',
                      name: 'Cisco IOS 15.2E 15.2(2b)E',
                    },
                  },
                  {
                    name: '15.2(4)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204108',
                      name: 'Cisco IOS 15.2E 15.2(4)E',
                    },
                  },
                  {
                    name: '15.2(3)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204186',
                      name: 'Cisco IOS 15.2E 15.2(3)E1',
                    },
                  },
                  {
                    name: '15.2(2)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204228',
                      name: 'Cisco IOS 15.2E 15.2(2)E2',
                    },
                  },
                  {
                    name: '15.2(2a)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204818',
                      name: 'Cisco IOS 15.2E 15.2(2a)E1',
                    },
                  },
                  {
                    name: '15.2(2)E3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-205672',
                      name: 'Cisco IOS 15.2E 15.2(2)E3',
                    },
                  },
                  {
                    name: '15.2(2a)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209045',
                      name: 'Cisco IOS 15.2E 15.2(2a)E2',
                    },
                  },
                  {
                    name: '15.2(3)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209046',
                      name: 'Cisco IOS 15.2E 15.2(3)E2',
                    },
                  },
                  {
                    name: '15.2(3a)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209047',
                      name: 'Cisco IOS 15.2E 15.2(3a)E',
                    },
                  },
                  {
                    name: '15.2(3)E3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209358',
                      name: 'Cisco IOS 15.2E 15.2(3)E3',
                    },
                  },
                  {
                    name: '15.2(3m)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209359',
                      name: 'Cisco IOS 15.2E 15.2(3m)E2',
                    },
                  },
                  {
                    name: '15.2(4)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209887',
                      name: 'Cisco IOS 15.2E 15.2(4)E1',
                    },
                  },
                  {
                    name: '15.2(2)E4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210766',
                      name: 'Cisco IOS 15.2E 15.2(2)E4',
                    },
                  },
                  {
                    name: '15.2(2)E5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-211296',
                      name: 'Cisco IOS 15.2E 15.2(2)E5',
                    },
                  },
                  {
                    name: '15.2(4)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213610',
                      name: 'Cisco IOS 15.2E 15.2(4)E2',
                    },
                  },
                  {
                    name: '15.2(4m)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214072',
                      name: 'Cisco IOS 15.2E 15.2(4m)E1',
                    },
                  },
                  {
                    name: '15.2(3)E4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214078',
                      name: 'Cisco IOS 15.2E 15.2(3)E4',
                    },
                  },
                  {
                    name: '15.2(5)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214556',
                      name: 'Cisco IOS 15.2E 15.2(5)E',
                    },
                  },
                  {
                    name: '15.2(3m)E7',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-216295',
                      name: 'Cisco IOS 15.2E 15.2(3m)E7',
                    },
                  },
                  {
                    name: '15.2(4)E3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217805',
                      name: 'Cisco IOS 15.2E 15.2(4)E3',
                    },
                  },
                  {
                    name: '15.2(2)E6',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-218891',
                      name: 'Cisco IOS 15.2E 15.2(2)E6',
                    },
                  },
                  {
                    name: '15.2(5a)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-218995',
                      name: 'Cisco IOS 15.2E 15.2(5a)E',
                    },
                  },
                  {
                    name: '15.2(5)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220441',
                      name: 'Cisco IOS 15.2E 15.2(5)E1',
                    },
                  },
                  {
                    name: '15.2(5b)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220457',
                      name: 'Cisco IOS 15.2E 15.2(5b)E',
                    },
                  },
                  {
                    name: '15.2(4m)E3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220664',
                      name: 'Cisco IOS 15.2E 15.2(4m)E3',
                    },
                  },
                  {
                    name: '15.2(3m)E8',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220689',
                      name: 'Cisco IOS 15.2E 15.2(3m)E8',
                    },
                  },
                  {
                    name: '15.2(2)E5a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-221033',
                      name: 'Cisco IOS 15.2E 15.2(2)E5a',
                    },
                  },
                  {
                    name: '15.2(5c)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-221137',
                      name: 'Cisco IOS 15.2E 15.2(5c)E',
                    },
                  },
                  {
                    name: '15.2(3)E5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222275',
                      name: 'Cisco IOS 15.2E 15.2(3)E5',
                    },
                  },
                  {
                    name: '15.2(2)E5b',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222436',
                      name: 'Cisco IOS 15.2E 15.2(2)E5b',
                    },
                  },
                  {
                    name: '15.2(4n)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222500',
                      name: 'Cisco IOS 15.2E 15.2(4n)E2',
                    },
                  },
                  {
                    name: '15.2(4o)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222924',
                      name: 'Cisco IOS 15.2E 15.2(4o)E2',
                    },
                  },
                  {
                    name: '15.2(5a)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-223143',
                      name: 'Cisco IOS 15.2E 15.2(5a)E1',
                    },
                  },
                  {
                    name: '15.2(4)E4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-224553',
                      name: 'Cisco IOS 15.2E 15.2(4)E4',
                    },
                  },
                  {
                    name: '15.2(2)E7',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-224868',
                      name: 'Cisco IOS 15.2E 15.2(2)E7',
                    },
                  },
                  {
                    name: '15.2(5)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-225740',
                      name: 'Cisco IOS 15.2E 15.2(5)E2',
                    },
                  },
                  {
                    name: '15.2(4p)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-226077',
                      name: 'Cisco IOS 15.2E 15.2(4p)E1',
                    },
                  },
                  {
                    name: '15.2(6)E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-227598',
                      name: 'Cisco IOS 15.2E 15.2(6)E',
                    },
                  },
                  {
                    name: '15.2(5)E2b',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-227754',
                      name: 'Cisco IOS 15.2E 15.2(5)E2b',
                    },
                  },
                  {
                    name: '15.2(4)E5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-227959',
                      name: 'Cisco IOS 15.2E 15.2(4)E5',
                    },
                  },
                  {
                    name: '15.2(5)E2c',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-228151',
                      name: 'Cisco IOS 15.2E 15.2(5)E2c',
                    },
                  },
                  {
                    name: '15.2(4m)E2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230588',
                      name: 'Cisco IOS 15.2E 15.2(4m)E2',
                    },
                  },
                  {
                    name: '15.2(4o)E3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230589',
                      name: 'Cisco IOS 15.2E 15.2(4o)E3',
                    },
                  },
                  {
                    name: '15.2(4q)E1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230590',
                      name: 'Cisco IOS 15.2E 15.2(4q)E1',
                    },
                  },
                  {
                    name: '15.2(6)E0a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230591',
                      name: 'Cisco IOS 15.2E 15.2(6)E0a',
                    },
                  },
                  {
                    name: '15.2(6)E0b',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230623',
                      name: 'Cisco IOS 15.2E 15.2(6)E0b',
                    },
                  },
                  {
                    name: '15.2(2)E7b',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230990',
                      name: 'Cisco IOS 15.2E 15.2(2)E7b',
                    },
                  },
                  {
                    name: '15.2(4)E5a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-231074',
                      name: 'Cisco IOS 15.2E 15.2(4)E5a',
                    },
                  },
                  {
                    name: '15.2(6)E0c',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-231245',
                      name: 'Cisco IOS 15.2E 15.2(6)E0c',
                    },
                  },
                ],
              },
              {
                name: '15.0EZ',
                category: 'product_version',
                branches: [
                  {
                    name: '15.0(2)EZ',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-190637',
                      name: 'Cisco IOS 15.0EZ 15.0(2)EZ',
                    },
                  },
                ],
              },
              {
                name: '15.2EY',
                category: 'product_version',
                branches: [
                  {
                    name: '15.2(1)EY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-191928',
                      name: 'Cisco IOS 15.2EY 15.2(1)EY',
                    },
                  },
                ],
              },
              {
                name: '15.0EJ',
                category: 'product_version',
                branches: [
                  {
                    name: '15.0(2)EJ',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-191948',
                      name: 'Cisco IOS 15.0EJ 15.0(2)EJ',
                    },
                  },
                  {
                    name: '15.0(2)EJ1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-197471',
                      name: 'Cisco IOS 15.0EJ 15.0(2)EJ1',
                    },
                  },
                ],
              },
              {
                name: '15.2SY',
                category: 'product_version',
                branches: [
                  {
                    name: '15.2(1)SY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-192726',
                      name: 'Cisco IOS 15.2SY 15.2(1)SY',
                    },
                  },
                  {
                    name: '15.2(1)SY1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-204828',
                      name: 'Cisco IOS 15.2SY 15.2(1)SY1',
                    },
                  },
                  {
                    name: '15.2(1)SY0a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209063',
                      name: 'Cisco IOS 15.2SY 15.2(1)SY0a',
                    },
                  },
                  {
                    name: '15.2(1)SY2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209064',
                      name: 'Cisco IOS 15.2SY 15.2(1)SY2',
                    },
                  },
                  {
                    name: '15.2(2)SY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209065',
                      name: 'Cisco IOS 15.2SY 15.2(2)SY',
                    },
                  },
                  {
                    name: '15.2(1)SY1a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209439',
                      name: 'Cisco IOS 15.2SY 15.2(1)SY1a',
                    },
                  },
                  {
                    name: '15.2(2)SY1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-211976',
                      name: 'Cisco IOS 15.2SY 15.2(2)SY1',
                    },
                  },
                  {
                    name: '15.2(2)SY2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214053',
                      name: 'Cisco IOS 15.2SY 15.2(2)SY2',
                    },
                  },
                  {
                    name: '15.2(1)SY3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-216259',
                      name: 'Cisco IOS 15.2SY 15.2(1)SY3',
                    },
                  },
                  {
                    name: '15.2(1)SY4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222651',
                      name: 'Cisco IOS 15.2SY 15.2(1)SY4',
                    },
                  },
                  {
                    name: '15.2(2)SY3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-227285',
                      name: 'Cisco IOS 15.2SY 15.2(2)SY3',
                    },
                  },
                  {
                    name: '15.2(1)SY5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-227308',
                      name: 'Cisco IOS 15.2SY 15.2(1)SY5',
                    },
                  },
                ],
              },
              {
                name: '15.2EX',
                category: 'product_version',
                branches: [
                  {
                    name: '15.2(5)EX',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222530',
                      name: 'Cisco IOS 15.2EX 15.2(5)EX',
                    },
                  },
                ],
              },
              {
                name: '15.1SVG',
                category: 'product_version',
                branches: [
                  {
                    name: '15.1(3)SVG3d',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-232957',
                      name: 'Cisco IOS 15.1SVG 15.1(3)SVG3d',
                    },
                  },
                ],
              },
              {
                name: '15.2EB',
                category: 'product_version',
                branches: [
                  {
                    name: '15.2(2)EB',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-197462',
                      name: 'Cisco IOS 15.2EB 15.2(2)EB',
                    },
                  },
                  {
                    name: '15.2(2)EB1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209839',
                      name: 'Cisco IOS 15.2EB 15.2(2)EB1',
                    },
                  },
                  {
                    name: '15.2(2)EB2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214218',
                      name: 'Cisco IOS 15.2EB 15.2(2)EB2',
                    },
                  },
                ],
              },
              {
                name: '15.3SY',
                category: 'product_version',
                branches: [
                  {
                    name: '15.3(1)SY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-209532',
                      name: 'Cisco IOS 15.3SY 15.3(1)SY',
                    },
                  },
                  {
                    name: '15.3(0)SY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-212701',
                      name: 'Cisco IOS 15.3SY 15.3(0)SY',
                    },
                  },
                  {
                    name: '15.3(1)SY1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-216258',
                      name: 'Cisco IOS 15.3SY 15.3(1)SY1',
                    },
                  },
                  {
                    name: '15.3(1)SY2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220444',
                      name: 'Cisco IOS 15.3SY 15.3(1)SY2',
                    },
                  },
                  {
                    name: '15.3(1)SY3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230607',
                      name: 'Cisco IOS 15.3SY 15.3(1)SY3',
                    },
                  },
                ],
              },
              {
                name: '15.6SP',
                category: 'product_version',
                branches: [
                  {
                    name: '15.6(2)SP3b',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-231824',
                      name: 'Cisco IOS 15.6SP 15.6(2)SP3b',
                    },
                  },
                ],
              },
              {
                name: '15.2EC',
                category: 'product_version',
                branches: [
                  {
                    name: '15.2(4)EC1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220461',
                      name: 'Cisco IOS 15.2EC 15.2(4)EC1',
                    },
                  },
                  {
                    name: '15.2(4)EC2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-223086',
                      name: 'Cisco IOS 15.2EC 15.2(4)EC2',
                    },
                  },
                ],
              },
              {
                name: '15.4SY',
                category: 'product_version',
                branches: [
                  {
                    name: '15.4(1)SY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217807',
                      name: 'Cisco IOS 15.4SY 15.4(1)SY',
                    },
                  },
                  {
                    name: '15.4(1)SY1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220594',
                      name: 'Cisco IOS 15.4SY 15.4(1)SY1',
                    },
                  },
                  {
                    name: '15.4(1)SY2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-224611',
                      name: 'Cisco IOS 15.4SY 15.4(1)SY2',
                    },
                  },
                  {
                    name: '15.4(1)SY3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-228056',
                      name: 'Cisco IOS 15.4SY 15.4(1)SY3',
                    },
                  },
                ],
              },
              {
                name: '15.5SY',
                category: 'product_version',
                branches: [
                  {
                    name: '15.5(1)SY',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-225786',
                      name: 'Cisco IOS 15.5SY 15.5(1)SY',
                    },
                  },
                ],
              },
            ],
          },
          {
            name: 'Cisco IOS XE Software',
            category: 'product_name',
            branches: [
              {
                name: '3.2SE',
                category: 'product_version',
                branches: [
                  {
                    name: '3.2.0SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196216',
                      name: 'Cisco IOS XE Software 3.2SE 3.2.0SE',
                    },
                  },
                  {
                    name: '3.2.1SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196221',
                      name: 'Cisco IOS XE Software 3.2SE 3.2.1SE',
                    },
                  },
                  {
                    name: '3.2.2SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196222',
                      name: 'Cisco IOS XE Software 3.2SE 3.2.2SE',
                    },
                  },
                  {
                    name: '3.2.3SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196223',
                      name: 'Cisco IOS XE Software 3.2SE 3.2.3SE',
                    },
                  },
                ],
              },
              {
                name: '3.3SE',
                category: 'product_version',
                branches: [
                  {
                    name: '3.3.0SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196218',
                      name: 'Cisco IOS XE Software 3.3SE 3.3.0SE',
                    },
                  },
                  {
                    name: '3.3.1SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196925',
                      name: 'Cisco IOS XE Software 3.3SE 3.3.1SE',
                    },
                  },
                  {
                    name: '3.3.2SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206200',
                      name: 'Cisco IOS XE Software 3.3SE 3.3.2SE',
                    },
                  },
                  {
                    name: '3.3.3SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206201',
                      name: 'Cisco IOS XE Software 3.3SE 3.3.3SE',
                    },
                  },
                  {
                    name: '3.3.4SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206202',
                      name: 'Cisco IOS XE Software 3.3SE 3.3.4SE',
                    },
                  },
                  {
                    name: '3.3.5SE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206203',
                      name: 'Cisco IOS XE Software 3.3SE 3.3.5SE',
                    },
                  },
                ],
              },
              {
                name: '3.3XO',
                category: 'product_version',
                branches: [
                  {
                    name: '3.3.0XO',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196220',
                      name: 'Cisco IOS XE Software 3.3XO 3.3.0XO',
                    },
                  },
                  {
                    name: '3.3.1XO',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206163',
                      name: 'Cisco IOS XE Software 3.3XO 3.3.1XO',
                    },
                  },
                  {
                    name: '3.3.2XO',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206164',
                      name: 'Cisco IOS XE Software 3.3XO 3.3.2XO',
                    },
                  },
                ],
              },
              {
                name: '3.4SG',
                category: 'product_version',
                branches: [
                  {
                    name: '3.4.0SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196230',
                      name: 'Cisco IOS XE Software 3.4SG 3.4.0SG',
                    },
                  },
                  {
                    name: '3.4.2SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196231',
                      name: 'Cisco IOS XE Software 3.4SG 3.4.2SG',
                    },
                  },
                  {
                    name: '3.4.1SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-196288',
                      name: 'Cisco IOS XE Software 3.4SG 3.4.1SG',
                    },
                  },
                  {
                    name: '3.4.3SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206165',
                      name: 'Cisco IOS XE Software 3.4SG 3.4.3SG',
                    },
                  },
                  {
                    name: '3.4.4SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206166',
                      name: 'Cisco IOS XE Software 3.4SG 3.4.4SG',
                    },
                  },
                  {
                    name: '3.4.5SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206167',
                      name: 'Cisco IOS XE Software 3.4SG 3.4.5SG',
                    },
                  },
                  {
                    name: '3.4.6SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210070',
                      name: 'Cisco IOS XE Software 3.4SG 3.4.6SG',
                    },
                  },
                  {
                    name: '3.4.7SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213785',
                      name: 'Cisco IOS XE Software 3.4SG 3.4.7SG',
                    },
                  },
                  {
                    name: '3.4.8SG',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-221185',
                      name: 'Cisco IOS XE Software 3.4SG 3.4.8SG',
                    },
                  },
                ],
              },
              {
                name: '3.5E',
                category: 'product_version',
                branches: [
                  {
                    name: '3.5.0E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-197145',
                      name: 'Cisco IOS XE Software 3.5E 3.5.0E',
                    },
                  },
                  {
                    name: '3.5.1E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206168',
                      name: 'Cisco IOS XE Software 3.5E 3.5.1E',
                    },
                  },
                  {
                    name: '3.5.2E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206169',
                      name: 'Cisco IOS XE Software 3.5E 3.5.2E',
                    },
                  },
                  {
                    name: '3.5.3E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206170',
                      name: 'Cisco IOS XE Software 3.5E 3.5.3E',
                    },
                  },
                ],
              },
              {
                name: '3.6E',
                category: 'product_version',
                branches: [
                  {
                    name: '3.6.0E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206172',
                      name: 'Cisco IOS XE Software 3.6E 3.6.0E',
                    },
                  },
                  {
                    name: '3.6.1E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206173',
                      name: 'Cisco IOS XE Software 3.6E 3.6.1E',
                    },
                  },
                  {
                    name: '3.6.0aE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210073',
                      name: 'Cisco IOS XE Software 3.6E 3.6.0aE',
                    },
                  },
                  {
                    name: '3.6.0bE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210074',
                      name: 'Cisco IOS XE Software 3.6E 3.6.0bE',
                    },
                  },
                  {
                    name: '3.6.2aE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210075',
                      name: 'Cisco IOS XE Software 3.6E 3.6.2aE',
                    },
                  },
                  {
                    name: '3.6.2E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210264',
                      name: 'Cisco IOS XE Software 3.6E 3.6.2E',
                    },
                  },
                  {
                    name: '3.6.3E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-212674',
                      name: 'Cisco IOS XE Software 3.6E 3.6.3E',
                    },
                  },
                  {
                    name: '3.6.4E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213790',
                      name: 'Cisco IOS XE Software 3.6E 3.6.4E',
                    },
                  },
                  {
                    name: '3.6.5E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217279',
                      name: 'Cisco IOS XE Software 3.6E 3.6.5E',
                    },
                  },
                  {
                    name: '3.6.6E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220357',
                      name: 'Cisco IOS XE Software 3.6E 3.6.6E',
                    },
                  },
                  {
                    name: '3.6.5aE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-221108',
                      name: 'Cisco IOS XE Software 3.6E 3.6.5aE',
                    },
                  },
                  {
                    name: '3.6.5bE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222435',
                      name: 'Cisco IOS XE Software 3.6E 3.6.5bE',
                    },
                  },
                  {
                    name: '3.6.7E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-224840',
                      name: 'Cisco IOS XE Software 3.6E 3.6.7E',
                    },
                  },
                  {
                    name: '3.6.7aE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230240',
                      name: 'Cisco IOS XE Software 3.6E 3.6.7aE',
                    },
                  },
                  {
                    name: '3.6.7bE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-230998',
                      name: 'Cisco IOS XE Software 3.6E 3.6.7bE',
                    },
                  },
                ],
              },
              {
                name: '3.7E',
                category: 'product_version',
                branches: [
                  {
                    name: '3.7.0E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-206211',
                      name: 'Cisco IOS XE Software 3.7E 3.7.0E',
                    },
                  },
                  {
                    name: '3.7.1E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210076',
                      name: 'Cisco IOS XE Software 3.7E 3.7.1E',
                    },
                  },
                  {
                    name: '3.7.2E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-210077',
                      name: 'Cisco IOS XE Software 3.7E 3.7.2E',
                    },
                  },
                  {
                    name: '3.7.3E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213797',
                      name: 'Cisco IOS XE Software 3.7E 3.7.3E',
                    },
                  },
                  {
                    name: '3.7.4E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217280',
                      name: 'Cisco IOS XE Software 3.7E 3.7.4E',
                    },
                  },
                  {
                    name: '3.7.5E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220290',
                      name: 'Cisco IOS XE Software 3.7E 3.7.5E',
                    },
                  },
                ],
              },
              {
                name: '16.1',
                category: 'product_version',
                branches: [
                  {
                    name: '16.1.1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-212436',
                      name: 'Cisco IOS XE Software 16.1 16.1.1',
                    },
                  },
                  {
                    name: '16.1.2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213100',
                      name: 'Cisco IOS XE Software 16.1 16.1.2',
                    },
                  },
                  {
                    name: '16.1.3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214993',
                      name: 'Cisco IOS XE Software 16.1 16.1.3',
                    },
                  },
                ],
              },
              {
                name: '3.2JA',
                category: 'product_version',
                branches: [
                  {
                    name: '3.2.0JA',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213783',
                      name: 'Cisco IOS XE Software 3.2JA 3.2.0JA',
                    },
                  },
                ],
              },
              {
                name: '16.2',
                category: 'product_version',
                branches: [
                  {
                    name: '16.2.1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213809',
                      name: 'Cisco IOS XE Software 16.2 16.2.1',
                    },
                  },
                  {
                    name: '16.2.2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217253',
                      name: 'Cisco IOS XE Software 16.2 16.2.2',
                    },
                  },
                ],
              },
              {
                name: '3.8E',
                category: 'product_version',
                branches: [
                  {
                    name: '3.8.0E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213811',
                      name: 'Cisco IOS XE Software 3.8E 3.8.0E',
                    },
                  },
                  {
                    name: '3.8.1E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213812',
                      name: 'Cisco IOS XE Software 3.8E 3.8.1E',
                    },
                  },
                  {
                    name: '3.8.2E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217283',
                      name: 'Cisco IOS XE Software 3.8E 3.8.2E',
                    },
                  },
                  {
                    name: '3.8.3E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220489',
                      name: 'Cisco IOS XE Software 3.8E 3.8.3E',
                    },
                  },
                  {
                    name: '3.8.4E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222695',
                      name: 'Cisco IOS XE Software 3.8E 3.8.4E',
                    },
                  },
                  {
                    name: '3.8.5E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-226331',
                      name: 'Cisco IOS XE Software 3.8E 3.8.5E',
                    },
                  },
                  {
                    name: '3.8.5aE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-231004',
                      name: 'Cisco IOS XE Software 3.8E 3.8.5aE',
                    },
                  },
                ],
              },
              {
                name: '16.3',
                category: 'product_version',
                branches: [
                  {
                    name: '16.3.1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-213960',
                      name: 'Cisco IOS XE Software 16.3 16.3.1',
                    },
                  },
                  {
                    name: '16.3.2',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217255',
                      name: 'Cisco IOS XE Software 16.3 16.3.2',
                    },
                  },
                  {
                    name: '16.3.3',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217256',
                      name: 'Cisco IOS XE Software 16.3 16.3.3',
                    },
                  },
                  {
                    name: '16.3.1a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-220802',
                      name: 'Cisco IOS XE Software 16.3 16.3.1a',
                    },
                  },
                  {
                    name: '16.3.4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222711',
                      name: 'Cisco IOS XE Software 16.3 16.3.4',
                    },
                  },
                  {
                    name: '16.3.5',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-229124',
                      name: 'Cisco IOS XE Software 16.3 16.3.5',
                    },
                  },
                  {
                    name: '16.3.5b',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-231187',
                      name: 'Cisco IOS XE Software 16.3 16.3.5b',
                    },
                  },
                ],
              },
              {
                name: '16.4',
                category: 'product_version',
                branches: [
                  {
                    name: '16.4.1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-214051',
                      name: 'Cisco IOS XE Software 16.4 16.4.1',
                    },
                  },
                ],
              },
              {
                name: '16.5',
                category: 'product_version',
                branches: [
                  {
                    name: '16.5.1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217259',
                      name: 'Cisco IOS XE Software 16.5 16.5.1',
                    },
                  },
                  {
                    name: '16.5.1a',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-225784',
                      name: 'Cisco IOS XE Software 16.5 16.5.1a',
                    },
                  },
                ],
              },
              {
                name: '3.9E',
                category: 'product_version',
                branches: [
                  {
                    name: '3.9.0E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-217282',
                      name: 'Cisco IOS XE Software 3.9E 3.9.0E',
                    },
                  },
                  {
                    name: '3.9.1E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-222483',
                      name: 'Cisco IOS XE Software 3.9E 3.9.1E',
                    },
                  },
                  {
                    name: '3.9.2E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-226158',
                      name: 'Cisco IOS XE Software 3.9E 3.9.2E',
                    },
                  },
                  {
                    name: '3.9.2bE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-227755',
                      name: 'Cisco IOS XE Software 3.9E 3.9.2bE',
                    },
                  },
                ],
              },
              {
                name: '16.6',
                category: 'product_version',
                branches: [
                  {
                    name: '16.6.1',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-218901',
                      name: 'Cisco IOS XE Software 16.6 16.6.1',
                    },
                  },
                  {
                    name: '16.6.4',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-233155',
                      name: 'Cisco IOS XE Software 16.6 16.6.4',
                    },
                  },
                ],
              },
              {
                name: '16.8',
                category: 'product_version',
                branches: [
                  {
                    name: '16.8.1s',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-236834',
                      name: 'Cisco IOS XE Software 16.8 16.8.1s',
                    },
                  },
                ],
              },
              {
                name: '3.10E',
                category: 'product_version',
                branches: [
                  {
                    name: '3.10.0E',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-227555',
                      name: 'Cisco IOS XE Software 3.10E 3.10.0E',
                    },
                  },
                  {
                    name: '3.10.0cE',
                    category: 'service_pack',
                    product: {
                      product_id: 'CVRFPID-231246',
                      name: 'Cisco IOS XE Software 3.10E 3.10.0cE',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  vulnerabilities: [
    {
      title:
        'Cisco IOS and IOS XE Software Smart Install Remote Code Execution Vulnerability',
      ids: [
        {
          system_name: 'Cisco Bug ID',
          text: 'CSCvg76186',
        },
      ],
      notes: [
        {
          title: 'Summary',
          category: 'summary',
          text: 'A vulnerability in the Smart Install feature of Cisco IOS Software and Cisco IOS XE Software could allow an unauthenticated, remote attacker to trigger a reload of an affected device, resulting in a denial of service (DoS) condition, or to execute arbitrary code on an affected device.\n\n\n\nThe vulnerability is due to improper validation of packet data. An attacker could exploit this vulnerability by sending a crafted Smart Install message to an affected device on TCP port 4786. A successful exploit could allow the attacker to cause a buffer overflow on the affected device, which could have the following impacts:\n\n\n    Triggering a reload of the device\n    Allowing the attacker to execute arbitrary code on the device\n    Causing an indefinite loop on the affected device that triggers a watchdog crash',
        },
        {
          title: 'Cisco Bug IDs',
          category: 'other',
          text: 'CSCvg76186',
        },
      ],
      cve: 'CVE-2018-0171',
      product_status: {
        known_affected: [
          'CVRFPID-103559',
          'CVRFPID-103763',
          'CVRFPID-104376',
          'CVRFPID-105394',
          'CVRFPID-105660',
          'CVRFPID-105689',
          'CVRFPID-105987',
          'CVRFPID-106029',
          'CVRFPID-106674',
          'CVRFPID-107283',
          'CVRFPID-107852',
          'CVRFPID-108306',
          'CVRFPID-109098',
          'CVRFPID-109439',
          'CVRFPID-109760',
          'CVRFPID-109808',
          'CVRFPID-111010',
          'CVRFPID-111019',
          'CVRFPID-111674',
          'CVRFPID-112489',
          'CVRFPID-113961',
          'CVRFPID-114665',
          'CVRFPID-115285',
          'CVRFPID-115477',
          'CVRFPID-115832',
          'CVRFPID-115939',
          'CVRFPID-116083',
          'CVRFPID-183811',
          'CVRFPID-184125',
          'CVRFPID-184932',
          'CVRFPID-187057',
          'CVRFPID-187269',
          'CVRFPID-188035',
          'CVRFPID-188061',
          'CVRFPID-189064',
          'CVRFPID-189115',
          'CVRFPID-189187',
          'CVRFPID-189219',
          'CVRFPID-189455',
          'CVRFPID-190635',
          'CVRFPID-190637',
          'CVRFPID-191635',
          'CVRFPID-191928',
          'CVRFPID-191948',
          'CVRFPID-192702',
          'CVRFPID-192706',
          'CVRFPID-192726',
          'CVRFPID-192910',
          'CVRFPID-192911',
          'CVRFPID-193283',
          'CVRFPID-194540',
          'CVRFPID-194741',
          'CVRFPID-194913',
          'CVRFPID-194944',
          'CVRFPID-195469',
          'CVRFPID-195489',
          'CVRFPID-195770',
          'CVRFPID-195943',
          'CVRFPID-197462',
          'CVRFPID-197465',
          'CVRFPID-197471',
          'CVRFPID-197483',
          'CVRFPID-198059',
          'CVRFPID-198060',
          'CVRFPID-198426',
          'CVRFPID-198542',
          'CVRFPID-200488',
          'CVRFPID-200496',
          'CVRFPID-201019',
          'CVRFPID-201074',
          'CVRFPID-201366',
          'CVRFPID-204097',
          'CVRFPID-204102',
          'CVRFPID-204108',
          'CVRFPID-204109',
          'CVRFPID-204110',
          'CVRFPID-204186',
          'CVRFPID-204187',
          'CVRFPID-204228',
          'CVRFPID-204818',
          'CVRFPID-204828',
          'CVRFPID-204831',
          'CVRFPID-204832',
          'CVRFPID-205064',
          'CVRFPID-205672',
          'CVRFPID-209028',
          'CVRFPID-209029',
          'CVRFPID-209034',
          'CVRFPID-209043',
          'CVRFPID-209044',
          'CVRFPID-209045',
          'CVRFPID-209046',
          'CVRFPID-209047',
          'CVRFPID-209063',
          'CVRFPID-209064',
          'CVRFPID-209065',
          'CVRFPID-209358',
          'CVRFPID-209359',
          'CVRFPID-209439',
          'CVRFPID-209532',
          'CVRFPID-209839',
          'CVRFPID-209887',
          'CVRFPID-210406',
          'CVRFPID-210732',
          'CVRFPID-210766',
          'CVRFPID-211296',
          'CVRFPID-211570',
          'CVRFPID-211976',
          'CVRFPID-212329',
          'CVRFPID-212701',
          'CVRFPID-213610',
          'CVRFPID-213788',
          'CVRFPID-214052',
          'CVRFPID-214053',
          'CVRFPID-214072',
          'CVRFPID-214078',
          'CVRFPID-214218',
          'CVRFPID-214556',
          'CVRFPID-214797',
          'CVRFPID-214992',
          'CVRFPID-216258',
          'CVRFPID-216259',
          'CVRFPID-216295',
          'CVRFPID-217805',
          'CVRFPID-217807',
          'CVRFPID-218891',
          'CVRFPID-218995',
          'CVRFPID-220440',
          'CVRFPID-220441',
          'CVRFPID-220444',
          'CVRFPID-220457',
          'CVRFPID-220461',
          'CVRFPID-220466',
          'CVRFPID-220594',
          'CVRFPID-220664',
          'CVRFPID-220689',
          'CVRFPID-221033',
          'CVRFPID-221137',
          'CVRFPID-222275',
          'CVRFPID-222342',
          'CVRFPID-222436',
          'CVRFPID-222500',
          'CVRFPID-222530',
          'CVRFPID-222650',
          'CVRFPID-222651',
          'CVRFPID-222924',
          'CVRFPID-223086',
          'CVRFPID-223143',
          'CVRFPID-224553',
          'CVRFPID-224611',
          'CVRFPID-224868',
          'CVRFPID-225160',
          'CVRFPID-225740',
          'CVRFPID-225786',
          'CVRFPID-226077',
          'CVRFPID-227285',
          'CVRFPID-227307',
          'CVRFPID-227308',
          'CVRFPID-227598',
          'CVRFPID-227754',
          'CVRFPID-227959',
          'CVRFPID-228056',
          'CVRFPID-228057',
          'CVRFPID-228151',
          'CVRFPID-230588',
          'CVRFPID-230589',
          'CVRFPID-230590',
          'CVRFPID-230591',
          'CVRFPID-230607',
          'CVRFPID-230623',
          'CVRFPID-230962',
          'CVRFPID-230965',
          'CVRFPID-230990',
          'CVRFPID-231074',
          'CVRFPID-231245',
          'CVRFPID-231824',
          'CVRFPID-232957',
          'CVRFPID-233143',
          'CVRFPID-233796',
          'CVRFPID-234926',
          'CVRFPID-196216',
          'CVRFPID-196218',
          'CVRFPID-196220',
          'CVRFPID-196221',
          'CVRFPID-196222',
          'CVRFPID-196223',
          'CVRFPID-196230',
          'CVRFPID-196231',
          'CVRFPID-196288',
          'CVRFPID-196925',
          'CVRFPID-197145',
          'CVRFPID-206163',
          'CVRFPID-206164',
          'CVRFPID-206165',
          'CVRFPID-206166',
          'CVRFPID-206167',
          'CVRFPID-206168',
          'CVRFPID-206169',
          'CVRFPID-206170',
          'CVRFPID-206172',
          'CVRFPID-206173',
          'CVRFPID-206200',
          'CVRFPID-206201',
          'CVRFPID-206202',
          'CVRFPID-206203',
          'CVRFPID-206211',
          'CVRFPID-210070',
          'CVRFPID-210073',
          'CVRFPID-210074',
          'CVRFPID-210075',
          'CVRFPID-210076',
          'CVRFPID-210077',
          'CVRFPID-210264',
          'CVRFPID-212436',
          'CVRFPID-212674',
          'CVRFPID-213100',
          'CVRFPID-213783',
          'CVRFPID-213785',
          'CVRFPID-213790',
          'CVRFPID-213797',
          'CVRFPID-213809',
          'CVRFPID-213811',
          'CVRFPID-213812',
          'CVRFPID-213960',
          'CVRFPID-214051',
          'CVRFPID-214993',
          'CVRFPID-217253',
          'CVRFPID-217255',
          'CVRFPID-217256',
          'CVRFPID-217259',
          'CVRFPID-217279',
          'CVRFPID-217280',
          'CVRFPID-217282',
          'CVRFPID-217283',
          'CVRFPID-218901',
          'CVRFPID-220290',
          'CVRFPID-220357',
          'CVRFPID-220489',
          'CVRFPID-220802',
          'CVRFPID-221108',
          'CVRFPID-221185',
          'CVRFPID-222435',
          'CVRFPID-222483',
          'CVRFPID-222695',
          'CVRFPID-222711',
          'CVRFPID-224840',
          'CVRFPID-225784',
          'CVRFPID-226158',
          'CVRFPID-226331',
          'CVRFPID-227555',
          'CVRFPID-227755',
          'CVRFPID-229124',
          'CVRFPID-230240',
          'CVRFPID-230998',
          'CVRFPID-231004',
          'CVRFPID-231187',
          'CVRFPID-231246',
          'CVRFPID-233155',
          'CVRFPID-236834',
        ],
      },
      scores: [
        {
          products: [
            'CVRFPID-103559',
            'CVRFPID-103763',
            'CVRFPID-104376',
            'CVRFPID-105394',
            'CVRFPID-105660',
            'CVRFPID-105689',
            'CVRFPID-105987',
            'CVRFPID-106029',
            'CVRFPID-106674',
            'CVRFPID-107283',
            'CVRFPID-107852',
            'CVRFPID-108306',
            'CVRFPID-109098',
            'CVRFPID-109439',
            'CVRFPID-109760',
            'CVRFPID-109808',
            'CVRFPID-111010',
            'CVRFPID-111019',
            'CVRFPID-111674',
            'CVRFPID-112489',
            'CVRFPID-113961',
            'CVRFPID-114665',
            'CVRFPID-115285',
            'CVRFPID-115477',
            'CVRFPID-115832',
            'CVRFPID-115939',
            'CVRFPID-116083',
            'CVRFPID-183811',
            'CVRFPID-184125',
            'CVRFPID-184932',
            'CVRFPID-187057',
            'CVRFPID-187269',
            'CVRFPID-188035',
            'CVRFPID-188061',
            'CVRFPID-189064',
            'CVRFPID-189115',
            'CVRFPID-189187',
            'CVRFPID-189219',
            'CVRFPID-189455',
            'CVRFPID-190635',
            'CVRFPID-190637',
            'CVRFPID-191635',
            'CVRFPID-191928',
            'CVRFPID-191948',
            'CVRFPID-192702',
            'CVRFPID-192706',
            'CVRFPID-192726',
            'CVRFPID-192910',
            'CVRFPID-192911',
            'CVRFPID-193283',
            'CVRFPID-194540',
            'CVRFPID-194741',
            'CVRFPID-194913',
            'CVRFPID-194944',
            'CVRFPID-195469',
            'CVRFPID-195489',
            'CVRFPID-195770',
            'CVRFPID-195943',
            'CVRFPID-197462',
            'CVRFPID-197465',
            'CVRFPID-197471',
            'CVRFPID-197483',
            'CVRFPID-198059',
            'CVRFPID-198060',
            'CVRFPID-198426',
            'CVRFPID-198542',
            'CVRFPID-200488',
            'CVRFPID-200496',
            'CVRFPID-201019',
            'CVRFPID-201074',
            'CVRFPID-201366',
            'CVRFPID-204097',
            'CVRFPID-204102',
            'CVRFPID-204108',
            'CVRFPID-204109',
            'CVRFPID-204110',
            'CVRFPID-204186',
            'CVRFPID-204187',
            'CVRFPID-204228',
            'CVRFPID-204818',
            'CVRFPID-204828',
            'CVRFPID-204831',
            'CVRFPID-204832',
            'CVRFPID-205064',
            'CVRFPID-205672',
            'CVRFPID-209028',
            'CVRFPID-209029',
            'CVRFPID-209034',
            'CVRFPID-209043',
            'CVRFPID-209044',
            'CVRFPID-209045',
            'CVRFPID-209046',
            'CVRFPID-209047',
            'CVRFPID-209063',
            'CVRFPID-209064',
            'CVRFPID-209065',
            'CVRFPID-209358',
            'CVRFPID-209359',
            'CVRFPID-209439',
            'CVRFPID-209532',
            'CVRFPID-209839',
            'CVRFPID-209887',
            'CVRFPID-210406',
            'CVRFPID-210732',
            'CVRFPID-210766',
            'CVRFPID-211296',
            'CVRFPID-211570',
            'CVRFPID-211976',
            'CVRFPID-212329',
            'CVRFPID-212701',
            'CVRFPID-213610',
            'CVRFPID-213788',
            'CVRFPID-214052',
            'CVRFPID-214053',
            'CVRFPID-214072',
            'CVRFPID-214078',
            'CVRFPID-214218',
            'CVRFPID-214556',
            'CVRFPID-214797',
            'CVRFPID-214992',
            'CVRFPID-216258',
            'CVRFPID-216259',
            'CVRFPID-216295',
            'CVRFPID-217805',
            'CVRFPID-217807',
            'CVRFPID-218891',
            'CVRFPID-218995',
            'CVRFPID-220440',
            'CVRFPID-220441',
            'CVRFPID-220444',
            'CVRFPID-220457',
            'CVRFPID-220461',
            'CVRFPID-220466',
            'CVRFPID-220594',
            'CVRFPID-220664',
            'CVRFPID-220689',
            'CVRFPID-221033',
            'CVRFPID-221137',
            'CVRFPID-222275',
            'CVRFPID-222342',
            'CVRFPID-222436',
            'CVRFPID-222500',
            'CVRFPID-222530',
            'CVRFPID-222650',
            'CVRFPID-222651',
            'CVRFPID-222924',
            'CVRFPID-223086',
            'CVRFPID-223143',
            'CVRFPID-224553',
            'CVRFPID-224611',
            'CVRFPID-224868',
            'CVRFPID-225160',
            'CVRFPID-225740',
            'CVRFPID-225786',
            'CVRFPID-226077',
            'CVRFPID-227285',
            'CVRFPID-227307',
            'CVRFPID-227308',
            'CVRFPID-227598',
            'CVRFPID-227754',
            'CVRFPID-227959',
            'CVRFPID-228056',
            'CVRFPID-228057',
            'CVRFPID-228151',
            'CVRFPID-230588',
            'CVRFPID-230589',
            'CVRFPID-230590',
            'CVRFPID-230591',
            'CVRFPID-230607',
            'CVRFPID-230623',
            'CVRFPID-230962',
            'CVRFPID-230965',
            'CVRFPID-230990',
            'CVRFPID-231074',
            'CVRFPID-231245',
            'CVRFPID-231824',
            'CVRFPID-232957',
            'CVRFPID-233143',
            'CVRFPID-233796',
            'CVRFPID-234926',
            'CVRFPID-196216',
            'CVRFPID-196218',
            'CVRFPID-196220',
            'CVRFPID-196221',
            'CVRFPID-196222',
            'CVRFPID-196223',
            'CVRFPID-196230',
            'CVRFPID-196231',
            'CVRFPID-196288',
            'CVRFPID-196925',
            'CVRFPID-197145',
            'CVRFPID-206163',
            'CVRFPID-206164',
            'CVRFPID-206165',
            'CVRFPID-206166',
            'CVRFPID-206167',
            'CVRFPID-206168',
            'CVRFPID-206169',
            'CVRFPID-206170',
            'CVRFPID-206172',
            'CVRFPID-206173',
            'CVRFPID-206200',
            'CVRFPID-206201',
            'CVRFPID-206202',
            'CVRFPID-206203',
            'CVRFPID-206211',
            'CVRFPID-210070',
            'CVRFPID-210073',
            'CVRFPID-210074',
            'CVRFPID-210075',
            'CVRFPID-210076',
            'CVRFPID-210077',
            'CVRFPID-210264',
            'CVRFPID-212436',
            'CVRFPID-212674',
            'CVRFPID-213100',
            'CVRFPID-213783',
            'CVRFPID-213785',
            'CVRFPID-213790',
            'CVRFPID-213797',
            'CVRFPID-213809',
            'CVRFPID-213811',
            'CVRFPID-213812',
            'CVRFPID-213960',
            'CVRFPID-214051',
            'CVRFPID-214993',
            'CVRFPID-217253',
            'CVRFPID-217255',
            'CVRFPID-217256',
            'CVRFPID-217259',
            'CVRFPID-217279',
            'CVRFPID-217280',
            'CVRFPID-217282',
            'CVRFPID-217283',
            'CVRFPID-218901',
            'CVRFPID-220290',
            'CVRFPID-220357',
            'CVRFPID-220489',
            'CVRFPID-220802',
            'CVRFPID-221108',
            'CVRFPID-221185',
            'CVRFPID-222435',
            'CVRFPID-222483',
            'CVRFPID-222695',
            'CVRFPID-222711',
            'CVRFPID-224840',
            'CVRFPID-225784',
            'CVRFPID-226158',
            'CVRFPID-226331',
            'CVRFPID-227555',
            'CVRFPID-227755',
            'CVRFPID-229124',
            'CVRFPID-230240',
            'CVRFPID-230998',
            'CVRFPID-231004',
            'CVRFPID-231187',
            'CVRFPID-231246',
            'CVRFPID-233155',
            'CVRFPID-236834',
          ],
          cvss_v3: {
            version: '3.0',
            baseScore: 9.8,
            baseSeverity: 'CRITICAL',
            vectorString: 'CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H',
          },
        },
      ],
      remediations: [
        {
          details:
            'There are no workarounds that address this vulnerability for customers who require the use of Cisco Smart Install. For customers not requiring Cisco Smart Install, the feature can be disabled with the no vstack command. In software releases that are associated with Cisco Bug ID CSCvd36820 ["https://bst.cloudapps.cisco.com/bugsearch/bug/CSCvd36820"], Cisco Smart Install will auto-disable if not in use.\n\nAdministrators are encouraged to consult the informational security advisory on Cisco Smart Install Protocol Misuse ["https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20170214-smi"] and the Smart Install Configuration Guide ["http://www.cisco.com/c/en/us/td/docs/switches/lan/smart_install/configuration/guide/smart_install/concepts.html#23355"].',
          category: 'workaround',
        },
      ],
      references: [
        {
          url: 'https://tools.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-20180328-smi2',
          summary:
            'Cisco IOS and IOS XE Software Smart Install Remote Code Execution Vulnerability',
        },
      ],
    },
  ],
}
