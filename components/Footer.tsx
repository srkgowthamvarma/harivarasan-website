export default function Footer() {
  return (
    <footer className="bg-[#003B8F] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-2xl font-bold">
            HARIVARASAN
          </h3>
          <p className="text-gray-300 mt-2">
            Systems Pvt Ltd
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-3">
            Contact
          </h4>

          <p>+91 93460 78856</p>
          <p>info@harivarasansystems.com</p>
        </div>

        <div>
          <h4 className="font-bold mb-3">
            Address
          </h4>

          <p>
            Lakshmi Arcade,
            Road No. 02,
            Akash Layout,
            Hyderabad,
            Telangana
          </p>
        </div>

      </div>
    </footer>
  );
}