import React, { Component } from 'react'
import { connect } from 'react-redux'
import MediaControlCard from './MediaControlCard'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {handleSaveQuestionAnswer} from '../actions/users'
import { Redirect } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

class Answer extends Component {
    state = {
        value:'optionOne',
        toHome: false,
      }
      
      handleSubmit = () => {    
        const { dispatch ,questionID,authedUser} = this.props
        const {value} = this.state
        console.log(this.props)
        dispatch(handleSaveQuestionAnswer(authedUser, questionID, value))

        this.setState(() => ({
            toHome:true,
        }))
    }

      handleChange = (e) => {
        const option = e.target.value
    
        this.setState(() => ({
            value:option
        }))
      }
    render() {
        const {  toHome,value } = this.state
        const { name, avatar,authedUser ,answers } = this.props
            if (toHome === true) {
                return <Redirect to={`/${authedUser}`}  />
            }
        console.log(authedUser)
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
    <Card >
      <Container maxWidth="lg">
    <form onSubmit={this.handleSubmit}>
      <div >
        <CardContent >
        <Avatar alt="Remy Sharp" src={avatar} />
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
        </CardContent>
        <FormControl component="fieldset" >
        <FormLabel component="legend">Would you Rather</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={this.handleChange}>
          <FormControlLabel value="optionOne" control={<Radio />} label={answers[0]} />
          <FormControlLabel value="optionTwo" control={<Radio />} label={answers[1]} />
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
    </Container>
  </React.Fragment>

  );
}
}
function mapStateToProps ({ questions,authedUser, users}, props) {
    const { id } = props.match.params
    const author = questions[id].author
    const name = users[questions[id].author].name
    const avatar = users[author].avatarURL
    const answers = [questions[id].optionOne.text , questions[id].optionTwo.text]
  return {
    author: author,
    avatar: avatar,
    name: name,
    answers: answers,
    questionID: id,
    authedUser:authedUser

  }
}
export default connect(mapStateToProps)(Answer)