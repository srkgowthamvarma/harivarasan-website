export default function Process() {
  const steps = [
    "Requirement Analysis",
    "Site Survey & Planning",
    "Design & Engineering",
    "Material Procurement",
    "Installation & Execution",
    "Testing & Commissioning",
    "Documentation & Handover",
    "Service & Maintenance Support",
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold">
            OUR PROJECT EXECUTION PROCESS
          </p>

          <h2 className="text-4xl font-bold text-[#003B8F] mt-2">
            From Requirement to Reliable Handover
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <p className="text-green-600 font-bold text-sm">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="text-lg font-bold text-gray-900 mt-3">
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}