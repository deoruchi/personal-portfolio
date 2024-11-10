import React from "react";
import { Button } from "../ui/button";
import Protfolio_img from "../../imageFolder/images/Profilephoto2.png";
import { useNavigate } from "react-router-dom";
export const Intro = () => {
  const nav = useNavigate();
  return (
    <>
      <section
        id="about"
        className={` p-6 sm:ml-4 sm:mr-4 ml-2 mr-2 rounded-xl grid-flow-row grid-cols-2 grid bg-image bg-cover min-h-screen bg-no-repeat justify-center items-start md:items-center min-w-screen mx-auto gap-6  `}
      >
        <div className="w-[500px] translate-y-20 md:translate-x-10 md:-translate-y-1">
          <div className=" font-thin  md:text-[100px] transition-all ease-out   ">
            <div className="animate-bounce">
              <span className="font-semibold text-[50px] md:text-[100px] ">
                Hello 👋
              </span>
            </div>
            <p className="text-[40px] lg:text-[100px] leading-tight">
              My name is
              <span className="text-[60px] md:text-[100px] block font-semibold italic ">
                Ruchi Deo
              </span>
            </p>
            <p className="text-[20px] my-3 w-[80vw]">
              👩‍💻 Your friendly neighborhood web dev—welcome to my site! 🎉😄
            </p>
          </div>

          <div className="flex flex-row flex-wrap w-[350px] md:w-full gap-2">
            <div className="w-fit">
              <p className="text-2xl"> I am a :</p>
            </div>

            <Button variant="ghost" className=" bg-slate-300 w-fit ">
              {" "}
              Web Developer
            </Button>
            <Button variant="ghost" className="bg-slate-300  w-fit">
              {" "}
              Frontend Developer
            </Button>
          </div>
          <div className="mt-4 block lg:hidden">
            <Button
              variant="outline"
              onClick={() => {
                nav("/personal-portfolio/about");
              }}
            >
              More About me ✨
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ml-10">
          <img
            src={Protfolio_img}
            className="rounded-xl w-[300px] h-[500px]  hidden lg:block"
          />

          <div className=" m-4 w-fit self-start lg:flex lg:flex-row flex-1 gap-12 hidden">
            <div className="absolute top-[400px] right-[350px]  rounded-lg w-[250px] p-2 bg-gradient-to-r from-indigo-300 to-purple-400  animate-float">
              <p className="font-semibold">About</p>
              <p className="text-wrap">
                A person who loves to create and have fun while making it.
                Learner and hardworking.
              </p>
              <p>
                <strong>Personality Type:</strong> INTP 🌱
              </p>
            </div>
            <div className="absolute top-[500px] right-[50px]  rounded-lg  p-2  animate-float  ">
              <p className="font-semibold bg-gradient-to-b from-white to-purple-300  p-2 rounded-lg text-center">
                Loves drawing and anime
              </p>
              <p className="font-semibold mt-4 bg-gradient-to-b from-purple-300 to-indigo-300 p-2 rounded-lg text-center">
                Books and Horror Movies
              </p>
            </div>

            <p className="font-semibol p-2 rounded-lg bg-lime-200 text-center  animate-float text-slate-800">
              <span className="font-semibold">Status:</span>
              Improving Sleep Cycle
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
