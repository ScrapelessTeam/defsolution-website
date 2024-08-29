'use client';

import { ReactSVG } from 'react-svg';

interface MySvgProps {
  src: string;
  [k: string]: any;
}

export default function MySvg({ src, ...rest }: MySvgProps) {
  return <ReactSVG src={src} {...rest} />;
}
