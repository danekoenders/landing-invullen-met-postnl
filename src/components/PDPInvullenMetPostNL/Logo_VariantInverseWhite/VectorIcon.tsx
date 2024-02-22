import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 142 141' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M48.0732 62.4659C42.485 62.4659 37.9901 65.5651 37.9901 72.5442C37.9901 79.3672 42.485 82.6225 48.0732 82.6225C53.6419 82.6225 58.1466 79.3672 58.1466 72.5442C58.1466 65.5651 53.6419 62.4659 48.0732 62.4659ZM48.0732 77.8298C45.5744 77.8298 43.7052 75.9313 43.7052 72.5442C43.7052 68.8594 45.5744 67.2488 48.0732 67.2488C50.5574 67.2488 52.4315 68.8594 52.4315 72.5442C52.4315 75.9313 50.5574 77.8298 48.0732 77.8298ZM84.3893 62.6416C84.3893 62.7441 84.4722 62.8271 84.5747 62.8271H88.8159C89.1527 62.8271 89.426 63.1053 89.426 63.4323V67.1024C89.426 67.2098 89.343 67.2928 89.2405 67.2928H84.5747C84.4722 67.2928 84.3893 67.3757 84.3893 67.4782V74.6038C84.3893 77.3369 85.4239 78.1471 87.1516 78.1471C87.9618 78.1471 89.2356 77.6492 89.4211 77.6492C89.5236 77.6492 89.6114 77.7322 89.6114 77.8347V81.3487C89.6114 81.6122 89.4601 81.7977 89.2942 81.8856C88.5231 82.3004 87.2297 82.5835 85.3166 82.5835C81.9734 82.5835 78.8694 80.8997 78.8694 75.5262V63.1346C78.8694 62.0364 79.2989 60.992 79.9773 60.2502C80.8802 59.2545 83.7841 57.3902 84.1599 57.3902C84.3209 57.3902 84.3893 57.439 84.3893 57.5903V62.6416ZM16.9598 63.4518C16.9598 63.1053 17.238 62.832 17.5846 62.832H24.9346C32.1529 62.832 35.8914 67.1659 35.8914 72.7736C35.8914 78.3862 31.7088 82.2711 24.8175 82.2711H22.6701C22.5676 82.2711 22.4797 82.3541 22.4797 82.4614V91.5539C22.4797 91.7052 22.4163 91.754 22.2503 91.754C21.8745 91.754 18.9706 89.8896 18.0677 88.894C17.3893 88.1473 16.9598 87.1028 16.9598 86.0096V63.4518ZM30.4399 72.4905C30.4399 70.1039 28.8976 67.8687 24.8224 67.8687H22.6603C22.5578 67.8687 22.4748 67.9516 22.4748 68.059V77.0294C22.4748 77.1319 22.5578 77.2198 22.6603 77.2198H24.9298C29.7859 77.2198 30.4399 73.8473 30.4399 72.4905ZM76.0289 76.2778C76.0289 80.3726 73.086 82.6225 67.3465 82.6225C64.0619 82.6225 60.5918 81.4707 60.5625 81.4609C60.3038 81.3633 60.133 81.1291 60.133 80.8606V77.0441C60.133 76.9172 60.2404 76.8196 60.3722 76.8196C60.3917 76.8196 60.4454 76.8293 60.4503 76.8342C61.6753 77.2295 65.648 78.2154 67.7613 78.2154C69.0107 78.2154 69.6647 78.0299 70.0844 77.6102C70.3724 77.3223 70.5042 77.0148 70.5042 76.6439C70.5042 75.3944 68.9375 75.0479 67.4197 74.716C67.2293 74.677 67.3123 74.6965 66.7998 74.5745C63.4762 73.7888 59.972 72.9786 59.972 68.6984C59.972 66.7998 60.7675 65.2234 62.2561 64.1302C63.7397 63.0369 65.8823 62.4659 68.4494 62.4659C70.7579 62.4659 73.4959 63.2273 74.4135 63.5201C74.7014 63.6128 74.8673 63.8666 74.8673 64.1253V67.9321C74.8576 68.1078 74.6721 68.1908 74.5452 68.142C71.9146 67.1561 69.5085 66.8096 67.7808 66.8096C66.4094 66.8096 65.5211 67.405 65.5211 68.3274C65.5211 69.3914 66.8194 69.6793 68.4641 70.0503C68.6642 70.0942 69.5622 70.2992 69.7965 70.348C71.1435 70.6457 72.5345 70.9483 73.6765 71.695C75.2578 72.7297 76.0289 74.228 76.0289 76.2778ZM105.786 82.2028C105.722 82.2028 105.668 82.1491 105.668 82.0857V70.5041C105.668 67.9321 104.795 66.834 102.745 66.834C102.013 66.834 101.129 67.1073 100.251 67.6051C99.3774 68.1127 98.6941 68.5324 98.4501 68.6788C98.3817 68.7228 98.3085 68.8399 98.3085 68.9326V82.0905C98.3085 82.154 98.2549 82.2077 98.1914 82.2077H93.0278C92.9644 82.2077 92.9058 82.154 92.9058 82.0905V63.4567C92.9058 63.1541 93.1547 62.9052 93.4622 62.9052H98.1963C98.2597 62.9052 98.3183 62.9588 98.3183 63.0223V64.4865C98.3183 64.5743 98.3915 64.6475 98.4794 64.6475C98.5135 64.6475 98.5574 64.628 98.5721 64.6182L98.7283 64.5011C99.3042 64.057 100.192 63.5543 100.788 63.3249C102.081 62.832 103.477 62.544 104.609 62.544C108.831 62.544 111.061 64.9696 111.061 69.5524V82.0808C111.061 82.1491 111.008 82.1979 110.939 82.1979H105.786V82.2028ZM115.322 82.2028C115.259 82.2028 115.205 82.1491 115.205 82.0857V53.5492C115.205 53.4467 115.224 53.4174 115.366 53.4174C115.688 53.4174 118.568 55.2281 119.5 56.253C120.193 57.0144 120.588 58.049 120.588 59.0935V82.0857C120.588 82.1491 120.534 82.2028 120.471 82.2028H115.322V82.2028ZM48.0684 32.6019C47.9707 32.6019 47.878 32.6312 47.7658 32.6996C46.897 33.3535 46.1308 34.11 45.467 34.9592C45.2718 35.1789 45.2718 35.4327 45.4768 35.6962C46.1064 36.5113 46.8287 37.2385 47.6193 37.8583C47.7658 37.9754 47.9122 38.0291 48.0635 38.0291C48.2148 38.0291 48.3612 37.9705 48.5076 37.8534C49.2982 37.2336 50.0206 36.5064 50.6502 35.6962C50.8551 35.4327 50.8551 35.1789 50.6502 34.9446C50.001 34.1052 49.2348 33.3487 48.3856 32.7093C48.2636 32.6312 48.1708 32.6019 48.0684 32.6019ZM48.0684 39.5957C47.6535 39.5957 47.2143 39.6055 46.7604 39.625C46.5993 39.625 46.4529 39.6836 46.3406 39.8007C46.1796 39.9618 46.1161 40.2205 46.1161 40.3913C46.1308 41.2844 46.1893 45.999 46.2284 49.0005C46.2479 50.45 46.2577 51.4994 46.2626 51.5335C46.2626 51.7483 46.4187 52.1973 46.9019 52.1973H49.2397C49.5862 52.1973 49.8253 51.9533 49.8741 51.5628C49.8741 51.553 49.8741 51.5433 49.8741 51.5335C49.8741 51.4603 49.923 47.4534 50.0157 40.5377V40.401C50.0206 40.2693 49.9766 39.9862 49.7961 39.8056C49.6838 39.6885 49.5374 39.6348 49.3666 39.6348C48.9273 39.6104 48.4881 39.5957 48.0684 39.5957ZM53.9982 40.2351C53.4613 40.2351 53.0221 40.5328 52.7927 41.0453C52.1192 42.5436 51.6311 43.9101 51.1577 45.6086C51.104 45.8087 51.1236 45.9746 51.2163 46.0966C51.2797 46.1796 51.4066 46.2772 51.6604 46.2772H53.4857C53.9006 46.2772 54.0519 46.0576 54.1104 45.877C54.4082 44.8618 54.6229 44.2713 55.0036 43.4318C55.0085 43.4221 55.0377 43.3684 55.15 43.3684C55.1939 43.3684 55.2379 43.3733 55.2818 43.3879L56.2091 43.6954C56.3164 43.7344 56.3848 43.8272 56.4189 43.9004C56.4873 44.0419 56.497 44.2323 56.4482 44.3738C56.4385 44.4031 54.5741 49.6155 54.0177 51.3529C53.9348 51.6214 53.9445 51.8312 54.0568 51.9874C54.1593 52.129 54.335 52.2022 54.579 52.2022H56.8387C57.2096 52.2022 57.4536 52.0557 57.561 51.758C57.644 51.5335 57.7611 51.2065 57.8977 50.821L57.9514 50.6746C58.6298 48.7809 59.6596 45.9112 59.8792 45.0961C60.2502 43.7149 60.3526 42.2019 58.3272 41.4503C57.683 41.2112 57.0729 41.0062 56.5117 40.8354C55.7991 40.6158 55.111 40.4547 54.5058 40.3132L54.4326 40.2937C54.2666 40.2497 54.13 40.2351 53.9982 40.2351ZM42.1385 40.2351C42.0067 40.2351 41.8701 40.2497 41.7383 40.2839L41.6456 40.3034C41.0404 40.445 40.3571 40.606 39.6446 40.8256C39.0882 40.9965 38.4781 41.2014 37.829 41.4406C35.7987 42.1922 35.9061 43.7052 36.277 45.0863C36.4869 45.8721 37.4434 48.5613 38.2536 50.8112C38.3951 51.1968 38.5074 51.5238 38.5904 51.7483C38.6977 52.046 38.9418 52.1924 39.3127 52.1924H41.5724C41.875 52.1924 42.0214 52.0753 42.0946 51.9777C42.2068 51.8264 42.2166 51.6165 42.1336 51.3481C41.5821 49.635 39.7178 44.4177 39.6982 44.3689C39.6494 44.2274 39.6592 44.0419 39.7275 43.8955C39.7617 43.8223 39.8251 43.7296 39.9423 43.6905L40.8744 43.383C40.9086 43.3733 40.9525 43.3684 40.9965 43.3684C41.0892 43.3684 41.1331 43.4074 41.1429 43.4318C41.5284 44.2908 41.7481 44.8862 42.036 45.877C42.0897 46.0625 42.241 46.2772 42.6558 46.2772H44.486C44.6861 46.2772 44.8374 46.2186 44.9302 46.0966C45.0229 45.9746 45.0424 45.8135 44.9839 45.6134C44.5056 43.9053 44.0175 42.5387 43.3489 41.0453C43.2366 40.8012 42.8999 40.2351 42.1385 40.2351ZM56.3799 53.9299H39.7812C39.2004 53.9299 38.7075 54.4179 38.7075 54.9987V57.0876C38.7075 57.7416 38.9857 58.0588 39.5665 58.0588H56.5995C57.1754 58.0588 57.4536 57.7416 57.4536 57.0876V54.9987C57.4536 54.4179 56.9607 53.9299 56.3799 53.9299ZM136.313 70.0795C136.294 58.4248 114.4 38.239 91.0707 25.3788C64.1595 10.5371 33.5341 1.79116 23.4461 7.35008C11.9475 13.6948 5.64678 45.3645 5.64189 70.0795C5.64678 94.9947 11.5815 126.259 23.4461 132.804C34.1979 138.729 63.4908 129.983 91.0707 114.78C114.766 101.715 136.294 82.3004 136.313 70.0795ZM31.5234 0C48.5076 0 75.7166 10.7372 93.8087 20.713C104.16 26.4183 115.908 34.7445 124.995 43.2171C133.717 51.3432 141.945 61.4605 141.96 70.0795C141.945 78.1959 135.357 87.7178 124.751 97.4398C115.747 105.688 104.053 113.799 93.8136 119.446C76.3364 129.08 49.6984 140.335 32.1383 140.335C27.3651 140.335 23.451 139.51 20.4933 137.88C12.7187 133.595 7.73564 122.047 4.79268 110.734C1.6301 98.5965 0.00488053 83.9988 0 70.0844C0 56.4677 1.75699 41.8359 4.81708 29.9372C8.54581 15.4469 13.9681 5.88592 20.4933 2.28409C23.2313 0.766244 26.9454 0 31.5234 0Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
