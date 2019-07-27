import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { withNavigation } from 'react-navigation';
import style from './style';

const ToggleButton = (props) => {
  const { active, color, title, onPress } = props;
  const opacity = active ? 1 : 0.5;
  return (
    <View style={style.button(opacity, color, 100)}>
      <TouchableOpacity onPressIn={onPress}>
        <Text style={style.toggle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const PickHolds = (props) => {
  const initialRoute = props.navigation.getParam('route', {});
  const [holds, setHolds] = useState(initialRoute.holds || []);
  const [touchLocation, setTouchLocation] = useState(null);
  const [shouldAddHold, setShouldAddHold] = useState(false);
  const [startToggle, setStartToggle] = useState(false);
  const [endToggle, setEndToggle] = useState(false);

  const undo = () => {
    const newHolds = [...holds];
    newHolds.pop();
    setHolds(newHolds);
  };
  const onTouch = (e) => {
    const { locationX, locationY } = e.nativeEvent;
    setTouchLocation({ x: locationX, y: locationY });
    setShouldAddHold(true);
  }
  const onTouchEnd = (e) => {
    const { locationX, locationY } = e.nativeEvent;
    shouldAddHold && setHolds([...holds, {
      x: locationX,
      y: locationY,
      color: startToggle ? 'rgb(0,255,0)' : (endToggle ? 'red' : 'white')
    }]);
  };
  const onMove = (e) => {
    if (!shouldAddHold) {
      return;
    }
    const { locationX, locationY } = e.nativeEvent;
    const { x, y } = touchLocation;
    if (Math.abs(locationX - x) > 5 || Math.abs(locationY - y) > 5) {
      setShouldAddHold(false);
    }
  };
  const onDoubleTap = () => {
    undo();
  };
  const onZoomStart = () => {
    setShouldAddHold(false);
  };
  const toggleStart = () => {
    setEndToggle(false);
    setStartToggle(!startToggle);
  };
  const toggleEnd = () => {
    setStartToggle(false);
    setEndToggle(!endToggle);
  };
  const submit = () => {
    props.navigation.replace('SetRoute', {
      route: { ...props.navigation.getParam('route'), holds }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={style.buttonsContainer}>
        <ToggleButton active={startToggle} color="green" title="Start" onPress={toggleStart} />
        <ToggleButton active={endToggle} color="rgba(255,0,0,.8)" title="End" onPress={toggleEnd} />
        <TouchableOpacity style={style.button(1, 'transparent', 50)} onPress={undo}>
          <FontAwesome style={style.icon} name="undo"/>
        </TouchableOpacity>
      </View>
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
          style={style.image}
          source={require('../assets/wall.jpg')}
          onTouchStart={onTouch}
          onTouchEnd={onTouchEnd}
          onTouchMove={onMove}
        />
        {holds.map(({ x, y, color }, i) => (
          <View key={i} style={style.hold(x, y, color)}></View>
        ))}
      </ReactNativeZoomableView>
      <View style={style.submitContainer}>
        <TouchableOpacity style={style.submit} onPress={submit}>
          <Text style={style.submitText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

class Screen extends React.Component {
  static navigationOptions = {
    title: 'Pick Holds'
  };

  render() {
    return <PickHolds {...this.props} />;
  }
}

export default withNavigation(Screen);
