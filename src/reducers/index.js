import React from 'react';
import combineReducers from 'redux';

const songsListReducer = () => {
  return ([
    { name:'Waving flag', duration:'4:08'},
    { name:'Happy', duration:'5:08'},
    { name:'let me love you', duration:'3:28'},
    { name:'closer', duration:'4:58'}
  ])
}

const SelectedSongReducer = (selectedsong=[], action) => {
  if(action.type ==="SELECTED SONG"){
    return action.payload
  }
  else{
     return selectedsong;
  }
}

export const reducers = combineReducers({
  songs: songsListReducer,
  selectedSong: SelectedSongReducer
})
