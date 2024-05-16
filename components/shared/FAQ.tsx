import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, } from "@/constants";
import { Button } from "../ui/button";

const FAQ = () => {

  return (
    <section className="section_padding">
      <div className="flex-center flex-col gap-4">
        <h2 className=" h3-bold md:h2-bold text-secondary-darkBlue whitespace-nowrap">
          Frequently Asked Questions
        </h2>
        <p className="p-medium-18 text-secondary-blue max-w-xl text-center">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>

      <div className="flex-center flex-col gap-3 max-w-xl mx-auto mt-10">
        {faqs.map((faq, index) => (
          <Accordion key = {index} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} className="">
              <AccordionTrigger className=" hover:text-primary-red transition-colors duration-150 p-medium-18  text-secondary-darkBlue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      
            <Button>More Info</Button>
      </div>




    </section>
  );
};

export default FAQ;
