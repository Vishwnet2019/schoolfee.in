"use client";
import { useState } from 'react';
import { FaGraduationCap, FaHeart, FaUsers, FaHandshake, FaLightbulb, FaShieldAlt, FaChartLine, FaAward, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Header from '../Header';
import Footer from '../Footer';

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: "1000+", label: "Families Supported", icon: <FaUsers /> },
    { number: "50+", label: "Partner Schools", icon: <FaGraduationCap /> },
    { number: "100%", label: "Interest Free", icon: <FaHeart /> },
    { number: "24/7", label: "Support Available", icon: <FaShieldAlt /> }
  ];

  const values = [
    {
      icon: <FaHeart />,
      title: "Compassion",
      description: "We understand the challenges families face and approach every situation with empathy and care.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaShieldAlt />,
      title: "Trust",
      description: "Building transparent relationships with families and schools through honest communication.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Creating modern solutions to age-old problems in education financing.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaHandshake />,
      title: "Partnership",
      description: "Working together with parents, schools, and communities for student success.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & Director",
      image: "https://i.pravatar.cc/300?img=12",
      description: "20+ years in education and social welfare"
    },
    {
      name: "Priya Sharma",
      role: "Head of Operations",
      image: "https://i.pravatar.cc/300?img=9",
      description: "Expert in financial inclusion programs"
    },
    {
      name: "Amit Patel",
      role: "Community Relations",
      image: "https://i.pravatar.cc/300?img=13",
      description: "Building bridges between schools and families"
    },
    {
      name: "Sneha Reddy",
      role: "Mental Health Advisor",
      image: "https://i.pravatar.cc/300?img=10",
      description: "Child psychologist and counselor"
    }
  ];

  const milestones = [
    { year: "2020", event: "Schoolfee Initiative Launched", desc: "Started with 5 schools in Gurugram" },
    { year: "2021", event: "500 Families Milestone", desc: "Supported our 500th family" },
    { year: "2022", event: "Multi-City Expansion", desc: "Extended services to 5 major cities" },
    { year: "2023", event: "1000+ Success Stories", desc: "Helped over 1000 families continue education" },
    { year: "2024", event: "Mental Health Program", desc: "Launched comprehensive mental health support" }
  ];

  return (
    <div className="w-full bg-white">
        <Header />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-8 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00468e] via-[#003366] to-[#002244]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#f4951d] rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0cab47] rounded-full blur-[100px] opacity-30 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 animate-fadeIn">
            <span className="text-sm font-bold tracking-widest text-[#f4951d] uppercase bg-white/10 backdrop-blur-md px-6 py-2 rounded-full">
              About Schoolfee
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fadeIn">
            Empowering Education,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4951d] via-[#ffc107] to-[#f4951d] bg-[length:200%_auto] animate-gradient">
              One Family at a Time
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fadeIn">
            A Community Health Mission initiative dedicated to ensuring no child's education suffers due to temporary financial challenges
          </p>
        </div>
      </section>

      {/* What is Schoolfee Section */}
      {/* About Schoolfee Section */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-block">
                <span className="text-sm font-bold tracking-widest text-[#0cab47] uppercase bg-green-50 px-4 py-2 rounded-full">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-[#00468e] leading-tight">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4951d] to-[#ffc107]">Continuity in Education</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Schoolfee was created with a simple yet powerful belief — a child’s education should never be interrupted due to temporary financial challenges faced by parents.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We work closely with families and schools to provide timely fee support, ensuring students remain focused on learning while parents regain financial stability with dignity and peace of mind.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                <p className="text-gray-800 font-medium">
                  Our approach is rooted in <strong className="text-[#00468e]">empathy, responsibility, and transparency</strong> — offering structured, short-term support that is completely <strong className="text-[#0cab47]">interest-free</strong> and free from hidden charges.
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f4951d] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0cab47] rounded-full opacity-20 animate-pulse"></div>

                <div className="relative bg-gradient-to-br from-[#00468e] to-[#003366] rounded-3xl p-8 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1588075592446-4a4b79e57c36?w=800&q=80"
                    alt="Students learning together"
                    className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  />

                  {/* FLOATING CARD */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0cab47] to-[#10d95f] rounded-full flex items-center justify-center">
                        <FaCheckCircle className="text-3xl text-white" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-[#00468e]">Trusted Support</p>
                        <p className="text-sm text-gray-600">
                          For families & schools
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl text-[#f4951d] mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-[#00468e] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#00468e] mb-4">
              What Drives <span className="text-[#f4951d]">Us</span>
            </h2>
            <p className="text-xl text-gray-600">Our mission, vision, and core values</p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['mission', 'vision', 'values'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#f4951d] to-[#ffc107] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-xl">
            {activeTab === 'mission' && (
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2821/2821634.png"
                    alt="Mission"
                    className="w-full h-auto animate-pulse"
                  />
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-3xl font-bold text-[#00468e]">Our Mission</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To empower parents by reducing the burden of short-term educational expenses while ensuring children remain focused on learning, growth, and well-being. We provide interest-free, dignified financial support that protects both education continuity and mental health.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                      <FaCheckCircle className="text-[#0cab47]" />
                      <span className="text-sm font-medium">Interest-Free Support</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                      <FaCheckCircle className="text-[#0cab47]" />
                      <span className="text-sm font-medium">Mental Health Focus</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
                      <FaCheckCircle className="text-[#0cab47]" />
                      <span className="text-sm font-medium">Community Partnership</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <div className="w-full md:w-1/3">
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2920/2920235.png"
                    alt="Vision"
                    className="w-full h-auto animate-pulse"
                  />
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-3xl font-bold text-[#00468e]">Our Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A future where no child in India misses school or suffers emotional distress due to temporary financial constraints. We envision a compassionate education ecosystem where financial challenges are addressed with dignity, creating stronger families and confident students.
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <p className="text-gray-800 font-medium italic">
                      "By 2030, we aim to support 100,000+ families across India, making education truly accessible and stress-free for middle-class families."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h3 className="text-3xl font-bold text-[#00468e] text-center mb-8">Our Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4`}>
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-bold text-[#00468e] mb-2">{value.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00468e] to-[#00468e] relative overflow-hidden">
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-white mb-8">
            Be part of a movement that's changing lives, one student at a time
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/registration"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-[#f4951d] bg-white rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              Get Started Today
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-[#f4951d] rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}