"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-bold text-primary mb-4">
            Education Without Financial Stress
          </h1>
          <p className="text-gray-600 mb-6">
            Interest-free school fee support helping families ensure uninterrupted education and peace of mind.
          </p>
          <Link href="/registration" className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-[#f4951d] rounded-full shadow-lg hover:bg-[#d68118] hover:shadow-xl hover:-translate-y-1 group" > Get Started Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" /> </Link>
        </motion.div>
        <img src="/logo.png" alt="Schoolfee" className="w-full max-w-md mx-auto" />
      </div>
    </section>
  );
}
