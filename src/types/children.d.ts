import React from 'react';

export type PropsWithChildern<T = unknown> = Readonly<
  {
    childrem?: React.ReactNode;
  } & T
>;
