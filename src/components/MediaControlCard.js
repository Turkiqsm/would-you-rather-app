import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
        margin: theme.spacing(3),
      },
    card: {
      display: 'flex',
      marginBottom:theme.spacing(4),
      width:'100%'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    margin: {
        marginLeft: "80%",
      },
  }),
);

export default function MediaControlCard(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('optionOne');
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit= () =>{
      props.handleSubmit(value, props.authedUser, props.questionID)
  }
  return (
      <Card className={classes.card}>
      <Container maxWidth="lg">
    <form onSubmit={handleSubmit}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <Avatar alt="Remy Sharp" src={props.avatar} />
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
        </CardContent>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Would you Rather</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="optionOne" control={<Radio />} label={props.answers[0]} />
          <FormControlLabel value="optionTwo" control={<Radio />} label={props.answers[1]} />
        </RadioGroup>
      </FormControl>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="add"
        style={{marginLeft: "80%", margin:'2%'}}
        type='submit'
        >
        Submit
        </Fab>
        
      </div>
      </form>
      </Container>
    </Card>
  );
}