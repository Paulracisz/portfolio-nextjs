
import AboutPic1 from "../assets/aboutpic1.jpg";
import AboutPic2 from "../assets/aboutpic2.jpg";
import AboutPic3 from "../assets/aboutpic3.jpg";
import AboutPic4 from "../assets/aboutpic4.jpg";
import AboutPic5 from "../assets/aboutpic5.jpg";
import AboutPic6 from "../assets/aboutpic6.jpg";
import AboutPic7 from "../assets/aboutpic7.jpeg";
import Image from "next/image";

const startDate = new Date("May 5, 2021");

const now = new Date();

// subtract milliseconds to get difference
const diffMs = now.getTime() - startDate.getTime();

// convert milliseconds into years
const yearsOfExperience = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));


export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <section className="flex items-center">
      <p className="mb-4">Hi, I'm Paul. I'm a Software Engineer with { yearsOfExperience } years of experience. I specalize in Mobile and Front-End Web Development. I moved from the Metro Detroit area of Michigan to the Michiana area of Indiana to being my career. At first, I attended Kenzie Academy, a 1 year long program designed to prepare students to break into tech. I started my first role at Firefly Integrations in May of 2021. At Firefly, I develop mobile applications that are used in luxury motorhomes to control systems like HVAC, electrical, lights, and mechanical components. We use CAN Bus to integrate third party hardware to work in one seamless system. I enjoy traveling to new places whenever I can. I am currently learning spanish in hopes that I can one day travel to South America and Spain. I love coffee, and like to make tasty lattes. I enjoy playing video games, and am learning how to make my own games with Godot. I teach sunday school at my church and have 2 kids of my own. 
      </p>
      <Image src={AboutPic1} width={250} className="rounded m-10" alt="photo of me" />
      </section>
      <p>My Github Contribution Chart!</p>
      <img src="http://ghchart.rshah.org/Paulracisz" className="m-10" alt="Github chart" />
      <section className="flex flex-row flex-wrap width-[100%]">
      <Image width={300} className="m-5 object-contain" src={AboutPic2} alt="image of a keyboard" />
      <Image width={300} className="m-5 object-contain" src={AboutPic3} alt="scripture art" />
      <Image width={300} className="transform-[rotate(-90deg)] object-contain m-10" src={AboutPic4} alt="bible pic" />
      <Image width={300} className="m-5 object-contain"src={AboutPic5} alt="latte" />
      <Image width={300} className="m-5 object-contain" src={AboutPic6} alt="fender stratocaster" />
      <Image width={300} className="m-5 object-contain" src={AboutPic7} alt="fender stratocaster" />
      </section>
    </section>

    
  )
}
