import { Topic } from '../types';

// First, define the Topic interface
interface Topic {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  playlists: {
    id: string;
    title: string;
  }[];
}

interface TopicGridProps {
  topics: Topic[];
  onTopicSelect: React.Dispatch<React.SetStateAction<null>>;
}

const TopicGrid: React.FC<TopicGridProps> = ({ topics, onTopicSelect }) => {
  // ... existing code ...
}; 