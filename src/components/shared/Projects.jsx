import React from "react";
import { ProjectCard } from "./ProjectCard";
import { CommonMarquee } from "./CommonMarquee";
import { project_Detail } from "../../constants/projects";

export const Projects = () => {
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
                key={item.name}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
