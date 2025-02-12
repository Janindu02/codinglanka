export const getYouTubeThumbnail = (path: string) => {
  // Add default quality suffix if not present
  if (!path.includes('?q=')) {
    return `${path}?q=95`;
  }
  return path;
};

export const getPlaylistCover = (topic: string) => {
  return `/images/youtube/${topic}/playlist-cover.jpg?q=95`;
};

export const getTopicThumbnail = (topic: string, subtopic: string, name: string) => {
  return `/images/youtube/${topic}/${subtopic}/${name}.jpg?q=95`;
}; 