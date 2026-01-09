import { FaUserGraduate, FaHeart, FaHandsHelping } from "react-icons/fa";

export default function Initiatives() {
  const initiatives = [
    {
      icon: <FaUserGraduate className="w-12 h-12 text-[#00468e]" />,
      title: "Supporting Students",
      desc: "We provide timely funding support for school fees so that students can continue their education without interruption. Every child deserves to feel secure and included.",
      color: "border-[#00468e]",
    },
    {
      icon: <FaHeart className="w-12 h-12 text-[#f4951d]" />,
      title: "Promoting Mental Health",
      desc: "Financial stress impacts children silently. We aim to create a supportive ecosystem where students and parents feel understood, supported, and guided.",
      color: "border-[#f4951d]",
    },
    {
      icon: <FaHandsHelping className="w-12 h-12 text-[#0cab47]" />,
      title: "Building Futures",
      desc: "We actively engage with schools, parents, and communities to strengthen access to education. By working together, we ensure that financial limitations do not become barriers to a child’s future.",
      color: "border-[#0cab47]",
    },
  ];

  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00468e] mb-4">
            Our Key Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Holistic support for education and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${item.color}`}>
              <div className="mb-6 bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}