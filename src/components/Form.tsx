import React, { useState } from "react"

interface FormField {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
}

interface FormProps {
    title?: string;
    fields: FormField[];
    onSubmit: (values: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = ({title, fields, onSubmit}) => {
    const [values, setValues] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                    <label
                        htmlFor={field.name}
                        className="text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                        {field.label}
                    </label>
                    
                    {field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                            className="p-3 rounded-lg focus:ring-2 focus:ring-red-500 outline-none dark:bg-[#1A1B1E]/80 border border-gray-700/50 dark:text-white"
                        />
                    ) : (
                        <input
                            name={field.name}
                            type={field.type || "text"}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                            className="p-3 rounded-lg focus:ring-2 foucs:ring-red-500 outline-none dark:bg-[#1A1B1E]/80 border border-gray-700/50
                            dark:text-white focus:ring-red-500 transition shadow-sm w-full"
                        />
                    )}
                </div>
            ))}

            <div className="flex justify-end">
                <button
                type="submit"
                className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium shadow-sm hover:from-red-600/20 hover:to-red-700/20 transition cursor-pointer"
            >
                {"Submit"}
            </button>
            </div>
        </form>
    );
};

export default Form