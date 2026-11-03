import * as React from 'react';
import type { SVGProps } from 'react';

const LoadingCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={4.5} r={1.35}>
      <animate
        attributeName="opacity"
        values="1;0.18;0.18;0.18;0.18;0.18;0.18;0.18;1"
        keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
        dur="1s"
        begin="-0.000s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={17.3} cy={6.7} r={1.35}>
      <animate
        attributeName="opacity"
        values="1;0.18;0.18;0.18;0.18;0.18;0.18;0.18;1"
        keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
        dur="1s"
        begin="-0.125s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={19.5} cy={12} r={1.35}>
      <animate
        attributeName="opacity"
        values="1;0.18;0.18;0.18;0.18;0.18;0.18;0.18;1"
        keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
        dur="1s"
        begin="-0.250s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={17.3} cy={17.3} r={1.35}>
      <animate
        attributeName="opacity"
        values="1;0.18;0.18;0.18;0.18;0.18;0.18;0.18;1"
        keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
        dur="1s"
        begin="-0.375s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={12} cy={19.5} r={1.35}>
      <animate
        attributeName="opacity"
        values="1;0.18;0.18;0.18;0.18;0.18;0.18;0.18;1"
        keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
        dur="1s"
        begin="-0.500s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={6.7} cy={17.3} r={1.35}>
      <animate
        attributeName="opacity"
        values="1;0.18;0.18;0.18;0.18;0.18;0.18;0.18;1"
        keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
        dur="1s"
        begin="-0.625s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={4.5} cy={12} r={1.35}>
      <animate
        attributeName="opacity"
        values="1;0.18;0.18;0.18;0.18;0.18;0.18;0.18;1"
        keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
        dur="1s"
        begin="-0.750s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx={6.7} cy={6.7} r={1.35}>
      <animate
        attributeName="opacity"
        values="1;0.18;0.18;0.18;0.18;0.18;0.18;0.18;1"
        keyTimes="0;0.125;0.25;0.375;0.5;0.625;0.75;0.875;1"
        dur="1s"
        begin="-0.875s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export default LoadingCircleIcon;
