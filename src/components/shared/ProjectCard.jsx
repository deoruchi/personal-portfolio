import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export const ProjectCard = ({ name, detail, techused, visit, image }) => {
  let Image_url = image;

  return (
    <>
      <Card className="w-[350px] h-fit overflow-auto">
        <img
          src={Image_url}
          alt={name}
          className="rounded-t-md w-full h-[200px] object-cover"
        />
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="">{detail}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-start gap-2 flex-wrap">
            {techused?.map((items) => (
              <Button variant="outline" key={items}>
                {items}
              </Button>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <a href={visit}>
            <Button className="space-x-4 flex flex-1 items-center justify-center gap-2">
              Visit <MoveRight />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
};
