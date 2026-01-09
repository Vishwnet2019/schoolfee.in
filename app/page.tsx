import type { Metadata } from "next";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";
import AboutSection from "./AboutSection";
import Initiatives from "./Initiatives";
import Process from "./Process";
import ApplyForm from "./ApplyForm";
import WhoCanBenefit from "./WhoCanBenefit";
import JoinUs from "./JoinUs";
import SchoolFeeContent from "./SchoolContent";
import CTASection from "./Cta";

export const metadata: Metadata = {
  title: "Schoolfee – Education Without Financial Stress",
  description:
    "Schoolfee supports middle-class families with interest-free school fee solutions, ensuring education continuity and mental well-being for students from Nursery to Class 7.",
  keywords: [
    "School fees",
    "Education support",
    "Interest-free school loans",
    "Student mental health",
    "Schoolfee",
    "Community Health Mission",
  ],
  alternates: {
    canonical: "https://schoolfee.in", 
  },
  openGraph: {
    title: "Schoolfee – Education Without Financial Stress",
    description:
      "A collaborative initiative providing interest-free fee support to parents, ensuring no child's education is interrupted by financial constraints.",
    url: "https://schoolfee.in",
    siteName: "Schoolfee",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="flex flex-col w-full bg-white text-gray-800">
        <SchoolFeeContent />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
   