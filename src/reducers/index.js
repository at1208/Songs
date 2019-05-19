import { combineReducers } from 'redux';



const songsListReducer = () => {
  return ([
    { name:'Waving flag', duration:'4:08'},
    { name:'Love me like you do', duration:'5:08'},
    { name:'let me love you', duration:'3:28'},
    { name:'closer', duration:'4:58'}
  ])
}

const SelectedSongReducer = (selectedSong=[], action) => {
  if(action.type ==="SELECTED SONG"){
    return action.payload
  }
  else{
     return selectedSong;
  }
}

export default combineReducers({
  songs: songsListReducer,
  selectedSong: SelectedSongReducer
})
