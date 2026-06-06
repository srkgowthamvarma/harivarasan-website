export default function Industries() {
  const industries = [
    "Pharmaceutical Industries",
    "Biotechnology Laboratories",
    "Research & Development Centers",
    "Hospitals & Healthcare",
    "Educational Institutions",
    "Industrial Manufacturing Units",
    "Commercial Buildings",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold">
            INDUSTRIES WE SERVE
          </p>

          <h2 className="text-4xl font-bold text-[#003B8F] mt-2">
            Trusted Across Multiple Industries
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
  key={industry}
  className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition"
>
  <h3 className="font-semibold text-lg text-gray-900">
    {industry}
  </h3>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}