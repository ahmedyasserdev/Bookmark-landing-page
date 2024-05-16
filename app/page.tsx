import Features from "@/components/shared/Features";
import Hero from "@/components/shared/Hero";
import Image from "next/image";
import CTA from "../components/shared/CTA";
import FAQ from "@/components/shared/FAQ";

export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <CTA />
      <FAQ />
    </>
  );
}
