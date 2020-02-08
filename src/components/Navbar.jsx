import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { 
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Typography,
    makeStyles
 } from '@material-ui/core';

 const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Nav(){

    const classes = useStyles();

    return (
        <AppBar position="static" className="root">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    @yaellizarraga
                </Typography>
            </Toolbar> 
        </AppBar>
    )
}