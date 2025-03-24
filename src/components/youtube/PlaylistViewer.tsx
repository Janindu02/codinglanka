'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/Icon';
import TopicThumbnail from '@/components/youtube/TopicThumbnail';
import javaPlaylist from './playlists/JavaPlaylist';
import oopPlaylist from './playlists/OOPPlaylist';
import pythonPlaylist from './playlists/PythonPlaylist';
import dsaPlaylist from './playlists/DSAPlaylist';
import basicsPlaylist from './playlists/BasicsPlaylist';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const playlists = {
  java: javaPlaylist,
  'oop-java': oopPlaylist,
  python: pythonPlaylist,
  dsa: dsaPlaylist,
  basics: basicsPlaylist
};

export default function PlaylistViewer({ topic }) {
  const playerRef = useRef<any>(null);
  const [player, setPlayer] = useState<any>(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [volume, setVolume] = useState(100);
  const [quality, setQuality] = useState('auto');
  const [isPlaying, setIsPlaying] = useState(false);

  const currentPlaylist = playlists[topic.id];

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: currentPlaylist.videos[currentVideo].id,
        playerVars: {
          autoplay: 0,
          controls: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event: any) => {
            setPlayer(event.target);
          },
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          }
        }
      });
      playerRef.current = newPlayer;
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [currentPlaylist.videos, currentVideo]);

  const handleVolumeChange = (newVolume: number) => {
    if (player) {
      player.setVolume(newVolume);
      setVolume(newVolume);
    }
  };

  const handleQualityChange = (newQuality: string) => {
    if (player) {
      player.setPlaybackQuality(newQuality);
      setQuality(newQuality);
    }
  };

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Current Topic Title */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {currentPlaylist.currentTopic.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {currentPlaylist.currentTopic.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Video Player - Left Side */}
        <div className="lg:col-span-9 order-1">
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
            {/* Video Player with fixed height */}
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <div 
                id="youtube-player" 
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>

            {/* Video Controls */}
            <div className="bg-gray-800 p-4">
              <div className="flex flex-wrap items-center gap-4">
                {/* Play/Pause Button */}
                <button
                  onClick={handlePlayPause}
                  className="p-2 rounded-full hover:bg-gray-700 text-white"
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  )}
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2">
                  <Icon 
                    src="/icons/volume.svg" 
                    alt="Volume" 
                    size={20}
                    className="text-white"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => handleVolumeChange(Number(e.target.value))}
                    className="w-24 accent-blue-600"
                  />
                </div>

                {/* Quality Selector */}
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <select
                    value={quality}
                    onChange={(e) => handleQualityChange(e.target.value)}
                    className="bg-gray-700 text-white rounded px-2 py-1 text-sm"
                  >
                    <option value="auto">Auto</option>
                    <option value="hd1080">1080p</option>
                    <option value="hd720">720p</option>
                    <option value="large">480p</option>
                    <option value="medium">360p</option>
                    <option value="small">240p</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Navigation - Right Side */}
        <div className="lg:col-span-3 order-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sticky top-24">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 px-2">
              Course Content
            </h3>
            <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
              {currentPlaylist.videos.map((video, index) => (
                <motion.button
                  key={video.id}
                  onClick={() => {
                    if (player) {
                      player.loadVideoById(video.id);
                      setCurrentVideo(index);
                    }
                  }}
                  className={`w-full rounded-lg overflow-hidden ${
                    currentVideo === index
                      ? 'ring-2 ring-blue-600 dark:ring-blue-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2">
                    <TopicThumbnail
                      src={video.thumbnail}
                      alt={video.title}
                      isActive={currentVideo === index}
                    />
                    <div className="mt-2">
                      <p className={`font-medium ${
                        currentVideo === index 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {video.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {video.description}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Duration: {video.duration}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 