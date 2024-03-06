import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe,FaPen } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {/* <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
         
        /> */}
        <Card
          title="Web App Development"
          des="Craft tailored web applications for seamless user experiences."
          icon={<AiFillAppstore />}
        />
        {/* <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          hic consequuntur eum repellendus ad."
          icon={<SiProgress />}
        /> */}
        <Card
          title="Mobile Development"
          des="Craft innovative mobile solutions tailored to your needs for engaging user experiences on the go."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Create intuitive and captivating user experiences through thoughtful design and seamless interactions."
          icon={<SiAntdesign />}
        />
        <Card
          title="Content Creation"
          des="Captivate your audience with compelling content that resonates and drives action towards your goals."
          icon={<FaPen />}
        />

        <Card
          title="Hosting Websites"
          des="Ensure your online presence is secure and reliable with our professional website hosting services."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features