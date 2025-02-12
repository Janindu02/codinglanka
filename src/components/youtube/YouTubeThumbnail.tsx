import Image from 'next/image';
import { motion } from 'framer-motion';
import { getYouTubeThumbnail } from '@/utils/imageOptimization';

interface YouTubeThumbnailProps {
  src: string;
  alt: string;
  isActive?: boolean;
  priority?: boolean;
  onLoad?: () => void;
}

export default function YouTubeThumbnail({ 
  src, 
  alt, 
  isActive = false,
  priority = false,
  onLoad 
}: YouTubeThumbnailProps) {
  return (
    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
      <motion.div
        initial={false}
        animate={isActive ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative w-full h-full"
      >
        <Image
          src={getYouTubeThumbnail(src)}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          quality={95}
          priority={priority}
          onLoad={onLoad}
          loading={priority ? 'eager' : 'lazy'}
        />
        {isActive && (
          <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10" />
        )}
      </motion.div>
    </div>
  );
} 