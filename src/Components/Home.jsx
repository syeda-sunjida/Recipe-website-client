import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import OurChef from './OurChef';
import ExtraOne from './ExtraOne';


const Home = () => {
    const bannerStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: '#fff',
      };
    
      const imageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      };
    
      const textContainerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
      };
    
      const textStyle = {
        fontSize: '24px',
        color: '#fff',
        textShadow: '1px 1px #000',
      };
    // const user = useContext(AuthContext);
    return (
        <div>
            <div style={bannerStyle}>
      <img
        src="https://www.lacademie.com/wp-content/uploads/2022/03/bengali-foods.jpg"
        alt="Banner Image"
        style={imageStyle}
      />
      <div style={textContainerStyle}>
        <div style={textStyle}>
          <marquee>Food is symbolic of love when words are inadequate. Good food is the foundation of genuine happiness</marquee>
        </div>
      </div>
    </div>
            <OurChef></OurChef>
            {/* <h2>This is home {user&& <span>{user.displayName}</span>}</h2> */}
            <ExtraOne></ExtraOne>
        </div>
    );
};

export default Home;