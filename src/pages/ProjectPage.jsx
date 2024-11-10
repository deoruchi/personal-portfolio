import React from "react";
import { project_Detail } from "@/constants/projects.js";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Footer } from "@/components/shared/Footer";
import { ArrowBigLeft } from "lucide-react";
import { CommonMarquee } from "@/components/shared/CommonMarquee";
export const ProjectPage = () => {
  const nav = useNavigate();
  return (
    <>
      <section className=" w-full min-h-2xl bg-black  pt-4 pb-4  " id="project">
        <div className=" md:ml-4 md:mr-4 ml-2 mr-2   bg-image3 p-4 bg-no-repeat bg-cover rounded-xl ">
          <Button
            className="space-y-4 my-4 text-white"
            onClick={() => {
              nav("/personal-portfolio/");
            }}
          >
            <ArrowBigLeft />
          </Button>

          <CommonMarquee text="PROJECTS" />

          <br></br>
          <div className="flex flex-1 flex-wrap gap-2 justify-center items-start bg-whiteBlur rounded-xl p-2 ">
            {project_Detail?.map((item) => {
              return (
                <ProjectCard
                  name={item.name}
                  detail={item.detail}
                  techused={item.techused}
                  visit={item.visit}
                  image={item.image}
                  code={item.link}
                  key={item.name}
                />
              );
            })}
          </div>
          <div className="flex justify-center mt-4 "></div>
        </div>
        <br></br>
        <Footer />
      </section>
    </>
  );
};
