// ConnectApp.tsx
interface ConnectAppProps {
  name: string;
}

export const ConnectApp = ({ name }: ConnectAppProps) => (
  <div className="flex items-center justify-between bg-[#2A2B2F] rounded-lg px-4 py-2">
    <span className="text-white">{name}</span>
    <button className="px-2 py-1 bg-red-500 rounded-lg text-white text-sm hover:bg-red-600 transition">
      Connect
    </button>
  </div>
);