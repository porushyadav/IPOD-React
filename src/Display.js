import React from 'react';
//display screen of the Ipod
class Display extends React.Component {
  render()
  {
    const {menu,submenu}=this.props;
   
    return (
        <div className="display-screen" id="display">
        {!menu?
           <div className="inner-screen">
           

           <div>
              <h1 className="menu">Ipod</h1>
           </div>
           <ul className="list">
              <li id="music">
                Music
              </li>
              <li id="games">
                Games
              </li>
              <li id="settings">
                Settings
              </li>
              <li id="camera">
                Camera
              </li>
           </ul>
         
           </div>
          :null}

     {/* if submenu = true the show submenu */}
          {submenu&&menu?
            <div className="inner-screen">
            
 
            <div>
               <h1 className="menu">Ipod</h1>
            </div>
            <ul className="list">
               <li id="songs">
                 All Songs
               </li>
               <li id="artist">
                 Artist
               </li>
               <li id="album">
                 Album
               </li>
               <li id="favourites">
                 Favourite
               </li>
            </ul>
          
            </div>
           :null}
        </div>
    
    );
}};



export default Display;
