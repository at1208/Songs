import { combineReducers } from 'redux';


const songsListReducer = () => {
  return ([
    { name:'Waving flag', duration:'4:08', singer:"K'naan",url:'http://theinspirationroom.com/daily/musicvideos/2010/6/knaan-waving-flag.jpg' },
    { name:'Love me like you do', duration:'5:08', singer:'Ellie Goulding', url:'http://1.bp.blogspot.com/-H2dRc9roEag/VMD9A4p4d-I/AAAAAAAADxA/6uxmthqtOAM/s1600/love-me-like-you-do-thelifetrends.jpg'},
    { name:'let me love you', duration:'3:28',singer:'DJ Snake',url:'http://cf.c.ooyala.com/w3bmF4NzE6RtFq8vn4EArm-UN_eG19lk/Ut_HKthATH4eww8X4xMDoxOjA4MTsiGN'},
    { name:'Despacito', duration:'4:58', singer:'Luis Fonsi',url:'http://www.guinnessworldrecords.com/Images/despacito%20header_tcm25-520895.jpg'}
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
