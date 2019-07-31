import React, { useState, useEffect } from 'react';
import { Button, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import RouteList from '../RouteList';
import { SearchBar } from 'react-native-elements';
import { fetchRoutes } from '../actions';
import { SCREEN_BACKGROUND_COLOR_DARK } from '../style';
import style from './style';

const Home = (props) => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const search = (text) => {
    setSearchText(text);
  };

  const searchedRoutes = routes.filter(route => route.name.includes(searchText));

  useEffect(() => {
    setLoading(true);
    fetchRoutes().then(routes => {
      setLoading(false);
      setRoutes(routes);
    });
  }, []);

  return (
    <View style={style.container}>
      <View style={style.topBar}>
        <SearchBar
          containerStyle={[style.search, style.searchContainer]}
          inputContainerStyle={style.search}
          inputStyle={style.search}
          onChangeText={search}
          placeholder="Search"
          value={searchText}
        />
        <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate('SetRoute')}>
          <Text style={style.buttonText}>Set Route</Text>
        </TouchableOpacity>
      </View>
      {loading
        ? <ActivityIndicator style={style.loading} size={80} color={SCREEN_BACKGROUND_COLOR_DARK} />
        : <RouteList routes={searchedRoutes} />
      }
    </View>
  );
};

export default Home;
