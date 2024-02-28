import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import localImages from '../../Assets/Images';
import ScreenNames from '../../Routes/screenNames';
import styles from './styles';

const Splashscreen = ({navigation}) => {
  const imageContainer = () => {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={localImages.splashScreenImage} />
      </View>
    );
  };

  const titleContainer = () => {
    return (
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>Time to meditate</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitleText}>Take a breath,</Text>
          <Text style={styles.subTitleText}>and ease your mind</Text>
        </View>
      </View>
    );
  };

  const buttonContainer = () => {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate(ScreenNames.HomeScreen)}>
        <View style={styles.buttonTextContainer}>
          <Text style={styles.buttonText}>Let's get started</Text>
        </View>
        <View style={styles.buttonIconContainer}>
          <Icon name="arrow-forward-outline" size={30} color="#4F8EF7" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      colors={['#FDEEF3', '#F6ECF4', '#F1E5F3']}
      style={styles.container}>
      {imageContainer()}
      {titleContainer()}
      {buttonContainer()}
    </LinearGradient>
  );
};

export default Splashscreen;
