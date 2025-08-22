import { PageLayout } from "../components/PageLayout";
import { MapPinHouseIcon, CreditCard as CreditCardIcon, PlusIcon, ArrowRight } from "lucide-react";
import { useState } from "react";
import Popup from "../components/Popup";

const accounts = [
  { name: "Main Checking", balance: "$2,340", status: "Active", type: "Checking", lastTransaction: "Aug 18, 2025" },
  { name: "Savings Account", balance: "$5,780", status: "Active", type: "Savings", lastTransaction: "Aug 16, 2025" },
  { name: "Business Account", balance: "$12,400", status: "Active", type: "Business", lastTransaction: "Aug 15, 2025" },
  { name: "Dormant Account", balance: "$150", status: "Inactive", type: "Checking", lastTransaction: "May 5, 2025" },
];

const creditCards = [
  { name: "Visa", number: "**** **** **** 1234", limit: "$5,000" },
  { name: "Mastercard", number: "**** **** **** 5678", limit: "$3,200" },
];

export default function AccountsPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (item: any) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  return (
    <PageLayout title="Accounts">
      {/* Bank Accounts */}
      <div className="mb-10">
        <h2 className="text-white font-semibold text-xl mb-4">Bank Accounts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              onClick={() => openPopup(acc)}
              className="p-5 rounded-2xl shadow-lg bg-[#1E1F22]/80 backdrop-blur-md border border-white/10 
                         hover:shadow-2xl hover:border-purple-400/40 transition-all transform hover:scale-[1.03] 
                         flex flex-col gap-4 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-indigo-500 
                                flex items-center justify-center text-white shadow-md">
                  <MapPinHouseIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-lg truncate">{acc.name}</div>
                  <div className="text-gray-400 text-sm">{acc.balance}</div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-300">
                <span className="capitalize">{acc.type}</span>
                <span className="text-gray-400">Last: {acc.lastTransaction}</span>
              </div>

              <div
                className={`text-xs font-medium w-max px-3 py-1 rounded-full 
                  ${acc.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
              >
                {acc.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Credit Cards */}
      <div className="mb-10">
        <h2 className="text-white font-semibold text-xl mb-4">Credit Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {creditCards.map((card, idx) => (
            <div
              key={idx}
              onClick={() => openPopup(card)}
              className="p-5 rounded-2xl shadow-lg bg-[#1E1F22]/80 backdrop-blur-md border border-white/10 
                         hover:shadow-2xl hover:border-blue-400/40 transition-all transform hover:scale-[1.03] 
                         flex flex-col gap-4 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 
                                flex items-center justify-center text-white shadow-md">
                  <CreditCardIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-lg truncate">{card.name}</div>
                  <div className="text-gray-300 text-sm tracking-widest truncate">{card.number}</div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-300">
                <span>Limit:</span>
                <span className="text-white font-semibold">{card.limit}</span>
              </div>
            </div>
          ))}

          {/* Add New Card */}
          <div
            className="p-5 rounded-2xl shadow-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 
                       backdrop-blur-md border border-dashed border-purple-400/40 
                       hover:shadow-2xl hover:border-purple-400 transition-all transform hover:scale-[1.03] 
                       flex flex-col items-center justify-center gap-3 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-purple-500/30 flex items-center justify-center">
              <PlusIcon className="w-7 h-7 text-purple-300" />
            </div>
            <div className="text-white font-semibold">Add New Card</div>
            <div className="text-gray-400 text-sm text-center">
              Add a new credit card to manage your payments
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedItem && (
          <div className="w-10/12 max-w-[850px] h-[50vh] mx-auto p-2 flex flex-col justify-between space-y-6">
            
            {/* Header */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/40 to-blue-500/40 shadow-inner border border-white/10">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white shadow-md">
                {selectedItem.balance ? (
                  <MapPinHouseIcon className="w-7 h-7" />
                ) : (
                  <CreditCardIcon className="w-7 h-7" />
                )}
              </div>
              <h2 className="text-2xl font-bold text-white truncate">{selectedItem.name}</h2>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-[#1E1F22]/70 backdrop-blur-md shadow-inner border border-white/10 flex-1 overflow-y-auto">
              {selectedItem.balance && (
                <>
                  <div>
                    <p className="text-gray-400 uppercase text-xs tracking-wider">Balance</p>
                    <p className="text-white font-semibold text-lg">{selectedItem.balance}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase text-xs tracking-wider">Type</p>
                    <p className="text-white font-semibold text-lg">{selectedItem.type}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-gray-400 uppercase text-xs tracking-wider">Last Transaction</p>
                    <p className="text-white font-semibold text-lg">{selectedItem.lastTransaction}</p>
                  </div>
                </>
              )}
              {selectedItem.number && (
                <>
                  <div>
                    <p className="text-gray-400 uppercase text-xs tracking-wider">Number</p>
                    <p className="text-white font-semibold text-lg">{selectedItem.number}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase text-xs tracking-wider">Limit</p>
                    <p className="text-white font-semibold text-lg">{selectedItem.limit}</p>
                  </div>
                </>
              )}
            </div>

            {/* Quick Actions */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedItem.balance && (
                <>
                  <button className="py-3 bg-red-500/70 hover:bg-red-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                    Transfer <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="py-3 bg-purple-500/70 hover:bg-purple-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                    Deposit <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}
              {selectedItem.number && (
                <>
                  <button className="py-3 bg-blue-500/70 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                    Pay <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="py-3 bg-purple-500/70 hover:bg-purple-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                    View Statement <ArrowRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </Popup>
    </PageLayout>
  );
}
