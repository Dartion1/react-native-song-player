import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/Ionicons';
import localImages from '../../Assets/Images';
import ScreenNames from '../../Routes/screenNames';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image source={localImages.Profile} style={styles.profileImage} />
          </View>
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hello Mark</Text>
        </View>
        <View style={styles.menuIconContainer}>
          <Icon name="menu" size={40} color="#999dff" />
        </View>
      </View>
    );
  };

  const titleText = () => {
    return (
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>What's your mood today?</Text>
      </View>
    );
  };

  const practicesContainer = () => {
    return (
      <View style={styles.practicesContainer}>
        <View style={styles.latestPracticesHeader}>
          <Text style={styles.latestPracticesHeaderText}>Latest Practices</Text>
          <Text style={styles.viewAllText}>View all</Text>
        </View>
        <View style={styles.latestPracticesCards}>
          {practiceCard(
            localImages.splashScreenImage,
            'Mind',
            `Let's train it`,
          )}
          {practiceCard(
            localImages.splashScreenImage,
            'Sleep',
            `Restful sleep`,
          )}
        </View>
        <View style={styles.latestPracticesCards}>
          {practiceCard(
            localImages.splashScreenImage,
            'Relax',
            `Reframe stress`,
          )}
          {practiceCard(
            localImages.splashScreenImage,
            'Focus',
            `Focus on work`,
          )}
        </View>
      </View>
    );
  };

  const practiceCard = (image, title, subtitle) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(ScreenNames.IndivisualSongScreen)}
        style={styles.practiceCardContainer}>
        <View style={styles.practiceCardImageContainer}>
          <Image source={image} style={styles.practiceCardImage} />
        </View>
        <View style={styles.practiceCardContent}>
          <Text style={styles.practiceCardTitle}>{title}</Text>
          <Text style={styles.practiceCardSubtitle}>{subtitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const bottomPlay = () => {
    return (
      <View style={styles.bottomPlayContainer}>
        <Text style={styles.continueText}>Continue</Text>
        <View style={styles.bottomPlayContent}>
          <Text style={styles.bottomPlayTitle}>Breathing Practices</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ScreenNames.IndivisualSongScreen)
            }>
            <Image
              source={localImages.playIcon}
              style={styles.bottomPlayIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomPlayProgress}>
          <View style={styles.bottomPlayProgressText}>
            <Text style={styles.progressText}>5:34</Text>
            <Text style={styles.progressText}>13:45</Text>
          </View>
          <Progress.Bar style={styles.progressBar} progress={0.3} width={200} />
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#F2E6F2', '#E0E0F8', '#EDEFFC']}
      style={styles.container}>
      {header()}
      {titleText()}
      {practicesContainer()}
      {bottomPlay()}
    </LinearGradient>
  );
};

export default HomeScreen;
