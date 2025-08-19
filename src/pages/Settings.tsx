import { PageLayout } from "../components/PageLayout";

export default function Settings() {
  return (
    <PageLayout title="Settings">
      <div className="bg-[#1E1F22] rounded-xl shadow-md p-6 space-y-6 max-w-2xl">
        <div className="flex flex-col gap-2">
          <label className="text-gray-400">Username</label>
          <input
            type="text"
            placeholder="User123"
            className="rounded-lg px-4 py-2 bg-[#2A2B2F] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-400">Email</label>
          <input
            type="email"
            placeholder="user@example.com"
            className="rounded-lg px-4 py-2 bg-[#2A2B2F] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-400">Password</label>
          <input
            type="password"
            placeholder="********"
            className="rounded-lg px-4 py-2 bg-[#2A2B2F] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>
        <button className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600 transition font-semibold">
          Save Changes
        </button>
      </div>
    </PageLayout>
  );
}
