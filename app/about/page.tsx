import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const whyChooseUs = [
    "Complete End-to-End Execution",
    "Quality & Safety Standards",
    "Experienced Technical Team",
    "Customized Engineering Solutions",
    "Timely Project Delivery",
    "After Sales Support",
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#003B8F] text-white pt-36 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-green-400 font-semibold tracking-wide text-lg">
            ABOUT US
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.15] mt-4 max-w-5xl">
            Building Reliable Infrastructure with Precision
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/95 max-w-5xl leading-8">
            Harivarasan Systems Pvt Ltd is a professionally managed organization
            providing complete turnkey solutions for laboratories, clean rooms,
            HVAC, electrical, ELV, interiors and industrial utility systems.
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-green-600 font-bold mb-3 text-lg">WHO WE ARE</p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#003B8F] leading-[1.2]">
              Complete Turnkey Project Solutions
            </h2>
          </div>

          <div className="text-gray-900 text-xl leading-9 font-medium">
            <p>
              We deliver end-to-end infrastructure solutions from design and
              planning to supply, installation, testing, commissioning and
              final handover.
            </p>

            <p className="mt-6">
              Our focus is on quality, safety, reliability, timely execution
              and long-term customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Mission Promise */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-3xl font-bold text-[#003B8F] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-8">
              To become a trusted and leading solution provider in turnkey
              infrastructure projects.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-3xl font-bold text-[#003B8F] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-8">
              To deliver reliable, efficient and high-quality solutions with
              professional execution and long-term customer relationships.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
            <h3 className="text-3xl font-bold text-[#003B8F] mb-4">
              Our Promise
            </h3>
            <p className="text-gray-700 text-lg leading-8">
              Quality work. On-time delivery. Every time.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-600 font-bold text-lg">WHY CHOOSE US</p>

            <h2 className="text-4xl md:text-6xl font-bold text-[#003B8F] mt-4 leading-[1.2]">
              Reliable Engineering Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  ✓ {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}