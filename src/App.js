import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      songList: []
    }
    
    this.playMusic =  this.playMusic.bind(this);
    this.updateSongList = this.updateSongList.bind(this);
    
  }
  componentDidMount(){
   
   
  }
   
  playMusic(genre){
    let self = this;
   
    console.log(this.state.Genre + "2");
     let search = genre;

     if(search){

     let url = ("https://itunes.apple.com/search?term=" + search)

    fetch(url)
        .then(function(response){





          response.json().then(function(data){
          //console.log(data.resultCount);
          //console.log(data);
          let randomSelector = Math.floor(Math.random() * Math.floor(50));
          
          let player = document.getElementById('music-player');
          let musicPreview = data.results[randomSelector].previewUrl;
          console.log(musicPreview);
                 player.setAttribute('src', musicPreview);
                 player.play();

                 let songName = data.results[randomSelector].trackCensoredName;
                 //console.log("SONGNAME" + songName);

                 self.updateSongList(songName);



                  
         
  
    

        })
        })

        
      }
       

  }
  updateSongList(songName){

    //console.log("SONGNAME" + songName);
    var songList = this.state.songList;
    songList.push(songName);
    this.setState({
      songList: songList
    })
    //console.log("SONGNAME" + songName);
    //console.log(this.state.songList);
  }

              



  render() {

    let songList = this.state.songList.map((song) => {
      let songName = String(song);
      console.log("Mapping"+songName);
       
       return 
       <div id="Song" >
             
              
                <p>Testing</p>
              
             </div>
             
           
    })
    return (
      <div id="container">
      <div id="Header">
      <h1 id = "Title">Genre Randomizer!</h1>
      <h3>(Click on the icons below to hear a random song from that genre!)</h3>
       <section class="player">
      <audio id="music-player" controls="controls" src=""></audio>
    </section>
      </div>
      <div id="Genres">
      <div id="country"   onClick={() => { this.playMusic("country") }} >
      <img src='https://static.thenounproject.com/png/96504-200.png'/>
      <h1>Country </h1>  
      
      </div>
      <div id="rock"   onClick={() => { this.playMusic("rock") }}>
      <img src='https://png.icons8.com/metro/1600/guitar.png'/>
      <h1>Rock</h1>   
      
      </div>
      <div id="jazz"   onClick={() => { this.playMusic("jazz") }}>
      <img src="http://icons.iconarchive.com/icons/icons8/ios7/256/Music-Saxophone-icon.png"/>
      <h1>Jazz</h1> 
      
      </div>
      <div id="rap"   onClick={() => { this.playMusic("rap") }}>
      <img src="https://image.flaticon.com/icons/png/512/431/431251.png"/>
      <h1>Rap</h1> 
      
      </div>

      </div>
      <div id="List">
      {songList}
      </div>
      
      </div>
    );
  }
}

export default App;