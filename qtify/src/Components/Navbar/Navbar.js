import React from 'react';
import Search from '../Search/Search'
import logo from '../../assets/logo.png'
import styles from './Navbar.module.css'
import Button from '../Button/Button';


/**
 *  -Qtify Logo
 *  - Search bar
 *    -searchLogo
 *  - Give FeedBack button    
 
 */

const Navbar = ()=>{
  
     return(
        <nav className={styles.navbar}>
         <div className={styles.logoDiv}><img src={logo} alt='logo' width={67}/></div>
         <Search search={"Search a song of your choice"}/>
         <Button children="Give Feedback"/>
        </nav>
        
     )
}


export default Navbar;