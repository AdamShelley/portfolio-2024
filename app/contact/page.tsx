import React from "react";
import ContactForm from "./_components/contact-form";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <section className="w-[85vw] lg:w-[50vw] xl:w-[45vw] 2xl:w-[30vw] mt-5 text-primary flex flex-col items-start grow  ">
      <div>
        <h2 className="text-lg font-base">Contact</h2>
        <p className="mt-6 text-lg leading-7">
          If you would like to get in contact with me about anything - please
          use the following form.
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
