import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 relative z-10">

          {/* Column 1: Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">Schoolfee.in</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A collaborative initiative of Community Health Mission (CHM).
              Ensuring education continuity and mental well-being for every child.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/School-Fee/61586280328441/"
                className="bg-white/10 p-2 rounded-full hover:bg-[#f4951d] transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://x.com/school__fee"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#f4951d] transition duration-300"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="https://www.instagram.com/school_fee/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#f4951d] transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/school-fee/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-[#f4951d] transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#f4951d]">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-[#f4951d] transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#0cab47] rounded-full"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-[#f4951d] transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#0cab47] rounded-full"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-[#f4951d] transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#0cab47] rounded-full"></span>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/registration" className="hover:text-[#f4951d] transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#0cab47] rounded-full"></span>
                  Apply Now
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#f4951d]">Support</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#f4951d] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#f4951d] transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#f4951d] transition">FAQ</a></li>
              <li><a href="#" className="hover:text-[#f4951d] transition">Partner with Us</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#f4951d]">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#0cab47]" />
                <span>123 Education Lane, Knowledge Park, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#0cab47]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#0cab47]" />
                <span>support@schoolfee.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center relative z-10">
          <p>&copy; {new Date().getFullYear()} Schoolfee.in. All rights reserved.</p>
          <p className="flex items-center mt-2 md:mt-0">
            Made with <FaHeart className="text-[#f4951d] mx-1" /> for Education
          </p>
        </div>
      </div>
    </footer>
  );
}
