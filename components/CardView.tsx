import { Colors } from '@/constants/Colors';
import { listProps } from '@/types/CommonTypes';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

export type CardViewProps = {
 data: listProps;
 onPress?: Function;
};

// TODO: clean-up.
const imgNames = ['bmc1', 'bmc2', 'bmc3','bmc4', 'bmc5', 'bmc6']; 

const CardView: React.FC<CardViewProps> = ({ data, onPress =() => {} }) => {

const getRandomImage = () => imgNames[(Math.random() * imgNames.length)];

return (
 <Card style={styles.container}>
    <Card.Cover source={require('../assets/images/bmc1.jpg')} />
     <Card.Content style={styles.content}>
     <View style={styles.viewContainer}>
       <MaterialCommunityIcons name="target" size={24}/> 
       <Text style={styles.textInfo}>{data.place} - {data.pincode}</Text>
     </View>
     <View style={styles.viewContainer}>
       <MaterialCommunityIcons name="clock-outline" size={24}/> 
       <Text style={styles.textInfo}>{data.date} / {data.startTime}</Text>
     </View>
     <View style={styles.viewContainer}>
       <MaterialCommunityIcons name="currency-usd" size={24}/> 
       <Text style={styles.textInfo}>SGD {data.chargePerPerson}</Text>
     </View>
      <Text style={styles.textContainer}> {data.availableSlot} available </Text>
    </Card.Content>
 </Card>);
};

export default CardView;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteColor,
    marginBottom: 10,
    marginTop: 10,
    padding: 2,
    boxShadow: `0px 4px 5px 0px ${Colors.tertiaryColor}`,
  },
  content: {
    margin: 10,
    paddingLeft: 0,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  textContainer: {
    paddingTop: 3,
    marginBottom: 15,
  },
  textInfo: {
    marginTop: 1,
    marginLeft: 10,
  },
});