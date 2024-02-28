import React, { useState } from 'react';
import { Image, View } from 'react-native';
import Svg, { Circle, Defs, G, Line, LinearGradient, Stop } from 'react-native-svg';
import localImages from '../../Assets/Images';

const CircularSlider = () => {
  const [progress, setProgress] = useState(0);

  const onProgressChange = (event) => {
    const { locationX, locationY } = event.nativeEvent;
    // Calculate the angle based on the touch position
    let angle = Math.atan2(locationY - 150, locationX - 150) * (180 / Math.PI);
    // Adjust the angle to start from 0 and go up to 360
    angle = (angle + 360) % 360;

    // Ensure the angle is within the desired range (270 to 360 degrees)
    if (angle >= 270 && angle <= 360) {
      // Convert the angle to a percentage
      const newProgress = (angle - 270) / 90;
      setProgress(newProgress);
    }
  };

  const radius = 60;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const filledCircumference = 0.8 * circumference; // 80% of the circumference
  const strokeDasharray = `${filledCircumference}, ${circumference}`;
  const strokeDashoffset = filledCircumference * (1 - progress);

  return (
    <View>
      <Svg height="300" width="300">
        <Defs>
          <LinearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0" stopColor="#e74c3c" />
            <Stop offset="0.8" stopColor="#e74c3c" />
            {/* <Stop offset="0.8" stopColor="#3498db" />
            <Stop offset="1" stopColor="#3498db" /> */}
          </LinearGradient>
        </Defs>
        <G transform={{ rotate: '-90 150 150' }}>
          <Circle
            cx="150"
            cy="150"
            r={radius}
            stroke="#e0e0e0"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <Circle
            cx="150"
            cy="150"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
          />
          <Line
            x1="150"
            y1="150"
            x2="150"
            y2="50"
           // stroke="#3498db"
            strokeWidth="2"
          />
        </G>
      </Svg>
      <Image
        source={localImages.splashScreenImage}
        style={{
          position: 'absolute',
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          top: 150 - radius,
          left: 150 - radius,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 150 - radius - strokeWidth / 2,
          left: 150 - strokeWidth / 2,
          width: radius * 2 + strokeWidth,
          height: radius * 2 + strokeWidth,
          borderRadius: radius + strokeWidth / 2,
          backgroundColor: 'transparent',
          transform: [{ rotate: '-90deg' }],
          zIndex: 10,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderMove={(event) => onProgressChange(event)}
      />
    </View>
  );
};

export default CircularSlider;


