import { MoreVertical, Send, Video } from "lucide-react";
import { useState } from "react";
const chatMessages = [
  { id: 1, sender: "Sarah Johnson", message: "Hey! How's the project coming along?", time: "10:30 AM", isMe: false },
  { id: 2, sender: "Me", message: "Great! Just finished the wireframes. Want to review them?", time: "10:32 AM", isMe: true },
  { id: 3, sender: "Sarah Johnson", message: "Perfect! I'll take a look in 10 minutes.", time: "10:33 AM", isMe: false },
  { id: 4, sender: "Me", message: "Sounds good. I'll send them over now.", time: "10:35 AM", isMe: true },
];

export default function ChatBox() {
  const [message, setMessage] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-xl h-full flex flex-col overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">Chat</h3>
          <div className="flex gap-2">
            <Video className="w-5 h-5 hover:bg-white/20 p-1 rounded cursor-pointer transition-colors" />
            <MoreVertical className="w-5 h-5 hover:bg-white/20 p-1 rounded cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs rounded-2xl p-3 ${
              msg.isMe 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-sm' 
                : 'bg-gray-100 text-gray-800 rounded-bl-sm'
            } shadow-md transform transition-all hover:scale-105`}>
              <p className="text-sm">{msg.message}</p>
              <p className={`text-xs mt-1 ${msg.isMe ? 'text-blue-100' : 'text-gray-500'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t bg-gray-50">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}