import * as React from 'react';
import type { SVGProps } from "react";

const CardHeartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
     xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}><rect x={5} y={2} width={14} height={20} rx={2} /><path d="M5 16h14" /><path d="M12 12.8C12 12.8 8 10.2 8 8c0-1.2.9-2 2-2 .9 0 1.6.5 2 1.2.4-.7 1.1-1.2 2-1.2 1.1 0 2 .8 2 2 0 2.2-4 4.8-4 4.8Z" />
  </svg>
);

export default CardHeartIcon;