import React, { useState } from "react";
import { Badge } from "../ui/badge";
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
  const [more, setMore] = useState(false);
  return (
    <>
      <Card className="w-[350px] lg:h-fit overflow-auto">
        <img
          src={Image_url}
          alt={name}
          className="rounded-t-md w-full h-[200px] object-cover"
        />
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription
            className={`${
              more ? "overflow-y-sccroll h-fit" : " max-h-24  overflow-hidden"
            } `}
          >
            {detail}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-start gap-2 flex-wrap">
            {techused?.map((items) => (
              <Badge variant="outline" key={items}>
                {items}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-1 justify-between item-center">
          <a>
            <Button
              variant="outline"
              className="space-x-4 flex flex-1 items-center justify-center gap-2 lg:w-24"
            >
              Code
            </Button>
          </a>
          <a href={visit}>
            <Button className="space-x-4 flex flex-1 items-center justify-center gap-2 lg:w-24">
              Visit
            </Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
};
