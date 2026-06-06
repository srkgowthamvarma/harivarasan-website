import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Laboratory Infrastructure Projects",
      points: [
        "Laboratory planning and design",
        "Modular laboratory furniture",
        "Clean room solutions",
        "Gas pipeline systems",
        "Laboratory utilities",
      ],
    },
    {
      title: "HVAC & Ventilation Systems",
      points: [
        "VRF / VRV systems",
        "AHU installation",
        "Fresh air systems",
        "Ducting works",
        "Ventilation systems",
      ],
    },
    {
      title: "Electrical & ELV Solutions",
      points: [
        "HT & LT electrical works",
        "Transformer installation",
        "APFC panels",
        "CCTV & access control",
        "Fire alarm systems",
      ],
    },
    {
      title: "Clean Room & Interior Works",
      points: [
        "PUF panel partitions",
        "False ceiling works",
        "Epoxy and vinyl flooring",
        "Glass partitions",
        "Aluminium and modular works",
      ],
    },
    {
      title: "Industrial Utility Systems",
      points: [
        "Compressed air piping",
        "Chilled water piping",
        "Process utility lines",
        "Drainage systems",
        "Plumbing works",
      ],
    },
    {
      title: "Testing & Commissioning",
      points: [
        "System testing",
        "Commissioning support",
        "Documentation",
        "Final handover",
        "Service support",
      ],
    },
  ];

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Space for fixed navbar */}
      <div className="h-24"></div>

      {/* Hero Section */}
      <section className="bg-[#003B8F] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-green-400 font-bold tracking-wider text-lg">
            OUR SERVICES
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-[1.15] max-w-5xl">
            Complete Turnkey Engineering Solutions
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/95 max-w-5xl leading-9">
            We provide design, supply, installation, testing, commissioning and
            handover services for laboratories, clean rooms, HVAC, electrical
            and industrial utility systems.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-600 font-bold text-lg">
              WHAT WE OFFER
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#003B8F] mt-4 leading-[1.2]">
              Services Built for Precision
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-14 h-14 bg-[#003B8F] rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  ⚙
                </div>

                <h3 className="text-2xl font-bold text-[#003B8F] mb-5 leading-snug">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="text-gray-900 font-medium text-lg leading-7"
                    >
                      ✓ {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}