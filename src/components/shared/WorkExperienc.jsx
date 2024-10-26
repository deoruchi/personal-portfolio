import { CommonMarquee } from "./CommonMarquee";
import { work_experience } from "@/constants/WorkExperience.js";
import { Experiencecard } from "./Experiencecard";

export const WorkExperienc = () => {
  return (
    <section className="p-4 ml-2 md:ml-4 mr-2 md:mr-4 rounded-lg bg-no-repeat bg-cover bg-image2 ">
      <div>
        <CommonMarquee text="Work Experience" />
      </div>
      <div className="flex flex-1 gap-2 my-4 flex-col lg:flex-row " id="work">
        {work_experience?.map((items, id) => (
          <Experiencecard
            name={items.company_name}
            role={items.role}
            timeline={items.timeline}
            proj_nm={items.project_name}
            resp={items.responsibilities}
            skills={items.skills}
            key={id}
          />
        ))}
      </div>
    </section>
  );
};
