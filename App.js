import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const numbers = [5408, 6604, 32158, 84984, 8774, 34871];
  const sortNumber = numbers.sort((a, b) => a - b);
  const [number, setNumber] = useState(0);
  const [idShow, setIdShow] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <SafeAreaView>
      <StatusBar />
      {}
      <View
        style={{
          marginTop: '50%',
          flexDirection: 'row',
          padding: 20,
          justifyContent: 'space-between',
        }}>
        <View style={styles.cardWrap}>
          <Text style={{fontWeight: 'bold'}}>show Number</Text>
          <Image
            source={require('./assets/number.png')}
            style={{height: 120, width: 120, marginTop: 20}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.cardWrap}>
          <Text style={{fontWeight: 'bold'}}>BMI Calculate</Text>
          <Image
            source={require('./assets/calculator.png')}
            style={{height: 120, width: 120, marginTop: 20}}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardWrap: {
    backgroundColor: 'white',
    width: '48%',
    height: 200,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default App;
