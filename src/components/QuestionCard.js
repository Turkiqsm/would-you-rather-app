import React, { Component } from 'react'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { NavLink } from 'react-router-dom'



class QuestionCard extends Component {
    render(){
      const {questionID ,name, avatar ,answers,answered,onePercentage,TwoPercentage } = this.props
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
    <Card style={{      
        display: 'flex',
      marginBottom:'10%',
      width:'100%'}}
      >
      <Container maxWidth="lg">

      <div style={{      
          display: 'flex',
      flexDirection: 'column',}}>
        <CardContent style={{      
            flex: '1 0 auto',
            }}>
        <Avatar alt="Remy Sharp" src={avatar} />
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
        </CardContent> 


        { Object.keys(answered).includes(questionID) ? 
            <Typography variant="body2"  component="p">
                {answered[questionID] === answers[0] ?
            <React.Fragment>

                <FormControl component="fieldset" style={{margin:'4%'}}>
                <FormLabel style={{marginBottom:'4%'}} component="legend">Would you Rather</FormLabel>
                <FormLabel style={{marginBottom:'4%', backgroundColor:'#64ffda'}} >{answers[0]}| %{onePercentage * 100}</FormLabel>
                <FormLabel style={{marginBottom:'4%'}} >{answers[1]}| %{TwoPercentage * 100}</FormLabel>                
            </FormControl>
            </React.Fragment>
                    : 
            <React.Fragment>
                <FormControl component="fieldset" style={{margin:'4%'}}>
                <FormLabel style={{marginBottom:'4%'}} component="legend">Would you Rather</FormLabel>
                <FormLabel style={{marginBottom:'4%'}} >{answers[0]}| %{onePercentage * 100}</FormLabel>
                <FormLabel style={{marginBottom:'4%', backgroundColor:'#64ffda'}} >{answers[1]}| %{TwoPercentage * 100}</FormLabel>           
            </FormControl>
            </React.Fragment>
                    }
            </Typography>            
            :
            <FormControl component="fieldset" style={{margin:'4%'}}>
            <FormLabel style={{marginBottom:'4%'}} component="legend">Would you Rather</FormLabel>
            <FormLabel style={{marginBottom:'4%'}} >{answers[0]}</FormLabel>
            <FormLabel style={{marginBottom:'4%'}} >{answers[1]}</FormLabel>
            <NavLink to={`questions/${questionID}`}   activeclass="active" color="inherit">
                <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                style={{marginLeft: "80%",}}
                >
                Poll
                </Fab>
            </NavLink>
        </FormControl>
        }
    </div>
      </Container>
    </Card>
    </Container>
  </React.Fragment>

  );
}
}
function mapStateToProps ({ questions,authedUser, users}, {questionID}) {
  const author = questions[questionID].author
  const name = users[questions[questionID].author].name
  const avatar = users[author].avatarURL
  const answers = [questions[questionID].optionOne.text , questions[questionID].optionTwo.text]
  const answered = users[authedUser].answers
  const totalVotes = questions[questionID].optionOne.votes.length + questions[questionID].optionTwo.votes.length
  const onePercentage = questions[questionID].optionOne.votes.length / totalVotes 
  const TwoPercentage =questions[questionID].optionTwo.votes.length / totalVotes 
  return {
    author: author,
    avatar: avatar,
    name: name,
    answers: answers,
    answered: answered,
    onePercentage: onePercentage,
    TwoPercentage :TwoPercentage

  }
}
export default connect(mapStateToProps)(QuestionCard)