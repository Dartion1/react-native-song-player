import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../Constants/colors';
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    marginTop: 20,
  },
  profileContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageContainer: {
    height: 50,
    width: 50,
    backgroundColor: colors.white,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  greetingContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  greetingText: {
    fontSize: 20,
    color: '#776676',
  },
  menuIconContainer: {
    flex: 1,
    justifyContent: 'center',
    marginEnd: 20,
  },
  titleTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
  titleText: {
    fontSize: 20,
    color: '#776676',
  },
  practicesContainer: {
    flex: 1,
  },
  latestPracticesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  latestPracticesHeaderText: {
    fontSize: 18,
    color: colors.black,
  },
  viewAllText: {
    fontSize: 18,
    color: colors.black,
  },
  latestPracticesCards: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  practiceCardContainer: {
    height: 150,
    borderRadius: 20,
    width: WIDTH / 2.4,
    backgroundColor: colors.white,
  },
  practiceCardImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginEnd: 10,
  },
  practiceCardImage: {
    height: 40,
    width: 40,
  },
  practiceCardContent: {
    flex: 1,
    marginStart: 10,
  },
  practiceCardTitle: {
    fontSize: 18,
    color: colors.black,
    marginBottom: 8,
  },
  practiceCardSubtitle: {
    fontSize: 17,
    color: '#C4C4C4',
  },
  bottomPlayContainer: {
    height: 130,
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  continueText: {
    fontSize: 18,
    color: '#C4C4C4',
    marginTop: 8,
    marginStart: 25,
  },
  bottomPlayContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
  },
  bottomPlayTitle: {
    fontSize: 16,
    color: colors.black,
    marginTop: 10,
  },
  bottomPlayIcon: {
    height: 50,
    width: 50,
    marginEnd: 20,
    marginTop: -5,
  },
  bottomPlayProgress: {
    flex: 1,
    width: '64%',
  },
  bottomPlayProgressText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    fontSize: 12,
    color: colors.black,
    marginStart: 25,
  },
  progressBar: {
    marginStart: 25,
  },
});

export default styles;
