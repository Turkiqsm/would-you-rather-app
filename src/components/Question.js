import React, { Component } from 'react'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import QuestionCard from './QuestionCard'

class Question extends Component {
    render(){
      const {questionID ,name, avatar ,author,answers,answered,onePercentage,TwoPercentage } = this.props
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <QuestionCard 
      avatar={avatar} 
      author={author} 
      name ={name}
      answers = {answers}
      answered ={answered}
      questionID = {questionID}
      onePercentage= {onePercentage}
      TwoPercentage ={TwoPercentage}      

    />
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
export default connect(mapStateToProps)(Question)