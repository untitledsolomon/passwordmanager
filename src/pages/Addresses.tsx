import { PageLayout } from "../components/PageLayout";
import { MapPinHouseIcon, PlusIcon, ArrowRight } from "lucide-react";
import { useState } from "react";
import Popup from "../components/popup";

const addresses = [
  { name: "Home", details: "123 Main St, NY" },
  { name: "Office", details: "456 Work Ave, NY" },
  { name: "Warehouse", details: "789 Storage Rd, NY" },
];

export default function AddressesPage() {
  const [selectedAddr, setSelectedAddr] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (addr: any) => {
    setSelectedAddr(addr);
    setIsOpen(true);
  };

  return (
    <PageLayout title="Addresses">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {addresses.map((addr, idx) => (
          <div
            key={idx}
            onClick={() => openPopup(addr)}
            className="p-5 rounded-2xl shadow-lg bg-[#1E1F22]/80 backdrop-blur-md border border-white/10 
                       hover:shadow-2xl hover:border-purple-400/40 transition-all transform hover:scale-[1.03] 
                       flex flex-col gap-4 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-indigo-500 
                              flex items-center justify-center text-white shadow-md">
                <MapPinHouseIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white text-lg truncate">{addr.name}</div>
                <div className="text-gray-400 text-sm truncate">{addr.details}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Add New Address */}
        <div
          className="p-5 rounded-2xl shadow-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 
                     backdrop-blur-md border border-dashed border-purple-400/40 
                     hover:shadow-2xl hover:border-purple-400 transition-all transform hover:scale-[1.03] 
                     flex flex-col items-center justify-center gap-3 cursor-pointer"
          onClick={() => openPopup({ name: "New Address", details: "" })}
        >
          <div className="w-14 h-14 rounded-full bg-purple-500/30 flex items-center justify-center">
            <PlusIcon className="w-7 h-7 text-purple-300" />
          </div>
          <div className="text-white font-semibold">Add New Address</div>
        </div>
      </div>

      {/* Popup */}
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedAddr && (
          <div className="w-10/12 max-w-[850px] h-[50vh] mx-auto p-2 flex flex-col justify-between space-y-6">
            
            {/* Header */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/40 to-blue-500/40 shadow-inner border border-white/10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <MapPinHouseIcon className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-white truncate">{selectedAddr.name}</h2>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 gap-6 p-4 rounded-xl bg-[#1E1F22]/70 backdrop-blur-md shadow-inner border border-white/10 flex-1 overflow-y-auto">
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-wider">Details</p>
                <p className="text-white font-semibold text-lg">{selectedAddr.details || "N/A"}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="py-3 bg-red-500/70 hover:bg-red-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                Edit <ArrowRight className="w-5 h-5" />
              </button>
              <button className="py-3 bg-purple-500/70 hover:bg-purple-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                Delete <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </Popup>
    </PageLayout>
  );
}
