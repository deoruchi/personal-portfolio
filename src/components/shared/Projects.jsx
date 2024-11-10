import React from "react";
import { ProjectCard } from "./ProjectCard";
import { CommonMarquee } from "./CommonMarquee";
import { project_Detail } from "@/constants/projects.js";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const nav = useNavigate();
  return (
    <>
      <section className=" mt-10  w-full min-h-2xl " id="project">
        <div>
          <CommonMarquee text="Projects" />
        </div>
        <div className="flex flex-1 flex-wrap gap-2 justify-center mt-10 items-start  ">
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
        <div className="flex justify-center mt-4 ">
          <Button
            className=" bg-indigo-600 hover:bg-indigo-400 hover:text-black transition-all"
            onClick={() => {
              nav("/personal-portfolio/project");
            }}
          >
            More Projects
          </Button>
        </div>
      </section>
    </>
  );
};
