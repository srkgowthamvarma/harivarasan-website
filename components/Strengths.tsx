export default function Strengths() {
  const strengths = [
    "Complete End-to-End Execution",
    "Quality & Safety Standards",
    "Customized Engineering Solutions",
    "Experienced Technical Team",
    "Strong Vendor Network",
    "Cost Effective Solutions",
    "Timely Project Delivery",
    "After Sales Support",
    "Customer Satisfaction",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green-600 font-semibold">
            OUR STRENGTHS
          </p>

          <h2 className="text-4xl font-bold text-[#003B8F] mt-2">
            Why Clients Choose Harivarasan
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {strengths.map((item) => (
            <div
  key={item}
  className="p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition"
>
  <h3 className="font-semibold text-lg text-gray-900">
    ✓ {item}
  </h3>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}