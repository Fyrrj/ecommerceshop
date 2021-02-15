import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import {Link, useLocation} from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import useStyles from "./styles";

const Navbar = ({totalItems}) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" component={Link} to="/">
            <img src={logo} alt="Whiskeyshop" height="25px" className={classes.image}/>
            Whiskey<span className={classes.titlespan}>hovel</span>
          </Typography>
          <div className={classes.grow}></div>
          {location.pathname === '/' && ( <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit" component={Link} to="/cart">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>
          </div>)}
        </Toolbar>
      </AppBar>  
    </>
  )
}

export default Navbar
