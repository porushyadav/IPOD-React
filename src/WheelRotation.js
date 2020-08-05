import React from 'react';

//design of wheel for rotation
class WheelRotation extends React.Component {
  render()
  {
    return (
        <div className="container">
        <div style={styles.wheel} id="wheel" onClick={this.props.onRotate}>
           <div className="top">
            <h3><b style={{cursor:'pointer'}} id="menu-click" onClick={this.props.onMenuClick}>Menu</b></h3>
           </div>
           <div className="down">
           <img 
              alt="next-button"
              src="https://image.flaticon.com/icons/svg/2404/2404569.svg"
              style={styles.img}
              />
           </div>
           <div className="center-button" id="center-button" onClick={this.props.onCenterClick}>
           </div>
           <div className="left">
           <img 
              alt="next-button"
              src="https://image.flaticon.com/icons/svg/3039/3039308.svg"
              style={styles.img}
              />
           </div>
           <div className="right">
           <img 
              alt="next-button"
              src="https://image.flaticon.com/icons/svg/3039/3039308.svg"
              style={styles.img}
              />
           </div>
        </div>
        </div>
     
    
    );
}};
//css styles for the wheel
const styles={
  wheel:{
    height:200,
    width:200,
    background:'white',
    margin:'auto',
    marginTop:20,
    borderRadius:'50%',
    position:'relative'
  },
  img:
  {
      height:'inherit',
      width:'inherit',
      cursor: 'pointer',
      background:'white',


  }
}
export default WheelRotation;
