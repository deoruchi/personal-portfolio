import { ArrowBigLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Protfolio_img from "../imageFolder/images/Profilephoto2.png";
import { Button } from "@/components/ui/button";
import { CommonMarquee } from "@/components/shared/CommonMarquee";
import { Footer } from "@/components/shared/Footer";

export const About = () => {
  const nav = useNavigate();
  return (
    <article className="bg-black pt-2  min-h-screen w-full">
      <section className="p-4 ml-2 mr-2 md:ml-4 md:mr-4  mb-2 md:p-6 bg-image3 bg-no-repeat bg-cover min-h-screen rounded-lg ">
        <Button
          className="space-y-4 my-4 text-white"
          onClick={() => {
            nav("/personal-portfolio/");
          }}
        >
          <ArrowBigLeft />
        </Button>
        <CommonMarquee text="ABOUT ME" />

        <div className="grid grid-rows-1 grid-cols-none lg:grid-cols-3 lg:grid-rows-none gap-4 p-4 bg-whiteBlur rounded-lg shadow-lg ">
          <div className=" relative flex justify-center align-center lg:justify-start translate-x-10 bg-gradient bg-contain bg-no-repeat ">
            <img
              src={Protfolio_img}
              className="rounded-xl w-[300px] h-[500px]  hidden lg:block"
            />

            <p className="absolute font-semibol p-2 rounded-lg bg-lime-300 text-center animate-float text-black  bottom-0 -left-1 hidden lg:block shadow-lg">
              <span className="font-semibold">Name:</span>
              RUCHI DEO
            </p>

            <p className="absolute font-semibol p-2 rounded-lg bg-yellow-200 text-center animate-float text-slate-800 top-16 right-5 hidden lg:block shadow-lg">
              <span className="font-semibold">Status:</span>
              Improving Sleep Cycle
            </p>
            <p className="absolute font-semibol p-2 rounded-lg bg-red-100 text-center animate-float text-slate-800 top-2 left-3 hidden lg:block shadow-lg">
              <span className="font-semibold">Education:</span>
              Computer Science Engineer Graduate
            </p>
          </div>

          <div className="col-span-2 p-4">
            <div className="mt-4  text-indigo-950">
              <p className="p-2 text-center lg:text-left bg-whiteBlur rounded-lg">
                I am a person who loves to create and have fun while making it.
                <strong> Learner and hardworking.</strong>
              </p>
              <p className="text-lg mt-4  italic text-left mb-2 ">
                "Hii!! I am Ruchi Deo, an computer science engineering graduate.
                "
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                <li>
                  <strong>Web Wizardry 🧙‍♂️:</strong> Crafting sleek, efficient
                  web applications is my jam! From creating responsive
                  interfaces to hooking up dynamic APIs, I’m all about smooth
                  user experiences.
                </li>
                <li>
                  <strong>Project Portfolio 📂:</strong> My experience includes
                  building a Library Management System and a Travel Advisor App,
                  both powered by React and some caffeine.
                </li>
                <li>
                  <strong>OCR & Machine Learning 🤖:</strong> Recently, I jumped
                  into document OCR and machine learning—basically, teaching
                  computers to read... and not judge my handwriting.
                </li>
                <li>
                  <strong>Tech Troubleshooter 🛠️:</strong> I’m here for the
                  bugs, the debugging, and the “why won’t this work?” moments.
                  Optimizing code? Bring it on!
                </li>
                <li>
                  <strong>Where I am 🔭 :</strong>
                  You can usually find me on X (formerly Twitter) 🐦, indulging
                  in the latest posts. When I’m not there, I'm probably busy
                  immersing myself in tech-savvy content 💻 or enjoying some
                  anime 📺.
                </li>
              </ul>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-6">
              <p className=" animate-float font-semibold bg-gradient-to-b from-white to-purple-300 p-2 rounded-lg text-center w-full lg:w-auto">
                <strong>Personality Type:</strong> INTP 🌱
              </p>
              <p className=" animate-float font-semibold bg-gradient-to-b from-white to-purple-300 p-2 rounded-lg text-center w-full lg:w-auto">
                Loves drawing and anime
              </p>
              <p className="animate-float font-semibold bg-gradient-to-b from-white to-purple-300 p-2 rounded-lg text-center w-full lg:w-auto">
                Like Horror Movies and Books of various topic
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </article>
  );
};
