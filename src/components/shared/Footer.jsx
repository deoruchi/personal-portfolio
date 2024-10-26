import React from "react";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardTitle } from "../ui/card";
import { formSchema } from "@/lib/Validation/validation.js";
import { Textarea } from "../ui/textarea";

export const Footer = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  function onSubmit(values) {
    if (values === undefined) {
      toast({
        title: "No values ",
        description: "Please Enter Values before Submitting",
      });
    }

    console.log(values);
    toast({
      title: "Submitted",
      description: "Submitted!!",
    });
  }
  return (
    <section className="text-white p-6 ml-4 mr-4 rounded-lg border-2 border-white flex flex-row flex-wrap justify-center gap-4 md:justify-between">
      <div>
        <Card className="bg-black border-2 border-white text-white w-fit p-6">
          <CardTitle>Contact Me Through</CardTitle>
          <CardContent className="p-0">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" mt-4 flex flex-col items-center gap-2 md:flex-row "
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here."
                          id="message"
                          {...field}
                          className="m-0"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <div className="self-end">
        <p>Made by Ruchi with ✨</p>
      </div>
      <div className="self-end text-center md:text-left font-bold">
        Follow me on:
        <div className="text-white flex flex-row gap-4 justify-center  ">
          <a href="https://www.instagram.com/rufflessia_remi/" alt="instalogo">
            <InstagramLogoIcon width={24} height={24} />
          </a>
          <a href="https://www.linkedin.com/in/ruchi-deo/" alt="linkedin">
            <LinkedInLogoIcon width={24} height={24} />
          </a>
          <a href="https://x.com/simple_smile9" alt="twitter">
            <TwitterLogoIcon width={24} height={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
