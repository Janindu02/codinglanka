import Image from 'next/image';
import { motion } from 'framer-motion';

interface TopicThumbnailProps {
  src: string;
  alt: string;
  isActive?: boolean;
}

export default function TopicThumbnail({ src, alt, isActive = false }: TopicThumbnailProps) {
  return (
    <div className="relative aspect-video w-full rounded-lg overflow-hidden">
      <motion.div
        initial={false}
        animate={isActive ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          quality={95}
          priority
        />
        {isActive && (
          <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10" />
        )}
      </motion.div>
    </div>
  );
} 