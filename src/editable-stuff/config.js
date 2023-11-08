// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#2e4e3f, #003e74, #8dc73f, #ff6c0f",
  firstName: "Jinnyeong",
  middleName: "",
  lastName: "Kim",
  message: " Dying to learn new things, and write clean code.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/DivisonOfficer",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/wlssud0701",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/true_comfort_/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kim-jinnyeong-a143b9247/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/jinnyeong.jpeg"),
  imageSize: 375,
  message:
    "My name is Jinnyeong Kim. I’m a graduate of 2024 from Sunkyunkwan University at Republic of Korea with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  //resume:
  //  "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "divisonofficer", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Achievements",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/slides/hackertone_2019.jpeg"),
      label: "오픈핵 해커톤 2019",
      paragraph: "",
    },
    {
      img: require("../editable-stuff/slides/hackertone_2021.jpeg"),
      label: "Unid-ton 해커톤 2021",
      paragraph: "",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Kotlin", value: 95 },
    { name: "Java", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 75 },
    { name: "TypeScript", value: 70 },
    { name: "Swift", value: 75 },
    { name: "Dart", value: 55 },
    { name: "Python", value: 70 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 95 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 95 },
    { name: "Empathy", value: 70 },
    { name: "Organization", value: 80 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering job opportunities specifically in the field of Android Development. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "wlssud0701@naver.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "Android / iOS Native Engineer", // Here Add Company Name
      companylogo: require("../editable-stuff/minerinc.png"),
      date: "May 2021 – Feb 2023",
    },
    {
      role: "Software Engineer Intern",
      companylogo: require("../editable-stuff/bearrobotics.jpeg"),
      date: "Mar 2023 – Aug 2023",
    },
  ],
};

const achievements = {
  show: true,
  heading: "Awards and Certificates",
  data: [
    {
      title: "ICPC Korea 2018",
      subtitle: "2018.11",
      description: "네이버 대표이사상",
    },
    {
      title: "오픈핵 해커톤 2019",
      subtitle: "2019.07",
      description: "익산시장상",
    },
    {
      title: "Unid-ton 해커톤 2021",
      subtitle: "2021.11",
      description: "은상",
    },
    {
      title: "ICPC Korea 2021",
      subtitle: "2021.11",
      description: "본선 진출",
    },
    {
      title: "ICPC Korea 2022",
      subtitle: "2022.11",
      description: "본선 진출",
    },
    {
      title: "Samsung Software Certificate 2022",
      subtitle: "2022.12",
      description: "Pro",
    },
    {
      title: "ICPC Korea 2023",
      subtitle: "2023.11",
      description: "본선 진출",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
  achievements,
};
