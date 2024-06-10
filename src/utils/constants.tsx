import { link } from 'fs';

export const techListArray = [
  { name: 'JavaScript', color: '#F0DB' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#264DE4' },
  { name: 'React', color: '#E55381' },
  { name: 'Next.js', color: '#8CB369' },
  { name: 'Tailwind CSS', color: '#F1D302' },
  { name: 'Styled Components', color: '#23CE6B' },
  { name: 'Ant Design', color: '#FFD449' },
  { name: 'Material UI', color: '#D34F73 ' },
  { name: 'Redux', color: '#FCFF6C' },
  { name: 'Gsap', color: '#386C0B' },
  { name: 'TypeScript', color: '#B9314F' },
  { name: 'Framer Motion', color: '#CE1483' },
  { name: 'Node.js', color: '#ABE188' },
  { name: 'MongoDB', color: '#4DB33D' },
  { name: 'Sql', color: '#e17644b9' },
  { name: 'Docker', color: '#0DB7ED' },
  { name: 'Php', color: '#4F5B93' },
  { name: 'Git', color: '#EAE151' },
];

export const workExperience = [
  {
    title: ' Frontend Developer',
    logo: false,
    tecnologies: ['React', 'Next.js', 'Tailwind CSS', 'Styled Components'],
    company: 'Freelance',
  },
  {
    title: ' Frontend Developer',
    logo: '/genoma.svg',
    tecnologies: ['React', 'Ant Design (AntD)', 'Python.'],
    company: 'GenomaWork',
  },
  {
    title: ' Frontend Developer',
    logo: '/outside.svg',
    tecnologies: ['React', 'Material UI', 'Docker', 'Styled Components'],
    company: 'Outside the cube',
  },
  {
    title: ' Frontend Developer',
    logo: '/itesa.svg',
    tecnologies: ['React', 'Gatsby', 'CSS'],
    company: 'Itesa',
  },
  {
    title: ' Asistente De Profesor',
    logo: '/plataforma.svg',
    tecnologies: [
      'React',
      'Tailwind CSS',
      'Styled Components',
      'Css',
      'MongoDB',
      'Sql',
      'Docker',
      'Php',
      'TypeScript',
      'Node.js',
    ],
    company: 'Plataforma 5',
  },
];

export const projects = [
  {
    title: 'Nutri y Vita',
    image: '/nutri.png',
    link: 'https://nutriyvita.com.ar',
  },
  {
    title: 'Rescataditos',
    image: '/rescataditos.png',
    link: 'https://vercel.com/dborgats-projects/rescataditos',
  },
  {
    title: 'Promociones',
    image: '/promocodes.png',
    link: 'https://github.com/dborgat/promociones',
  },
];

export const headerRouter = [
  { link: '/about', color: 'cardinal' },
  { link: '/projects', color: 'slateBlue' },
  { link: '/contact', color: 'cardinal' },
];
