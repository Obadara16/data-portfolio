import IMG1 from "./assets/afriqhub.png";
import IMG2 from "./assets/afriqfabs.png";
import IMG3 from "./assets/gainsborough.png";
import IMG4 from "./assets/portfolio.png";
import IMG5 from "./assets/portfolio3.png";
import IMG6 from "./assets/bti.png";
import IMG7 from "./assets/fundtrack.png";


export const data = [
  {
    id: 1,
    image: IMG7,
    title: "FundTrack",
    description:
      "FundTrack is a digital wallet app to easily manage your funds and make transactions with ease. Our advanced algorithm analyzes your transactions and predicts your spending habits, allowing you to plan and budget better.",
    github: "https://github.com/Obadara16/fundtrack",
    demo: "https://fundtrack-i4kx.onrender.com",
  },
  {
    id: 2,
    image: IMG1,
    title: "AfriqHub",
    description:
      "Afriqhub is a platform that aims to improve users' knowledge on various topics while allowing them to connect with like-minded people across Africa. The platform provides premium content that keeps users engaged and allows them to establish a sense of community.",
    github: "https://github.com/Obadara16",
    demo: "https://afriqhub.com",
  },
  {
    id: 3,
    image: IMG2,
    title: "AfriqFabs",
    description:
      "AfriqFabs is a family-owned business that provides high-quality, stylish, and practical fabrics at affordable prices. They offer a wide range of fabrics, including cotton, silk, polyester, rayon, linen, and wool, and are committed to sustainable and ethical sourcing practices.  ",
    github: "https://github.com/Obadara16/afriqfabs",
    demo: "https://afriqfabs.onrender.com",
  },
  {
    id: 4,
    image: IMG3,
    title: "GainsBorough",
    description:
      "Gainsborough is a real estate platform that provides users with the ability to buy, rent, and lease properties. The platform also allows real estate agents to upload and sell properties to potential buyers and renters.",
    github: "https://github.com/Obadara16/",
    demo: "https://roqportfolio.onrender.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Brocon",
    description:
      "An organization of undergraduate student consultants working to provide quality, pro-bono advisory services for our clients. We work with startup and growing companies from a variety of industries, ranging from technology to healthcare to fashion, providing innovative and effective solutions.",
    github: "https://github.com/Obadara16/Brocon",
    demo: "https://brocon.onrender.com",
  },
  {
    id: 6,
    image: IMG4,
    title: "Estate Chain",
    description:
      "Estate chain is a real estate platform that aims to change real estate in Africa by keeping track of properties, verifying them, and purchasing and selling them. All of this will be accomplished through the use of blockchain technology. ",
    github: "https://github.com/Obadara16",
    demo: "https://roqportfolio.onrender.com",
  },
  {
    id: 7,
    image: IMG6,
    title: "BlockchainLab Academy",
    description:
      "Blockchain Lab Academy is an online learning platform that offers courses and training on blockchain technology. The platform provides comprehensive and up-to-date content on various blockchain topics, including blockchain basics, smart contracts, decentralized finance (DeFi), and more.",
    github: "https://github.com/Obadara16/",
    demo: "https://blockchainlabacademy.com",
  },
];

export const content = [
  {
    title: "Bio",
    description: [
      'Roqeeb Obadara is an aspiring Data Scientist and Full Stack Developer with expertise in web development. He envisions using data analysis and machine learning to create innovative solutions.',
      'Roqeeb has developed a full-stack e-commerce platform, boosting online sales by 30%, and optimized resource allocation, reducing costs by 20% for a logistics company.',
      'He aims to become a proficient Data Scientist and Full Stack Developer, contributing to "Stevics Payment" and driving innovation through data-driven insights.',
    ],
  },
  {
    title: "Elevator Pitch",
    description: [
      "Hello, I'm Roqeeb Obadara, a data science student from the University of Ibadan, Nigeria, and a skilled full-stack developer proficient in Node.js, React, Express, and MongoDB.",
      "At ALX, I'm honing my data science skills and analytical prowess.",
      "I create dynamic web apps using modern tools like React and Node.js, blending data science and full-stack skills to deliver insights and seamless user experiences.",
      "Excited to contribute to impactful projects and bring innovation through continuous learning.",
    ],
  },
];


export const srConfig = (delay = 200, viewFactor = 0.25) => ({
  origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
});

export const email = 'obadararoqeeb@gmail.com';