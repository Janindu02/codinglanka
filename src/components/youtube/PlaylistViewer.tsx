'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PlaylistViewer({ topic }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Fetch videos from YouTube API
    // You'll need to implement this using the YouTube Data API
  }, [topic]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {selectedVideo ? (
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        ) : (
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 rounded-lg" />
        )}
      </div>
      <div className="lg:col-span-1">
        <div className="space-y-4">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <h4 className="font-medium text-gray-900 dark:text-white">
                {video.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {video.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 