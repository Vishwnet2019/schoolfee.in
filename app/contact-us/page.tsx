import Header from "../Header";
import Footer from "../Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Wiremail: Get in Touch for Omnichannel Solutions",
  description:
    "Contact the Wiremail team for SMS, WhatsApp, RCS, and voice API support. Get pricing, demos, and technical assistance quickly.",
  keywords: [
    "Wiremail contact",
    "Omnichannel messaging support",
    "Wiremail technical support number",
    "Wiremail demo request",
    "API integration help",
  ],
  alternates: {
    canonical: "https://wiremail.in/contact.php",
  },
  openGraph: {
    title: "Contact Wiremail: Get in Touch for Omnichannel Solutions",
    description:
      "Contact the Wiremail team for SMS, WhatsApp, RCS, and voice API support.",
    url: "https://wiremail.in/contact.php",
    siteName: "Wiremail",
    images: [
      {
        url: "https://wiremail.in/images/logo-wiremail/wiremail-logo.png",
        width: 500,
        height: 500,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Wiremail: Get in Touch for Omnichannel Solutions",
    description:
      "Contact the Wiremail team for SMS, WhatsApp, RCS, and voice API support.",
    images: ["https://wiremail.in/images/logo-wiremail/wiremail-logo.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />

    {/* Hero Section */}
      <section className="relative  py-8 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#00468e] via-[#003366] to-[#002244]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#f4951d] rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#0cab47] rounded-full blur-[100px] opacity-30 animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight animate-fadeIn">
            Contact Us
          </h1>
        </div>
      </section>

      <main className="bg-gray-50">
        {/* CONTACT SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* FORM */}
              <div className="lg:col-span-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Send us a message
                </h2>
                <p className="text-gray-600 mb-10 max-w-3xl">
                  Do you have a question? Or need help choosing the right service
                  from Wiremail? Feel free to contact us.
                </p>

                <form className="space-y-6 max-w-5xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-6 py-4 text-lg border rounded-2xl focus:ring-2 focus:ring-blue-800"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-6 py-4 text-lg border rounded-2xl focus:ring-2 focus:ring-blue-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 text-lg border rounded-2xl focus:ring-2 focus:ring-blue-800"
                    />
                    <div className="flex gap-3">
                      <select className="px-4 py-4 border rounded-2xl text-lg">
                        <option>+91</option>
                      </select>
                      <input
                        type="tel"
                        placeholder="Contact Number"
                        className="flex-1 px-6 py-4 text-lg border rounded-2xl focus:ring-2 focus:ring-blue-800"
                      />
                    </div>
                  </div>

                  <textarea
                    rows={6}
                    placeholder="Enter your message"
                    className="w-full px-6 py-4 text-lg border rounded-2xl focus:ring-2 focus:ring-blue-800"
                  />

                  <button
                    type="submit"
                    className="px-12 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition"
                  >
                    Send a Message
                  </button>
                </form>
              </div>

              {/* INFO CARD */}
              <div className="lg:col-span-4">
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-3xl p-8 sticky top-28">
                  <h3 className="text-2xl font-bold mb-6">
                    Hi! We are always here to help you.
                  </h3>

                  <InfoItem
                    icon={<FaPhoneAlt />}
                    title="Hotline"
                    value="+91 9355603311"
                    href="tel:+919355603311"
                  />

                  <InfoItem
                    icon={<FaEnvelope />}
                    title="SMS / WhatsApp"
                    value="+91 9355603311"
                    href="tel:+919355603311"
                  />

                  <InfoItem
                    icon={<FaEnvelope />}
                    title="Email"
                    value="admin@wiremail.in"
                    href="mailto:info@wiremail.in"
                  />

                  <div className="border-t border-blue-700 my-6" />

                  <div className="flex gap-5">
                    <SocialIcon icon={<FaFacebookF />} href="#" />
                    <SocialIcon icon={<FaInstagram />} href="#" />
                    <SocialIcon icon={<FaTwitter />} href="#" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773461.225284647!2d61.025476562853726!3d19.690216512589846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1767866850027!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* HELPERS */
function InfoItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}) {
  return (
    <div className="bg-blue-700/50 rounded-2xl p-4 mb-4">
      <div className="flex gap-3 items-start">
        <div className="text-xl mt-1">{icon}</div>
        <div>
          <p className="text-sm text-blue-100">{title}</p>
          <a href={href} className="text-lg font-semibold">
            {value}
          </a>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-xl hover:text-blue-300 transition"
    >
      {icon}
    </a>
  );
}
