import { faker } from '@faker-js/faker';

const MEMBERS_LIST = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    online: true,
  },
];

const CallLogs = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: true,
    online: true,
    time: '09:36',
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: false,
    online: true,
    time: '12:02',
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: true,
    incoming: true,
    online: false,
    time: '10:35',
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: false,
    online: true,
    time: '04:00',
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: true,
    online: false,
    time: '08:42',
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: true,
    online: false,
    time: '08:42',
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: true,
    online: false,
    time: '08:42',
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    missed: false,
    incoming: true,
    online: false,
    time: '08:42',
  },
];

const ChatList = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '9:36',
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '12:02',
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '10:35',
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '04:00',
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '08:42',
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '08:42',
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '08:42',
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: faker.image.avatar(),
    name: faker.name.firstName(),
    msg: faker.music.songName(),
    time: '08:42',
    unread: 0,
    pinned: false,
    online: false,
  },
];

const Chat_History = [
  {
    type: 'msg',
    message: 'Hi 👋🏻, How are ya ?',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'divider',
    text: 'Today',
  },
  {
    type: 'msg',
    message: 'Hi 👋 Panda, not bad, u ?',
    incoming: false,
    outgoing: true,
  },
  {
    type: 'msg',
    message: 'Can you send me an abstarct image?',
    incoming: false,
    outgoing: true,
  },
  {
    type: 'msg',
    message: 'Ya sure, sending you a pic',
    incoming: true,
    outgoing: false,
  },

  {
    type: 'msg',
    subtype: 'img',
    message: 'Here You Go',
    img: faker.image.url(),
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    message: 'Can you please send this in file format?',
    incoming: false,
    outgoing: true,
  },

  {
    type: 'msg',
    subtype: 'doc',
    message: 'Yes sure, here you go.',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'link',
    preview: faker.image.url(),
    message: 'Yep, I can also do that',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'reply',
    reply: 'This is a reply',
    message: 'Yep, I can also do that',
    incoming: false,
    outgoing: true,
  },
];

const SHARED_LINKS = [
  {
    type: 'msg',
    subtype: 'link',
    preview: faker.image.url(),
    message: 'Yep, I can also do that',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'link',
    preview: faker.image.url(),
    message: 'Yep, I can also do that',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'link',
    preview: faker.image.url(),
    message: 'Yep, I can also do that',
    incoming: true,
    outgoing: false,
  },
];

const SHARED_DOCS = [
  {
    type: 'msg',
    subtype: 'doc',
    message: 'Yes sure, here you go.',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'doc',
    message: 'Yes sure, here you go.',
    incoming: true,
    outgoing: false,
  },
  {
    type: 'msg',
    subtype: 'doc',
    message: 'Yes sure, here you go.',
    incoming: true,
    outgoing: false,
  },
];

export {
  ChatList,
  CallLogs,
  Chat_History,
  SHARED_LINKS,
  SHARED_DOCS,
  MEMBERS_LIST,
};
