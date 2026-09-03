import { Certificate } from "@/types/certificates";

export const certificates: Certificate[] = [
  {
    name: "Legacy Responsive Web Design",
    slug: "legacy-responsive-web-design",
    issuer: "freeCodeCamp",
    date: "2023",
    description:
      "Completed responsive web design certification covering HTML, CSS, Flexbox, CSS Grid, and accessibility.",
    image: "/certificates/legacy_responsive_web_design.png",
    link: "https://www.freecodecamp.org/certification/ao_zora/responsive-web-design",

    skills: [
      "HTML",
      "CSS",
      "Flexbox",
      "CSS Grid",
      "Responsive Design",
      "Accessibility",
    ],

    projects: [
      {
        name: "Tribute Page",
        description:
          "A responsive webpage dedicated to a notable person, focusing on semantic HTML and responsive CSS.",
        technologies: ["HTML", "CSS"],
      },
      {
        name: "Survey Form",
        description:
          "A responsive form designed to collect user information using different HTML form elements.",
        technologies: ["HTML", "CSS"],
      },
      {
        name: "Product Landing Page",
        description:
          "A responsive product landing page with structured sections, navigation, and responsive layouts.",
        technologies: ["HTML", "CSS", "Flexbox"],
      },
      {
        name: "Technical Documentation Page",
        description:
          "A documentation-style webpage using structured content and responsive navigation.",
        technologies: ["HTML", "CSS"],
      },
      {
        name: "Personal Portfolio",
        description:
          "A responsive portfolio webpage showcasing projects, skills, and personal information.",
        technologies: ["HTML", "CSS", "Responsive Design"],
      },
    ],
  },

  {
    name: "Legacy JavaScript Algorithms and Data Structures V7",
    slug: "legacy-javascript-algorithms-and-data-structures-v7",
    issuer: "freeCodeCamp",
    date: "2025",
    description:
      "Completed JavaScript algorithms and data structures certification covering fundamental programming concepts, algorithms, data structures, and problem-solving.",
    image: "/certificates/legacy_dsa_v7.png",
    link: "https://www.freecodecamp.org/certification/ao_zora/javascript-algorithms-and-data-structures",

    skills: [
      "JavaScript",
      "Algorithms",
      "Data Structures",
      "Problem Solving",
      "Functional Programming",
      "Object-Oriented Programming",
      "Regular Expressions",
    ],

    projects: [
      {
        name: "Palindrome Checker",
        description:
          "A program that checks whether a given string reads the same forward and backward.",
        technologies: ["JavaScript", "Algorithms"],
      },
      {
        name: "Roman Numeral Converter",
        description:
          "A program that converts numbers into their corresponding Roman numeral representation.",
        technologies: ["JavaScript", "Algorithms"],
      },
      {
        name: "Caesars Cipher",
        description:
          "An implementation of a Caesar cipher that encodes and decodes text using character shifting.",
        technologies: ["JavaScript", "Algorithms"],
      },
      {
        name: "Telephone Number Validator",
        description:
          "A program that validates telephone numbers using JavaScript and regular expressions.",
        technologies: ["JavaScript", "Regular Expressions"],
      },
      {
        name: "Cash Register",
        description:
          "A program that calculates the change required for a transaction and determines the available currency denominations.",
        technologies: ["JavaScript", "Algorithms", "Problem Solving"],
      },
    ],
  },

  {
    name: "Front-End Development Libraries",
    slug: "front-end-development-libraries",
    issuer: "freeCodeCamp",
    date: "2025",
    description:
      "Completed front-end development libraries certification covering React, Redux, React Router, Sass, and modern front-end development tools.",
    image: "/certificates/front_end_dev_libraries.png",
    link: "https://www.freecodecamp.org/certification/ao_zora/front-end-development-libraries",

    skills: [
      "React",
      "Redux",
      "React Router",
      "Sass",
      "JavaScript",
      "Responsive Design",
      "Component-Based Development",
    ],

    projects: [
      {
        name: "Random Quote Machine",
        description:
          "A React application that displays random quotes and allows users to interact with the displayed content.",
        technologies: ["React", "JavaScript", "CSS"],
      },
      {
        name: "Markdown Previewer",
        description:
          "A React application that converts Markdown input into formatted HTML content.",
        technologies: ["React", "JavaScript", "Markdown"],
      },
      {
        name: "Drum Machine",
        description:
          "An interactive React application that allows users to play different drum sounds through an interface.",
        technologies: ["React", "JavaScript", "CSS"],
      },
      {
        name: "JavaScript Calculator",
        description:
          "A functional calculator application built with React and JavaScript.",
        technologies: ["React", "JavaScript", "CSS"],
      },
      {
        name: "25 + 5 Clock",
        description:
          "A React-based timer application implementing session and break intervals.",
        technologies: ["React", "JavaScript", "CSS"],
      },
    ],
  },

  {
    name: "Legacy JavaScript Algorithms and Data Structures V8",
    slug: "legacy-javascript-algorithms-and-data-structures-v8",
    issuer: "freeCodeCamp",
    date: "2025",
    description:
      "Completed JavaScript algorithms and data structures certification covering JavaScript fundamentals, object-oriented programming, functional programming, algorithms, and data structures.",
    image: "/certificates/legacy_dsa_v8.png",
    link: "https://www.freecodecamp.org/certification/ao_zora/javascript-algorithms-and-data-structures-v8",

    skills: [
      "JavaScript",
      "Algorithms",
      "Data Structures",
      "Object-Oriented Programming",
      "Functional Programming",
      "Problem Solving",
      "Regular Expressions",
    ],

    projects: [
      {
        name: "Palindrome Checker",
        description:
          "A program that determines whether a string is a palindrome using JavaScript.",
        technologies: ["JavaScript", "Algorithms"],
      },
      {
        name: "Roman Numeral Converter",
        description:
          "A program that converts numerical values into Roman numeral representations.",
        technologies: ["JavaScript", "Algorithms"],
      },
      {
        name: "Caesars Cipher",
        description:
          "A JavaScript implementation of the Caesar cipher for encoding text using character shifting.",
        technologies: ["JavaScript", "Algorithms"],
      },
      {
        name: "Telephone Number Validator",
        description:
          "A telephone number validation program using JavaScript and regular expressions.",
        technologies: ["JavaScript", "Regular Expressions"],
      },
      {
        name: "Cash Register",
        description:
          "A program that calculates transaction change and determines the appropriate currency denominations.",
        technologies: ["JavaScript", "Algorithms", "Problem Solving"],
      },
    ],
  },
];