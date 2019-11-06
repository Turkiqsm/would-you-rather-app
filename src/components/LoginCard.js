import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    minWidth: '40%',

  },
}));

export default function CustomizedSelects(props) {

  const classes = useStyles();
  const [username, setUsername] = React.useState('');
  const {usersInfo} = props;

  const handleChange = event => {
    setUsername(event.target.value);
  };
  const handleSignIn = () => {
    props.signIn(username)
  };
  return (
    <Card className={classes.card}>
    <Container maxWidth="sm">      
        <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">Choose your name</InputLabel>
            <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={username}
            onChange={handleChange}
            input={<BootstrapInput />}
            >
            {usersInfo.map((user) => 
            
            
            <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
            
            )}
            </Select>
        </FormControl>
        <FormControl className={classes.margin}>
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          onClick={handleSignIn}
          style={{margin:'24px 1px 1px   1px', width:'60%' }}
        >
          Login
        </Fab>
        </FormControl>
      </Container>
    </Card>
  );
}