import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { getUserData } from "./api";
import HeroSection from "./components/Herosection";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Preloader from "./components/Preloader";
import BrandArea from "./components/BrandArea";
import "./App.css";
import Client from "./components/Client";
import PriceTable from "./components/PriceTable";
import TestimonialSection from "./components/Testimonial";
import WorkProcess from "./components/WorkProcess";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import pro1 from "./img/demo.png";
import pro2 from "./img/demo1.png";
import pro3 from "./img/demo2.png";
import pro4 from "./img/demo4.png";
import pro5 from "./img/tod0.png"

import blogPostVideo from "./asset/blog.mp4";
import whatsapp_video from "./asset/whatsapp.mp4";
import collabWriteVideo from "./asset/collabWrite.mp4";

const App = () => {
  const [userData2, setUserData2] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPreLoader, setShowPreLoader] = useState(true);
  let userData1 = [
    {
      about: {
        address: "Muzaffarpur, Bihar",
        contactEmail: "anujkumar1072001@gmail.com",
        description:
          "Experienced React developer adept at crafting dynamic user interfaces, proficient in JavaScript, HTML, CSS, and dedicated to continuous improvement.",
        exp_year: 0,
        name: "Anuj Kumar Sharma",
        phoneNumber: "7903817256",
        quote:
          "Code is canvas, creativity brush; developers paint the digital world..",
        subTitle:
          "Empowering the Digital Experience: Crafting Seamless Solutions with Code",
        title: "FrontEnd Developer",
        avatar: {
          url: "https://65ebdb84d83a6d5440751329--benevolent-speculoos-6306d2.netlify.app/static/media/main2.81adaaf6a193e0442fb2.jpeg",
        },
      },
      email: "anujkumar1072001@gmail.com",
      projects: [
        {
          description: `OHaonaur user-friendly blog post application offers a seamless experience for both new and existing users. Featuring a simple and secure login system, users can effortlessly access their accounts and begin sharing their thoughts and experiences through personalized blog posts. With secure account creation using email and password, alongside two-factor authentication via OTP for enhanced security, users can trust in the safety of their accounts. Upon login, users gain access to a personalized dashboard where they can Haonacreate, edit, and delete their own blog posts. Additionally, they can interact with other users' posts through comments and view a robust search functionality for discovering specific posts based on keywords. For guest users, there is limited access to view posts created by others, ensuring a seamless browsing experience even without logging in.
    
    `,
          githuburl: "https://github.com/Anujkumar2001/blog_post",
          image: {
            url: pro1,
          },
          videoUrl: {
            url: blogPostVideo,
          },
          liveurl:
            "https://65d318b8d7d42af51cae7678--splendid-lokum-7eac97.netlify.app/",

          techStack: ["React", "Html", "Css", "Javascript"],
          title: "Blog Post Application",
        },

        {
          description: `Hello and welcome to my WhatsApp web clone application! I've completed the entire frontend part of this app, aiming to replicate the functionalities of WhatsApp seamlessly. Users can enjoy features such as searching for contacts, chatting with them including voice recordings, exploring community interactions, accessing channels, staying updated with status changes, and discovering new contacts to engage with. My goal is to provide an experience that feels just like the real WhatsApp. Feel free to explore and share any feedback or questions you may have!
    `,
          githuburl: "https://github.com/Anujkumar2001/whatsapp_clone",
          image: {
            url: pro2,
          },
          videoUrl: {
            url: whatsapp_video,
          },
          liveurl:
            "https://65ebc2c89ed3fb41365c84f4--aquamarine-souffle-389f5b.netlify.app/",

          techStack: ["React", "Html", "Css", "Javascript"],
          title: "WhatsApp Web Clone",
        },

        {
          description: `In this currency converter application, you can input the amount and select the country whose currency value you want to view. The application will then display the accurate currency value based on your selection.
    `,
          githuburl: "https://github.com/Anujkumar2001/currency_converter",
          image: {
            url: pro3,
          },
          videoUrl: {
            url: "",
          },
          liveurl:
            "https://65d30d8bc1e04cd215662faa--neon-sfogliatella-ca659e.netlify.app/",

          techStack: ["React", "Html", "Css", "Javascript"],
          title: "RealTime Currency Converter",
        },
        {
          description:
            "Hello everyone, welcome to our CollabWrite application! It's a platform where you can easily create an account using your valid details. Once you're logged in, you can create files and personalize them however you like. The coolest part is, you can share these files with others! And guess what? Thanks to our real-time text updating feature powered by Socket.IO, whenever someone makes changes to a shared file, you'll see those updates happen instantly. It keeps everyone on the same page, making collaboration a breeze",
          githuburl: "https://github.com/Anujkumar2001/collab_write_app",
          image: {
            url: pro4,
          },
          videoUrl: {
            url: collabWriteVideo,
          },
          liveurl: "#",

          techStack: [
            "React",
            "Html",
            "Css",
            "Javascript",
            "express",
            "mongoDb",
            "socketIo",
            "node js",
          ],
          title: "Collab write application",
        },
        {
          description: `Welcome to my ToDo List application! This application functions like any other ToDo List app, allowing you to manage your tasks efficiently.

          Once you enter a task in the input field and click the "Add Task" button, it will be added to the list visible in the application. The unique feature of this application is the utilization of React and Redux Toolkit with persistent storage. This means that even if you refresh the page, your ToDo list items will not be lost.
          
          Each task in the list is accompanied by a checkbox. You can mark a task as completed by checking the box, which will draw a line through the task text, indicating that it's done. Additionally, I've included a delete button for each task, allowing you to remove tasks from your list as needed.
    `,
          githuburl: "https://github.com/Anujkumar2001/react_todo_list",
          image: {
            url: pro5,
          },
          videoUrl: {
            url: "",
          },
          liveurl:
            "https://66366ac68606eb1ae6b38cc7--elaborate-eclair-a1dc8f.netlify.app/",

          techStack: ["React", "Html", "Css", "Javascript","Redux"],
          title: "React Todo Application",
        },
      ],
      skills: [
        {
          name: "HTML",
          image: {
            url: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
          },
        },
        {
          name: "CSS",
          image: {
            url: "https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.jpg",
          },
        },
        {
          name: "JAVASCRIPT",
          image: {
            url: "https://www.ankitweblogic.com/javascript/js_img/javascript.png",
          },
        },
        {
          name: "REACT",
          image: {
            url: "https://www.abrilliants.com/wp-content/uploads/2023/05/1631110818-logo-react-js.png",
          },
        },
        {
          name: "TAILWIND",
          image: {
            url: "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/screenshot_361.png?itok=w4CzcWyb",
          },
        },
        {
          name: "BOOTSTRAP",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png",
          },
        },
      ],

      social_handles: [
        {
          image: {
            url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp",
          },
          url: "https://www.instagram.com/anuj_._._sharma?igsh=aHd3aG0wOXJ6NWYz",
          platform: "Instagram",
        },
        {
          image: {
            url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp",
          },
          platform: "LinkedIn",
          url: "https://www.linkedin.com/in/anuj-sharma-223b722b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          image: {
            url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718328750-d4jsq.webp",
          },
          platform: "Twitter",
          url: "#",
        },
        {
          image: {
            url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp",
          },
          platform: "Facebook",
          url: "https://www.facebook.com/profile.php?id=100012253008097",
        },
      ],
      tools: [
        {
          name: "Vs Code",
          image: {
            url: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
          },
        },
        {
          name: "Postman",
          image: {
            url: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png?f=webp",
          },
        },
        {
          name: "Figma",
          image: {
            url: "https://cdn-icons-png.flaticon.com/512/5968/5968701.png",
          },
        },
        {
          name: "GitHub",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
          },
        },
      ],
    },
  ];

  let userData = userData1[0];
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const data = await getUserData();
      if (data.status === 200) {
        setUserData2(data.data.user);
        // console.log(data.data.user, "getting from the  api ");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  console.log(userData2, "getting data from api");

  useEffect(() => {
    fetchUserData();
    setTimeout(() => {
      setShowPreLoader(false);
    }, 2000);
  }, []);
  return (
    <div>
      {showPreLoader && <Preloader />}
      <Navbar />
      {<HeroSection userData={userData} />}
      {<AboutUs userData={userData} />}
      {<Portfolio userData={userData} />} {<Client userData={userData} />}
      {Object.keys(userData).length && <Footer userData={userData} />}
    </div>
  );
};

export default App;
