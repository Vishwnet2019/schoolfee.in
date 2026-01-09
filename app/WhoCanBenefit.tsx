import { FaCheck } from "react-icons/fa";

export default function WhoCanBenefit() {
  const benefits = [
    "Parents of students from Nursery to Class 7",
    "Middle-class families facing temporary financial gaps",
    "Families seeking ethical, interest-free education support",
    "Parents who value both education continuity and mental well-being",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00468e] mb-6">
            Who Can Benefit
          </h2>
          <div className="h-1 w-20 bg-[#f4951d] mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex items-center bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                <FaCheck className="text-[#0cab47]" />
              </div>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}