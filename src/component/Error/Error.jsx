import React from 'react'; 
import Lottie from 'lottie-react' 
import error from '../../assets/98642-error-404.json'

const Error = () => {
    return (
        <div>
          <Lottie style={{height:'400px', width:'400px',margin:'auto'}} animationData={error} loop={true} />; 
          <h2 style={{textAlign:'center', color:'#000'}}>Page Not Found !</h2>
        </div>
    );
};

export default Error;