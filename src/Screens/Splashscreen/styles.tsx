import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../Constants/colors';
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 250,
    width: WIDTH - 70,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  titleTextContainer: {
    marginBottom: 30,
  },
  titleText: {
    fontSize: 28,
    color: 'black',
  },
  subTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitleText: {
    fontSize: 16,
    color: '#C2BDC3',
  },
  buttonContainer: {
    height: 55,
    width: '80%',
    backgroundColor: 'white',
    marginVertical: 30,
    marginHorizontal: 30,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  buttonTextContainer: {
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: colors.textblack,
  },
  buttonIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
