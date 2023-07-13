import React from 'react';


const SongItem = ({song}) => {
  
  const handleClick = function(){
    console.log(`Clicked on ${song.name.title}`);
    onSongClicked(song);
  }

  return (
  <li onClick={handleClick}>{song.name.title}</li>
  )
}

export default SongItem;