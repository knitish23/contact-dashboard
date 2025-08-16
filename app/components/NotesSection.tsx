import { Calendar, Plus } from "lucide-react";

const notes = [
  { id: 1, title: "Meeting Notes - Q4 Planning", content: "Discussed marketing strategies for next quarter. Focus on digital campaigns and social media presence.", date: "Dec 15, 2024", priority: "high" },
  { id: 2, title: "Follow-up Tasks", content: "Send project timeline, schedule client call, review budget proposals", date: "Dec 14, 2024", priority: "medium" },
  { id: 3, title: "Client Feedback", content: "Very positive response to initial designs. Requested minor color adjustments.", date: "Dec 13, 2024", priority: "low" },
];

export default function NotesSection() {
  return (
    <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col overflow-hidden">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Notes</h3>
          <Plus className="w-5 h-5 hover:bg-white/20 p-1 rounded cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {notes.map((note) => (
          <div key={note.id} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-gray-800 text-sm">{note.title}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                note.priority === 'high' ? 'bg-red-100 text-red-700' :
                note.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                'bg-green-100 text-green-700'
              }`}>
                {note.priority}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{note.content}</p>
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="w-3 h-3 mr-1" />
              {note.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
