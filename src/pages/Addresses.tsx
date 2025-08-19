import { PageLayout } from "../components/PageLayout";
import { MapPinHouseIcon } from "lucide-react";

const addresses = [
  { name: "Home", details: "123 Main St, NY" },
  { name: "Office", details: "456 Work Ave, NY" },
  { name: "Warehouse", details: "789 Storage Rd, NY" },
];

export default function Addresses() {
  return (
    <PageLayout title="Addresses">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {addresses.map((addr, idx) => (
          <div
            key={idx}
            className="p-4 bg-[#1E1F22] rounded-xl shadow-md hover:bg-[#2A2B2F] transition flex flex-col gap-2"
          >
            <MapPinHouseIcon className="text-red-500 w-6 h-6" />
            <div className="font-semibold">{addr.name}</div>
            <div className="text-gray-300 text-sm truncate">{addr.details}</div>
            <button className="mt-2 px-2 py-1 bg-red-500 rounded-lg text-white text-sm hover:bg-red-600 transition">
              Edit
            </button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
