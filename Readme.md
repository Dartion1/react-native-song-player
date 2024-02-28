Package Name: react-native-song-player

Description:

Play and control your favorite tunes seamlessly with the YourChosenPackageName npm package. This lightweight and versatile library empowers developers to integrate powerful song playback features into their applications effortlessly.

Key Features:

    🎵 Play and Pause: Effortlessly start and pause songs with simple API calls.
    ⏭️ Skip and Rewind: Navigate through playlists with ease using skip and rewind functionalities.
    🔊 Volume Control: Fine-tune the audio experience with adjustable volume controls.
    🎶 Metadata Information: Retrieve song details such as title, artist, and album for a rich user experience.

Usage:

```yaml
import React from 'react';
import IndividualSongScreen from 'react-native-song-player';
import localSongs from './src/Assets/Songs';

const Demo_tracks = [
  {
    url: localSongs.song6,
    title: 'Gadar2',
    artist: 'Gadar2',
    duration: 180,
  },
  {
    url: localSongs.song5,
    title: 'Animal',
    artist: 'deadmau5',
    duration: 166,
  },
];

const App = () => {
  return <IndividualSongScreen tracks={Demo_tracks} />;
};

export default App;
```

Props:

| Name     | Type             | Default      | Description                                                                                                       |
| -------- | ---------------- | ------------ | ----------------------------------------------------------------------------------------------------------------- |
| `tracks` | Array of Objects | **required** | An array of song objects containing url, title, artist, and duration. Each object represents a song to be played. |

Example:

```yaml

const tracks = [
  {
    url: 'https://example.com/song1.mp3',
    title: 'Song 1',
    artist: 'Artist 1',
    duration: 240,
  },
  // Add more song objects as needed
];
```

Usage:

Pass the tracks prop with an array of song objects to the IndividualSongScreen component. Each song object should have the properties url, title, artist, and duration.

```yaml
<IndividualSongScreen tracks={tracks} />
```
