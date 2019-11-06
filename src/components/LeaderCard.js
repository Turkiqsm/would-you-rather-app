import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
        margin: theme.spacing(3),
      },
    card: {
      display: 'flex',
      marginTop:theme.spacing(4),
      margin: 'auto',
      width:'50%'
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
  return (
      <Card className={classes.card}>
      <Container maxWidth="lg">

      <div className={classes.details}>
        <CardContent className={classes.content}>
        <Avatar alt="Remy Sharp" src={props.avatar} />
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Typography component="h6" variant="subtitle1">
          questions : {props.questions}
          </Typography>
          <Typography component="h6" variant="subtitle1">
          answers : {props.answers}
          </Typography>
          <Typography component="h6" variant="subtitle1">
          Score : {props.answers + props.questions }
          </Typography>
        </CardContent>
      </div>
      </Container>
    </Card>
  );
}