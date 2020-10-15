import { ImageSourcePropType } from 'react-native';

export interface IStack {
  name: string;
  photo: ImageSourcePropType;
}

export const stacks = [
  {
    name: 'A',
    photo: require('../assets/image-profile-1.jpg'),
  },
  {
    name: 'C',
    photo: require('../assets/image-profile-2.jpg'),
  },
  {
    name: 'C',
    photo: require('../assets/image-profile-4.jpg'),
  },
  { name: 'B', photo: { uri: 'https://img.icons8.com/officel/2x/person-male.png' } },
  {
    name: 'C',
    photo: { uri: 'https://www.clipartkey.com/mpngs/m/174-1746540_stock-person-female-icon-free-female-person-icon.png' },
  },
  {
    name: 'C',
    photo: null,
  },
  {
    name: 'C',
    photo: undefined,
  },
  {
    name: 'C',
    photo: null,
  },
  {
    name: 'C',
    photo: undefined,
  },
  {
    name: 'C',
    photo: null,
  },
  {
    name: 'C',
    photo: undefined,
  },
];
