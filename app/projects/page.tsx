import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Laboratory Infrastructure Project",
      category: "Laboratory Solutions",
      location: "Hyderabad, Telangana",
      scope: "Laboratory furniture, utilities, gas piping, electrical and ventilation works.",
    },
    {
      title: "Clean Room Development",
      category: "Clean Room & Interior Works",
      location: "Pharmaceutical Facility",
      scope: "PUF partitions, clean room interiors, HVAC coordination and commissioning.",
    },
    {
      title: "HVAC System Installation",
      category: "HVAC & Ventilation",
      location: "Industrial Building",
      scope: "AHU installation, ducting, ventilation, fresh air systems and testing.",
    },
    {
      title: "Electrical & ELV Works",
      category: "Electrical Solutions",
      location: "Commercial Facility",
      scope: "Power distribution, CCTV, access control, fire alarm and networking systems.",
    },
    {
      title: "Industrial Utility Piping",
      category: "Industrial Utilities",
      location: "Manufacturing Unit",
      scope: "Compressed air piping, chilled water piping, process utility lines and plumbing.",
    },
    {
      title: "Interior Infrastructure Works",
      category: "Interior Works",
      location: "Institutional Facility",
      scope: "False ceiling, flooring, glass partitions, aluminium and modular works.",
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
            OUR PROJECTS
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-5 leading-[1.15] max-w-5xl">
            Turnkey Infrastructure Projects
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/95 max-w-5xl leading-9">
            We execute complete engineering infrastructure projects across
            laboratories, clean rooms, HVAC systems, electrical systems and
            industrial utility requirements.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-green-600 font-bold text-lg">
              PROJECT PORTFOLIO
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#003B8F] mt-4 leading-[1.2]">
              Reliable Execution Across Industries
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition"
              >
                <p className="text-green-600 font-bold mb-3">
                  {project.category}
                </p>

                <h3 className="text-2xl font-bold text-[#003B8F] leading-snug">
                  {project.title}
                </h3>

                <div className="mt-6 space-y-4 text-gray-900">
                  <p className="text-lg">
                    <span className="font-bold">Location:</span>{" "}
                    {project.location}
                  </p>

                  <p className="text-lg leading-8">
                    <span className="font-bold">Scope:</span>{" "}
                    {project.scope}
                  </p>

                  <p className="text-green-600 font-bold">
                    Status: Completed
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}