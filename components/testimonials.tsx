"use client";
import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";



const testimonials: Testimonial[] = [
  {
    text: "This portfolio website is incredible. The design is clean and professional, showcasing projects beautifully.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Design Director",
  },
  {
    text: "Amazing developer with great attention to detail. The code quality and responsiveness are outstanding.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Tech Lead",
  },
  {
    text: "Exceptional work on this project. The UI/UX is intuitive and the performance is top-notch.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Product Manager",
  },
  {
    text: "Impressed with the technical execution and creative design. A true full-stack developer.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "CTO",
  },
  {
    text: "The project workflow and communication throughout were excellent. Highly professional.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "Great implementation and smooth deployment. The website loads fast and looks amazing.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "QA Engineer",
  },
  {
    text: "Outstanding portfolio that really stands out. Would definitely recommend this developer.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Recruiter",
  },
  {
    text: "The attention to performance and accessibility is remarkable. Best in class work.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "UX Researcher",
  },
  {
    text: "Innovative solutions and clean code. This developer truly understands modern web development.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Senior Developer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials of user</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-bold tracking-tighter mt-5">
            People love my work 
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}