import { PageLayout } from "../components/PageLayout";
import { Notebook, PlusIcon, ArrowRight } from "lucide-react";
import { useState } from "react";
import Popup from "../components/popup";

const notes = [
  { title: "Meeting Notes", content: "Discuss project timeline..." },
  { title: "Ideas", content: "New features for dashboard..." },
  { title: "Personal", content: "Buy groceries..." },
];

export default function NotesPage() {
  const [selectedNote, setSelectedNote] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (note: any) => {
    setSelectedNote(note);
    setIsOpen(true);
  };

  return (
    <PageLayout title="Notes">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notes.map((note, idx) => (
          <div
            key={idx}
            onClick={() => openPopup(note)}
            className="p-5 rounded-2xl shadow-lg bg-[#1E1F22]/80 backdrop-blur-md border border-white/10
                       hover:shadow-2xl hover:border-purple-400/40 transition-all transform hover:scale-[1.03]
                       flex flex-col gap-4 cursor-pointer group relative overflow-hidden"
          >
            {/* subtle animated shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-30 transition-all duration-700 pointer-events-none animate-[shimmer_2s_infinite]"></div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-indigo-500 
                              flex items-center justify-center text-white shadow-md">
                <Notebook className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-white text-lg truncate">{note.title}</div>
                <div className="text-gray-400 text-sm truncate">{note.content}</div>
              </div>
            </div>

            <div className="flex gap-2 mt-2 relative z-10">
              <button className="flex-1 py-3 bg-red-500/70 hover:bg-red-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                Edit <ArrowRight className="w-5 h-5" />
              </button>
              <button className="flex-1 py-3 bg-gray-600/80 rounded-xl text-white hover:bg-gray-700/90 transition">
                Delete
              </button>
            </div>
          </div>
        ))}

        {/* Add New Note */}
        <div
          onClick={() => openPopup({ title: "New Note", content: "" })}
          className="p-5 rounded-2xl shadow-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 
                     backdrop-blur-md border border-dashed border-purple-400/40 
                     hover:shadow-2xl hover:border-purple-400 transition-all transform hover:scale-[1.03] 
                     flex flex-col items-center justify-center gap-3 cursor-pointer"
        >
          <div className="w-14 h-14 rounded-full bg-purple-500/30 flex items-center justify-center">
            <PlusIcon className="w-7 h-7 text-purple-300" />
          </div>
          <div className="text-white font-semibold">Add New Note</div>
        </div>
      </div>

      {/* Popup */}
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedNote && (
          <div className="w-10/12 max-w-[850px] h-[50vh] mx-auto p-2 flex flex-col justify-between space-y-6">
            
            {/* Header */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/40 to-blue-500/40 shadow-inner border border-white/10">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                <Notebook className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-white truncate">{selectedNote.title}</h2>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 gap-6 p-4 rounded-xl bg-[#1E1F22]/70 backdrop-blur-md shadow-inner border border-white/10 flex-1 overflow-y-auto">
              <p className="text-gray-400 uppercase text-xs tracking-wider">Content</p>
              <p className="text-white font-semibold text-lg">{selectedNote.content || "N/A"}</p>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="py-3 bg-red-500/70 hover:bg-red-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                Edit <ArrowRight className="w-5 h-5" />
              </button>
              <button className="py-3 bg-purple-500/70 hover:bg-purple-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                Delete <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </Popup>
    </PageLayout>
  );
}
