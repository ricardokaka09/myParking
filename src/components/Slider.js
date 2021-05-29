/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet, Animated} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {windowWidth, windowHeight} from '../utils/Dimentions';
const width = windowWidth;
const height = windowHeight / 4;
const data = [
  {
    title: 'Anise Aroma Art Bazar',
    url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 1,
  },
  {
    title: 'Food inside a Bowl',
    url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 2,
  },
  {
    title: 'Vegatable Salad',
    url:
      'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    id: 3,
  },
];
const Slider = () => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  // const change = ({nativeEvent}) => {
  //   const slide = Math.ceil(
  //     nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
  //   );
  // };
  return (
    <View style={{width: width, height: height}}>
      <ScrollView
        pagingEnabled
        horizontal
        // onScroll={change()}
        showsHorizontalScrollIndicator={false}
        style={{width, height}}>
        {data.map((item, index) => (
          <Image
            key={index}
            source={{uri: item.url}}
            style={{width, height, resizeMode: 'cover'}}
          />
        ))}
      </ScrollView>

      <View style={styles.dotView}>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: '#595959',
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    // right: width / 2,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default Slider;
