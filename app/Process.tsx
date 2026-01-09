import { FaFileAlt, FaSearch, FaHandHoldingUsd, FaUndo } from "react-icons/fa";

export default function Process() {
  const steps = [
    {
      icon: <FaFileAlt />,
      title: "Apply Online",
      desc: "Parents fill out a simple registration form on Schoolfee.",
    },
    {
      icon: <FaSearch />,
      title: "Review & Approval",
      desc: "Applications are reviewed as per eligibility criteria.",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Fee Support",
      desc: "Approved school fees are paid directly on time.",
    },
    {
      icon: <FaUndo />,
      title: "Easy Repayment",
      desc: "Parents repay the amount within 2–3 months, without interest or extra charges.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-[#00468e] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-blue-200 text-lg">Our process is transparent, responsible, and designed to protect both families and institutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition duration-300 h-full text-center">
                <div className="text-4xl mb-6 text-[#f4951d] group-hover:text-white transition-colors duration-300 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}