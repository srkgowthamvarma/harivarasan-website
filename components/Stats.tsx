export default function Stats() {
  const stats = [
    { value: "50+", title: "Projects Completed" },
    { value: "20+", title: "Technical Experts" },
    { value: "7+", title: "Industries Served" },
    { value: "100%", title: "Client Satisfaction" },
  ];

  return (
    <section className="bg-[#003B8F] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.title}>
              <h2 className="text-5xl font-bold text-green-400">
                {item.value}
              </h2>
              <p className="mt-3 text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}