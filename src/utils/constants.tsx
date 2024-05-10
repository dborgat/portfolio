import { Icons } from '@/components/icons';
import { color } from 'framer-motion';

const createIcon = (IconComponent: React.ElementType) => (
  <IconComponent
    className={`md:w-14 w-8 md:h-14 h-8 self-end text-frenchGrey`}
  />
);

export const buttonsLinks = [
  {
    name: 'Projects',
    icon: createIcon(Icons.FolderOpenDot),
    mobileReverse: false,
    link: '/projects',
  },
  {
    name: 'About',
    icon: createIcon(Icons.AboutMe),
    mobileReverse: true,
    link: '/about',
  },
  {
    name: 'Experience',
    icon: createIcon(Icons.Up),
    mobileReverse: false,
    link: '/experience',
  },
  {
    name: 'Contact',
    icon: createIcon(Icons.Handshake),
    mobileReverse: true,
    link: '/contact',
  },
];

export const techListArray = [
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
  { name: 'Git', color: '#EAE151' },
];

export const navbarData = [
  { name: 'About', link: '/about' },
  { name: 'Projects', link: '/projects' },
  { name: 'Experience', link: '/experience' },
  { name: 'Contact', link: '/contact' },
];
