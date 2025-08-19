import { PageLayout } from "../components/PageLayout";
import { Lock } from "lucide-react";

const allEntries = Array(20).fill({
  name: "Spotify",
  email: "thisisatestemail@gmail.com",
  icon: <Lock />,
});

export default function AllEntries() {
  return (
    <PageLayout title="All Entries">
      <div className="bg-[#1E1F22] rounded-xl shadow-md p-4 overflow-x-auto">
        <table className="w-full text-left table-auto border-separate border-spacing-y-1">
          <thead>
            <tr className="text-gray-400 uppercase text-sm">
              <th className="px-4 py-2">Service</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Icon</th>
            </tr>
          </thead>
          <tbody>
            {allEntries.map((entry, idx) => (
              <tr
                key={idx}
                className="bg-[#2A2B2F] rounded-xl hover:bg-[#3A3B3F] transition-colors cursor-pointer"
              >
                <td className="px-4 py-3 font-medium">{entry.name}</td>
                <td className="px-4 py-3 text-gray-300 truncate">{entry.email}</td>
                <td className="px-4 py-3">{entry.icon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  );
}
