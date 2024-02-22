import { memo, SVGProps } from 'react';

const IconIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.0775 8.75C0.6925 3.8175 4.9 0 10 0C13.4 0 16.4037 1.69625 18.21 4.29L20 2.5V8.75H19.9225H17.3962H16.25H13.75L16.405 6.095C15.0875 3.93875 12.7112 2.5 10 2.5C6.28375 2.5 3.19875 5.2025 2.60375 8.75H0.0775ZM0 11.25H0.0775H2.60375H6.80125L3.7125 14.0887C5.05 16.1425 7.3675 17.5 10 17.5C13.7162 17.5 16.8013 14.7975 17.3962 11.25H19.9225C19.3075 16.1825 15.1 20 10 20C6.63875 20 3.665 18.3412 1.85125 15.7987L0 17.5V11.25Z'
      fill='#ED7000'
    />
  </svg>
);

const Memo = memo(IconIcon);
export { Memo as IconIcon };
