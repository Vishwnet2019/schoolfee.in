import Link from "next/link";

export default function JoinUs() {
  return (
    <section className="w-full bg-[#00468e] text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Join Us in Supporting Education and Mental Health
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
          Schoolfee is more than a financial support platform—it is a movement to protect children’s education, confidence, and mental health. By standing with parents during difficult moments, we help build stronger families, healthier students, and brighter futures.
        </p>
        <p className="text-xl font-semibold mb-10 text-[#f4951d]">
          Join us in ensuring that no child misses school due to temporary financial stress.
        </p>
        <Link href="#apply" className="inline-block bg-white text-[#00468e] font-bold py-4 px-10 rounded-full shadow-xl hover:bg-gray-100 hover:scale-105 transition duration-300 cursor-pointer">
          Together, we can make education compassionate, accessible, and uninterrupted.
        </Link>
      </div>
    </section>
  );
}