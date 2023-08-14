declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
// declare module '*.svg';
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module '*.svg?url';
