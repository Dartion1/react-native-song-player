// import React, { FC, useCallback, useRef, useState } from 'react';
// import { Dimensions, PanResponder } from 'react-native';
// import Svg, { Circle, G, Path, Text } from 'react-native-svg';

// interface Props {
//   btnRadius?: number;
//   dialRadius?: number;
//   dialWidth?: number;
//   meterColor?: string;
//   textColor?: string;
//   fillColor?: string;
//   strokeColor?: string;
//   strokeWidth?: number;
//   textSize?: number;
//   value?: number;
//   min?: number;
//   max?: number;
//   xCenter?: number;
//   yCenter?: number;
//   onValueChange?: (x: number) => number;
// }

// const App: FC<Props> = ({
//   btnRadius = 15,
//   dialRadius = 130,
//   dialWidth = 5,
//   meterColor = '#0cd',
//   textColor = '#fff',
//   fillColor = 'none',
//   strokeColor = '#fff',
//   strokeWidth = 0.5,
//   textSize = 10,
//   value = 0,
//   min = 0,
//   max = 359,
//   xCenter = Dimensions.get('window').width / 2,
//   yCenter = Dimensions.get('window').height / 2,
//   onValueChange = x => x,
// }) => {
//   const [angle, setAngle] = useState(value);

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: (e, gs) => true,
//       onStartShouldSetPanResponderCapture: (e, gs) => true,
//       onMoveShouldSetPanResponder: (e, gs) => true,
//       onMoveShouldSetPanResponderCapture: (e, gs) => true,
//       onPanResponderMove: (e, gs) => {
//         let xOrigin = xCenter - (dialRadius + btnRadius);
//         let yOrigin = yCenter - (dialRadius + btnRadius);
//         let a = cartesianToPolar(gs.moveX - xOrigin, gs.moveY - yOrigin);

//         if (a <= min) {
//           setAngle(min);
//         } else if (a >= max) {
//           setAngle(max);
//         } else {
//           setAngle(a);
//         }
//       },
//     }),
//   ).current;

//   const polarToCartesian = useCallback(
//     angle => {
//       let r = dialRadius;
//       let hC = dialRadius + btnRadius;
//       let a = ((angle - 90) * Math.PI) / 180.0;

//       let x = hC + r * Math.cos(a);
//       let y = hC + r * Math.sin(a);
//       return {x, y};
//     },
//     [dialRadius, btnRadius],
//   );

//   const cartesianToPolar = useCallback(
//     (x, y) => {
//       let hC = dialRadius + btnRadius;

//       if (x === 0) {
//         return y > hC ? 0 : 180;
//       } else if (y === 0) {
//         return x > hC ? 90 : 270;
//       } else {
//         return (
//           Math.round((Math.atan((y - hC) / (x - hC)) * 180) / Math.PI) +
//           (x > hC ? 90 : 270)
//         );
//       }
//     },
//     [dialRadius, btnRadius],
//   );

//   const width = (dialRadius + btnRadius) * 2;
//   const bR = btnRadius;
//   const dR = dialRadius;
//   const startCoord = polarToCartesian(0);
//   var endCoord = polarToCartesian(angle);

//   return (
//     <Svg width={width} height={width}>
//       <Circle
//         r={dR}
//         cx={width / 2}
//         cy={width / 2}
//         stroke={strokeColor}
//         strokeWidth={strokeWidth}
//         fill={fillColor}
//       />

//       <Path
//         stroke={meterColor}
//         strokeWidth={dialWidth}
//         fill="none"
//         d={`M${startCoord.x} ${startCoord.y} A ${dR} ${dR} 0 ${
//           angle > 180 ? 1 : 0
//         } 1 ${endCoord.x} ${endCoord.y}`}
//       />

//       <G x={endCoord.x - bR} y={endCoord.y - bR}>
//         <Circle
//           r={bR}
//           cx={bR}
//           cy={bR}
//           fill={meterColor}
//           {...panResponder.panHandlers}
//         />
//         <Text
//           x={bR}
//           y={bR + textSize / 2}
//           fontSize={textSize}
//           fill={textColor}
//           textAnchor="middle">
//           {onValueChange(angle) + ''}
//         </Text>
//       </G>
//     </Svg>
//   );
// };

// export default React.memo(App);

// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import IndivisualSongScreen from '../Screens/IndivisualSongScreen';
import Splashscreen from '../Screens/Splashscreen';
import ScreenNames from './screenNames';
// import Icon from 'react-native-vector-icons/Ionicons';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <Icon name="menu" size={30} color="#4F8EF7" />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.Splashscreen}>
        <Stack.Screen
          name={ScreenNames.Splashscreen}
          component={Splashscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ScreenNames.HomeScreen}
          component={HomeScreen}
          options={{headerShown: false}}
        />

<Stack.Screen
          name={ScreenNames.IndivisualSongScreen}
          component={IndivisualSongScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
