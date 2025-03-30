interface TopicGridProps {
  topics: Topic[];
  onTopicSelect: React.Dispatch<React.SetStateAction<null>>;
}

const TopicGrid: React.FC<TopicGridProps> = ({ topics, onTopicSelect }) => {
  // ... existing code ...
}; 