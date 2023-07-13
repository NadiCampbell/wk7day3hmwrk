
import React, {useState, useEffect} from 'react'; 

const TopChartsBox = () => {
   
    const [songs, SetSongs] = useState();
    const [selectedSong, setSelectedSong] = useState();

    useEffect(() => {
       getSongs();
    });

    const onSongClicked = function(song){
        setSelectedSong()
    }

console.log(songs)

    const getSongs = async function() {
        const res = await fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json");
        const songs = await res.json();
        SetSongs(songs);
    }
   

    return(
        <div className="App">
           {songs.title}
        </div>
    );
};

export default TopChartsBox;