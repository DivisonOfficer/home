// Navigation Bar SECTION
const navBar = {
  show: true,
};

const publications = {
  show: true,
  heading: "Publications",
  data: [
    {
      title:
        "Pixel-aligned RGB-NIR Stereo Imaging and Dataset for Robot Vision",
      authors: ["Jinnyeong Kim", "Seung-Hwan Baek"],
      pdf: "https://arxiv.org/abs/2411.18025",
      year: "2024",
      abstract:
        "Integrating RGB and NIR imaging provides complementary spectral information, enhancing robotic vision in challenging lighting conditions. However, existing datasets and imaging systems lack pixel-level alignment between RGB and NIR images, posing challenges for downstream tasks. In this paper, we develop a robotic vision system equipped with two pixel-aligned RGB-NIR stereo cameras and a LiDAR sensor mounted on a mobile robot. The system simultaneously captures RGB stereo images, NIR stereo images, and temporally synchronized LiDAR point cloud. Utilizing the mobility of the robot, we present a dataset containing continuous video frames with pixel-aligned RGB and NIR stereo pairs under diverse lighting conditions. We introduce two methods that utilize our pixel-aligned RGB-NIR images: an RGB-NIR image fusion method and a feature fusion method. The first approach enables existing RGB-pretrained vision models to directly utilize RGB-NIR information without fine-tuning. The second approach fine-tunes existing vision models to more effectively utilize RGB-NIR information. Experimental results demonstrate the effectiveness of using pixel-aligned RGB-NIR images across diverse lighting conditions.",
      // github :
      // supple
      // video
    },
    {
      title: "Dual Exposure Stereo for Extended Dynamic Range 3D Imaging",
      authors: [
        "Juhyung Choi",
        "Jinnyeong Kim",
        "Seokjun Choi",
        "Jinwoo Lee",
        "Samuel Brucker",
        "Mario Bijelic",
        "Felix Heide",
        "Seung-Hwan Baek",
      ],
      year: 2024,
      abstract:
        "Achieving robust stereo 3D imaging under diverse illumination conditions is an importat however challenging task, largely due to the limited dynamic ranges (DRs) of cameras, which are significantly smaller than real world DR. As a result, the accuracy of existing stereo depth estimation methods is often compromised by under- or over-exposed images. In this work, we introduce dual-exposure stereo for extended dynamic range 3D imaging. We develop automatic dual-exposure control method that adjusts the dual exposures, diverging them when the scene DR exceeds the camera DR, thereby providing information about broader DR. From the captured dual-exposure stereo images, we estimate depth by developing a motion-aware dual-exposure stereo depth network. To validate our proposed method, we develop a robot-vision system, collect real-world stereo video datasets, and generate a synthetic dataset. Our approach outperforms traditional exposure control and depth estimation methods.",
    },
  ],
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
    "My name is Jinnyeong Kim. I am currently a master's student at POSTECH, South Korea, specializing in Computer Science within the Computer Graphics Lab. I graduated in 2024 from Sungkyunkwan University with a degree in Computer Engineering. My passion for contributing to the community drives me, and I aim to channel this enthusiasm into the realm of software engineering. In my spare time, I enjoy contributing to open source projects..",
  //resume:
  //  "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "divisonofficer", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    "NewsCalendar",
    "unid-ton-2021-team115/HOT_PEOPLE",
    "SINZAK/sinzak-android",
    "repositorypattern",
  ],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Career Monuments",
  message:
    "In the tapestry of the digital epoch, a software engineer weaves with the threads of logic and creativity, fashioning solutions from the abstract. Each line of code is a silent stroke of a painter's brush, each function a verse in an unwritten epic of innovation. They are not mere architects of data, but sculptors of possibility, transforming the intangible into engines that power our very existence. In their craft, the mundane begets the miraculous, as they conjure the ethereal into the electronic. In the heart of each software engineer burns the fire of Prometheus, bringing not fire, but light to the world—a light that reveals new paths, new dreams, and the unyielding hope of what lies beyond the horizon of the known.",
  images: [
    {
      img: require("../editable-stuff/slides/2022_icpc.jpg"),
      label: "ICPC Korea 2022",
    },
    {
      img: require("../editable-stuff/slides/2022_skkuscholaship.jpg"),
      label: "성균관대학교 장학금 수여",
    },
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
    {
      role: "Software Engineer Intern (DS)",
      companylogo: require("../editable-stuff/samsung.png"),
      date: "Jan 2024 - Feb 2024",
    },
    {
      role: "Master Student (Computer Graphics)",
      companylogo: require("../editable-stuff/postech.png"),
      date: "March 2024 - Present",
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
    {
      title: "SKKU Open Source Contributor",
      subtitle: "2024.1",
      description: "장려",
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
  publications,
};
