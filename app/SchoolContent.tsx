"use client";
import { useState } from 'react';
import { FaCheckCircle, FaUsers, FaBrain, FaHandHoldingHeart, FaArrowRight, FaGraduationCap, FaShieldAlt, FaHeart, FaChartLine } from 'react-icons/fa';

export default function SchoolFeeContent() {
  const [activeCard, setActiveCard] = useState(null);

  const benefits = [
    { icon: <FaShieldAlt />, title: "Avoid Stress & Anxiety", desc: "Remove immediate pressure related to school fee deadlines" },
    { icon: <FaGraduationCap />, title: "Uninterrupted Schooling", desc: "Ensure continuous education for your children" },
    { icon: <FaHeart />, title: "Emotional Well-being", desc: "Protect students' confidence and mental health" },
    { icon: <FaChartLine />, title: "Maintain Dignity", desc: "Stability during short-term financial gaps" }
  ];

  const initiatives = [
    {
      id: 1,
      icon: <FaUsers className="text-4xl" />,
      title: "Supporting Students",
      description: "We provide timely funding support for school fees so that students can continue their education without interruption.",
      detail: "Our goal is to ensure that every child feels secure, included, and confident in their school environment.",
      color: "from-[#f4951d] to-[#ffc107]"
    },
    {
      id: 2,
      icon: <FaBrain className="text-4xl" />,
      title: "Promoting Mental Health",
      description: "Financial stress within families often impacts children silently.",
      detail: "Through awareness and integration with mental health resources, we aim to create a supportive ecosystem where students and parents feel understood, supported, and guided.",
      color: "from-[#0cab47] to-[#10d95f]"
    },
    {
      id: 3,
      icon: <FaHandHoldingHeart className="text-4xl" />,
      title: "Building Futures Through Community",
      description: "We actively engage with schools, parents, and communities to strengthen access to education.",
      detail: "By working together, we ensure that financial limitations do not become barriers to a child's future.",
      color: "from-[#00468e] to-[#003366]"
    }
  ];

  const steps = [
    { number: "01", title: "Apply Online", desc: "Parents fill out a simple registration form on Schoolfee" },
    { number: "02", title: "Fee Support Provided", desc: "Approved school fees are supported on time" },
    { number: "03", title: "Easy Repayment", desc: "Parents repay within 2–3 months, interest-free" }
  ];

  const eligibility = [
    "Parents of students from Nursery to Class 7",
    "Middle-class families facing temporary financial gaps",
    "Families seeking ethical, interest-free education support",
    "Parents who value education continuity and mental well-being"
  ];

  return (
    <div className="w-full bg-gray-50">
      {/* What is Schoolfee Section */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block">
                <span className="text-sm font-bold tracking-widest text-[#0cab47] uppercase bg-green-50 px-4 py-2 rounded-full">
                  About Us
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#00468e] leading-tight">
                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4951d] to-[#ffc107]">Schoolfee?</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Schoolfee is a fee-support platform that allows parents to pay their child's school fees on time, even when they are temporarily unable to arrange the full amount.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our initiative, parents can repay the supported fee amount within <strong className="text-[#f4951d]">2 to 3 months</strong>, completely <strong className="text-[#0cab47]">interest-free</strong>, and without any extra charges.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                <p className="text-gray-800 font-medium">
                  This service is currently applicable for students from <strong className="text-[#00468e]">Nursery to Class 7</strong>, focusing on early and middle schooling years where consistency, routine, and emotional security are critical for a child's development.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f4951d] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0cab47] rounded-full opacity-20 animate-pulse"></div>
                
                <div className="relative bg-gradient-to-br from-[#00468e] to-[#003366] rounded-3xl p-8 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" 
                    alt="Happy students in classroom" 
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  />
                  
                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0cab47] to-[#10d95f] rounded-full flex items-center justify-center">
                        <FaCheckCircle className="text-3xl text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-[#00468e]">0%</p>
                        <p className="text-sm text-gray-600">Interest Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Schoolfee Matters Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block">
                <span className="text-sm font-bold tracking-widest text-[#f4951d] uppercase bg-orange-50 px-4 py-2 rounded-full">
                  Our Impact
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#00468e] leading-tight">
                Why Schoolfee <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cab47] to-[#10d95f]">Matters</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Education delays due to unpaid fees can have serious emotional and psychological impacts on children. Fear of school exclusion, embarrassment, and academic disruption can affect a child's confidence and mental health.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                At Schoolfee, we address this issue holistically—by solving the financial challenge while also recognizing its emotional consequences.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="text-3xl text-[#f4951d] mb-3">{benefit.icon}</div>
                    <h3 className="font-bold text-[#00468e] mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" 
                  alt="Student success" 
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-2xl p-4">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-[#0cab47]">100%</p>
                    <p className="text-sm text-gray-600 font-medium">Support Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#f4951d] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#0cab47] rounded-full opacity-20 animate-pulse"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80" 
                  alt="Students learning together" 
                  className="relative w-full h-auto rounded-3xl shadow-2xl object-cover z-10"
                />
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#00468e] to-[#003366] rounded-xl flex items-center justify-center">
                      <FaGraduationCap className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Focused on</p>
                      <p className="text-sm font-bold text-[#00468e]">Learning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block">
                <span className="text-sm font-bold tracking-widest text-[#00468e] uppercase bg-blue-50 px-4 py-2 rounded-full">
                  Our Purpose
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Our <span className="text-[#f4951d]">Mission</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Schoolfee is dedicated to supporting students' mental health and financial needs. Our mission is to empower parents by reducing the burden of short-term educational expenses while ensuring children remain focused on learning, growth, and well-being.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 via-orange-50 to-green-50 p-6 rounded-2xl">
                <p className="text-base text-gray-800 leading-relaxed">
                  We believe that education is not just about academics—it is deeply connected to <strong className="text-[#00468e]">emotional security</strong>, <strong className="text-[#f4951d]">self-esteem</strong>, and <strong className="text-[#0cab47]">mental health</strong>. By addressing financial challenges at the right time, we create clear pathways for education and emotional balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Section */}
      <section className="py-20 lg:py-24 bg-[#00468e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#f4951d] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0cab47] rounded-full blur-[120px] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold tracking-widest text-[#f4951d] uppercase">
                What We Do
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Our Key <span className="text-[#f4951d]">Initiatives</span>
            </h2>
            
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Three pillars that drive our commitment to educational excellence and student well-being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Supporting Students */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#f4951d]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#f4951d] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <FaUsers className="text-3xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#00468e] mb-3">Supporting Students</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide timely funding support for school fees so that students can continue their education without interruption. Our goal is to ensure that every child feels secure, included, and confident in their school environment.
                </p>
                
              </div>
            </div>

            {/* Card 2 - Promoting Mental Health */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#0cab47]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#0cab47] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <FaBrain className="text-3xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#00468e] mb-3">Promoting Mental Health</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Financial stress within families often impacts children silently. Through awareness and integration with mental health resources, we aim to create a supportive ecosystem where students and parents feel understood, supported, and guided.
                </p>
                
              </div>
            </div>

            {/* Card 3 - Building Futures */}
            <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#00468e]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-[#00468e] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <FaHandHoldingHeart className="text-3xl" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#00468e] mb-3">Building Futures Through Community</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We actively engage with schools, parents, and communities to strengthen access to education. By working together, we ensure that financial limitations do not become barriers to a child’s future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-bold tracking-widest text-[#0cab47] uppercase bg-green-50 px-4 py-2 rounded-full">
                Simple Process
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#00468e] mb-6 leading-tight">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0cab47] to-[#10d95f]">Works</span>
            </h2>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our process is transparent, responsible, and designed to protect both families and institutions
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#f4951d] via-[#0cab47] to-[#00468e] transform -translate-y-1/2 z-0"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 z-10">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-[#f4951d] to-[#ffc107] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  <div className="pt-8 text-center">
                    <h3 className="text-2xl font-bold text-[#00468e] mb-4">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" 
                  alt="Happy family" 
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                />
                
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f4951d] to-[#ffc107] rounded-full flex items-center justify-center">
                      <FaUsers className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Serving</p>
                      <p className="text-lg font-bold text-[#00468e]">Families</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block">
                <span className="text-sm font-bold tracking-widest text-[#f4951d] uppercase bg-orange-100 px-4 py-2 rounded-full">
                  Eligibility
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#00468e] leading-tight">
                Who Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4951d] to-[#ffc107]">Benefit</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Schoolfee is designed for middle-class families who value education and need temporary support to ensure their children's academic continuity.
              </p>

              <div className="space-y-4">
                {eligibility.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-[#0cab47] to-[#10d95f] rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-xl text-white" />
                    </div>
                    <p className="text-gray-800 font-medium pt-2">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <a 
                  href="/registration"
                  className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#f4951d] to-[#ffc107] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                >
                  Apply Now
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}