import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import Toaster, { ToastStyles } from 'react-native-toaster';
import { Dropdown } from 'react-native-material-dropdown';
import RouteList from '../RouteList';
import { SearchBar } from 'react-native-elements';
import { fetchRoutes } from '../actions';
import {
  SCREEN_BACKGROUND_COLOR_DARK,
  PLACEHOLDER_COLOR,
  START_HOLD_COLOR
} from '../style';
import style from './style';

import { grades } from '../util';

const gradesWithAll = [{ value: null, label: 'All' }, ...grades];
const sortOptions = [
  { value: 'grade', label: 'Grade' },
  { value: 'lr', label: 'L > R' },
  { value: 'rl', label: 'R > L' }
];

const findStartHold = (holds = []) => {
  const startHolds = holds.filter(hold => hold.color === START_HOLD_COLOR);
  if (Array.isArray(startHolds) && startHolds.length > 0) {
    return startHolds[0];
  }
  return holds[0];
};

const sortRoutes = (routes, sortBy) => {
  if (sortBy === 'grade') {
    return routes.sort((a, b) => +a.grade[0] > +b.grade[0]);
  }
  return routes.sort((a, b) => {
    const aStartHold = findStartHold(a.holds);
    const bStartHold = findStartHold(b.holds);
    if (sortBy === 'lr') {
      return aStartHold.x > bStartHold.x;
    }
    return aStartHold.x < bStartHold.x;
  });
};

const Home = (props) => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [gradeFilter, setGradeFilter] = useState(gradesWithAll[0].value);
  const [sortOption, setSortOption] = useState(sortOptions[0].value);

  const routesInGrade = routes.filter(route => gradeFilter ? route.grade === gradeFilter : true);
  const searchedRoutes = routesInGrade.filter(route => route.name.toLowerCase().includes(searchText.toLowerCase()));
  const sortedRoutes = sortRoutes(searchedRoutes, sortOption);

  useEffect(() => {
    setLoading(true);
    fetchRoutes().then(routes => {
      setLoading(false);
      setRoutes(routes);
    }).catch(() => {
      setLoading(false);
      setError('Error: Could not get routes');
    });
  }, []);

  return (
    <View style={style.container}>
      {error && <Toaster message={{ text: error, styles: ToastStyles.error }} />}
      <View style={style.topBar}>
        <SearchBar
          containerStyle={[style.search, style.searchContainer]}
          inputContainerStyle={style.search}
          inputStyle={style.search}
          onChangeText={setSearchText}
          placeholder="Search"
          value={searchText}
        />
        <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate('SetRoute')}>
          <Text style={style.buttonText}>Set Route</Text>
        </TouchableOpacity>
      </View>
      <View style={style.filterBar}>
        <View style={style.filterOption}>
          <Text style={style.filterOptionLabel}>Grade</Text>
          <Dropdown
            labelFontSize={16}
            baseColor={PLACEHOLDER_COLOR}
            fontSize={16}
            value={gradeFilter}
            onChangeText={setGradeFilter}
            data={gradesWithAll}
            containerStyle={style.dropdown}
          />
        </View>
        <View style={style.filterOption}>
          <Text style={style.filterOptionLabel}>Sort By</Text>
          <Dropdown
            labelFontSize={16}
            baseColor={PLACEHOLDER_COLOR}
            fontSize={16}
            value={sortOption}
            onChangeText={setSortOption}
            data={sortOptions}
            containerStyle={style.dropdown}
          />
        </View>
        <View style={style.filterOptionPlaceholder} />
      </View>
      {loading
        ? <ActivityIndicator style={style.loading} size={80} color={SCREEN_BACKGROUND_COLOR_DARK} />
        : <RouteList routes={sortedRoutes} />
      }
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired
};

class Screen extends React.Component {
  static navigationOptions = {
    title: 'Clear Tape',
    headerTitleStyle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 26
    }
  };

  render() {
    return <Home {...this.props} />;
  }
}

export default Screen;
