import React, { useState } from "react";

interface Field {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

interface FormProps {
  title?: string;
  fields: Field[];
  onSubmit: (values: Record<string, string>) => void;
}

export default function Form({ title, fields, onSubmit }: FormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error as user types
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validate required fields
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (field.required && !values[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-2xl space-y-5 w-full"
    >
      {title && (
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
      )}

      {fields.map((field) => (
        <div key={field.name} className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              onChange={handleChange}
              className={`p-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none 
                dark:bg-[#1A1B1E]/80 border resize-none ${
                  errors[field.name] ? "border-red-500" : "border-gray-700/50"
                }
                dark:text-white transition shadow-sm w-full`}
            />
          ) : (
            <input
              name={field.name}
              type={field.type || "text"}
              placeholder={field.placeholder}
              required={field.required}
              onChange={handleChange}
              className={`p-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none 
                dark:bg-[#1A1B1E]/80 border ${
                  errors[field.name] ? "border-red-500" : "border-gray-700/50"
                }
                dark:text-white transition shadow-sm w-full`}
            />
          )}

          {/* Error message */}
          {errors[field.name] && (
            <span className="text-xs text-red-500">{errors[field.name]}</span>
          )}
        </div>
      ))}

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium shadow-sm hover:from-red-600/20 hover:to-red-700/20 transition cursor-pointer"
        >
          Submit
        </button>
      </div>
    </form>
  );
}