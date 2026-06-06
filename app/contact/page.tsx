import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#003B8F] text-white pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-green-400 font-semibold tracking-wider">
            CONTACT US
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Let’s Discuss Your Project
          </h1>

          <p className="mt-6 text-lg text-gray-100 max-w-4xl leading-8">
            Reach out to Harivarasan Systems Pvt Ltd for turnkey laboratory,
            clean room, HVAC, electrical and industrial infrastructure solutions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-stretch">

          {/* Contact Details */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10">
            <p className="text-green-600 font-bold mb-3">
              GET IN TOUCH
            </p>

            <h2 className="text-4xl font-bold text-[#003B8F] mb-10">
              Contact Information
            </h2>

            <div className="space-y-8 text-lg">
              <div>
                <p className="font-bold text-[#003B8F] mb-1">Phone</p>
                <p className="text-gray-900 font-semibold">
                  +91 93460 78856
                </p>
              </div>

              <div>
                <p className="font-bold text-[#003B8F] mb-1">Email</p>
                <p className="text-gray-900 font-semibold">
                  info@harivarasansystems.com
                </p>
              </div>

              <div>
                <p className="font-bold text-[#003B8F] mb-1">
                  Registered Office
                </p>

                <p className="text-gray-900 font-semibold leading-9 mb-6">
                  Lakshmi Arcade, Road No. 02,<br />
                  Akash Layout, Hyderabad,<br />
                  Telangana, India.
                </p>
              </div>
            </div>

            <div className="mt-16">
  <a
    href="https://wa.me/919346078856"
    target="_blank"
    className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition"
  >
    Chat on WhatsApp
  </a>
</div>
          </div>

          {/* Contact Form */}
          <form className="bg-white rounded-2xl shadow-xl border border-gray-200 p-10">
            <p className="text-green-600 font-bold mb-3">
              SEND ENQUIRY
            </p>

            <h2 className="text-4xl font-bold text-[#003B8F] mb-10">
              Project Requirement
            </h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 font-medium focus:outline-none focus:border-[#003B8F] focus:ring-2 focus:ring-blue-100"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 font-medium focus:outline-none focus:border-[#003B8F] focus:ring-2 focus:ring-blue-100"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 font-medium focus:outline-none focus:border-[#003B8F] focus:ring-2 focus:ring-blue-100"
              />

              <select
                className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 font-medium focus:outline-none focus:border-[#003B8F] focus:ring-2 focus:ring-blue-100"
              >
                <option>Select Service Required</option>
                <option>Laboratory Infrastructure</option>
                <option>Clean Room Solutions</option>
                <option>HVAC & Ventilation</option>
                <option>Electrical & ELV</option>
                <option>Industrial Utility Systems</option>
              </select>

              <textarea
                placeholder="Tell us about your requirement"
                rows={5}
                className="w-full px-5 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 font-medium focus:outline-none focus:border-[#003B8F] focus:ring-2 focus:ring-blue-100"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#003B8F] text-white px-6 py-4 rounded-lg font-bold hover:bg-blue-900 transition"
              >
                Submit Enquiry
              </button>
            </div>
          </form>

        </div>
      </section>

      <Footer />
    </main>
  );
}