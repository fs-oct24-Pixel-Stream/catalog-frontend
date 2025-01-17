export const COLORS = {
  alpinegreen: '#637862',
  black: '#161717',
  blue: '#bad4e3',
  coral: '#ed6653',
  deeppurple: '#4b4057',
  gold: '#d6a987',
  graphite: '#525150',
  green: '#92d1b9',
  midnight: '#26303b',
  midnightgreen: '#3e5244',
  pacificblue: '#244857',
  pink: '#fadbd4',
  purple: '#c3bcd1',
  red: '#a30f25',
  rosegold: '#c7777b',
  Rosegold: '#c7777b',
  sierrablue: '#8ca4ba',
  silver: '#969fa8',
  skyblue: '#90d7f5',
  spaceblack: '#262729',
  spacegray: '#424141',
  starlight: '#faf1e8',
  white: '#f9f6ef',
  yellow: '#ffe681',
} as const;

export type ColorKey = keyof typeof COLORS;
