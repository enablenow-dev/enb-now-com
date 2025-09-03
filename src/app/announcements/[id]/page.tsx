"use client";
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { announcementsData } from '../_data/announcements';

export default function AnnouncementDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  // Find the announcement by ID
  const announcement = announcementsData.find(ann => ann.id === id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBack = () => {
    router.push('/announcements');
  };

  // If announcement not found, show 404
  if (!announcement) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Announcement Not Found</h1>
          <p className="text-gray-600 mb-6">The announcement you're looking for doesn't exist.</p>
          <button
            onClick={handleBack}
            className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#007BA8' }}
          >
            Back to Resources
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #007BA8 0%, #ABABAB 100%)' }}>
        {/* Background decorative circles */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full opacity-20" style={{ backgroundColor: '#007BA8' }}></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-30" style={{ backgroundColor: '#ABABAB' }}></div>
        <div className="absolute top-10 right-20 w-24 h-24 rounded-full opacity-15" style={{ backgroundColor: '#007BA8' }}></div>

        {/* Banner Content */}
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <span className="text-white text-sm font-medium">
                  {formatDate(announcement.date)}
                </span>
                <span className="text-white opacity-60">|</span>
                <span className="text-white text-sm font-medium capitalize">
                  {announcement.category}
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight whitespace-pre-line">
                {announcement.title}
              </h1>


            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Resources</span>
        </button>

        {/* Announcement content */}
        <div className="bg-white ">
          {/* Image and Header Section */}
          <div className="px-8 pt-8">
            {/* Display image if available */}
            {announcement.imagePath && (
              <div className="mb-8">
                <img
                  src={announcement.imagePath}
                  alt=""
                  className="h-auto max-h-32 object-contain"
                />
              </div>
            )}

          </div>

          {/* Full content */}
          <div className="p-8">
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-em:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: announcement.fullContent }}
              style={{
                '--tw-prose-links': '#007BA8',
                '--tw-prose-headings': '#007BA8',
              } as React.CSSProperties}
            />
          </div>

          {/* Footer */}
          <div className="p-8 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Published on {formatDate(announcement.date)}
              </div>
              <button
                onClick={handleBack}
                className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                style={{ backgroundColor: '#007BA8' }}
              >
                View All Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}