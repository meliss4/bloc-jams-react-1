import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';


class Library extends Component { 
  constructor(props) {
    super(props);
    this.state = { albums: albumData };

  }

  render() {
   return ( 
     <div className="container">
     <div className='library'>
        {
          this.state.albums.map( (album, index) => 
          <Link to={`/album/${album.slug}`} key={index}>
               <div className="libraryImage">
               <img id="album-art" src={album.albumCover} alt={album.title} />
               </div>
               <div className="libraryText">
                 <div>{album.title}</div>
                 <div> {album.artist}</div>
                 <div>{album.songs.length} songs</div>
               </div>
            </Link>
          )
        }
     </div>
     </div>
    );
  }
}

export default Library;