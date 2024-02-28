import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  Event,
  RepeatMode,
} from 'react-native-track-player';
import localSongs from '../../Assets/Songs';

export async function getSonginfo() {
  const tracks = await TrackPlayer.getQueue();
  console.log(`First title: ${tracks[0].title}`);
  return tracks;
}

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior:
          AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.SeekTo,
      ],
      compactCapabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
      ],
      progressUpdateEventInterval: 2,
    });

    isSetup = true;
  } finally {
    return isSetup;
  }
}

export async function addTracks(songs: any) {
  const track3 = {
    id: '1',
    url: 'https://sample-music.netlify.app/death%20bed.mp3',
    title: 'Free_Test',
    artist: 'Free_Test',
    duration: 60,
  };
  const track2 = {
    id: '2',
    url: localSongs.song2,
    title: 'Beatles',
    artist: 'HeyJude',
    duration: 60,
  };
  const track1 = {
    id: '3',
    url: localSongs.song3,
    title: 'BertieHiggins',
    artist: 'Casablanca',
    duration: 60,
  };
  const track4 = {
    id: '4',
    url: localSongs.song4,
    title: 'Beat Testing',
    artist: 'Unknown',
    duration: 60,
  };

  await TrackPlayer.add([...songs]);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
}
