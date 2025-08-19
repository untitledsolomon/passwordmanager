import { PageLayout } from "../components/PageLayout";
import { File } from "lucide-react";

const documents = [
  { name: "Contract.pdf", type: "PDF", size: "1.2 MB" },
  { name: "Invoice.docx", type: "DOCX", size: "340 KB" },
  { name: "Report.xlsx", type: "XLSX", size: "780 KB" },
];

export default function Documents() {
  return (
    <PageLayout title="Documents">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="p-4 bg-[#1E1F22] rounded-xl shadow-md hover:bg-[#2A2B2F] transition flex flex-col gap-2"
          >
            <File className="text-red-500 w-6 h-6" />
            <div className="font-semibold truncate">{doc.name}</div>
            <div className="text-gray-400 text-sm">{doc.type}</div>
            <div className="text-gray-300 text-xs">{doc.size}</div>
            <button className="mt-2 px-2 py-1 bg-red-500 rounded-lg text-white text-sm hover:bg-red-600 transition">
              Download
            </button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
