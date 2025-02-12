import { memo } from 'react';
import Image from 'next/image';

interface IconProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

const Icon = memo(function Icon({ src, alt, size = 24, className = '' }: IconProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        className="object-contain"
        quality={100}
      />
    </div>
  );
});

export default Icon; 