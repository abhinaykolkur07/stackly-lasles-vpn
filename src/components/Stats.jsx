import { User, MapPin, Server } from "lucide-react";

function Stats() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-20">
      <div className="bg-white rounded-3xl shadow-sm grid md:grid-cols-3 overflow-hidden">

        {/* Users */}
        <div className="flex items-center justify-center gap-5 py-12 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
            <User className="text-[#F53838]" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0B132A]">
              90+
            </h2>

            <p className="text-[#4F5665] text-lg">
              Users
            </p>
          </div>
        </div>

        {/* Locations */}
        <div className="flex items-center justify-center gap-5 py-12 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
            <MapPin className="text-[#F53838]" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0B132A]">
              30+
            </h2>

            <p className="text-[#4F5665] text-lg">
              Locations
            </p>
          </div>
        </div>

        {/* Servers */}
        <div className="flex items-center justify-center gap-5 py-12">
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
            <Server className="text-[#F53838]" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0B132A]">
              50+
            </h2>

            <p className="text-[#4F5665] text-lg">
              Servers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;