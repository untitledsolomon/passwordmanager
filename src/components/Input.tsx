
// Input.tsx
interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
}

export const Input = ({ label, placeholder, type = "text" }: InputProps) => (
  <div className="flex flex-col gap-1">
    <label className="text-gray-400">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="rounded-lg px-4 py-2 bg-[#2A2B2F] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
    />
  </div>
);