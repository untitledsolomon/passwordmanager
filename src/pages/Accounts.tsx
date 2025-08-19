import { PageLayout } from "../components/PageLayout";
import { MapPinHouseIcon } from "lucide-react";

const accounts = Array(8).fill({
  name: "Bank Account",
  balance: "$2,340",
  status: "Active",
});

export default function Accounts() {
  return (
    <PageLayout title="Accounts">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {accounts.map((acc, idx) => (
          <div
            key={idx}
            className="p-4 bg-[#1E1F22] rounded-xl shadow-md hover:bg-[#2A2B2F] transition flex flex-col gap-2"
          >
            <MapPinHouseIcon className="text-red-500 w-6 h-6" />
            <div className="font-semibold">{acc.name}</div>
            <div className="text-gray-300">{acc.balance}</div>
            <div className={`text-sm ${acc.status === "Active" ? "text-green-400" : "text-yellow-400"}`}>
              {acc.status}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
