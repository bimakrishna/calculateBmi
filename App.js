import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () => {
  const numbers = [5408, 6604, 32158, 84984, 8774, 34871];
  const sortNumber = numbers.sort((a, b) => a - b);
  const [number, setNumber] = useState(0);
  const [idShow, setIdShow] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (height > 0 && weight > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [height, weight]);

  const show = id => {
    setIdShow(id);
  };

  const handleNext = () => {
    if (number < numbers.length - 1) {
      setNumber(number + 1);
    } else {
      setNumber(0);
    }
  };

  const handleBack = () => {
    setNumber(0);
    setIdShow(0);
    setResult(0);
  };

  const handleHeight = val => {
    setHeight(val);
  };

  const handleWeight = val => {
    setWeight(val);
  };

  const handleCalculate = () => {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    setResult(bmi);
    setHeight(0);
    setWeight(0);
  };

  return (
    <SafeAreaView>
      <StatusBar />
      {idShow === 0 ? (
        <View style={styles.homeWrap}>
          <TouchableOpacity style={styles.cardWrap} onPress={() => show(1)}>
            <Text style={styles.fontWeight}>show Number</Text>
            <Image
              source={require('./assets/number.png')}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardWrap} onPress={() => show(2)}>
            <Text style={styles.fontWeight}>BMI Calculate</Text>
            <Image
              source={require('./assets/calculator.png')}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      ) : idShow === 1 ? (
        <View style={styles.firstOptionWrap}>
          <Text style={styles.titleWrap}>NUMBERS</Text>
          <View style={styles.underTitleWrap}>
            <Text
              style={
                styles.textNumberWrap
              }>{`${number}: ${sortNumber[number]}`}</Text>
            <View style={styles.handleButtonWrap}>
              <TouchableOpacity onPress={handleNext} style={styles.buttonWrap}>
                <Text style={styles.leftButton}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleBack} style={styles.buttonWrap}>
                <Text style={styles.rightButton}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.resultWrap}>
          <Text style={styles.titleWrap}>BMI Calculate</Text>
          <View style={styles.calculateWrap}>
            <Text style={styles.resultCalculateWrap}>{result}</Text>
            <View style={styles.textInputWrap}>
              <TextInput
                keyboardType="numeric"
                value={weight}
                onChangeText={handleWeight}
                placeholder="insert weight (kg)"
                style={styles.leftInput}
              />
              <TextInput
                keyboardType="numeric"
                value={height}
                onChangeText={handleHeight}
                placeholder="insert height (cm)"
                style={styles.rightInput}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={handleCalculate}
                disabled={disabled}
                style={[
                  styles.handleCalculateWrap,
                  {backgroundColor: disabled ? '#DDDDDD' : '#069A8E'},
                ]}>
                <Text>Calculate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleBack}
                style={styles.handleBackWrap}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
  homeWrap: {
    marginTop: '50%',
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  imageStyle: {height: 120, width: 120, marginTop: 20},
  firstOptionWrap: {padding: 30, alignItems: 'center'},
  titleWrap: {fontWeight: 'bold', fontSize: 20},
  fontWeight: {fontWeight: 'bold'},
  underTitleWrap: {marginTop: '30%'},
  textNumberWrap: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  handleButtonWrap: {marginTop: 50},
  buttonWrap: {
    borderWidth: 5,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
    backgroundColor: 'white',
  },
  leftButton: {fontSize: 20, fontWeight: 'bold', color: 'blue'},
  rightButton: {fontSize: 20, fontWeight: 'bold', color: 'red'},
  resultWrap: {padding: 30, alignItems: 'center'},
  calculateWrap: {marginTop: '20%', alignItems: 'center'},
  resultCalculateWrap: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  textInputWrap: {marginTop: 20},
  leftInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  rightInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  handleBackWrap: {
    backgroundColor: '#FF6363',
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
  },
  handleCalculateWrap: {
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
  },
});

export default App;
