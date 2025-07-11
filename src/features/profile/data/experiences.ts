import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "sainthonore",
    companyName: "Saint Honoré Cosmetics",
    companyLogo: "https://sainthonorecosmetics.com/img/logo.png",
    positions: [
      {
        id: "internship-automation-2025",
        title: "Data Automation & Scraping Intern",
        employmentPeriod: {
          start: "06.2025",
          end: "07.2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `
- Developed an intelligent scraping tool ([Instaloader Workflow](https://github.com/HaddarMelek/Instaloader_py)) to extract emails from Instagram profiles via hashtags.
- Refined contact data from bios and external links for lead generation using Saleshandy.
- Conducted ad-hoc tasks: username collection via IGEmail, data enrichment with Python scripts, automated cold emailing with GMass.
- Authored a complete user guide for the client.
        `,
        skills: [
          "Python",
          "Instaloader",
          "Web Scraping",
          "Excel",
          "CSV",
          "Saleshandy",
          "GMass",
          "Technical Documentation",
          "Autonomy",
          "Written Communication",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "phylia",
    companyName: "Phylia Technology",
    companyLogo: "https://avatars.githubusercontent.com/u/118091726?v=4",
    positions: [
      {
        id: "internship-phylia-2024",
        title: "Full-stack Web Developer Intern",
        employmentPeriod: {
          start: "08.2024",
        },
        employmentType: "Internship",
        icon: "code",
        description: `
Developed a complete e-commerce platform using Laravel, Bootstrap, and MySQL:
- Implemented product, order, and payment management features.
- Built a responsive and user-friendly interface for all devices.
- Integrated multi-role management for sellers, customers, and administrators.
- Project available on GitHub: [E-commercePlatform](https://github.com/HaddarMelek/E-commercePlatform/).
        `,
        skills: [
          "Laravel",
          "Bootstrap",
          "MySQL",
          "Responsive Design",
          "Role Management",
          "GitHub",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
];
