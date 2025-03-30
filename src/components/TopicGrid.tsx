import { Topic as TopicType } from '../types';

// First, define the Topic interface
interface LocalTopic {
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
  topics: LocalTopic[];
  onTopicSelect: (topic: LocalTopic) => void;
}

const TopicGrid: React.FC<TopicGridProps> = ({ topics, onTopicSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic) => (
        <div
          key={topic.id}
          onClick={() => onTopicSelect(topic)}
          className="cursor-pointer p-4 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold">{topic.title}</h3>
          <p className="mt-2">{topic.description}</p>
        </div>
      ))}
    </div>
  );
}; 