import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Accordion from 'react-native-collapsible/Accordion';
import KeyValue from './KeyValue';
import ViewHoldsLink from './ViewHoldsLink';
import style from './style';
import { HIGHLIGHT_COLOR } from '../style';

const gradeToColorMap = (grade) => ({
  '0-2': 'green',
  '3-5': 'orange',
  '6-8': 'red',
  '9+': 'black'
}[grade]);

const renderHeader = (route, _, expanded) => {
  const { grade, name } = route;
  const color = gradeToColorMap(grade);
  const icon = expanded ? 'chevron-up' : 'chevron-down';
  const expandedStyle = expanded ? style.expanded : style.collapsed;
  return (
    <View style={[style.container, expandedStyle]}>
      <View style={style.circle(color)} />
      <Text style={style.text}>{name}</Text>
      <FontAwesome style={style.icon} name={icon}/>
    </View>
  );
};
const renderContent = (route, _, expanded) => {
  const { grade, setter, description, holds } = route;
  const expandedStyle = expanded ? style.expanded : style.collapsed;
  return (
    <View style={[style.content, expandedStyle]}>
      <KeyValue keyName="grade" value={`v${grade}`} />
      <KeyValue keyName="setter" value={setter || 'Unknown'} />
      {description && <KeyValue keyName="description" value={description} />}
      <KeyValue as={ViewHoldsLink} keyName="" value="View holds" holds={holds} />
    </View>
  );
};

const RouteList = (props) => {
  const [activeSections, setActiveSections] = useState([]);
  const onChange = sections => setActiveSections(sections);
  const { routes, style } = props;
  return (
    <ScrollView style={style}>
      <Accordion
        underlayColor={HIGHLIGHT_COLOR}
        activeSections={activeSections}
        sections={routes}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={onChange}
      />
    </ScrollView>
  );
};

export default RouteList;
