import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {

  console.log(song)
  return <div style={{ marginLeft: 380,}}>
        <h1 style={{fontFamily: 'Amatic SC'}}> Song Details </h1>
        <div style={{fontFamily: 'Amatic SC'}}>
        Title: { song.name}
        </div >
        <div style={{fontFamily: 'Amatic SC'}}>
        Singer: { song.singer}
        </div>
        <div style={{fontFamily: 'Amatic SC'}}>
        Duration: { song.duration}
        </div>
        <div>
       <img style={{height:200, width:280 }} src={ song.url} alt='' />
        </div>
        </div>
}




const mapStateToProps = state => {
  return {song: state.selectedSong}
}
export default connect(mapStateToProps) (SongDetail)
