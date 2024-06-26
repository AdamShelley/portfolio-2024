"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  const [state, handleSubmit] = useForm("mjvdkdql");
  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw]  flex flex-col items-start justify-center mt-8 md:w-1/2"
    >
      <label htmlFor="email" className="text-md mt-4 font-medium">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="mt-1 p-2 w-full rounded border border-gray-400 "
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-md mt-4 font-medium"
      />
      <label htmlFor="message" className="text-md mt-4 font-medium">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="mt-1 p-2 w-full h-40 rounded border border-gray-400 resize-none "
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button
        variant="ghost"
        type="submit"
        disabled={state.submitting}
        className="text-center mt-5 text-md w-full"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
