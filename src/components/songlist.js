import React from 'react';
import { connect } from 'react-redux'
import {selectSong} from '../actions'

const SongList = (props) => {
  console.log(props)
  const SongList = props.songs.map((song)=> {
     return   <div key={song.name}>
              <h1 style={{ fontFamily: 'Amatic SC'}}>{song.name}
              <br />
              <button style={{ backgroundColor: 'dodgerblue',
               display: 'grid',
               color:'white',
              fontWeight:'bold'}}>
               Select
               </button>
               </h1>
              </div>
  })

    return  <div style={{ marginLeft: 80,
                          marginTop: 50,
                          marginRight:680,
                          paddingLeft:30,
                          backgroundColor:'pink',
                          border:'1px solid black'}}>
                          <div>
                         {SongList}
                          </div>
                          </div>
}

const mapStateToProp = (state) => {
console.log(state)
  return { songs: state.songs}
}
export default connect(mapStateToProp, { selectSong })(SongList);
