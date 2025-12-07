import Container from "@/components/Container";
import Footer from "@/components/footer";
import { ProjectCard } from "@/components/ui/project-card";
import Testimonials from "@/components/testimonials";
import NavBar from "@/components/(navbar)/navbar";
import ContackMe from "@/components/contact";
import { GitHubCalendar } from "@/components/ui/git-hub-calendar";

const contributionData = [
  { date: "2025-10-13", count: 3 },
  { date: "2025-05-12", count: 1 },
  { date: "2025-09-11", count: 2 },
  { date: "2025-09-10", count: 5 },
  { date: "2024-09-13", count: 2 },
  { date: "2024-09-15", count: 0 },
  { date: "2024-09-20", count: 4 },
  { date: "2024-10-01", count: 1 },
  { date: "2024-10-05", count: 3 },
  { date: "2024-10-10", count: 0 },
  { date: "2024-10-15", count: 2 },
  { date: "2024-10-20", count: 5 },
  { date: "2024-11-02", count: 1 },
  { date: "2024-11-07", count: 3 },
  { date: "2024-11-12", count: 4 },
  { date: "2024-11-18", count: 0 },
  { date: "2024-11-25", count: 2 },
  { date: "2024-12-01", count: 3 },
  { date: "2024-12-05", count: 1 },
  { date: "2024-12-10", count: 0 },
  { date: "2024-12-15", count: 4 },
  { date: "2024-12-20", count: 2 },
  { date: "2025-01-01", count: 5 }, // This are fake data
  { date: "2025-01-05", count: 1 },
  { date: "2025-01-10", count: 3 },
  { date: "2025-01-15", count: 4 },
  { date: "2025-01-20", count: 0 },
  { date: "2025-01-25", count: 2 },
  { date: "2025-02-01", count: 3 },
  { date: "2025-02-05", count: 1 },
  { date: "2025-02-10", count: 0 },
  { date: "2025-02-15", count: 4 },
  { date: "2025-02-20", count: 2 },
  { date: "2025-03-01", count: 5 },
];


export default function Home() {
  return (
    <div>
      <Container>
        <NavBar />
        <div className="border-shadow-lg pb-16 ">
          <h2 className="text-5xl font-bold pt-10 pb-5 tracking-tight text-primary drop-shadow-lg pl-10">John MacTavish
          </h2>
          <p className="pl-10 text-lg tracking-tight text-gray-500 drop-shadow-lg">
            I&apos;m a software engineer with an eye for design. I&apos;ve been
            building things for the web for the past 5 months.<br/> I&apos;ve worked 
            with a variety of technologies, but my main focus is on React and
            Next.js.
          </p>
        </div>
       
        <div className="border">

        <div className="pb-2 border-gray-300">
          <h2 className="text-3xl tracking-tight font-bold drop-shadow-lg pt-10 pl-10">Projects</h2>
        </div>
        <div className="pl-10 drop-shadow-lg">
          <p className=" text-gray-500 max-auto border px-3 inline-flex rounded-lg py-1 drop-shadow-lg text-sm  mr-2 mb-2">
            I love building web apps and products that can impact millions of
            people.
          </p>
        </div>
        


        

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-8">
          <ProjectCard
            title="Mentora"
            description="Mentora is a personlized AI mentoring platform.Where you can perpare for interivews with the help of AI "
            imgSrc="https://interviewtoolreview.com/wp-content/uploads/2025/06/AI-1200-x-720-px.jpg"
            link="#"
          />
          <ProjectCard
            title="Liver Disease Prediction"
            description="A machine learning model to predict liver disease."
            imgSrc="https://c8.alamy.com/comp/JMD2M4/liver-disease-illustration-with-words-of-liver-conditions-on-blackboard-JMD2M4.jpg"
            link="#"
          />
          <ProjectCard
            title="Portfolio Website"
            description="A personal portfolio website with a clean and modern design."
            imgSrc="https://mir-s3-cdn-cf.behance.net/projects/404/082b74215554537.Y3JvcCwxMDA2LDc4NywxOTYsMA.png"
            link="#"
          />
        
          

        </div>
        </div>
        <div className="border-b-2 pb-1 border-gray-300">
        <p className="text-2xl tracking-tight font-bold pt-10 pl-10">Contributions</p>
        <div className="pl- inline-block">
          <GitHubCalendar data={contributionData} />
        </div>
        </div>


        <div className=" border-b-2 pb-16 pt-10 pl-8  border-gray-300">
          <p className="tracking-tight max-auto border px-3 inline-flex py-1 text-sm font-semibold mr-2 mb-2">Sharing knowledge as I learn </p>
         
          <h1 className="text-xl tracking-tight  font-bold ">Addvanced CSS Techniques for Mordern Web Development</h1> 
          <p className=" text-gray-500 tracking-tight">I started learning HTML and CSS in 2022. I have been <br/>using it ever since. I have used it in all my projects.</p>

           <h1 className="text-xl tracking-tight  font-bold ">Addvanced CSS Techniques for Mordern Web Development</h1> 
          <p className=" text-gray-500 tracking-tight">I started learning HTML and CSS in 2022. I have been <br/>using it ever since. I have used it in all my projects.</p>

           <h1 className="text-xl tracking-tight  font-bold ">Addvanced CSS Techniques for Mordern Web Development</h1> 
          <p className=" text-gray-500 tracking-tight">I started learning HTML and CSS in 2022. I have been <br/>using it ever since. I have used it in all my projects.</p>
        </div>

        <div className="pl-5 pr-5">
        <Testimonials />
        </div>
        <div className="border-b-2 pb-16 pt-10 pl-8 border-gray-300">
          <div className="text-gray-500 max-w-lg pl-2 pr-2 rounded-lg drop-shadow-lg text-sm md:text-base inline-flex border-2">
            <p className="drop-shadow-lg  ">Get in touch</p>
          </div>
          <p className="pt-3 text-gray-500 drop-shadow-lg ">I&apos;m currently looking for new opportunities, My inbox is always open.<br/> Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
          <div className="pr-60 drop-shadow-lg">
          <input type="text" placeholder="Your Email" className="border-2 drop-shawdow-lg rounded-lg w-full h-12 p-2 mt-5" />
          <button className="border-2 rounded-lg  text-gray-500 h-10 p-2 mt-5">Send Message</button>
          </div>
        
        </div>
        

        <Footer />
      </Container>
      
    </div>
  );
}
