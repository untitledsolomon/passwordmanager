import { PageLayout } from "../components/PageLayout";
import { CreditCard } from "lucide-react";

const cards = [
  { name: "Visa", number: "**** **** **** 1234", limit: "$5,000" },
  { name: "Mastercard", number: "**** **** **** 5678", limit: "$3,200" },
];

export default function CreditCards() {
  return (
    <PageLayout title="Credit Cards">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-4 bg-[#1E1F22] rounded-xl shadow-md hover:bg-[#2A2B2F] transition flex flex-col gap-2"
          >
            <CreditCard className="text-red-500 w-6 h-6" />
            <div className="font-semibold">{card.name}</div>
            <div className="text-gray-300">{card.number}</div>
            <div className="text-gray-400 text-sm">Limit: {card.limit}</div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
