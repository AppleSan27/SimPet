import React from 'react';
import Logo from '../UserForm/Logo/Logo';
import classes from './nav.module.css';
import { Link, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SimplePaw from '../Paw/SimplePaw';
import { checkAuth } from '../../redux/actions/user.actions';


//  const Nav = ({user, audReg}) => { 
const Nav = (props) => { 
  
  // console.log(user);
  if(!props.user.name){
  return  <Navigate to='/start'/>} 

  //  const clickBtnRoom = () => {
  //     auzdReg.pause()
  //  }

  function clickBtnRoom(){
    //setChangeAva(true)
    props.audReg.pause()
    // console.log(props);
  }
   

    return (<>
    <div className={classes.nav}>
      <div className={classes.logo}>
      <Link to={'/'} className={classes.logoImg}>
        <Logo/>
      </Link>
        </div>
      {/* <div className={classes.navRight}> */}
        <div className={classes.navRightDown}>
        <div className={classes.navRightLeft}>
          <Link to={'/?period=day'} size="lg" variant="secondary">
                day
              </Link>  
              <Link size="lg" variant="secondary" to={'/?period=week'}>
          
                Week
         
              </Link>  
              <Link size="lg" variant="secondary" to={'/?period=month'}>
           
                Month
     
            </Link> 
              <Link size="lg" variant="secondary" to={'/?period=year'}>
         
                Year
         
              </Link>
        </div> 
        <div className={classes.navRightUpMenu}>
        {/* <Link to={'#'}>
            <button size="lg" variant="secondary">
                LK
            </button>
              </Link>   */}
              <Link onClick={clickBtnRoom} to={'/catroom'}>
                  КОМНАТА КОТИКА
              </Link>  
              <Link to={'#'}>
                {props.user.name}
            </Link> 
              <Link size="lg" variant="secondary" to={'/exit'}>
        
               ВЫХОД
          
              </Link>
        </div> 
   
        </div>
      {/* </div> */}
    </div>
    </>
  );
};


export default Nav


