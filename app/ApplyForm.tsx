"use client";
import { FaPaperPlane } from "react-icons/fa";

export default function ApplyForm() {
  return (
    <section id="apply" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 py-6 px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              Apply for Fee Support
            </h2>
            <p className="text-blue-100 text-center mt-2">
              Complete the form below to start your application.
            </p>
          </div>
          
          <form className="p-8 md:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student's Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Jane Doe" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="St. Mary's School" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Class / Grade</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white">
                  <option>Select Class</option>
                  <option>Nursery</option>
                  <option>KG</option>
                  {[1,2,3,4,5,6,7].map(n => <option key={n}>Class {n}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fee Amount Required (₹)</label>
              <input type="number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="e.g. 15000" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message (Optional)</label>
              <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="Tell us about your situation..."></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg flex items-center justify-center gap-2">
                <FaPaperPlane /> Submit Application
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting, you agree to our terms and conditions. Your data is secure with us.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}