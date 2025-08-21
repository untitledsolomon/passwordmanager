import { PageLayout } from "../components/PageLayout";
import { CreditCard as CreditCardIcon, PlusIcon } from "lucide-react";

const cards = [
  { name: "Visa", number: "**** **** **** 1234", limit: "$5,000" },
  { name: "Mastercard", number: "**** **** **** 5678", limit: "$3,200" },
];

export default function CreditCards() {
  return (
    <PageLayout title="Credit Cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl shadow-lg bg-[#1E1F22]/80 backdrop-blur-md border border-white/10 
                       hover:shadow-2xl hover:border-purple-400/40 transition-all transform hover:scale-[1.03] 
                       flex flex-col gap-4 cursor-pointer"
          >
            {/* Top section */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-indigo-500 
                              flex items-center justify-center text-white shadow-md">
                <CreditCardIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white text-lg truncate">{card.name}</div>
                <div className="text-gray-300 text-sm tracking-widest">{card.number}</div>
              </div>
            </div>

            {/* Limit info */}
            <div className="flex justify-between items-center text-sm text-gray-300">
              <span>Limit:</span>
              <span className="text-white font-semibold">{card.limit}</span>
            </div>
          </div>
        ))}

        {/* Add new card */}
        <div
          className="p-5 rounded-2xl shadow-lg bg-gradient-to-r from-purple-500/30 to-indigo-500/30 
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
    </PageLayout>
  );
}
