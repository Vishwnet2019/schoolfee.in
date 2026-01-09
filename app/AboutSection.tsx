import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 overflow-hidden bg-white relative">
      {/* Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/dot-grid.png')] opacity-30"></div>

      {/* What is Schoolfee.in */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#00468e]/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0cab47]/10 rounded-full -z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Children going to school"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00468e] mb-6">
              What is Schoolfee?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Schoolfee is a fee-support platform that allows parents to pay
              their child’s school fees on time, even when they are temporarily
              unable to arrange the full amount. Through our initiative, parents
              can repay the supported fee amount within 2 to 3 months,
              completely interest-free.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-[#00468e]">
              <p className="text-[#00468e] font-medium">
                This service is currently applicable for students from Nursery to Class 7, focusing on early and middle schooling years where consistency, routine, and emotional security are critical for a child’s development.
              </p>
            </div>
            <p className="mt-6 text-gray-600">
              To access this service, parents are required to complete a simple registration form, which includes clearly defined terms and conditions. These guidelines ensure responsible usage, transparency, and fairness for all stakeholders involved.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters & Mission */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Student studying"
                className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00468e] mb-6">
                Why Schoolfee Matters
              </h2>
              <p className="text-gray-600 mb-6">
                Education delays due to unpaid fees can have serious emotional and
                psychological impacts. We address this by solving the financial
                challenge while recognizing its emotional consequences.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Avoid stress and anxiety related to deadlines",
                  "Ensure uninterrupted schooling",
                  "Protect students’ emotional well-being",
                  "Maintain dignity during financial gaps",
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-[#0cab47] mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 italic mb-8">
                Our initiative is especially relevant for urban and semi-urban India, where middle-class families often face cash-flow challenges despite being financially responsible.
              </p>
              
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-[#00468e] mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  Schoolfee is dedicated to supporting students’ mental health and financial needs. Our mission is to empower parents by reducing the burden of short-term
                  educational expenses while ensuring children remain focused on
                  learning, growth, and well-being.
                </p>
                <p className="text-gray-600 mt-4">
                  We believe that education is not just about academics—it is deeply connected to emotional security, self-esteem, and mental health. By addressing financial challenges at the right time, we create clear pathways for education and emotional balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}