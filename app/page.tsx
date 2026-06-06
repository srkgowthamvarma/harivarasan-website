import Footer from "../components/Footer";
import Strengths from "../components/Strengths";
import Process from "../components/Process";
import Industries from "../components/Industries";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#003B8F] text-white min-h-screen flex items-center pt-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-green-400 font-semibold tracking-wider mb-4">
              COMPLETE TURNKEY PROJECTS
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Engineering
              <br />
              Infrastructure
              <br />
              Built For Precision
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Delivering complete turnkey solutions for Laboratories,
              Clean Rooms, HVAC, Electrical, ELV and Industrial Utility Systems.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-green-500 px-6 py-3 rounded-lg font-semibold">
                Our Services
              </button>

              <button className="border border-white px-6 py-3 rounded-lg">
                Contact Us
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
              alt="Industrial Facility"
              className="rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </section>
      {/* Who We Are */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <p className="text-green-600 font-semibold mb-3">WHO WE ARE</p>
      <h2 className="text-4xl md:text-5xl font-bold text-[#003B8F]">
        Complete Turnkey Solutions for Modern Infrastructure
      </h2>
    </div>

    <div>
      <p className="text-gray-700 text-lg leading-8">
        Harivarasan Systems Pvt Ltd is a professionally managed organization
        providing complete turnkey solutions for Laboratories, Clean Rooms,
        HVAC, Electrical, ELV, Interior and Industrial Utility Systems.
      </p>

      <p className="text-gray-700 text-lg leading-8 mt-4">
        We deliver quality, efficiency and reliability with on-time execution
        and customer satisfaction.
      </p>
    </div>
  </div>
</section>

{/* Services */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <p className="text-green-600 font-semibold mb-3">OUR SERVICES</p>
      <h2 className="text-4xl md:text-5xl font-bold text-[#003B8F]">
        Engineering Services Built for Precision
      </h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        "Laboratory Infrastructure Projects",
        "HVAC & Ventilation Systems",
        "Electrical & ELV Solutions",
        "Clean Room & Interior Works",
        "Industrial Utility Systems",
        "Testing & Commissioning",
      ].map((service) => (
        <div
          key={service}
          className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
        >
          <div className="w-14 h-14 bg-[#003B8F] rounded-xl mb-6 flex items-center justify-center text-white font-bold"></div>
          <h3 className="text-xl font-bold text-gray-900">{service}</h3>
          <p className="text-gray-600 mt-4">
            End-to-end planning, design, supply, installation and handover
            with strict quality and safety standards.
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
<Industries />
<Process />
<Strengths />
<Footer />
    </main>
  );
}