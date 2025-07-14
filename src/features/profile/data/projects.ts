import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "cybertrend",
    title: "CyberTrend",
    logo: "/images/cyberAttacks.png",
    period: {
      start: "06.2025",
    },
    link: "https://github.com/HaddarMelek/CyberTrend",
    skills: [
      "Machine Learning",
      "Time-Series",
      "NLP",
      "Python",
      "LSTM",
      "Transformer",
      "Prophet",
      "XGBoost",
    ],
    description:
      "Final year project: Anticipating cyberattacks using historical data and news trends. Combines time-series modeling with news embeddings for predictive intelligence.",
    isExpanded: true,
  },
  {
    id: "fast-food-classification",
    title: "Fast Food Image Classification",
    logo: "/images/fast-food.png",
    period: {
      start: "05.2025",
    },
    link: "https://github.com/HaddarMelek/Classifying_Fast_Food_Images",
    skills: [
      "Deep Learning",
      "Image Classification",
      "CNN",
      "Keras",
      "TensorFlow",
      "Python",
    ],
    description:
      "Image classification project distinguishing fast-food items using different deep learning models.",
  },
  {
    id: "pybank",
    title: "PyBank",
    logo: "/images/bank.png",
    period: {
      start: "04.2025",
    },
    link: "https://github.com/HaddarMelek/PyBank",
    skills: ["Python", "GUI", "Tkinter", "Finance App"],
    description:
      "A Python desktop application with a GUI to manage bank accounts intuitively.",
  },
  {
    id: "gustora",
    title: "Gustora",
    logo: "/images/gustora.png",
    period: {
      start: "03.2025",
    },
    link: "https://github.com/HaddarMelek/Gustora",
    skills: [
      "Symfony",
      "PHP",
      "OTP",
      "Billing",
      "Product Management",
      "Email Automation",
    ],
    description:
      "A modern restaurant application with OTP login, product/order management, and automatic invoicing.",
  },
  {
    id: "ecompulse",
    title: "EcomPulse",
    logo: "/images/EcomPulse.png",
    period: {
      start: "02.2025",
    },
    link: "https://github.com/HaddarMelek/EcomPulse",
    skills: [".NET", "PostgreSQL", "E-commerce", "Web Development"],
    description:
      "An e-commerce platform built with .NET and integrated PostgreSQL database.",
  },
  {
    id: "mycvmaker",
    title: "My CV Maker",
    logo: "/images/cvMaker.png",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/HaddarMelek/my_cv_maker",
    skills: ["HTML", "CSS", "JavaScript", "Resume Builder"],
    description:
      "Web app allowing users to create and personalize professional CVs.",
  },
  {
    id: "ehealth",
    title: "E-Health Platform",
    logo: "/images/ehealth.png",
    period: {
      start: "12.2024",
    },
    link: "https://github.com/HaddarMelek/EHealthPlatform",
    skills: ["ReactJS", "Health Tech", "Web App"],
    description:
      "A ReactJS platform connecting patients and doctors for online health services.",
  },
  {
    id: "restaurant-management-system",
    title: "Restaurant Management System",
    logo: "/images/restaurent_management_sys.png",
    period: {
      start: "10.2024",
    },
    link: "https://github.com/HaddarMelek/RestaurantManagementSystem",
    skills: ["Java", "Java Swing", "MySQL", "GUI"],
    description:
      "Java-based desktop application to manage restaurant menus, orders, and user roles (client, waitress, cook). Uses MySQL database.",
  },
];
