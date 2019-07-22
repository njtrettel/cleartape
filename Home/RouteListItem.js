import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const RouteListItem = (props) => {
  const [expanded, setExpanded] = useState(false);
  const { route } = props;
  const onClick = () => setExpanded(!expanded);

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClick}
      >
        <Text>{route.name} - {route.grade}</Text>
        {expanded && <Text>Expanded</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default RouteListItem;
