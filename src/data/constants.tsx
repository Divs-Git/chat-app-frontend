import {
  Camera,
  ChatCircleDots,
  File,
  Gear,
  Image,
  Phone,
  SignOut,
  Sticker,
  User,
  Users,
} from 'phosphor-react';

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

const Profile_Menu = [
  {
    title: 'Profile',
    icon: <User />,
  },
  {
    title: 'Settings',
    icon: <Gear />,
  },
  {
    title: 'Profile',
    icon: <SignOut />,
  },
];

const Nav_Buttons = [
  {
    index: 0,
    icon: <ChatCircleDots />,
  },
  {
    index: 1,
    icon: <Users />,
  },
  {
    index: 2,
    icon: <Phone />,
  },
];

const Message_options = [
  {
    title: 'Reply',
  },
  {
    title: 'React to message',
  },
  {
    title: 'Forward message',
  },
  {
    title: 'Star message',
  },
  {
    title: 'Report',
  },
  {
    title: 'Delete Message',
  },
];

export { SpeedDialActions, Profile_Menu, Nav_Buttons, Message_options };
