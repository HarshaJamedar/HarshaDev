import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "AUG 2024 - Present",
    role: "Software Developer Engineer",
    company: "Bright Mind Enrichment",
    description: `Team player in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Typescript", "Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "DEC 2022 - MAY 2024",
    role: "Research Graduate",
    company: "California State university Fullerton",
    description: `Developed an autonomous drone motion planning system integrating LiDAR SLAM and YOLO-based computer vision for enhanced navigation and obstacle detection as part of my research project`,
    technologies: ["ROS", "C++", "Python", "CUDA", "Shell", "ComputerVision", "YOLOV8", "LiDAR", "VSLAM"],
  },
  {
    year: "JAN 2020 - MAR 2022",
    role: "Sr Systems Engineer ",
    company: "Infosys",
    description: `Worked as a Systems Engineer, utilizing AWS, Spring Boot, Kafka, Docker and Kubernetes to containerize applications, streamline microservices integration, and optimize backend server performance for scalable enterprise solutions.`,
    technologies: ["AWS", "SpringBoot", "Kafka", "Docker", "Kubernetes", "Microservices", "OracleDB", "Jenkins", "Apache Kafka", "JUnit", "Git"]
    ,
  },
  {
    year: "SEP 2017 - MAY 2019",
    role: "Chief Student Technology Officer",
    company: "CIIE at KL University",
    description: `Center for Innovation, Incubation & Enterprenuership(CIIE) as a CSTO I contributed in transforming academic research into successful tech-driven startups while fostering a culture of entrepreneurship and innovation on campus.`,
    technologies: ["Leadership", "IOT", "VLSI-Design", "Embedded-Systems", "WebDevelopment", "ImageProcessing"],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Current Residence: 719 S 850 W AMERICAN FORk, UTAH, USA - 84003 ",
  phoneNo: "+1 (385)-392-3839",
  email: "harshavardhanjemedar@gmail.com",
};
