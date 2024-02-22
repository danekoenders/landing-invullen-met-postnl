import { memo, SVGProps } from 'react';

const BodyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 230 469' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M47.3411 0H182.659C214.094 0 228.859 17.461 228.859 46.2537V148.721C229.524 148.957 230 149.592 230 150.338V203.536C230 204.283 229.524 204.918 228.859 205.153V426.754C228.859 452.925 214.038 468.288 187.898 468.288H42.1019C15.9616 468.288 1.14144 453.449 1.14144 426.754V204.716C0.476441 204.481 0 203.846 0 203.099V171.475C0 170.728 0.476441 170.093 1.14144 169.858V159.377C0.476441 159.141 0 158.506 0 157.76V125.611C0 124.865 0.476441 124.23 1.14144 123.994V107.987C0.476441 107.752 0 107.117 0 106.37V92.0841C0 91.3376 0.476441 90.7026 1.14144 90.4673V46.2537C1.14144 17.4625 15.906 0 47.3411 0Z'
      fill='#86889D'
    />
  </svg>
);

const Memo = memo(BodyIcon);
export { Memo as BodyIcon };
