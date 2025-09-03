"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Megaphone } from 'lucide-react';
import { announcementsData, Announcement } from './_data/announcements';

// Hero Banner Component
const AnnouncementBanner = () => {
  return (
    <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #007BA8 0%, #ABABAB 100%)' }}>
      {/* Background decorative circles */}
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: '#007BA8' }}></div>
      <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-30" style={{ backgroundColor: '#ABABAB' }}></div>
      <div className="absolute top-10 right-20 w-24 h-24 rounded-full opacity-15" style={{ backgroundColor: '#007BA8' }}></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-white bg-opacity-20 p-3 rounded-lg">
            <Megaphone size={24} className="text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white">
            Resources
          </h1>
        </div>
      </div>
    </div>
  );
};

// Announcements List Component
const AnnouncementsList = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'news' | 'activities'>('all');
  const router = useRouter();

  const filteredAnnouncements = announcementsData.filter(
    announcement => activeTab === 'all' || announcement.category === activeTab
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    
    const isToday = date.toDateString() === today.toDateString();
    
    if (isToday) {
      return {
        label: 'Today',
        time: date.toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        })
      };
    }
    
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return {
      label: `${month} ${day}`,
      time: year.toString()
    };
  };

  const handleAnnouncementClick = (announcement: Announcement) => {
    router.push(`/announcements/${announcement.id}`);
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Navigation Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('all')}
          className={`pb-4 px-1 text-sm font-medium transition-colors ${
            activeTab === 'all'
              ? 'border-b-2'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          style={{ 
            color: activeTab === 'all' ? '#007BA8' : '', 
            borderColor: activeTab === 'all' ? '#007BA8' : '' 
          }}
        >
          All
        </button>
        <button
          onClick={() => setActiveTab('news')}
          className={`pb-4 px-1 text-sm font-medium transition-colors ${
            activeTab === 'news'
              ? 'border-b-2'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          style={{ 
            color: activeTab === 'news' ? '#007BA8' : '', 
            borderColor: activeTab === 'news' ? '#007BA8' : '' 
          }}
        >
          News
        </button>
        <button
          onClick={() => setActiveTab('activities')}
          className={`pb-4 px-1 text-sm font-medium transition-colors ${
            activeTab === 'activities'
              ? 'border-b-2'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          style={{ 
            color: activeTab === 'activities' ? '#007BA8' : '', 
            borderColor: activeTab === 'activities' ? '#007BA8' : '' 
          }}
        >
          Activities
        </button>
      </div>

      {/* Announcements List */}
      <div className="space-y-6">
        {filteredAnnouncements.map((announcement) => {
          const dateInfo = formatDate(announcement.date);
          
          return (
            <div 
              key={announcement.id} 
              className="flex gap-6 p-6 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer border border-gray-100"
              onClick={() => handleAnnouncementClick(announcement)}
            >
              {/* Date */}
              <div className="flex-shrink-0 text-center">
                <div className="text-sm text-gray-500 font-medium">
                  {dateInfo.label}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {dateInfo.time}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors hover:underline" style={{ color: '#007BA8' }}>
                  {announcement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {announcement.description}
                </p>
                <div className="mt-3">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
                    {announcement.category}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAnnouncements.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No announcements found.</p>
        </div>
      )}
    </div>
  );
};

// Main Announcements Page
export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBanner />
      <AnnouncementsList />
    </div>
  );
}