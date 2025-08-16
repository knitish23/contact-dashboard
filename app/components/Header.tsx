'use client';

import { Search, Bell } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-4 rounded shadow-sm sticky top-0 z-10">
      {/* Search Box */}
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
      </div>

      {/* Avatar + Notification */}
      <div className="flex items-center space-x-4">
        <Bell className="text-gray-500 hover:text-blue-500 cursor-pointer" />
        <Image
          src="https://randomuser.me/api/portraits/med/men/45.jpg"
          alt="John Pic"
          width={36}
          height={36}
          className="rounded-full"
        />
        <span className="font-medium text-gray-700">John Doe</span>
      </div>
    </header>
  );
}
