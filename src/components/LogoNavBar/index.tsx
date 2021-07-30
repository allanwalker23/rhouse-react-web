import React from 'react';

interface LogoNavBarProps{
    type:'home' | 'other';
}
 const LogoNavBar:React.FC<LogoNavBarProps> = ({type}) =>{

    return(
        <>
        {type=="home" &&(
            <>
            <a className="nav-brand static-logo" href="#"><img src="assets/img/logo-branco.png" className="logo" style={{width:'550px'}} alt="" /></a>
            <a className="nav-brand fixed-logo" href="#"><img src="assets/img/logo-preto.png" className="logo" style={{width:'550px'}} alt="" /></a>
            </>
        )}

        {type=="other" &&(
            <>
          <img src="assets/img/logo-preto.png" className="logo" alt="" />
            </>
        )}
        
        </>
    )
}

export default LogoNavBar;