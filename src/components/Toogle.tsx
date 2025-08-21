// Toggle.tsx
interface ToggleProps {
  label: string;
}

export const Toggle = ({ label }: ToggleProps) => (
  <div className="flex items-center justify-between bg-[#2A2B2F] rounded-lg px-4 py-2">
    <span className="text-gray-300">{label}</span>
    <input type="checkbox" className="w-5 h-5 accent-red-500" />
  </div>
);