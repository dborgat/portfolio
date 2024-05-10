import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{html,js,css,svg}', // Agregar contenido de la carpeta public
  ],
  theme: {
    colors: {
      greenJet: '#343330',
      nigth: '#0F110C',
      raisinBlack: '#282230',
      taupe: '#54453B',
      charcoal: '#2E4052',
      delftBlue: '#303073',
      slateBlue: '#6161BD',
      nonPhotoBlue: '#C3F1FD',
      snowWhithe: '#FFFBFC',
      battleshipGrey: '#8A897C',
      oldGold: '#D5B942',
      primaryBackground: '#1e1f20',
      cardinal: '#C41E3D',
      red: '#EC0927',
      frenchGrey: '#CACFD6',
      gunMetal: '#0A2239',
      cerulean: '#06759D',
      eerieBlack: '#1F1E1F',
      pumpkin: '#FA8334',
      silver: '#BFC0C0',
      Linkedin: '#0e76a8',
      transparent: 'transparent',
    },
    extend: {
      backgroundImage: (theme) => ({
        sun: `url('/sun.svg')`,
        moon: `url('/moon.svg')`,
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
