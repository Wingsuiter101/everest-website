import { ImageProps as NextImageProps } from 'next/image';
 
declare module 'next/image' {
  interface ImageProps extends NextImageProps {
    wrapperClassName?: string;
  }
} 