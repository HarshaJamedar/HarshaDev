import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import education1 from "../assets/projects/edu1.svg.png";
import education2 from "../assets/projects/edu2.png";
import education3 from "../assets/projects/edu3.png";


export const HERO_CONTENT = `I am a dedicated software engineer with a strong background in full-stack development, specializing in scalable cloud infrastructure and DevOps. With hands-on experience in Java, Spring Boot, and front-end technologies like React and TypeScript, I am adept at building end-to-end web applications that deliver seamless user experiences. I also bring expertise in machine learning, data engineering, and automation, having worked with tools such as Docker, Kubernetes, and Terraform to optimize CI/CD workflows. I aim to create impactful, resilient applications combining innovative technology and real-world solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "AUG 2024 - Present",
    role: "Software Developer Engineer",
    company: "Bright Mind Enrichment - Volunteer",
    description: `Team player in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with Cassandra NOSQL database. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Typescript", "Javascript", "React.js", "Next.js", "Cassandra"],
  },
  {
    year: "DEC 2022 - MAY 2024",
    role: "Student Teaching Assistant",
    company: "California State university Fullerton",
    description: `As a teaching assistant, I assisted students in learning current topics and developed real-world projects like APIs, databases, web applications, Machine Learning, Generative AI, and Cloud concepts .`,
    technologies: ["Microservices","frontend","Backend","Databases","MachineLearning","NLP","OpenAI","CloudComputing","WebDevelopment"],
  },
  {
    year: "JAN 2020 - MAR 2022",
    role: "Sr Systems Engineer ",
    company: "Infosys",
    description: `Worked as a Systems Engineer, utilizing AWS, Spring Boot, Kafka, Docker and Kubernetes to containerize applications, streamline microservices integration, and optimize backend server performance for scalable enterprise solutions.`,
    technologies: ["AWS", "SpringBoot", "Kafka", "Docker", "Kubernetes", "Microservices", "OracleDB", "Jenkins", "Jira", "JUnit", "Git"]
  },
  {
    year: "DEC 2018 - MAY 2019",
    role: "Software Engineer Intern",
    company: "Infosys",
    description: `As an intern, I worked on developing MEAN stack Enterprise-level web application using AWS, Spring Boot, Node.js, OracleDB. I also worked on Frontend using HTML, CSS, JavaScript, TypeScript, React.js, Angular and Bootstrap.`,
    technologies: ["Angular", "React", "Java", "SpringBoot", "Node.js", "OracleDB", "HTML", "CSS", "JavaScript", "TypeScript", "Bootstrap"],
  },
  {
    year: "SEP 2017 - NOV 2018",
    role: "Chief Student Technology Officer",
    company: "CIIE at KL University",
    description: `Center for Innovation, Incubation & Enterprenuership(CIIE) as a CSTO I contributed in transforming academic research into successful tech-driven startups while fostering a culture of entrepreneurship and innovation on campus.`,
    technologies: ["Leadership", "IOT", "VLSIDesign", "EmbeddedSystems", "WebDevelopment", "ImageProcessing"],
  },
  
];

export const PROJECTS = [
  {
    title: "Trading Platform for Cryptocurrency",
    image: project1,
    url: "https://github.com/HarshaJamedar/TitanPaymentSystem",
    description:
      "A fully functional trading platform for cryptocurrency to provide real-time market data and trade insights for users and also AI-assisted chatbot for your crypto trading strategy",
    technologies: ["Java","SpringBoot","React.js","Node.js","Javascript","RazorpayAPI","GeminiAI"],
  },
  {
    title: "Autonomous multi node drone networking system",
    image: project2,
    url: "https://github.com/HarshaJamedar/XTDrone/blob/master/README.en.md",
    description:
      "Developed an autonomous drone motion planning system integrating LiDAR SLAM and YOLO-based computer vision for enhanced navigation and obstacle detection as part of my research project",
    technologies: ["ROS", "C++", "Python", "CUDA", "Shell", "ComputerVision", "YOLOV8", "LiDAR", "VSLAM"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    url: "https://harsha-dev.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
  },
  {
    title: "DevSync",
    image: project4,
    url: "https://github.com/HarshaJamedar/DevOps-Projects",
    description:
      "A seamless DevOps integration project focused on streamlining the deployment and automation pipeline for web applications using major DevOps tools.",
    technologies: ["DevOps", "Github", "Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform", "Jira"],
  },
];

export const CONTACT = {
  address: "Current Residence: Fremont, Bay Area, CA", 
  phoneNo: "+1 (385)-392-3839",
  email: "harshavardhanjemedar@gmail.com",
};

export const EDUCATIONS = [{
  university: "California State University Fullerton",
  degree: "Master of Science in Computer Science",
  GPA: "3.7/4.0",
  duration: "Aug 2022 - May 2024",
  image: education1,
  url: "https://www.fullerton.edu/",
},
{
  university: "Pondicherry University",
  degree: "Master of Business Administration in Human Resource Management",
  GPA: "First Class",
  duration: "Aug 2019 - May 2021",
  image: education2,
  url: "https://www.pondiuni.edu.in/",
},
{
  university: "KL University",
  degree: "Bachelor of Technology in Electronics and Communication Engineering",
  GPA: "8.0/10",
  duration: "Aug 2015 - May 2019",
  image: education3,
  url: "https://www.kluniversity.in/",
},
];
