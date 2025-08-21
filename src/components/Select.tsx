
// Select.tsx
interface SelectProps {
  label: string;
  options: string[];
}

export const Select = ({ label, options }: SelectProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-gray-400">{label}</label>
    <select className="rounded-lg px-4 py-2 bg-[#2A2B2F] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition">
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);