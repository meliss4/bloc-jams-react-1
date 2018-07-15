import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';


class Library extends Component { 
  constructor(props) {
    super(props);
    this.state = { albums: albumData };

  }

  render() {
   return ( 
     <div className="container">
     <div className='library .col-6 .col-sm-4'>
        {
          this.state.albums.map( (album, index) => 
          <Link to={`/album/${album.slug}`} key={index}>
                <div className="libraryInfo .col-6 .col-sm-3">
               <img id="album-art" src={album.albumCover} alt={album.title} />
               </div>
               <div className="libraryInfo .col-6 .col-sm-3">
                 <div>{album.title} -</div>
                 <div>- {album.artist} -</div>
                 <div>-  {album.songs.length} songs</div>
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