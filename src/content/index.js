import React from "react"

export const PS_METADATA = {
  title: "Palo Alto Networks Professional Services",
  description: "Palo Alto Networks Professional Services"
}

// Props used in src/components/ProductLandingPage/Hero.js
export const PS_HERO_CONTENT = {
  product: 'terraform',
  header: (
    <h1>
      <span>Software NGFW</span> Quickstart Services on AWS Marketplace
    </h1>
  ),
  subheader: (
    <p>
      Flexible consumption & contract models, single consolidated AWS bill. Retires consumption committed via your Enterprise Discount Program (EDP).
    </p>
  ),
  sliderCards: [
    {
      title: "QS Software NGFW - Public Cloud",
      description: "The Technology Partner Awards celebrate HashiCorp technology partners who have expanded ecosystem solutions for customers through new integrations, co-engineered solutions, and participated in joint marketing initiatives.",
      cta: {
        type: 'single',
        content: {
          link: "https://www.paloaltonetworks.com/resources/datasheets/quickstart-service-for-software-ngfw-public-cloud-ds",
          text: "See More",
        }
      },
      image: {
        src: "/img/quickstarts/qs-software-ngfw.png",
        alt: "QS Software NGFW - Public Cloud"
      },
    },
    {
      title: "Terraform Add-On Service",
      description: "Cloud infrastructures bear little resemblance to traditional data centers designed for predictable levels of computing, storage, and networking resources. Requirements change rapidly, sometimes by the hour. What if you could deploy software firewalls and security services with the speed and flexibility to match rapidly changing cloud requirements? We can help.",
      cta: {
        type: 'single',
        content: {
          link: "https://www.paloaltonetworks.com/resources/datasheets/quickstart-service-for-software-ngfw-public-cloud-terraform-add-on",
          text: "See More",
        }
      },
      image: {
        src: "/img/terraform/terraform-article.jpeg",
        alt: "Terraform Add-On Service"
      },
    },
    {
      title: "Hashicorp Technology Partner of The Year",
      description: "The Technology Partner Awards celebrate HashiCorp technology partners who have expanded ecosystem solutions for customers through new integrations, co-engineered solutions, and participated in joint marketing initiatives.",
      cta: {
        type: 'single',
        content: {
          link: "https://www.hashicorp.com/blog/announcing-the-2022-hashicorp-technology-partner-award-winners",
          text: "See More",
        }
      },
      image: {
        src: "/img/terraform/technology-partner-award.jpg",
        alt: "Technology Partner of The Year"
      },
    },
  ],
}

// Props used in src/components/ProductLandingPage/Modules.js
export const TERRAFORM_MODULE_CONTENT = {
  header: (
    <h1>Terraform Modules from Palo Alto Networks</h1>
  ),
  subheader: (
    <p>
      Palo Alto Networks develops Terraform modules which are freely available to assist anyone who wants to deploy and configure their public cloud VN-Series infrastructure, alongside the rest of their infrastructure.
    </p>
  ),
  providerCards: [
    {
      title: "VM-Series Modules for AWS",
      releaseTagUrl: "https://api.github.com/repos/PaloAltoNetworks/terraform-aws-vmseries-modules/tags",
      description: "A set of modules for using Palo Alto Networks VM-Series firewalls to provide control and protection to your applications running on AWS.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/aws/latest",
            logoSrc: "/img/terraform/terraform-logo.png",
            logoAlt: "AWS Logo"
          },
          {
            link: "https://github.com/PaloAltoNetworks/terraform-aws-vmseries-modules",
            logoSrc: "/icons/github-logo.svg",
            logoAlt: "GitHub Logo"
          }
        ]
      },
    },
    {
      title: "VM-Series Modules for Azure",
      releaseTagUrl: "https://api.github.com/repos/PaloAltoNetworks/terraform-azurerm-vmseries-modules/tags",
      description: "A set of modules for using Palo Alto Networks VM-Series firewalls to provide control and protection to your applications running on Azure.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/azurerm/latest",
            logoSrc: "/img/terraform/terraform-logo.png",
            logoAlt: "AWS Logo"
          },
          {
            link: "https://github.com/PaloAltoNetworks/terraform-azurerm-vmseries-modules",
            logoSrc: "/icons/github-logo.svg",
            logoAlt: "GitHub Logo"
          }
        ]
      },
    },
    {
      title: "VM-Series Modules for GCP",
      releaseTagUrl: "https://api.github.com/repos/PaloAltoNetworks/terraform-google-vmseries-modules/tags",
      description: "A set of modules for using Palo Alto Networks VM-Series firewalls to provide control and protection to your applications running on GCP.",
      cta: {
        type: 'double',
        content: [
          {
            link: "https://registry.terraform.io/modules/PaloAltoNetworks/vmseries-modules/google/latest",
            logoSrc: "/img/terraform/terraform-logo.png",
            logoAlt: "AWS Logo"
          },
          {
            link: "https://github.com/PaloAltoNetworks/terraform-google-vmseries-modules",
            logoSrc: "/icons/github-logo.svg",
            logoAlt: "GitHub Logo"
          }
        ]
      },
    },
  ]
}
