import { Camera, File, Image, Sticker, User } from 'phosphor-react';

const SpeedDialActions = [
  {
    color: '#4da5fe',
    icon: <Image size={24} />,
    y: 102,
    title: 'Photo/Video',
  },
  {
    color: '#1b8cfe',
    icon: <Sticker size={24} />,
    y: 172,
    title: 'Stickers',
  },
  {
    color: '#0172e4',
    icon: <Camera size={24} />,
    y: 242,
    title: 'Image',
  },
  {
    color: '#0157e7',
    icon: <User size={24} />,
    y: 312,
    title: 'Contact',
  },
  {
    color: '#0147e7',
    icon: <File size={24} />,
    y: 382,
    title: 'Document',
  },
];

export { SpeedDialActions };
