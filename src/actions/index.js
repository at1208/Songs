import React from 'react';

export const selectedSong = (song) => {
  return({
    type:'SELECTED SONG',
    payload: song

  })
}
