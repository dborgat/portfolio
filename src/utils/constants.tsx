import { Icons } from '@/components/icons';

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
