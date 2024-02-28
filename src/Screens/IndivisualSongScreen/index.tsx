import Slider from "@react-native-community/slider";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import TrackPlayer, {
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from "react-native-track-player";
import localImages from "../../Assets/Images";
import localSongs from "../../Assets/Songs";
import CircularSlider from "../../Components/CircularSlider";
import { addTracks, setupPlayer } from "../../Services/TrackPlayerServices";
import styles from "./styles";

function format(seconds) {
  let mins = parseInt(seconds / 60)
    .toString()
    .padStart(2, "0");
  let secs = (Math.trunc(seconds) % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function IndivisualSongScreen({ tracks }: any) {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [queue, setQueue] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [trackTitle, setTrackTitle] = useState("");

  const Demo_tracks = [
    {
      url: localSongs.song6,
      title: "Gadar2 ",
      artist: "Gadar2 ",
      duration: 180,
    },
    {
      url: localSongs.song5, // Load media from the app bundle
      title: "Animal",
      artist: "deadmau5",
      duration: 166,
    },
  ];

  const addSongs = async () => {
    await addTracks(tracks === undefined ? Demo_tracks : tracks);
  };
  addSongs();

  useEffect(() => {
    const getcurrentTrack = async () => {
      let trackIndex = await TrackPlayer.getCurrentTrack();
      let trackObject = await TrackPlayer.getTrack(trackIndex);
      setTrackTitle(trackObject.title);
    };
    getcurrentTrack();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const { title } = track || {};
      setTrackTitle(title);
    }
  });

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }
      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  const { state: playerState } = usePlaybackState();
  const { position, duration } = useProgress(200);

  const handlePlayPress = async () => {
    if ((await TrackPlayer.getState()) == State.Playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  const handleShuffle = async () => {
    let queue = await TrackPlayer.getQueue();
    await TrackPlayer.reset();
    queue.sort(() => Math.random() - 0.5);
    await TrackPlayer.add(queue);

    loadPlaylist();
  };

  const loadPlaylist = async () => {
    const queue = await TrackPlayer.getQueue();
    setQueue(queue);
  };
  const pushSong = async (val) => {
    console.log("val: ", val);
    TrackPlayer.seekTo(await TrackPlayer.getPosition(20));
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#F2E6F2", "#E0E0F8", "#EDEFFC"]}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.musiccontainer}>
          <View style={styles.circularSliderContainer}>
            <CircularSlider />
          </View>
          <View style={styles.trackInfoContainer}>
            <Text style={styles.titleText}>{trackTitle}</Text>
            <View style={styles.innerContainer}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 200,
                  }}
                >
                  <Text style={{ color: "black" }}>{format(position)}</Text>
                  <Text style={{ color: "black" }}>{format(duration)}</Text>
                </View>
                <Slider
                  style={{ width: 200, height: 40 }}
                  minimumValue={0}
                  maximumValue={duration}
                  value={position}
                  onValueChange={(val) => TrackPlayer.seekTo(val)}
                  minimumTrackTintColor="#3498db"
                  maximumTrackTintColor="#bdc3c7"
                  thumbTintColor="#3498db"
                />
              </View>
              <View>
                <Controls onShuffle={handleShuffle} />
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

function Controls({ onShuffle }) {
  const { state: playerState } = usePlaybackState();

  const handlePlayPress = async () => {
    if ((await TrackPlayer.getState()) == State.Playing) {
      TrackPlayer.pause();
    } else {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.controlsContainer}>
      <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
        <Image source={localImages.refresh} style={styles.controlButton} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
        <Image source={localImages.backIcon} style={styles.controlButton} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePlayPress}>
        <Image
          source={
            playerState === "playing"
              ? localImages.pauseIcon
              : localImages.playIcon
          }
          style={styles.controlButton}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
        <Image source={localImages.nextIcon} style={styles.controlButton} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onShuffle}>
        <Image source={localImages.shuffleIcon} style={styles.controlButton} />
      </TouchableOpacity>
    </View>
  );
}

export default IndivisualSongScreen;
