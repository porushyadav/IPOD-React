import React from 'react';
import  WheelRotation from './WheelRotation';
import Display from './Display';
import ZingTouch from 'zingtouch';


class App extends React.Component {

  //to change the state the various componenets
  constructor()
  {
    super();
    this.state={
      menu:true,
      music:false,
      games:false,
      setting:false,
      camera:false,
      submenu:false,
      song:false,
      artist:false,
      album:false,
      favourite:false


    }


  }

  //handle the rotate events
 handleRotate=()=>
  {
    var touchArea = document.getElementById('wheel');
    var myRegion = new ZingTouch.Region(touchArea);
    let angle=0;
    //zincTouch library
    myRegion.bind(touchArea, 'rotate', (e)=>{
      //for getting the angle
      angle =(angle + Math.abs(e.detail.distanceFromLast))%100;

      //fetching id of various divs
      const music=document.getElementById('music');
      const games=document.getElementById('games');
      const settings=document.getElementById('settings');
      const camera=document.getElementById('camera');
      const{menu}=this.state;
      //used for selecting the events and updating the state
      if(angle>=0&&angle<=15&&!menu)
      {
       music.classList='select';
       games.classList='unselect';
       settings.classList='unselect';
       camera.classList='unselect';
       this.setState({
        music:true,
        games:false,
        setting:false,
        camera:false
      } )}
      else if(angle>15&&angle<=30&&!menu)
      {
      
        music.classList='unselect';
        games.classList='select';
        settings.classList='unselect';
        camera.classList='unselect';
        this.setState({
          music:false,
          games:true,
          setting:false,
          camera:false
        })
      }
      else if(angle>30&&angle<=45&&!menu)
      {
        music.classList='unselect';
        games.classList='unselect';
        settings.classList='select';
        camera.classList='unselect';
        this.setState({
          music:false,
          games:false,
          setting:true,
          camera:false
        })
      }
      else if(angle>45&&angle<=60&&!menu)
      {
        music.classList='unselect';
        games.classList='unselect';
        settings.classList='unselect';
        camera.classList='select';
        this.setState({
          music:false,
          games:false,
          setting:false,
          camera:true
        })
      }
    
  
    //checking for submenu in music and handling submenu
    if(this.state.submenu)
    {
     
       //fecting id of various submenu
      const song=document.getElementById('songs');
      const artist=document.getElementById('artist');
      const album=document.getElementById('album');
      const favourites=document.getElementById('favourites');


      //checking for zingtouch
      if(angle>=0&&angle<=15)
      {
    
      song.classList='select';
      artist.classList='unselect';
      album.classList='unselect';
      favourites.classList='unselect';

      this.setState({
        song:true,
        artist:false,
        album:false,
        favourite:false
      })
      }
      else if(angle>15&&angle<=30)
      {
        song.classList='unselect';
        artist.classList='select';
        album.classList='unselect';
        favourites.classList='unselect';
        this.setState({
          song:false,
          artist:true,
          album:false,
          favourite:false
        })
      }
      else if(angle>30&&angle<=45)
      {
        song.classList='unselect';
        artist.classList='unselect';
        album.classList='select';
        favourites.classList='unselect';
        this.setState({
          song:false,
          artist:false,
          album:true,
          favourite:false
        })
      }
      else if(angle>45&&angle<=60)
      {
        song.classList='unselect';
        artist.classList='unselect';
        album.classList='unselect';
        favourites.classList='select';
        this.setState({
          song:false,
          artist:false,
          album:false,
          favourite:true
        })
      }
    } });
  }

  //if center menu is clicked than changing the state of menu
  handleMenuClick=(props)=>
  {
    props.stopPropagation();
    const{menu}=this.state;
    this.setState({
      menu:!menu,
      submenu:false
    })
    const display=document.getElementById('display');
    display.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTwsE8OpF3chgRewUeB4BEHo-46VoYZZB_jw&usqp=CAU')";
    this.handleRotate();
  }
  //if center button is clicked
  handleCenterClick=(props)=>
  {
    props.stopPropagation();
    const{music,games,setting,camera}=this.state;
    const display=document.getElementById('display');
    

    //if we are in the main menu and we clicked on center button to select the event
    if(music)
    {
      this.setState({
        menu:true,
        submenu:true
      })
      console.log("asdsa");
      display.style.backgroundImage="url('https://i.pinimg.com/originals/b4/c4/b3/b4c4b30a8ec510b8190d5364b9198cd5.jpg')";
    }
    else if(games)
    {
      this.setState({
        menu:true
      })
        display.style.backgroundImage="url('data:image/png;base64,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')";
    }
    else if(setting)
    {
      this.setState({
        menu:true
      })
        display.style.backgroundImage="url('data:image/png;base64,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')";
    }
    else if(camera)
    {
      this.setState({
        menu:true,
        submenu:false
      })
        display.style.backgroundImage="url('data:image/jpeg;base64,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')";
    }
    //if we are inside the submenu
    if(this.state.submenu)
    {
      const{song,artist,album,favourite}=this.state;
      this.setState({
        menu:true,
        submenu:false,
      })
      if(song)
      {
       
        display.style.backgroundImage="url('https://lh3.googleusercontent.com/wne7D0S1tAvDwYK64mcmpUjOSHsZukcGRJskREtFVQuBLlmDxDwx0zVQh1Ky5k9WR2eL=w720-h310')"
      }
      else if(artist)
      {    
        display.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCzj3e8gV4b-Y2Sd0GUmLgWtFGH_6_yvnMxw&usqp=CAU')"   
      }
      else if(album)
      {
        display.style.backgroundImage="url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBtKsDsRav4hh4y0hpQDoxdF1jRf4XKxnMPQ&usqp=CAU')"
      }
      else if(favourite)
      {
        display.style.backgroundImage="url('https://image.flaticon.com/icons/svg/786/786432.svg')"
    
      }
    }
  }
 
  //render function to change the states
  render()
  {
  return (
    <div className="App">
    <div className="outer">
      
      <Display
       menu={this.state.menu}
       submenu={this.state.submenu}/>
      <WheelRotation 
        onRotate={this.handleRotate}
        onMenuClick={this.handleMenuClick}
        onCenterClick={this.handleCenterClick}/>
    </div>
    </div>
  );
}};

export default App;
