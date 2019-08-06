import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { imageHeight, imageMargin, calculateHoldCoordinates } from '../util';
import style from './style';

const image = require('../assets/wall.jpg');

const Holds = (props) => {
  const {
    onDoubleTap,
    onZoomStart,
    onTouchStart,
    onTouchEnd,
    onTouchMove,
    holds
  } = props;

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
      {holds.map((hold, i) => {
        const { x, y } = calculateHoldCoordinates(hold.x, hold.y);
        return (
          <View key={i} style={style.hold(x, y + imageMargin, hold.color)}></View>
        );
      })}
    </ReactNativeZoomableView>
  );
};

export default Holds;
