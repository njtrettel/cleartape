import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import style from './style';

const image = require('../assets/wall.jpg');
const { width, height } = Image.resolveAssetSource(image);
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const Holds = (props) => {
  const {
    onDoubleTap,
    onZoomStart,
    onTouchStart,
    onTouchEnd,
    onTouchMove,
    holds
  } = props;
  const imagePercent = deviceWidth / width;
  const imageHeight = height * imagePercent;
  const imageMargin = (deviceHeight - imageHeight) / 2;

  return (
    <ReactNativeZoomableView
      maxZoom={2}
      minZoom={1}
      zoomStep={0.5}
      initialZoom={1}
      bindToBorders={true}
      onDoubleTapAfter={onDoubleTap}
      onZoomStart={onZoomStart}
      style={style.container}
    >
      <Image
        resizeMode="contain"
        style={style.image(imageHeight)}
        source={image}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={onTouchMove}
      />
      {holds.map(({ x, y, color }, i) => (
        <View key={i} style={style.hold(x, y + imageMargin, color)}></View>
      ))}
    </ReactNativeZoomableView>
  );
};

export default Holds;
