"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Contact } from "./components/types";
import {
  PhoneCall,
  Mail,
  MapPin,
  BriefcaseBusiness,
  MessageCircle,
  Download,
  Filter,
  Bell,
  Search,
  Settings,
  Users,
} from "lucide-react";
import ChatBox from "./components/ChatBox";
import NotesSection from "./components/NotesSection";

export default function AppLayout() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [activeTab, setActiveTab] = useState("Analytics");

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar onSelectContact={setSelectedContact} />

    {/* Main Content Area */}
<div className="flex-1 py-1 overflow-y-auto">
  {selectedContact ? (
    <div className="relative">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-3xl"></div>
      
      <div className="relative flex flex-col bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl text-white max-w-6xl overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Top Section */}
        <div className="relative z-10 flex mt-2">
          {/* Left side - Picture with bottom icons */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src={selectedContact.pic}
                alt={selectedContact.name}
                className="relative w-36 h-36 rounded-2xl shadow-2xl ring-4 ring-white/20 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Quick Action Icons */}
            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: PhoneCall,
                  color: "from-cyan-400 to-blue-500",
                  shadow: "shadow-cyan-500/50",
                  glow: "group-hover:shadow-cyan-400/60",
                },
                {
                  icon: MessageCircle,
                  color: "from-green-400 to-emerald-500",
                  shadow: "shadow-green-500/50",
                  glow: "group-hover:shadow-green-400/60",
                },
                {
                  icon: Mail,
                  color: "from-yellow-400 to-orange-500",
                  shadow: "shadow-yellow-500/50",
                  glow: "group-hover:shadow-yellow-400/60",
                },
                {
                  icon: BriefcaseBusiness,
                  color: "from-pink-400 to-purple-500",
                  shadow: "shadow-pink-500/50",
                  glow: "group-hover:shadow-pink-400/60",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative p-3 bg-gradient-to-br ${item.color} rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 cursor-pointer ${item.shadow} hover:shadow-2xl ${item.glow}`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <item.icon className="relative w-6 h-6 text-white drop-shadow-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Details */}
          <div className="ml-12 flex flex-col justify-between w-full min-h-[8rem]">
            {/* Name with animated underline */}
            <div className="relative">
              <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                {selectedContact.name}
              </h2>
              <div className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mb-8 animate-pulse"></div>
            </div>

            {/* Details in enhanced 2x2 grid */}
            <div className="grid grid-cols-2 gap-8 flex-grow">
              {/* Phone */}
              <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center">
                  <span className="text-sm text-gray-400 mb-3 font-medium tracking-wide uppercase">Phone</span>
                  <div className="p-3 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <PhoneCall className="w-7 h-7 text-cyan-400 drop-shadow-lg" />
                  </div>
                  <span className="text-lg font-semibold text-gray-100">(555) 123-456-789</span>
                </div>
              </div>

              {/* Email */}
              <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center">
                  <span className="text-sm text-gray-400 mb-3 font-medium tracking-wide uppercase">Email</span>
                  <div className="p-3 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-green-400 drop-shadow-lg" />
                  </div>
                  <span className="text-lg font-semibold text-gray-100 break-all">
                    {selectedContact.name.split(" ")[1].toLowerCase()}@example.com
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/30 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center">
                  <span className="text-sm text-gray-400 mb-3 font-medium tracking-wide uppercase">Location</span>
                  <div className="p-3 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-yellow-400 drop-shadow-lg" />
                  </div>
                  <span className="text-lg font-semibold text-gray-100">New York, USA</span>
                </div>
              </div>

              {/* Speciality */}
              <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-105 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center text-center">
                  <span className="text-sm text-gray-400 mb-3 font-medium tracking-wide uppercase">Speciality</span>
                  <div className="p-3 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BriefcaseBusiness className="w-7 h-7 text-pink-400 drop-shadow-lg" />
                  </div>
                  <span className="text-lg font-semibold text-gray-100">{selectedContact.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Tab Navigation */}
        <div className="relative z-10 flex gap-2 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-2 mb-8 mt-8">
          {["Analytics", "General", "Summary"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-1 py-4 px-6 text-lg font-medium rounded-xl transition-all duration-500 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 transform scale-105"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="relative z-10">{tab}</span>
              {activeTab === tab && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-xl animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Analytics Content */}
        <div className="relative z-10 space-y-10">
          {/* Average Score with premium styling */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Average Score
              </h3>
              <span className="px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg animate-bounce">
                +38.2%
              </span>
            </div>
            
            <div className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 drop-shadow-2xl">
              430
            </div>

            {/* Enhanced progress bars with animations */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              <div className="group space-y-3">
                <div className="text-sm text-gray-400 font-medium">1st Quarter</div>
                <div className="relative h-16 bg-slate-700/50 rounded-xl overflow-hidden shadow-inner">
                  <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-yellow-500 via-yellow-400 to-yellow-300 rounded-xl shadow-lg animate-[slideUp_2s_ease-out] group-hover:shadow-yellow-400/50 group-hover:shadow-xl transition-shadow duration-500"></div>
                  <div className="absolute top-2 left-2 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="group space-y-3">
                <div className="text-sm text-gray-400 font-medium">2nd Quarter</div>
                <div className="relative h-16 bg-slate-700/50 rounded-xl overflow-hidden shadow-inner">
                  <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-blue-500 via-blue-400 to-blue-300 rounded-xl shadow-lg animate-[slideUp_2s_ease-out_0.5s_both] group-hover:shadow-blue-400/50 group-hover:shadow-xl transition-shadow duration-500"></div>
                </div>
              </div>
              
              <div className="group space-y-3">
                <div className="text-sm text-gray-400 font-medium">3rd Quarter</div>
                <div className="relative h-16 bg-slate-700/50 rounded-xl overflow-hidden shadow-inner">
                  <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-purple-500 via-purple-400 to-purple-300 rounded-xl shadow-lg animate-[slideUp_2s_ease-out_1s_both] group-hover:shadow-purple-400/50 group-hover:shadow-xl transition-shadow duration-500"
                       style={{
                         backgroundImage: `repeating-linear-gradient(
                           45deg,
                           transparent,
                           transparent 4px,
                           rgba(255, 255, 255, 0.1) 4px,
                           rgba(255, 255, 255, 0.1) 8px
                         )`,
                       }}>
                  </div>
                </div>
              </div>
              
              <div className="group space-y-3">
                <div className="text-sm text-gray-400 font-medium">4th Quarter</div>
                <div className="relative h-16 bg-slate-700/50 rounded-xl overflow-hidden shadow-inner">
                  <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-pink-500 via-pink-400 to-pink-300 rounded-xl shadow-lg animate-[slideUp_2s_ease-out_1.5s_both] group-hover:shadow-pink-400/50 group-hover:shadow-xl transition-shadow duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Deal Statistics */}
          <div className="grid grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-yellow-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-sm text-gray-600 mb-3 font-semibold tracking-wider uppercase">Deal Started</div>
                <div className="text-5xl font-black text-gray-900 mb-6 drop-shadow-sm">19</div>
                <div className="relative h-3 bg-gray-200 rounded-full mb-4 overflow-hidden shadow-inner">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-3/4 shadow-lg animate-[expandWidth_2s_ease-out]"></div>
                  <div className="absolute top-0 left-0 h-full w-3/4 bg-white/30 rounded-full animate-pulse"></div>
                </div>
                <div className="text-sm text-gray-600 font-bold">↑ 12% increase</div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-red-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-sm text-gray-600 mb-3 font-semibold tracking-wider uppercase">Last Deals</div>
                <div className="text-5xl font-black text-gray-900 mb-6 drop-shadow-sm">25</div>
                <div className="relative h-3 bg-gray-200 rounded-full mb-4 overflow-hidden shadow-inner">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-400 to-pink-500 rounded-full w-2/3 shadow-lg animate-[expandWidth_2s_ease-out_0.5s_both]"></div>
                  <div className="absolute top-0 left-0 h-full w-2/3 bg-white/30 rounded-full animate-pulse delay-500"></div>
                </div>
                <div className="text-sm text-gray-600 font-bold">8.2% completion</div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-3xl p-8 text-center shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-sm text-gray-600 mb-3 font-semibold tracking-wider uppercase">Won Deals</div>
                <div className="text-5xl font-black text-gray-900 mb-6 drop-shadow-sm">24</div>
                <div className="relative h-3 bg-gray-200 rounded-full mb-4 overflow-hidden shadow-inner">
                  <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full w-5/6 shadow-lg animate-[expandWidth_2s_ease-out_1s_both]"></div>
                  <div className="absolute top-0 left-0 h-full w-5/6 bg-white/30 rounded-full animate-pulse delay-1000"></div>
                </div>
                <div className="text-sm text-gray-600 font-bold">96% success rate</div>
              </div>
            </div>
          </div>

          {/* Premium Search Bar */}
          <div className="relative bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-6 flex-1">
                <div className="relative flex-1 max-w-lg">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search contacts, deals, analytics..."
                    className="w-full pl-12 pr-6 py-4 bg-slate-900/50 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 transition-all duration-300 shadow-inner"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                <button className="group p-3 bg-slate-700/80 hover:bg-slate-600/80 rounded-xl transition-all duration-300 transform hover:scale-110 border border-white/10 hover:border-white/20">
                  <Filter className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </button>
              </div>

              <div className="flex items-center gap-3">
                {[
                  { icon: Download, color: "hover:text-blue-400", bg: "hover:bg-blue-500/20" },
                  { icon: Settings, color: "hover:text-purple-400", bg: "hover:bg-purple-500/20" },
                  { icon: Bell, color: "hover:text-pink-400", bg: "hover:bg-pink-500/20" },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className={`group relative p-3 bg-slate-700/80 rounded-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-white/10 hover:border-white/20 ${item.bg}`}
                  >
                    <item.icon className={`w-6 h-6 text-gray-300 ${item.color} transition-colors duration-300 drop-shadow-sm`} />
                    <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-float delay-1000"></div>
      </div>
    </div>
  ) : (
    <div className="relative h-96 flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10"></div>
      <div className="relative text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-400/20 to-gray-500/20 rounded-full flex items-center justify-center animate-pulse">
          <Users className="w-12 h-12 text-gray-400" />
        </div>
        <div className="text-gray-400 text-2xl font-medium">
          Select a contact to view details
        </div>
        <div className="text-gray-500 text-lg mt-2">
          Choose from your contact list to get started
        </div>
      </div>
    </div>
  )}
</div>

<style jsx>{`
  @keyframes slideUp {
    from {
      height: 0;
    }
    to {
      height: var(--final-height, 100%);
    }
  }
  
  @keyframes expandWidth {
    from {
      width: 0;
    }
    to {
      width: var(--final-width, 100%);
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`}</style>
     
      {/* Right Panel - Chat and Notes */}
      <div className="w-96 mt-6 py-2 space-y-6">
         <div className="h-1/2">
          <NotesSection />
        </div>
        <div className="h-1/2">
          <ChatBox />
        </div>
       
      </div>
    </div>
  );
}
