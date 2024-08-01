import React from "react";

import ContactForm from "../components/forms/ContactForm";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
  return (
    <>
      <section className="w-screen h-fit md:h-screen px-4 py-8 md:p-20 2xl:px-40 2xl:py-20 flex flex-col md:flex-row gap-4 md:gap-16 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-12 ">
          <h1 className="titleText text-primary-900 mt-[72px] md:mt-0">
            Contact Us
          </h1>
          <p className="bodyText text-neutral-mid">
            For any inquiries, please feel free to reach out to us.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <img src="/icons/mail-primary.svg" alt="" />
              <p className="bodyText text-neutral-mid">
                hello@jbvantage.lk <br />
                sales@jbvantage.lk
              </p>
            </div>
            <div className="flex gap-4">
              <img src="/icons/phone-primary.svg" alt="" />
              <p className="bodyText text-neutral-mid">
                +94 11 249 0900 <br />
                +94 11 249 0950 <br /> +94 11 249 0952
              </p>
            </div>
            <div className="flex gap-4">
              <img src="/icons/map-primary.svg" alt="" />
              <p className="bodyText text-neutral-mid">
                150, St. Joseph’s Street, <br />
                Colombo 14, Sri Lanka.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
