import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../Constants/colors';
// Dimensions of the screen
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  songTitle: {
    fontSize: 32,
    marginTop: 50,
    color: '#ccc',
  },
  artistName: {
    fontSize: 24,
    color: '#888',
  },
  playlist: {
    marginTop: 40,
    marginBottom: 40,
  },
  playlistItem: {
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
  },
  trackProgress: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    color: '#eee',
  },
  bottomBtnContainer: {
    height: 55,
    width: '80%',
    backgroundColor: 'white',
    marginVertical: 30,
    marginHorizontal: 30,
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  bottambtnText: {flex: 2, alignItems: 'flex-end', justifyContent: 'center'},
  bottambtnIcon: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  musiccontainer: {
    height: HEIGHT / 1.6,
    backgroundColor: colors.white,
    marginHorizontal: 30,
    borderRadius: 30,
  },
  circularSliderContainer: {
    flex: 1,
    marginTop: -30,
  },
  trackInfoContainer: {
    flex: 1,
    marginTop: 30,
  },
  titleText: {
    color: colors.black,
    fontSize: 20,
    alignSelf: 'center',
  },
  subtitleText: {
    color: '#776676',
    fontSize: 16,
    alignSelf: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    marginTop: 20,
  },
  backButtonContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginStart: 20,
  },
  menuButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    marginEnd: 20,
  },
  controlsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  controlButton: {
    height: 28,
    width: 28,
  },
});

export default styles;
