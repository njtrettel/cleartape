import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import RouteListItem from './RouteListItem';

const RouteList = (props) => {
  const { routes } = props;
  return (
    <ScrollView>
      <FlatList
        data={routes}
        keyExtractor={(_, i) => `${i}`}
        renderItem={({ item }) => <RouteListItem route={item} />}
      />
    </ScrollView>
  );
};

export default RouteList;
