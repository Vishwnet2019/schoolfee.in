"use client";
import { useState } from "react";
import Link from "next/link";
import { FaUserGraduate, FaSchool, FaUserTie, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { StudentModal, SchoolModal, ParentModal } from "./Modals";

export default function RegistrationPage() {
  const [modalType, setModalType] = useState<"student" | "school" | "parent" | null>(null);

  const cards = [
    {
      id: "student",
      title: "Student Registration",
      icon: <FaUserGraduate className="text-3xl text-[#f4951d]" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      description: "Empower your educational journey with financial freedom.",
      benefits: [
        "Interest-free fee support",
        "Flexible repayment options",
        "Scholarship opportunities",
        "Access to digital library",
        "Career counseling sessions",
        "Skill development workshops",
        "Community mentorship"
      ],
      color: "border-[#f4951d]",
      btnColor: "bg-[#f4951d] hover:bg-[#d68118]"
    },
    {
      id: "parent",
      title: "Parent Registration",
      icon: <FaUserTie className="text-3xl text-[#0cab47]" />,
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
      description: "Secure your child's future with stress-free fee management.",
      benefits: [
        "Instant fee disbursement",
        "Zero collateral required",
        "Minimal documentation",
        "Stress-free repayment plans",
        "Financial planning assistance",
        "Transparent processing",
        "24/7 Support helpline"
      ],
      color: "border-[#0cab47]",
      btnColor: "bg-[#0cab47] hover:bg-[#09963d]"
    },
    {
      id: "school",
      title: "School Registration",
      icon: <FaSchool className="text-3xl text-[#00468e]" />,
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800",
      description: "Partner with us to ensure uninterrupted education for all.",
      benefits: [
        "Timely fee collection",
        "Reduced administrative load",
        "Zero dropout due to fees",
        "Digital fee management",
        "Infrastructure support",
        "Teacher training programs",
        "Enhanced school reputation"
      ],
      color: "border-[#00468e]",
      btnColor: "bg-[#00468e] hover:bg-[#003366]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Sticky Header / Quick Access */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="text-xl font-bold text-[#003366]">Schoolfee</Link>
          <div className="flex gap-2 sm:gap-4">
            <button 
              onClick={() => setModalType("student")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4951d]/10 text-[#f4951d] font-bold hover:bg-[#f4951d] hover:text-white transition-all text-xs sm:text-sm"
            >
              <FaUserGraduate /> <span className="hidden sm:inline">Student</span>
            </button>
            <button 
              onClick={() => setModalType("parent")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0cab47]/10 text-[#0cab47] font-bold hover:bg-[#0cab47] hover:text-white transition-all text-xs sm:text-sm"
            >
              <FaUserTie /> <span className="hidden sm:inline">Parent</span>
            </button>
            <button 
              onClick={() => setModalType("school")}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00468e]/10 text-[#00468e] font-bold hover:bg-[#00468e] hover:text-white transition-all text-xs sm:text-sm"
            >
              <FaSchool /> <span className="hidden sm:inline">School</span>
            </button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative bg-[#003366] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Join Our <span className="text-[#f4951d]">Community</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Select your role below to access tailored financial solutions and educational support designed to help you succeed.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.id} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border-t-4 ${card.color}`}>
              <div className="relative h-48 overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img src={card.image} alt={card.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                  {card.icon}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{card.description}</p>
                
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Key Benefits</h4>
                  <ul className="space-y-3 mb-8">
                    {card.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                        <FaCheckCircle className={`mt-0.5 flex-shrink-0 ${card.id === 'student' ? 'text-[#f4951d]' : card.id === 'parent' ? 'text-[#0cab47]' : 'text-[#00468e]'}`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button onClick={() => setModalType(card.id as any)} className={`w-full py-3.5 rounded-xl text-white font-bold shadow-md transition-all duration-300 flex items-center justify-center gap-2 group ${card.btnColor}`}>
                  Register Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#002244] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-[#f4951d] mb-4">Schoolfee</h3>
              <p className="text-gray-400 text-sm">Empowering education through financial support and community partnership.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">support@schoolfee.com</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Schoolfee. All rights reserved.
          </div>
        </div>
      </footer>

      <StudentModal isOpen={modalType === "student"} onClose={() => setModalType(null)} />
      <SchoolModal isOpen={modalType === "school"} onClose={() => setModalType(null)} />
      <ParentModal isOpen={modalType === "parent"} onClose={() => setModalType(null)} />
    </div>
  );
}