"use client";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function Hero() {

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#00468e] to-[#003366] py-20 lg:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      {/* Animated Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#f4951d] rounded-full blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0cab47] rounded-full blur-[100px] opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Main Content - Left Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f4951d] font-bold text-sm tracking-widest uppercase animate-fadeIn shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#0cab47] animate-ping"></span>
              Empowering Education
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm"> 
              Schoolfee -     
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4951d] via-[#ffc107] to-[#f4951d] bg-[length:200%_auto] animate-gradient">
                 Education Without Financial Stress
              </span>
            </h1>
            
            <div className="text-lg md:text-xl text-blue-100 font-light max-w-4xl mx-auto lg:mx-0 space-y-1 pt-0 mt-0">
              <p>
                Schoolfee is an organisation established as a collaborative initiative of Community Health Mission (CHM). Our platform is designed to support middle-class families who face temporary financial challenges in paying their children’s school fees on time. We believe that no child’s education or mental well-being should suffer because of short-term financial constraints.
              </p>              
            </div>

            {/* Buttons */}
            <div className="pt-0 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link 
                href="/registration"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-[#f4951d] rounded-full shadow-lg hover:bg-[#d68118] hover:shadow-xl hover:-translate-y-1 group"
              >
                Get Started Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/about-us"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:bg-white/20 hover:shadow-xl hover:-translate-y-1"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Side - Image & Features */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-12 lg:mt-0 relative">
            <div className="relative w-full max-w-lg mx-auto mb-8">
              <img 
                src="/hero-image.png" 
                alt="Schoolfee Hero" 
                className="w-full h-auto object-contain animate-float"
              />
            </div>

            {/* Feature Points - Moved to Right Bottom */}
            <div className="flex flex-wrap justify-center gap-4 text-base font-medium text-white w-full">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <FaCheckCircle className="text-[#f4951d]" /> Interest Free
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <FaCheckCircle className="text-[#0cab47]" /> Instant Support
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                <FaCheckCircle className="text-blue-400" /> Secure Process
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}