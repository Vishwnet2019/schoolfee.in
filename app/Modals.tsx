"use client";
import { FaTimes, FaUserGraduate, FaSchool, FaUserTie } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, icon, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fadeIn">
        <div className="bg-[#00468e] p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            {icon}
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition">
            <FaTimes />
          </button>
        </div>
        <div className="p-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}

export function StudentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Student Registration" icon={<FaUserGraduate className="text-[#f4951d] text-xl" />}>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <div className="grid grid-cols-2 gap-4">
          <input type="date" placeholder="Date of Birth" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none bg-white">
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input type="number" placeholder="Age" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none bg-white">
            <option>Class</option>
            <option>Nursery</option>
            <option>L.K.G</option>
            <option>U.K.G</option>
            {[...Array(7)].map((_, i) => <option key={i}>{i + 1}</option>)}
          </select>
        </div>
        <input type="text" placeholder="School Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <input type="text" placeholder="Parent's Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <div className="grid grid-cols-2 gap-4">
          <input type="tel" placeholder="Contact Number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        </div>
        <textarea placeholder="Residential Address" rows={2} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none"></textarea>
        <button className="w-full bg-[#0cab47] text-white font-bold py-3 rounded-lg hover:bg-green-700 transition shadow-lg">Register Student</button>
      </form>
    </Modal>
  );
}

export function SchoolModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="School Registration" icon={<FaSchool className="text-[#f4951d] text-xl" />}>
      <form className="space-y-4">
        <input type="text" placeholder="School Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <input type="text" placeholder="Principal Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <input type="text" placeholder="School Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <div className="grid grid-cols-2 gap-4">
          <input type="email" placeholder="Official Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
          <input type="tel" placeholder="Contact Number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        </div>
        <input type="text" placeholder="Affiliation ID (CBSE/ICSE/State)" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <div className="grid grid-cols-2 gap-4">
          <input type="url" placeholder="Website URL" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
          <input type="number" placeholder="Established Year" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        </div>
        <button className="w-full bg-[#00468e] text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition shadow-lg">Register School</button>
      </form>
    </Modal>
  );
}

export function ParentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Parent Registration" icon={<FaUserTie className="text-[#f4951d] text-xl" />}>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <input type="text" placeholder="Occupation" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <div className="grid grid-cols-2 gap-4">
          <input type="number" placeholder="Annual Income" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
          <input type="number" placeholder="No. of Children" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        </div>
        <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        <textarea placeholder="Residential Address" rows={2} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none"></textarea>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="City" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
          <input type="text" placeholder="State" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00468e] outline-none" />
        </div>
        <button className="w-full bg-[#f4951d] text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition shadow-lg">Register Parent</button>
      </form>
    </Modal>
  );
}