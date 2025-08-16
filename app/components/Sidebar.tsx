"use client";

import { useState } from "react";
import {
  ChevronRight,
  BookLock,
  Radar,
  Users,
  GitCompareArrows,
  BarChart3,
  User,
  PhoneCall,
  Mail,
  Sparkles,
  Star,
  Clock,
  Zap,
  Search,
  Settings,
  Bell,
  Crown,
  Wallet,
} from "lucide-react";

interface Contact {
  pic: string;
  name: string;
  title: string;
}

type SidebarItem = string | Contact;

interface SidebarSection {
  [key: string]: SidebarItem[];
}

interface SidebarProps {
  onSelectContact: (contact: Contact) => void;
}

type SidebarContent = string[] | SidebarSection;

const sidebarContent: Record<string, SidebarContent> = {
  dashboard: ["Overview", "Monitoring", "Logs"],
  "all-contacts": {
    "New Contacts": [
      {
        pic: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Gregory Clark",
        title: "Manager",
      },
      {
        pic: "https://randomuser.me/api/portraits/men/6.jpg",
        name: "George Allen",
        title: "Broker",
      },
      {
        pic: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Megan Brooks",
        title: "Analyst",
      },
      {
        pic: "https://randomuser.me/api/portraits/men/7.jpg",
        name: "Logan Smith",
        title: "Manager",
      },
      {
        pic: "https://randomuser.me/api/portraits/women/8.jpg",
        name: "Abigail Green",
        title: "Investor",
      },
      {
        pic: "https://randomuser.me/api/portraits/men/9.jpg",
        name: "Morgan Lee",
        title: "Investor",
      },
      {
        pic: "https://randomuser.me/api/portraits/women/6.jpg",
        name: "Regina Adams",
        title: "Assistant",
      },
      {
        pic: "https://randomuser.me/api/portraits/women/7.jpg",
        name: "Angela Grant",
        title: "Appraiser",
      },
    ],
    "Favorite Contacts": [
      {
        pic: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Douglas Brown",
        title: "Manager",
      },
      {
        pic: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Edgar White",
        title: "Investor",
      },
      {
        pic: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Emma Johnson",
        title: "Investor",
      },
      {
        pic: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Liam Wright",
        title: "Assistant",
      },
    ],
  },
  roles: ["Admin", "Editor", "Viewer"],
  "access-control": ["Permissions", "Audit Logs"],
  activity: ["Recent Activities", "System Events"],
  analytics: ["Traffic", "Reports", "Conversion"],
  support: ["Tickets", "Live Chat", "FAQs"],
  messages: ["Inbox", "Sent", "Spam"],
};

type SidebarKey = keyof typeof sidebarContent;

