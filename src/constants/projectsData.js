export const projectsData = [
    {
      id: 1,
      title: "Food Recipe App",
      description:
        "Food recipe app using React Native, spiced up with some fancy animations and a pinch of YouTube integration! 📱🍲 Dive into the kitchen with me and explore a world of delicious recipes, courtesy of The Meal DB API.",
      features: [
        "Seamless integration with The Meal DB API for recipes",
        "Captivating animations and smooth UI transitions",
        "YouTube video support for step-by-step cooking guides",
      ],
      technologies: ["React Native", "Native Wind"],
      image: require("../assets/images/projects/foodApp.png"),
      githubLink: "https://github.com/matheshyogeswaran/RNFoodRecipeApp",
      websiteLink:
        "https://www.linkedin.com/posts/mathesh-yogeswaran_reactnative-nativewind-foodapp",
      downloadLink: "https://drive.google.com/drive/folder", // Example link
      challenges:
        "Enhanced user experience by incorporating NativeWind UI components for a polished interface.",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "React Native weather app is designed to provide users with a seamless and intuitive experience for staying informed about weather conditions. Leveraging the power of React Native.",
      features: [
        "Real-time weather updates with OpenWeather API",
        "Displays temperature, humidity, and wind speed",
        "Clean and user-friendly interface",
      ],
      technologies: ["React Native", "Native Wind"],
      image: require("../assets/images/projects/weather.png"),
      githubLink: "https://github.com/matheshyogeswaran/weatherApp",
      websiteLink:
        "https://www.linkedin.com/posts/mathesh-yogeswaran_reactnative-nativewind-weatherapp",
      challenges:
        "Implemented API calls efficiently and optimized performance using React hooks.",
    },
    {
      id: 3,
      title: "Animated Icons JSON Package",
      description:
        "React Native animated icons JSON package with seamless integration and JSON saver. Simplify animations without manual management.",
      features: [
        "Pre-built JSON animations",
        "Easy integration into React Native projects",
        "Community-driven contributions for animated icons",
      ],
      technologies: ["React Native", "NPM"],
      image: require("../assets/images/projects/JSON.png"),
      githubLink:
        "https://github.com/matheshyogeswaran/react-native-animated-icons-json",
      websiteLink:
        "https://www.linkedin.com/posts/mathesh-yogeswaran_reactnative-animatedicons-jsonsaver",
      challenges:
        "Simplified animation loading and storage with an NPM package for React Native.",
    },
    {
      id: 4,
      title: "Cornflakes Maker",
      description:
        "An RFID-based automated cornflakes maker designed for office employees. Ensures quick, hygienic, and free meals using RFID-tagged ID cards.",
      features: [
        "Automates food serving using RFID",
        "Quick and hygienic process",
        "User authentication with RFID tags",
      ],
      technologies: ["RFID", "Automation"],
      image: require("../assets/images/projects/HardwareProject.png"),
      githubLink:
        "https://github.com/matheshyogeswaran/Hardware-project-L1.git",
      challenges:
        "Built a scalable RFID authentication system to automate food serving processes.",
    },
    {
      id: 5,
      title: "Employee Performance Review System (EPRS)",
      description:
        "A MERN stack-based web application to review employee performance based on Git, JIRA, and leave data.",
      features: [
        "Aggregates performance data from multiple systems",
        "Generates performance analytics and reports",
        "Interactive dashboards for performance visualization",
      ],
      technologies: ["MERN"],
      image: require("../assets/images/projects/eprs.png"),
      githubLink: "https://github.com/orgs/infinitix36/repositories",
      websiteLink: "https://eprs-frontend.onrender.com/",
      challenges:
        "Integrated multiple APIs and optimized real-time data synchronization.",
    },
    {
      id: 6,
      title: "Delivery App",
      description:
        "A microservices-based delivery system for supermarkets using Spring Boot and Kafka.",
      features: [
        "Inventory and order management system",
        "Messaging system with RabbitMQ",
        "Secure authentication with Keycloak",
      ],
      technologies: ["Spring Boot", "Kafka", "API Gateway"],
      image: require("../assets/images/projects/delivery.jpg"),
      githubLink: "https://github.com/matheshyogeswaran/NetroShop",
      challenges:
        "Implemented microservices architecture for scalability and fault tolerance.",
    },
    {
      id: 7,
      title: "ReactDocComBuilder",
      description:
        "VS Code extension to generate documentation for React components effortlessly.",
      features: [
        "Automated component documentation generation",
        "Supports JSX/TSX files",
        "Customizable templates",
      ],
      technologies: ["React", "VS Code Extension"],
      image: require("../assets/images/projects/reactVS.png"),
      githubLink:
        "https://github.com/matheshyogeswaran/ReactDocComBuilder",
      websiteLink:
        "https://marketplace.visualstudio.com/items?itemName=Mathesh.ReactDocComBuilder",
      challenges:
        "Enhanced documentation generation efficiency with reusable templates.",
    },
    {
      id: 8,
      title: "GitHub Commit Chart",
      description:
        "Web app to visualize GitHub commit history and contributors' performance.",
      features: [
        "Fetches data using GitHub APIs",
        "Displays interactive charts for commits and contributors",
        "Supports multiple repositories",
      ],
      technologies: ["React", "Chart.js"],
      image: require("../assets/images/projects/githubChart.png"),
      githubLink:
        "https://github.com/matheshyogeswaran/git_chart_commits",
      websiteLink: "https://mathesh-github-details.netlify.app/",
      challenges:
        "Handled API rate limits and optimized data fetching for larger repositories.",
    },
    {
      id: 9,
      title: "Open Street Map (OSM) App",
      description:
        "A ReactJS-based app to retrieve and display map locations based on user input.",
      features: [
        "Fetches current location automatically",
        "Searches and displays custom locations",
        "Responsive map interface with zoom functionality",
      ],
      technologies: ["React", "OpenStreetMap API"],
      image: require("../assets/images/projects/OSM.png"),
      githubLink: "https://github.com/matheshyogeswaran/openmap_react",
      websiteLink: "https://mathesh-osm-react-map.netlify.app/",
      challenges:
        "Optimized map rendering for large datasets and dynamic location updates.",
    },
    {
        id: 10,
        title: "Music App",
        description:
          "Cross-platform music app with light and dark themes, featuring background playback and notification-based controls.",
        features: [
          "Dark and light themes for personalized experience",
          "Background playback with notification-based controls",
          "Features like shuffle, mute, and like songs",
        ],
        technologies: ["React Native", "Zustand", "Supabase", "Async Storage"],
        image: require("../assets/images/projects/musicApp.png"),
        githubLink: "https://github.com/matheshyogeswaran/musicApp",
        websiteLink: "https://www.youtube.com/watch?v=2Xl5lyjV8yU",
        downloadLink:
          "https://drive.google.com/file/d/1Ehha98Omwp3NQ4XO_oJw1s0fsnHh3vvS/view",
        challenges:
          "Optimized caching and data handling with Async Storage and Supabase for scalability.",
      },
      {
        id: 11,
        title: "Voice Assistant App",
        description:
          "Voice assistant app with Gemini API integration for text processing, image fetching, and text-to-speech functionality.",
        features: [
          "Text-to-speech voice commands for hands-free interaction",
          "Gemini API integration for intelligent text processing",
          "Pexels API for fetching images",
          "Modern UI design with NativeWind",
        ],
        technologies: [
          "React Native",
          "Gemini API",
          "Pexels API",
          "NativeWind",
          "Text-to-Speech",
        ],
        image: require("../assets/images/projects/voiceAssistant.png"),
        githubLink:
          "https://github.com/matheshyogeswaran/reactNativeAIApp",
        websiteLink:
          "https://www.youtube.com/watch?v=lLLimHR-3mY",
        downloadLink:
          "https://drive.google.com/drive/folders/1EdC8CW04b0ewz4rcdnQOQNJ_h9zI0hwq",
        challenges:
          "Designed a responsive interface and implemented seamless voice command processing with text-to-speech functionality.",
      },
  ];
  