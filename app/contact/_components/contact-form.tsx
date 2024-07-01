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
      <label htmlFor="email" className="text-lg mt-4 font-normal ">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="mt-2 p-2 w-full rounded border border-slate-700 bg-transparent"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-md mt-4 font-medium"
      />
      <label htmlFor="message" className="text-lg mt-4 font-normal ">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="mt-2 p-2 w-full h-40 rounded border border-slate-700  resize-none  bg-transparent"
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
