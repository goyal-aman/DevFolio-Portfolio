/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aman Goyal",
  title: "Hi, I'm Aman",
  subTitle: emoji(
    "I can Lead, Develop and Design. I have experience developing products and services that have had positive impact on lives of thousands"
  ),
  resumeLink:
    "https://bit.ly/aman-goyal-resume", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  leetcode: "https://www.leetcode.com/sichern",
  github: "https://github.com/goyal-aman",
  linkedin: "https://www.linkedin.com/in/ln-amangoyal/",
  twitter: "https://twitter.com/_goyalaman",
  gmail: "amangoyal8110@gmail.com",

  // medium: "https://medium.com/@saadpasta",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "LAZY ENGINEER, ASPIRE TO MAKE AN IMPACT",

  // TODO: add some skills
  skills: [
  //   emoji(
  //     "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
  //   ),
  //   emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  //   emoji(
  //     "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
  //   )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring",
      // <font-awesome-icon icon="¸" />
      fontAwesomeClassname: "fa-solid fa-leaf"
    },
    {
      skillName: "git",
      // <font-awesome-icon icon="¸" />
      fontAwesomeClassname: "fab fa-git"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bhagwan Parshuram Intitute Of Technology",
      logo: require("./assets/images/BPIT_LOGO.jpeg"),
      subHeader: "Batchelor of Technology, ECE",
      duration: "Augut 2018 - July 2022",
      desc: "Cum. GPA: 9.3/10",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "MakeMyTrip",
      companylogo: require("./assets/images/makemytrip-seeklogo.jpg"),
      date: "July 2022 – Present",
      desc: "Part of Cars & Activities team. Creating and improving already existing codebase as per growing demand and new use cases",
      descBullets: [
        "Reduced resource utilization by 50% through efficient database models.",
        "Overhauled various API’s to improve uptime by 20%.",
        "Using Spring to boost and develop the backend.",
        "Improving runtime and accuracy of backend systems.",
        "Volunteered to identify and improve outdated code base.",
      ]
    },
    {
      role: "Technology Associate Intern",
      company: "ZS Associates",
      companylogo: require("./assets/images/zs-associates.svg"),
      date: "November 2021 – July 2022",
      desc: "Part of Incentive Compensation Implementation Team, developed and designed state of the art reports for groud zero team",
      descBullets:[
"        Increased productivity by 20% by introducing various tools and skills.",
"        Led development phase during implementation of technology solutions.",
"        Reduced manual work by 40% by creating automation scripts.",
"        Introduced new guidelines and methods for efficient and quality output."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Hackveda",
      companylogo: require("./assets/images/hackveda.png"),
      date: "May 2020 – Nov 2020",
      desc: "Part of backend development team. Developed highly extensible and readable modules in Python",
      descBullets:[
        "Improved performance by 35% through efficient and reliable API’s.\n",
        "Conceptualized and implemented various tools and Api’s.",
      "Authored Scripts to reduce errors by 70%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  // data: { "data": { "user": { "name": "Saad Pasta", "bio": "20 | First Pakistani Google Code-In Finalist  | Software Engineer @SadaPay | Still Finding 💭  ", "isHireable": true, "avatarUrl": "https://avatars.githubusercontent.com/u/23307811?u=eab46b153eef3f5183930e61898b462447af9219&v=4", "location": "Karachi , Pakistan", "pinnedItems": { "totalCount": 6, "edges": [{ "node": { "name": "developerFolio", "description": "🚀 Software Developer Portfolio Template that helps you showcase your work and skills as a software developer.", "forkCount": 1429, "stargazers": { "totalCount": 3256 }, "url": "https://github.com/saadpasta/developerFolio", "id": "MDEwOlJlcG9zaXRvcnkyMTgyODI0NTM=", "diskUsage": 23358, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "react-blog-github", "description": "🔥 React + Github Issues    👉 Your Personal Blog ", "forkCount": 130, "stargazers": { "totalCount": 732 }, "url": "https://github.com/saadpasta/react-blog-github", "id": "MDEwOlJlcG9zaXRvcnkyMzUwNTIwMDE=", "diskUsage": 18787, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "awesome-web-components", "description": "🤖 Awesome web components and snippets for every Front-End Developer", "forkCount": 24, "stargazers": { "totalCount": 44 }, "url": "https://github.com/saadpasta/awesome-web-components", "id": "MDEwOlJlcG9zaXRvcnkyMTU1NDg3ODY=", "diskUsage": 2139, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "Grocery-Items-Detection", "description": "🎉 Grocery Items Detection using Tenserflow.js and IBM Watson.📸", "forkCount": 8, "stargazers": { "totalCount": 32 }, "url": "https://github.com/saadpasta/Grocery-Items-Detection", "id": "MDEwOlJlcG9zaXRvcnkxOTMwMzQ1ODI=", "diskUsage": 26200, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "PWA-Olx-Clone", "description": "Olx Clone Progressive Web App with Offline Feature, Messaging and Add to Favorite", "forkCount": 13, "stargazers": { "totalCount": 17 }, "url": "https://github.com/saadpasta/PWA-Olx-Clone", "id": "MDEwOlJlcG9zaXRvcnkxNDczNzg5MzY=", "diskUsage": 3165, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }, { "node": { "name": "Locate-Me", "description": "📍A React Native live location application to find your loved one's", "forkCount": 5, "stargazers": { "totalCount": 6 }, "url": "https://github.com/saadpasta/Locate-Me", "id": "MDEwOlJlcG9zaXRvcnkxNzM1NjA0MzQ=", "diskUsage": 32945, "primaryLanguage": { "name": "JavaScript", "color": "#f1e05a" } } }] } } } },
  user: {
    "name": "Aman Goyal",
    "bio": "",
    "isHireable": true,
    "avatarUrl": require("./assets/images/avatar.jpeg"),
    "location": "Delhi, India",
    "email":"amangoyal8110@gmail.com"
  },
  Projects: [
    {
      "node": {
        "name": "Blogging Web Application",
        "description": "🚀 Build an end to end platform for users to interact and indulge in meaningful conversation with each others.",
        // "forkCount": 1429,
        "stargazers": {
          // "totalCount": 3256
        },
        "url": "https://github.com/goyal-aman/Django-Blogger",
        // "id": "MDEwOlJlcG9zaXRvcnkyMTgyODI0NTM=",
        "diskUsage": 23358,
        "primaryLanguage": {
          "name": "Python, Django, Heroku, Gunicorn, Html, CSS  ",
          // "name": "JavaScript",
          "color": "#f1e05a"
        }
      }      
    },
    {
      "node": {
        "name": "WhiteBoard",
        "description": "🚀 Developed White Board windows application using JS, CSS, Electron and html. Features included are ‐ adjustable pen size, color.",
        // "forkCount": 1429,
        "stargazers": {
          // "totalCount": 3256
        },
        "url": "https://github.com/goyal-aman/WhiteBoard",
        // "id": "MDEwOlJlcG9zaXRvcnkyMTgyODI0NTM=",
        // "diskUsage": 23358,
        "primaryLanguage": {
          "name": "Node.js, JavaScript, Electron, Html, CSS",
          // "name": "JavaScript",
          "color": "#f1e05a"
        }
      },

    },
    {
      "node": {
        "name": "Bank API",
        "description": "🚀Developed public blank Api to fetch bank details in such as locations and IFSC code in nation using Name or find branch details using IFSC code.",
        // "forkCount": 1429,
        "stargazers": {
          // "totalCount": 3256
        },
        "url": "https://github.com/goyal-aman/Bank-Rest-Api",
        // "id": "MDEwOlJlcG9zaXRvcnkyMTgyODI0NTM=",
        // "diskUsage": 23358,
        "primaryLanguage": {
          "name": "Django Rest Framework, Python, Django",
          // "name": "JavaScript",
          "color": "#f1e05a"
        }
      },

    },
    {
      "node": {
        "name": "Timeline",
        "description": "🚀Created product to keep track of my minor and major professional achievements. It helps fight imposter syndrome.",
        // "forkCount": 1429,
        "stargazers": {
          // "totalCount": 3256
        },
        "url": "https://github.com/goyal-aman/portfolio",
        // "id": "MDEwOlJlcG9zaXRvcnkyMTgyODI0NTM=",
        // "diskUsage": 23358,
        "primaryLanguage": {
          "name": "Python, Django, Html, CSS, Heroku",
          // "name": "JavaScript",
          "color": "#f1e05a"
        }
      },
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all",
  // number: "+92-0000000000",
  email_address: "amangoyal8110@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
