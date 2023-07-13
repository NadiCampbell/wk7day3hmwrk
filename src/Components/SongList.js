import React from 'react'; 
import SongItem from './SongItem';

const SongList = ({songs}) => {
    
    const songItems = songs.map((song, position, title, artist) => {
        return <SongItem song={song} key={position} onSongClicked={onSongClicked} />
    })
}

export default SongList;