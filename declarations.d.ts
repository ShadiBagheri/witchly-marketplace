// add a global declaration file that informs TypeScript how to handle CSS imports
// learn more about this https://medium.com/@heghine.dev357/next-js-css-typescript-declaration-fix-b9373d263935
declare module '*.css';

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
