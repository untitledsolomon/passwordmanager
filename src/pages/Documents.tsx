import { PageLayout } from "../components/PageLayout";
import { FileText, File as FileIcon, FileArchive, PlusIcon, ArrowRight } from "lucide-react";
import { useState } from "react";
import Popup from "../components/Popup";

const documents = [
  { name: "Contract.pdf", type: "PDF", size: "1.2 MB" },
  { name: "Invoice.docx", type: "DOCX", size: "340 KB" },
  { name: "Report.xlsx", type: "XLSX", size: "780 KB" },
];

export default function DocumentsPage() {
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = (doc: any) => {
    setSelectedDoc(doc);
    setIsOpen(true);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-6 h-6" />;
      case "DOCX":
        return <FileIcon className="w-6 h-6" />;
      case "XLSX":
        return <FileArchive className="w-6 h-6" />;
      default:
        return <FileIcon className="w-6 h-6" />;
    }
  };

  const getIconGradient = (type: string) => {
    switch (type) {
      case "PDF":
        return "bg-gradient-to-r from-red-500 to-indigo-500";
      case "DOCX":
        return "bg-gradient-to-r from-blue-500 to-purple-500";
      case "XLSX":
        return "bg-gradient-to-r from-green-500 to-teal-500";
      default:
        return "bg-gray-500/80";
    }
  };

  return (
    <PageLayout title="Documents">
      <div className="mb-10">
        <h2 className="text-white font-semibold text-xl mb-4">Documents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              onClick={() => openPopup(doc)}
              className="p-5 rounded-2xl shadow-lg bg-[#1E1F22]/80 backdrop-blur-md border border-white/10 
                         hover:shadow-2xl hover:border-purple-400/40 transition-all transform hover:scale-[1.03] 
                         flex flex-col gap-4 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${getIconGradient(doc.type)} flex items-center justify-center text-white shadow-md`}>
                  {getFileIcon(doc.type)}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-lg truncate">{doc.name}</div>
                  <div className="text-gray-400 text-sm">{doc.type}</div>
                </div>
              </div>
              <div className="text-gray-300 text-xs">Size: {doc.size}</div>
            </div>
          ))}

          {/* Add New Document */}
          <div
            className="p-5 rounded-2xl shadow-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 
                       backdrop-blur-md border border-dashed border-purple-400/40 
                       hover:shadow-2xl hover:border-purple-400 transition-all transform hover:scale-[1.03] 
                       flex flex-col items-center justify-center gap-3 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-purple-500/30 flex items-center justify-center">
              <PlusIcon className="w-7 h-7 text-purple-300" />
            </div>
            <div className="text-white font-semibold">Add New Document</div>
            <div className="text-gray-400 text-sm text-center">
              Upload a new document to manage
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedDoc && (
          <div className="w-10/12 max-w-[850px] h-[50vh] mx-auto p-2 flex flex-col justify-between space-y-6">
            
            {/* Header */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/40 to-blue-500/40 shadow-inner border border-white/10">
              <div className={`w-16 h-16 rounded-xl ${getIconGradient(selectedDoc.type)} flex items-center justify-center text-white shadow-md`}>
                {getFileIcon(selectedDoc.type)}
              </div>
              <h2 className="text-2xl font-bold text-white truncate">{selectedDoc.name}</h2>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-[#1E1F22]/70 backdrop-blur-md shadow-inner border border-white/10 flex-1 overflow-y-auto">
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-wider">Type</p>
                <p className="text-white font-semibold text-lg">{selectedDoc.type}</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-wider">Size</p>
                <p className="text-white font-semibold text-lg">{selectedDoc.size}</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="py-3 bg-red-500/70 hover:bg-red-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                Download <ArrowRight className="w-5 h-5" />
              </button>
              <button className="py-3 bg-purple-500/70 hover:bg-purple-600 text-white rounded-xl flex items-center justify-center gap-2 transition">
                Preview <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </Popup>
    </PageLayout>
  );
}
