import { PageLayout } from "../components/PageLayout";
import { Notebook } from "lucide-react";

const notes = [
  { title: "Meeting Notes", content: "Discuss project timeline..." },
  { title: "Ideas", content: "New features for dashboard..." },
  { title: "Personal", content: "Buy groceries..." },
];

export default function Notes() {
  return (
    <PageLayout title="Notes">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {notes.map((note, idx) => (
          <div
            key={idx}
            className="p-4 bg-[#1E1F22] rounded-xl shadow-md hover:bg-[#2A2B2F] transition flex flex-col gap-2"
          >
            <Notebook className="text-red-500 w-6 h-6" />
            <div className="font-semibold">{note.title}</div>
            <div className="text-gray-300 text-sm truncate">{note.content}</div>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 px-2 py-1 bg-red-500 rounded-lg text-white text-sm hover:bg-red-600 transition">
                Edit
              </button>
              <button className="flex-1 px-2 py-1 bg-gray-600 rounded-lg text-white text-sm hover:bg-gray-700 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
