import { Image, Dimensions } from 'react-native';

const image = require('./assets/wall.jpg');
const { width, height } = Image.resolveAssetSource(image);
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

export const grades = [{
  value: '0-2', label: 'v0-2'
}, {
  value: '3-5', label: 'v3-5'
}, {
  value: '6-8', label: 'v6-8'
}, {
  value: '9+', label: 'v9+'
}];

const imagePercent = deviceWidth / width;
export const imageHeight = height * imagePercent;
export const imageMargin = (deviceHeight - imageHeight) / 2;

export const calculateHoldPercentages = (x, y) => ({
  x: x / deviceWidth,
  y: y / imageHeight
});

export const calculateHoldCoordinates = (x, y) => ({
  x: x * deviceWidth,
  y: y * imageHeight
});