export default function Sidebar({ onSelectContact }: SidebarProps) {
  const [active, setActive] = useState<SidebarKey>("dashboard");
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState("https://randomuser.me/api/portraits/men/3.jpg");
  const [selectedName, setSelectedName] = useState("John Doe");
  const [selectedTitle, setSelectedTitle] = useState("Administrator");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleContactSelect = (contact: Contact) => {
    setSelectedAvatar(contact.pic);
    setSelectedName(contact.name);
    setSelectedTitle(contact.title);
    onSelectContact(contact);
  };

  const getActiveIconName = () => {
    const activeIcon = icons.find((i) => i.id === active);
    return activeIcon ? activeIcon.label : "Dashboard";
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const icons = [
    {
      id: "dashboard",
      icon: <Radar size={24} />,
      label: "Dashboard",
      color: "from-violet-600 via-purple-600 to-indigo-600",
      bgColor: "bg-violet-500/10",
      accent: "border-violet-400/20",
    },
    {
      id: "all-contacts",
      icon: <Users size={24} />,
      label: "All Contacts",
      color: "from-blue-600 via-cyan-600 to-teal-600",
      bgColor: "bg-blue-500/10",
      accent: "border-blue-400/20",
    },
    {
      id: "roles",
      icon: <User size={24} />,
      label: "Roles",
      color: "from-emerald-600 via-green-600 to-teal-600",
      bgColor: "bg-emerald-500/10",
      accent: "border-emerald-400/20",
    },
    {
      id: "access-control",
      icon: <BookLock size={24} />,
      label: "Access Control",
      color: "from-amber-600 via-orange-600 to-red-600",
      bgColor: "bg-amber-500/10",
      accent: "border-amber-400/20",
    },
    {
      id: "activity",
      icon: <GitCompareArrows size={24} />,
      label: "Activity Logs",
      color: "from-rose-600 via-pink-600 to-purple-600",
      bgColor: "bg-rose-500/10",
      accent: "border-rose-400/20",
    },
    {
      id: "analytics",
      icon: <BarChart3 size={24} />,
      label: "Analytics",
      color: "from-indigo-600 via-blue-600 to-cyan-600",
      bgColor: "bg-indigo-500/10",
      accent: "border-indigo-400/20",
    },
    {
      id: "support",
      icon: <PhoneCall size={24} />,
      label: "Support",
      color: "from-green-600 via-emerald-600 to-teal-600",
      bgColor: "bg-green-500/10",
      accent: "border-green-400/20",
    },
    {
      id: "messages",
      icon: <Mail size={24} />,
      label: "Messages",
      color: "from-purple-600 via-violet-600 to-indigo-600",
      bgColor: "bg-purple-500/10",
      accent: "border-purple-400/20",
    },
  ] as const;

  return (
    <div className="relative">
      {/* Premium Top Header Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-16 bg-gradient-to-r from-slate-950/95 via-slate-900/98 to-slate-950/95 backdrop-blur-xl border-b border-slate-700/30">
        {/* Ambient glow for header */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(236,72,153,0.1),transparent_60%)]" />
        
        <div className="relative h-full flex items-center justify-between px-6">
          {/* Left side - Dynamic Brand based on active section */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                <div className="absolute inset-0">
                  <div className="absolute top-1 right-1 w-1 h-1 bg-white/60 rounded-full animate-ping" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/80 rounded-full animate-ping animation-delay-300" />
                </div>
                <div className="relative z-10 text-white drop-shadow-lg">
                  {icons.find((i) => i.id === active)?.icon}
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles size={14} className="text-yellow-400 animate-spin" />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent">
                  {getActiveIconName()}
                </h1>
                <p className="text-sm text-gray-400 font-medium">Professional Dashboard</p>
              </div>
            </div>
          </div>

          {/* Center - Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center">
                <Search size={18} className="absolute left-4 text-gray-400 group-focus-within:text-violet-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search contacts, projects, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-800/60 hover:bg-slate-800/80 focus:bg-slate-800/90 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 focus:border-violet-400/50 rounded-xl text-gray-100 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-400/20"
                />
              </div>
            </div>
          </div>

          {/* Right side - Actions and Profile */}
          <div className="flex items-center gap-4">
            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button className="relative p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 group">
                <Bell size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse" />
              </button>
              
              <button className="relative p-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/80 transition-all duration-300 border border-slate-600/30 hover:border-slate-500/50 group">
                <Settings size={18} className="text-gray-400 group-hover:text-white transition-colors group-hover:rotate-90 duration-500" />
              </button>
            </div>

            {/* Enhanced Profile Section with Dropdown */}
            <div className="relative">
              <div 
                className="flex items-center gap-4 p-2 pr-5 rounded-2xl bg-gradient-to-r from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm border border-slate-600/40 hover:border-violet-400/50 transition-all duration-300 cursor-pointer group overflow-hidden"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                style={{
                  background: 'linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(51,65,85,0.6) 50%, rgba(30,41,59,0.8) 100%)',
                  boxShadow: '0 10px 40px -10px rgba(0,0,0,0.4)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <img
                    src={selectedAvatar}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover ring-3 ring-violet-500/40 group-hover:ring-violet-400/70 transition-all duration-500 shadow-xl"
                    style={{ boxShadow: '0 8px 32px -8px rgba(139, 92, 246, 0.3)' }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-slate-800 shadow-lg" />
                  <div className="absolute -top-1 -left-1">
                    <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse opacity-80" />
                  </div>
                </div>
                
                <div className="flex flex-col relative z-10">
                  <span className="text-base font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                    {selectedName}
                  </span>
                  <span className="text-sm text-violet-300 font-medium">
                    {selectedTitle}
                  </span>
                </div>
                
                <div 
                  className="text-gray-400 group-hover:text-violet-300 transition-all duration-500 relative z-10"
                  style={{
                    transform: showProfileDropdown ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <ChevronRight size={18} />
                </div>
              </div>

              {/* Premium Profile Dropdown */}
              {showProfileDropdown && (
                <div className="absolute top-20 right-0 w-80 bg-gradient-to-br from-slate-900/95 via-slate-800/98 to-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/50 shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-2 duration-300">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.1),transparent_60%)]" />
                  
                  {/* Profile Header */}
                  <div className="p-4 border-b border-slate-700/50 relative">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={selectedAvatar}
                          alt="Profile"
                          className="w-16 h-16 rounded-2xl object-cover ring-2 ring-violet-500/50 shadow-xl"
                        />
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-3 border-slate-800 shadow-lg" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white">{selectedName}</h3>
                        <p className="text-violet-300 font-medium">{selectedTitle}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <span className="text-xs text-gray-400">Online</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    {[
                      { icon: <User size={16} />, label: "View Profile", color: "from-blue-500 to-cyan-500" },
                      { icon: <Settings size={16} />, label: "Account Settings", color: "from-gray-500 to-gray-600" },
                      { icon: <Crown size={16} />, label: "Premium Features", color: "from-amber-500 to-orange-500" },
                      { icon: <Bell size={16} />, label: "Notifications", color: "from-purple-500 to-pink-500" },
                    ].map((item, idx) => (
                      <div
                        key={item.label}
                        className="group/item flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800/60 cursor-pointer transition-all duration-300 border border-transparent hover:border-slate-600/50"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-20 group-hover/item:bg-opacity-30 transition-all duration-300`}>
                          <div className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                            {item.icon}
                          </div>
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white font-medium transition-colors duration-300">
                          {item.label}
                        </span>
                        <ChevronRight size={14} className="ml-auto text-gray-500 group-hover/item:text-gray-300 opacity-0 group-hover/item:opacity-100 transition-all duration-300" />
                      </div>
                    ))}
                  </div>

                  {/* Logout */}
                  <div className="p-2 border-t border-slate-700/50">
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 cursor-pointer transition-all duration-300 border border-transparent hover:border-red-500/30 group/logout">
                      <div className="p-2 rounded-lg bg-red-500/20 group-hover/logout:bg-red-500/30 transition-all duration-300">
                        <Mail size={16} className="text-red-400 group-hover/logout:text-red-300 transition-colors duration-300" />
                      </div>
                      <span className="text-red-400 group-hover/logout:text-red-300 font-medium transition-colors duration-300">
                        Sign Out
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar with top margin to account for header */}
      <div className="pt-10">
        {/* Ambient glow background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/98 to-slate-950/95 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,119,198,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.1),transparent_60%)]" />
        
        <aside
          className={`relative bg-gradient-to-br from-slate-950/80 via-slate-900/90 to-slate-950/80 backdrop-blur-xl text-gray-100 h-screen shadow-2xl flex transition-all duration-700 ease-out border-r border-slate-700/30 ${
            isCollapsed ? "w-20" : "w-[480px]"
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,41,59,0.9) 50%, rgba(15,23,42,0.95) 100%)',
            backdropFilter: 'blur(20px)',
            borderRight: '1px solid rgba(148,163,184,0.1)',
            height: 'calc(100vh - 4rem)'
          }}
        >
          {/* Left Icons Panel */}
          <div className="w-20 p-4 flex flex-col items-center justify-between relative z-10">

            <div className="space-y-4 relative">
              {icons.map(({ id, icon, label, color, bgColor, accent }, index) => (
                <div
                  key={id}
                  className="relative group"
                  onMouseEnter={() => setHoveredIcon(id)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Floating tooltip */}
                  {hoveredIcon === id && isCollapsed && (
                    <div className="absolute left-20 top-1/2 -translate-y-1/2 z-50 animate-in slide-in-from-left-2 duration-300">
                      <div className="bg-slate-900/95 backdrop-blur-xl text-white px-4 py-2 rounded-lg shadow-2xl border border-slate-700/50 whitespace-nowrap">
                        <div className="text-sm font-medium ">{label}</div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-900 rotate-45 border-l border-b border-slate-700/50" />
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setActive(id as SidebarKey)}
                    className={`relative p-4 rounded-2xl transition-all duration-500 group/btn overflow-hidden ${
                      active === id
                        ? `bg-gradient-to-br ${color} shadow-2xl shadow-current/25 scale-110`
                        : `${bgColor} hover:bg-slate-800/60 border ${accent} hover:border-slate-600/50 hover:scale-105`
                    }`}
                    style={{
                      transform: active === id ? 'scale(1.1) translateY(-2px)' : hoveredIcon === id ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: active === id 
                        ? '0 20px 40px -12px rgba(0,0,0,0.4), 0 0 30px rgba(147,51,234,0.3)'
                        : '0 8px 25px -5px rgba(0,0,0,0.2)'
                    }}
                  >
                    {/* Animated background particles */}
                    {active === id && (
                      <>
                        <div className="absolute inset-0 animate-pulse">
                          <div className="absolute top-2 right-2 w-1 h-1 bg-white/40 rounded-full animate-ping" />
                          <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/60 rounded-full animate-ping animation-delay-300" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />
                      </>
                    )}

                    <div
                      className={`relative z-10 transition-all duration-300 ${
                        active === id
                          ? "text-white drop-shadow-lg"
                          : "text-gray-400 group-hover/btn:text-gray-100"
                      }`}
                    >
                      {icon}
                    </div>

                    {/* Active indicator */}
                    {active === id && (
                      <div 
                        className="absolute -right-1 top-1/2 w-1.5 h-12 bg-gradient-to-b from-white via-white/80 to-white/60 rounded-full shadow-lg animate-pulse"
                        style={{ transform: "translateY(-50%)" }}
                      />
                    )}

                    {/* Sparkle effect */}
                    {(hoveredIcon === id || active === id) && (
                      <div className="absolute -top-1 -right-1">
                        <Sparkles size={12} className="text-yellow-400 animate-spin" />
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Enhanced toggle button */}
            <button
              onClick={toggleSidebar}
              className="relative p-4 rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-700/80 hover:from-slate-700/90 hover:to-slate-600/90 transition-all duration-500 shadow-xl border border-slate-600/30 hover:border-slate-500/50 group overflow-hidden backdrop-blur-sm"
              style={{
                boxShadow: '0 10px 30px -5px rgba(0,0,0,0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div
                className="relative z-10 text-gray-300 group-hover:text-white transition-all duration-300"
                style={{
                  transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <ChevronRight size={20} />
              </div>
              <Zap size={10} className="absolute top-1 right-1 text-yellow-400 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity" />
            </button>
          </div>

          {/* Right Content Panel */}
          {!isCollapsed && (
            <div
              className="flex-1 p-8 overflow-y-auto relative z-10 animate-in slide-in-from-left duration-700"
              style={{
                background: 'linear-gradient(135deg, rgba(30,41,59,0.3) 0%, rgba(15,23,42,0.5) 100%)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/*  section header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent flex items-center gap-4 capitalize">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30">
                      {icons.find((i) => i.id === active)?.icon}
                    </div>
                    {active.replace("-", " ")}
                  </h2>
                </div>
               
              </div>

              {/* Enhanced content sections */}
              {typeof sidebarContent[active] === "object" &&
              !Array.isArray(sidebarContent[active]) ? (
                <div className="space-y-6">
                  {Object.entries(sidebarContent[active] as SidebarSection).map(
                    ([title, subItems], index) => {
                      const isOpen = openDropdowns[title];
                      const dropdownId = `${active}-${title}-dropdown`;
                      
                      return (
                        <div
                          key={title}
                          className="group"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          {/* Premium section header */}
                          <button
                            onClick={() => toggleDropdown(title)}
                            className="w-full flex justify-between items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-800/40 via-slate-700/30 to-slate-800/40 hover:from-slate-700/50 hover:via-slate-600/40 hover:to-slate-700/50 font-semibold text-left transition-all duration-500 border border-slate-600/20 hover:border-slate-500/40 group/header backdrop-blur-sm shadow-lg overflow-hidden"
                            aria-expanded={isOpen}
                            aria-controls={dropdownId}
                            style={{
                              background: 'linear-gradient(135deg, rgba(30,41,59,0.6) 0%, rgba(51,65,85,0.4) 50%, rgba(30,41,59,0.6) 100%)',
                              boxShadow: '0 8px 32px -8px rgba(0,0,0,0.3)'
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/header:opacity-100 transition-opacity duration-500" />
                            
                            <div className="flex items-center gap-4 relative z-10">
                              <div className="flex items-center gap-3">
                                {title === "Favorite Contacts" ? (
                                  <Star size={16} className="text-yellow-400" />
                                ) : (
                                  <Clock size={16} className="text-blue-400" />
                                )}
                                <span className="text-gray-100 text-lg">{title}</span>
                              </div>
                              
                              {title === "New Contacts" && (
                                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg backdrop-blur-sm border border-indigo-400/30">
                                  {subItems.length}
                                </div>
                              )}
                            </div>

                            <div
                              className="text-gray-400 group-hover/header:text-gray-200 transition-all duration-500 relative z-10"
                              style={{
                                transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                              }}
                            >
                              <ChevronRight size={20} />
                            </div>
                          </button>

                          {/* Enhanced dropdown content */}
                          {isOpen && (
                            <div
                              id={dropdownId}
                              className="mt-4 space-y-3 animate-in slide-in-from-top duration-500"
                            >
                              {subItems.map((sub, idx) => {
                                if (
                                  typeof sub === "object" &&
                                  "name" in sub &&
                                  "title" in sub
                                ) {
                                  return (
                                    <div
                                      key={sub.name + idx}
                                      onClick={() => handleContactSelect(sub)}
                                      className="group/contact flex items-center gap-5 p-4 ml-6 rounded-2xl bg-gradient-to-r from-slate-700/20 via-slate-600/10 to-slate-700/20 hover:from-slate-600/40 hover:via-slate-500/30 hover:to-slate-600/40 transition-all duration-500 cursor-pointer border border-slate-600/20 hover:border-slate-500/40 backdrop-blur-sm shadow-lg overflow-hidden"
                                      style={{
                                        animationDelay: `${idx * 100}ms`,
                                        background: 'linear-gradient(135deg, rgba(51,65,85,0.3) 0%, rgba(71,85,105,0.2) 50%, rgba(51,65,85,0.3) 100%)',
                                        boxShadow: '0 4px 20px -4px rgba(0,0,0,0.2)'
                                      }}
                                    >
                                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500" />
                                      
                                      <div className="relative">
                                        <img
                                          src={sub.pic}
                                          alt={sub.name}
                                          className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-600/50 group-hover/contact:ring-indigo-400/60 transition-all duration-500 shadow-lg"
                                          style={{
                                            boxShadow: '0 8px 25px -5px rgba(0,0,0,0.3)'
                                          }}
                                        />
                                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-slate-800 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300" />
                                      </div>
                                      
                                      <div className="flex-1 relative z-10">
                                        <p className="font-semibold text-gray-100 group-hover/contact:text-white transition-colors duration-300 text-base">
                                          {sub.name}
                                        </p>
                                        <p className="text-sm text-gray-400 group-hover/contact:text-gray-300 transition-colors duration-300">
                                          {sub.title}
                                        </p>
                                      </div>

                                      <div className="opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300">
                                        <ChevronRight size={16} className="text-gray-400" />
                                      </div>
                                    </div>
                                  );
                                } else {
                                  return (
                                    <div
                                      key={String(sub) + idx}
                                      className="group/item flex items-center gap-4 p-4 ml-6 rounded-xl bg-slate-700/20 hover:bg-slate-600/40 cursor-pointer transition-all duration-500 text-gray-300 hover:text-white border border-slate-600/20 hover:border-slate-500/40 backdrop-blur-sm"
                                      style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                                      <span className="font-medium">{sub}</span>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {(sidebarContent[active] as string[]).map((item, index) => (
                    <div
                      key={item}
                      className="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-700/30 via-slate-600/20 to-slate-700/30 hover:from-slate-600/50 hover:via-slate-500/40 hover:to-slate-600/50 cursor-pointer transition-all duration-500 text-gray-300 hover:text-white border border-slate-600/20 hover:border-slate-500/40 backdrop-blur-sm shadow-lg"
                      style={{
                        animationDelay: `${index * 150}ms`,
                        background: 'linear-gradient(135deg, rgba(51,65,85,0.4) 0%, rgba(71,85,105,0.3) 50%, rgba(51,65,85,0.4) 100%)',
                        boxShadow: '0 6px 25px -5px rgba(0,0,0,0.2)'
                      }}
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg" />
                      <span className="font-semibold text-lg">{item}</span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ChevronRight size={16} className="text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}