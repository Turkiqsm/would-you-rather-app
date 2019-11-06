import React, { Component } from 'react'
import { connect } from 'react-redux'
import MediaControlCard from './MediaControlCard'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {handleSaveQuestionAnswer} from '../actions/users'
import { Redirect } from 'react-router-dom'

class Answer extends Component {
    state = {
        optionOne:'',
        optionTwo: '',
        toHome: false,
      }

      handleSubmit = (answer) => {    
        const { dispatch, authedUser, questionID } = this.props
        dispatch(handleSaveQuestionAnswer(authedUser, questionID, answer))
        
        this.setState(() => ({
            text: '',
            toHome:true,
        }))
    }
    render() {
        const {  toHome } = this.state
        const { authedUser } = this.props
        
        if (toHome === true) {
          return <Redirect to={`/${authedUser}`}  />
        }
      const {questionID ,name, avatar ,author,answers } = this.props
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <MediaControlCard 
      avatar={avatar} 
      author={author} 
      name ={name}
      answers = {answers}
      questionID = {questionID}    
      handleSubmit = {this.handleSubmit}
    />
    </Container>
  </React.Fragment>

  );
}
}
function mapStateToProps ({ questions,authedUser, users}, props) {
    const { id } = props.match.params
    console.log(id)
    console.log(authedUser)
    const author = questions[id].author
    console.log(author)
    const name = users[questions[id].author].name
    const avatar = users[author].avatarURL
    const answers = [questions[id].optionOne.text , questions[id].optionTwo.text]
  return {
    author: author,
    avatar: avatar,
    name: name,
    answers: answers

  }
}
export default connect(mapStateToProps)(Answer)