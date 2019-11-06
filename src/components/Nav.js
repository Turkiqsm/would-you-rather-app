import React,{Fragment} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import '../App.css'
import { Redirect } from 'react-router-dom'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingRght: theme.spacing(4),

    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    link: {
        margin: theme.spacing(1),
        marginRight: theme.spacing(6),
        textDecoration: 'none',
        color: 'white'

      },
    title: {
      marginLeft: theme.spacing(1),
      flexGrow: 1,
    },
  }),
);

export default function Nav (props) {

    function handle_LogOut(e) {
        e.preventDefault();
        props.logOut()
    }
    const classes = useStyles();
  return (
    <div className={classes.root}>
    <AppBar style={{textAlign: 'center'}} position="static">
      <Toolbar>
      <Redirect to='/Login' />
        {props.authedUser === null ? 
        <Fragment>
        <Typography className="header" variant="h6" >
        Would You Rather App
        </Typography>

        <Typography mx="auto" variant="h6" className={classes.title}>
        <Typography>
      <NavLink to="/Login"activeclass="active" color="inherit" className={classes.link}>
         Login
      </NavLink>
      <NavLink to="/LeaderBoard"  activeclass="active" color="inherit" className={classes.link}>
        LeaderBoard
      </NavLink>
        </Typography>
        </Typography>
        </Fragment>

        :       
        <Fragment>
        <Typography className="header" variant="h6" >
        Would You Rather App
        </Typography>
        <Typography mx="auto" variant="h6" className={classes.title}>
        
        <Typography >
      <NavLink to={`/${props.authedUser}`} activeclass="active" color="inherit" className={classes.link}>
        Home
      </NavLink>
      <NavLink to="/NewQuestions"  activeclass="active" color="inherit" className={classes.link}>
        New Quastion
      </NavLink>
      <NavLink to="/LeaderBoard"  activeclass="active" color="inherit" className={classes.link}>
        LeaderBoard
      </NavLink>
    </Typography>
        </Typography>
        <Typography>
      <NavLink to="/Login" onClick={handle_LogOut} activeclass="active" color="inherit" className={classes.link}>
        LogOut
      </NavLink>
    </Typography>
        
        </Fragment>
        
        }
      </Toolbar>
    </AppBar>
  </div>
  )
}