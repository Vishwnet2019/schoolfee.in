"use client";
import { FaArrowRight, FaEnvelope, FaPhone, FaHandHoldingHeart } from 'react-icons/fa';

export default function CTASection() {
  const teamMembers = [
    {
      name: "ANSHUL",
      location: "Mumbai",
      image: "/users/user1.avif",
      color: "bg-cyan-400",
      position: { top: "10%", left: "15%" }
    },
    {
      name: "RAHUL",
      location: "Delhi",
      image: "/users/user2.webp",
      color: "bg-yellow-400",
      position: { top: "5%", right: "20%" }
    },
    {
      name: "ROHIT",
      location: "Bangalore",
      image: "https://img.freepik.com/premium-photo/face-young-handsome-indian-man_251136-20659.jpg",
      color: "bg-orange-400",
      position: { top: "35%", right: "15%" }
    },
    {
      name: "VIKRAM",
      location: "Chennai",
      image: "/users/user3.webp",
      color: "bg-green-400",
      position: { bottom: "25%", right: "10%" }
    },
    {
      name: "MEERA",
      location: "Pune",
      image: "/users/user4.jpg",
      color: "bg-purple-400",
      position: { bottom: "15%", left: "20%" }
    },
    {
      name: "ARJUN",
      location: "Hyderabad",
      image: "/users/user5.avif",
      color: "bg-blue-400",
      position: { top: "45%", left: "10%" }
    }
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#f4951d] rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0cab47] rounded-full blur-[150px] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-4xl font-bold text-[#00468e] leading-tight">
                <span className="text-[#f4951d]">Join Us</span> in Supporting Education and Mental Health 
              </h2>
              
              <p className="text-base text-gray-700 leading-relaxed">
                Schoolfee is more than a financial support platform—it is a movement to protect children's education, confidence, and mental health. By standing with parents during difficult moments, we help build stronger families, healthier students, and brighter futures.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="/registration"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#f4951d] to-[#ffc107] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                Get Started Today
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-bold text-[#00468e] transition-all duration-300 bg-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 border-2 border-[#00468e]"
              >
                <FaEnvelope />
                Contact Support
              </a>
            </div>
          </div>

          {/* Right Side - Team Members Network */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-lg h-[500px]">
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-28 h-28 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-[#00468e]">
                  <div className="text-center">
                    <FaHandHoldingHeart className="text-3xl text-[#00468e] mx-auto mb-1" />
                    <p className="text-xs font-bold text-[#00468e]">Schoolfee</p>
                    <p className="text-xs text-gray-600">Team</p>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              {teamMembers.map((member, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute animate-float hidden lg:block"
                    style={{
                      top: `calc(50% + ${y}px)`,
                      left: `calc(50% + ${x}px)`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {/* Connection Line */}
                    <svg 
                      className="absolute top-1/2 left-1/2 pointer-events-none"
                      style={{
                        width: Math.abs(x * 2) + 'px',
                        height: Math.abs(y * 2) + 'px',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <line
                        x1="50%"
                        y1="50%"
                        x2={x < 0 ? '100%' : '0%'}
                        y2={y < 0 ? '100%' : '0%'}
                        stroke="#00468e"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity="0.3"
                      />
                    </svg>

                    {/* Member Card */}
                    <div className="relative group cursor-pointer">
                      <div className={`w-20 h-20 ${member.color} rounded-full p-1 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover border-3 border-white"
                        />
                      </div>
                      
                      {/* Info Badge */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-full shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs font-bold text-[#00468e]">{member.name}</p>
                        <p className="text-xs text-gray-600">📍 {member.location}</p>
                      </div>

                      {/* Pulse Effect */}
                      <div className={`absolute inset-0 ${member.color} rounded-full animate-ping opacity-20`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile View - Simpler Layout */}
            <div className="lg:hidden grid grid-cols-3 gap-4 w-full max-w-md">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 ${member.color} rounded-full p-1 shadow-lg mx-auto mb-2`}>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <p className="text-xs font-bold text-[#00468e]">{member.name}</p>
                  <p className="text-xs text-gray-600">📍 {member.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}