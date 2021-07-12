import React from 'react';

interface LogoNavBarProps{
    type:'home' | 'other';
}
 const LogoNavBar:React.FC<LogoNavBarProps> = ({type}) =>{

    return(
        <>
        {type=="home" &&(
            <>
            <a className="nav-brand static-logo" href="#"><img src="assets/img/nspace-laranja.png" className="logo" alt="" /></a>
            <a className="nav-brand fixed-logo" href="#"><img src="assets/img/nspace-laranja.png" className="logo" alt="" /></a>
            </>
        )}

    {type=="other" &&(
            <>
          <img src="assets/img/NSPACE-01.png" className="logo" alt="" />
            </>
        )}
        
        </>
    )
}

export default LogoNavBar;