import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M41.8274 21.3573L7.45067 1.04237C4.45407 -0.732177 0.599998 1.37968 0.599998 4.80852V45.7023C0.599998 48.8173 4.39389 51.2313 7.65827 49.3218L17.9508 43.2883L41.8605 28.8632C44.7127 27.1444 44.7247 23.0761 41.8274 21.3573Z'
      fill='#3440B6'
    />
  </svg>
);

const Memo = memo(PathIcon);
export { Memo as PathIcon };
