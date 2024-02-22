import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M26.5983 13.5208L4.41979 0.414433C2.4865 -0.730436 0 0.632053 0 2.84421V29.2273C0 31.237 2.44767 32.7944 4.55372 31.5625L11.1941 27.6699L26.6197 18.3633C28.4598 17.2544 28.4676 14.6297 26.5983 13.5208Z'
      fill='#3440B6'
    />
  </svg>
);

const Memo = memo(PathIcon);
export { Memo as PathIcon };
