import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.2992 6.76041L2.20989 0.207217C1.24325 -0.365218 0 0.316027 0 1.4221V14.6136C0 15.6185 1.22384 16.3972 2.27686 15.7812L5.59704 13.8349L13.3098 9.18167C14.2299 8.62721 14.2338 7.31487 13.2992 6.76041Z'
      fill='#ED7000'
    />
  </svg>
);

const Memo = memo(PathIcon);
export { Memo as PathIcon };
