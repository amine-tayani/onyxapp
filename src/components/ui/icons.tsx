type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      {...props}
      width='245'
      height='245'
      viewBox='0 0 245 245'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M60.7665 32.0611C40.946 45.5905 26.1188 65.256 18.5654 88.0343C11.0121 110.813 11.1508 135.441 18.9603 158.134C26.7698 180.825 41.8175 200.323 61.7892 213.628C81.7609 226.934 105.551 233.31 129.5 231.776C153.448 230.242 176.23 220.883 194.341 205.138C212.452 189.394 224.889 168.135 229.74 144.633C234.591 121.13 231.586 96.6851 221.189 75.056C210.79 53.4281 193.576 35.8137 172.191 24.9237L152.314 63.954C165.145 70.488 175.474 81.057 181.713 94.0333C187.951 107.011 189.754 121.678 186.844 135.78C183.934 149.881 176.472 162.636 165.605 172.083C154.738 181.53 141.069 187.145 126.7 188.065C112.33 188.986 98.0566 185.16 86.0735 177.177C74.0905 169.194 65.0619 157.495 60.3762 143.88C55.6905 130.265 55.6073 115.488 60.1393 101.821C64.6713 88.1533 73.5676 76.3542 85.4599 68.2364L60.7665 32.0611Z'
        fill='#777'
      />
      <path
        d='M222.591 78.0929C215.508 62.1272 204.707 48.0868 191.092 37.1455C177.477 26.2042 161.442 18.6783 144.326 15.1973C127.209 11.7154 109.508 12.3795 92.7007 17.1332C75.893 21.886 60.4665 30.5919 47.7087 42.5216C34.9511 54.4523 25.2325 69.2611 19.3644 85.7128C13.4964 102.165 11.6491 119.781 13.9768 137.092C16.3045 154.403 22.7396 170.906 32.745 185.224C42.7503 199.541 56.0355 211.257 71.4914 219.394L91.8949 180.636C82.6213 175.754 74.6502 168.725 68.647 160.134C62.6438 151.544 58.7827 141.642 57.3861 131.256C55.9894 120.868 57.0978 110.299 60.6187 100.428C64.1396 90.5572 69.9707 81.6714 77.6253 74.5131C85.2799 67.3549 94.5358 62.132 104.62 59.2797C114.705 56.4275 125.325 56.0292 135.596 58.1182C145.865 60.2072 155.487 64.7223 163.656 71.2876C171.825 77.852 178.304 86.2761 182.555 95.8556L222.591 78.0929Z'
        fill='#fff'
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height='23'
      viewBox='0 0 1200 1227'
      width='23'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z' />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox='0 0 438.549 438.549' {...props}>
      <path
        fill='currentColor'
        d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
      ></path>
    </svg>
  ),

  google: (props: IconProps) => (
    <svg viewBox='-0.5 0 48 48' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24'
        fill='#FBBC05'
      />
      <path
        d='M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333'
        fill='#EB4335'
      />
      <path
        d='M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667'
        fill='#34A853'
      />
      <path
        d='M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24'
        fill='#4285F4'
      />
    </svg>
  ),

  discord: (props: IconProps) => (
    <svg role='img' viewBox='0 0 1024 1024' {...props}>
      <circle cx='512' cy='512' r='512' fill='currentColor' />
      <path
        d='M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z'
        style={{ fill: '#fff' }}
      />
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
      />
    </svg>
  ),
  netflix: (props: IconProps) => (
    <svg role='img' viewBox='0 0 256 256' {...props}>
      <defs>
        <radialGradient
          id='a'
          cx='48.34%'
          cy='49.419%'
          r='70.438%'
          gradientTransform='translate(.4834 .49419) scale(1 .55088) translate(-.4834 -.49419)'
        >
          <stop offset='0'></stop>
          <stop stopOpacity='0' offset='1'></stop>
        </radialGradient>
      </defs>
      <polygon points='1.8011e-7 1.1371e-6 255.9 1.1371e-6 255.9 255.9 1.8011e-7 255.9'></polygon>
      <path
        d='m141.68 41.275-0.067432 38.361-0.067788 38.361-3.1561-8.9053c-0.001096-0.003069-0.004987-0.014413-0.006065-0.017482l-4.0784 85.403c4.0098 11.324 6.1582 17.369 6.1823 17.393 0.031573 0.031585 2.3167 0.16944 5.0781 0.30648 8.3664 0.41516 18.734 1.3048 26.599 2.282 1.821 0.22624 3.3882 0.3421 3.4826 0.2576 0.094351-0.084504 0.14573-39.143 0.11417-86.798l-0.057442-86.644h-17.011-17.011z'
        fill='#B1060F'
        stroke='#000'
        strokeWidth='2.9562'
      />
      <path
        d='m80.138 41.16v86.732c0 47.702 0.046677 86.779 0.10382 86.836 0.057144 0.05714 3.0113-0.22176 6.5648-0.61973 3.5535-0.39799 8.4647-0.89288 10.914-1.0996 3.7559-0.31708 14.97-1.0381 16.269-1.0461 0.37774-0.002375 0.40197-1.9512 0.45668-36.736l0.057798-36.733 2.7133 7.6769c0.41933 1.1865 0.55086 1.5571 0.95939 2.713l4.0773-85.382c-0.86391-2.4426-0.41104-1.1603-1.4011-3.9596-3.3314-9.4191-6.1583-17.408-6.2822-17.754l-0.22549-0.62794h-17.103-17.103z'
        fill='#B1060F'
        stroke='#000'
        strokeWidth='2.9562'
      />
      <path
        d='m80.138 41.16 9.1e-6 48.685 34.296 90.976c0.00358-2.0848 0.007672-3.2113 0.011417-5.5944l0.057798-36.733 2.7133 7.6769c15.104 42.738 23.218 65.652 23.266 65.7 0.031573 0.031585 2.3167 0.16944 5.0781 0.30648 8.3664 0.41516 18.734 1.3048 26.599 2.282 1.821 0.22624 3.3882 0.3421 3.4826 0.2576 0.064849-0.058083 0.10718-19.21 0.11845-46.227l-34.136-98.14-0.016422 9.2871-0.067788 38.361-3.1561-8.9053c-3.0839-8.7015-5.1429-14.521-17.532-49.55-3.3314-9.4191-6.1583-17.408-6.2822-17.754l-0.22549-0.62794h-17.103-17.103z'
        fill='url(#a)'
      />
      <path
        d='m80.139 41.16 34.365 97.377v-0.044241l2.7133 7.6769c15.104 42.738 23.218 65.652 23.266 65.7 0.031573 0.031585 2.3167 0.16944 5.0781 0.30648 8.3664 0.41516 18.734 1.3048 26.599 2.282 1.8117 0.22508 3.3709 0.3407 3.4797 0.25867l-34.099-96.738v0.017829l-3.1561-8.9053c-3.0839-8.7015-5.1429-14.521-17.532-49.55-3.3314-9.4191-6.1583-17.408-6.2822-17.754l-0.22549-0.62794h-17.103-17.103z'
        fill='#E50914'
      />
      <path
        d='m141.68 41.275-0.067432 38.361-0.067788 38.361-3.1561-8.9053c-0.001096-0.003069-0.004987-0.014413-0.006065-0.017482l-4.0784 85.403c4.0098 11.324 6.1582 17.369 6.1823 17.393 0.031573 0.031585 2.3167 0.16944 5.0781 0.30648 8.3664 0.41516 18.734 1.3048 26.599 2.282 1.821 0.22624 3.3882 0.3421 3.4826 0.2576 0.094351-0.084504 0.14573-39.143 0.11417-86.798l-0.057442-86.644h-17.011-17.011z'
        fill='#B1060F'
        stroke='#000'
        strokeWidth='2.9562'
      />
      <path
        d='m80.138 41.16v86.732c0 47.702 0.046677 86.779 0.10382 86.836 0.057144 0.05714 3.0113-0.22176 6.5648-0.61973 3.5535-0.39799 8.4647-0.89288 10.914-1.0996 3.7559-0.31708 14.97-1.0381 16.269-1.0461 0.37774-0.002375 0.40197-1.9512 0.45668-36.736l0.057798-36.733 2.7133 7.6769c0.41933 1.1865 0.55086 1.5571 0.95939 2.713l4.0773-85.382c-0.86391-2.4426-0.41104-1.1603-1.4011-3.9596-3.3314-9.4191-6.1583-17.408-6.2822-17.754l-0.22549-0.62794h-17.103-17.103z'
        fill='#B1060F'
        stroke='#000'
        strokeWidth='2.9562'
      />
      <path
        d='m80.138 41.16 9.1e-6 48.685 34.296 90.976c0.00358-2.0848 0.007672-3.2113 0.011417-5.5944l0.057798-36.733 2.7133 7.6769c15.104 42.738 23.218 65.652 23.266 65.7 0.031573 0.031585 2.3167 0.16944 5.0781 0.30648 8.3664 0.41516 18.734 1.3048 26.599 2.282 1.821 0.22624 3.3882 0.3421 3.4826 0.2576 0.064849-0.058083 0.10718-19.21 0.11845-46.227l-34.136-98.14-0.016422 9.2871-0.067788 38.361-3.1561-8.9053c-3.0839-8.7015-5.1429-14.521-17.532-49.55-3.3314-9.4191-6.1583-17.408-6.2822-17.754l-0.22549-0.62794h-17.103-17.103z'
        fill='url(#a)'
      />
      <path
        d='m80.139 41.16 34.365 97.377v-0.044241l2.7133 7.6769c15.104 42.738 23.218 65.652 23.266 65.7 0.031573 0.031585 2.3167 0.16944 5.0781 0.30648 8.3664 0.41516 18.734 1.3048 26.599 2.282 1.8117 0.22508 3.3709 0.3407 3.4797 0.25867l-34.099-96.738v0.017829l-3.1561-8.9053c-3.0839-8.7015-5.1429-14.521-17.532-49.55-3.3314-9.4191-6.1583-17.408-6.2822-17.754l-0.22549-0.62794h-17.103-17.103z'
        fill='#E50914'
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg
      {...props}
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9.52373 6.77566L15.4811 0H14.0699L8.89493 5.88201L4.7648 0H0L6.24693 8.89549L0 15.9999H1.4112L6.87253 9.78701L11.2352 15.9999H16M1.92053 1.04126H4.08853L14.0688 15.0098H11.9003' />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      aria-hidden='true'
      viewBox='0 0 100 101'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='currentColor'
      />
      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentFill'
      />
    </svg>
  ),
  chevronUpDown: (props: IconProps) => (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
      />
    </svg>
  ),
  status: (props: IconProps) => (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z'
      />
    </svg>
  ),

  columns: (props: IconProps) => (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z'
      />
    </svg>
  ),

  gridIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
      />
    </svg>
  ),

  tableIcon: (props: IconProps) => (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z'
      />
    </svg>
  ),
  filterIcon: (props: IconProps) => (
    <svg
      {...props}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      strokeWidth={1.4}
      color='currentColor'
    >
      <path
        d='M3.99961 3H19.9997C20.552 3 20.9997 3.44764 20.9997 3.99987L20.9999 5.58569C21 5.85097 20.8946 6.10538 20.707 6.29295L14.2925 12.7071C14.105 12.8946 13.9996 13.149 13.9996 13.4142L13.9996 19.7192C13.9996 20.3698 13.3882 20.8472 12.7571 20.6894L10.7571 20.1894C10.3119 20.0781 9.99961 19.6781 9.99961 19.2192L9.99961 13.4142C9.99961 13.149 9.89425 12.8946 9.70672 12.7071L3.2925 6.29289C3.10496 6.10536 2.99961 5.851 2.99961 5.58579V4C2.99961 3.44772 3.44732 3 3.99961 3Z'
        stroke='currentColor'
        stroke-width={1.4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),

  sortIcon: (props: IconProps) => (
    <svg
      width={24}
      height={24}
      {...props}
      viewBox='0 0 24 24'
      stroke-width={1.4}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      color='currentColor'
    >
      <path
        d='M10 14H2'
        stroke='currentColor'
        strokeWidth={1.4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />{' '}
      <path
        d='M8 10H2'
        stroke='currentColor'
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M6 6H2'
        stroke='currentColor'
        strokeWidth={1.4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 18H2'
        stroke='currentColor'
        stroke-width={1.4}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19 20V4M19 20L22 17M19 20L16 17M19 4L22 7M19 4L16 7'
        stroke='currentColor'
        strokeWidth={1}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  ),
  cameraPlus: (props: IconProps) => (
    <svg viewBox='0 0 24 24' {...props}>
      <g>
        <path
          fill='currentColor'
          d='M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z'
        />
      </g>
    </svg>
  ),
};
