interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="flex flex-col h-full p-6 space-y-8 bg-background text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500">{title}</h1>
        {/* Optional top actions */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full px-4 py-2 bg-[#1E1F22] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <button className="bg-gradient-to-r from-red-500 to-red-700 px-4 py-2 rounded-lg hover:shadow-lg transition font-semibold">
            + Add
          </button>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
