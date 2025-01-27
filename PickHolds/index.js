import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Holds from '../ViewHolds/Holds';
import { withNavigation } from 'react-navigation';
import { calculateHoldPercentages } from '../util';
import {
  START_HOLD_COLOR,
  END_HOLD_COLOR,
  HOLD_COLOR,
  START_TOGGLE_COLOR,
  END_TOGGLE_COLOR
} from '../style';
import style from './style';

const DRAG_THRESHOLD = 1;

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

ToggleButton.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
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
  };
  const onTouchEnd = (e) => {
    const { locationX, locationY } = e.nativeEvent;
    const { x, y } = calculateHoldPercentages(locationX, locationY);
    shouldAddHold && setHolds([...holds, {
      x, y,
      color: startToggle ? START_HOLD_COLOR : (endToggle ? END_HOLD_COLOR : HOLD_COLOR)
    }]);
  };
  const onMove = (e) => {
    if (!shouldAddHold) {
      return;
    }
    const { locationX, locationY } = e.nativeEvent;
    const { x, y } = touchLocation;
    if (Math.abs(locationX - x) > DRAG_THRESHOLD || Math.abs(locationY - y) > DRAG_THRESHOLD) {
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
    <View style={{ flex: 1, position: 'absolute', top: 0, height: '100%' }}>
      <View style={style.buttonsContainer}>
        <ToggleButton active={startToggle} color={START_TOGGLE_COLOR} title="Start" onPress={toggleStart} />
        <ToggleButton active={endToggle} color={END_TOGGLE_COLOR} title="End" onPress={toggleEnd} />
        <TouchableOpacity style={style.button(1, 'transparent', 50)} onPress={undo}>
          <FontAwesome style={style.icon} name="undo"/>
        </TouchableOpacity>
      </View>
      <Holds
        onDoubleTap={onDoubleTap}
        onZoomStart={onZoomStart}
        onTouchStart={onTouch}
        onTouchEnd={onTouchEnd}
        onTouchMove={onMove}
        holds={holds}
      />
      <View style={style.submitContainer}>
        <TouchableOpacity style={style.submit} onPress={submit}>
          <Text style={style.submitText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

PickHolds.propTypes = {
  navigation: PropTypes.object.isRequired
};

class Screen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return <PickHolds {...this.props} />;
  }
}

export default withNavigation(Screen);
