import React,{Component} from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { Redirect } from 'react-router-dom'
import {handleSaveQuestion} from '../actions/questions'
import Avatar from '@material-ui/core/Avatar';

        
class NewQuestions extends Component { 
    state = {
        optionOne:'',
        optionTwo: '',
        toHome: false,
      }
      handleChangeOne = (e) => {
        const optionOne = e.target.value    
        this.setState(() => ({
            optionOne:optionOne,
        }))
      }
      handleChangeTwo = (e) => {
        const optionTwo = e.target.value
    
        this.setState(() => ({
            optionTwo:optionTwo
        }))
      }
      handleSubmit = (e) => {
        e.preventDefault()
    
        const { optionOne,optionTwo } = this.state
        const { dispatch, authedUser } = this.props
        dispatch(handleSaveQuestion(optionOne,optionTwo, authedUser))
        
        this.setState(() => ({
            text: '',
            toHome:true,
        }))
    }
    render() {
        const {  toHome } = this.state
        const { authedUser,avatar } = this.props
        
        if (toHome === true) {
          return <Redirect to={`/${authedUser}`}  />
        }
    
        const classes = this.props

    return(
        <React.Fragment>
            <CssBaseline />
            <Card className={classes.card}>
            <form onSubmit={this.handleSubmit}>
            <Container maxWidth="lg">
            <div className={classes.details}>
                <CardContent className={classes.content}>
                <Container maxWidth="sm">
                <Avatar alt="Remy Sharp" src={avatar} />
                <Typography component="h6" variant="subtitle1">
                Would You Rather
                </Typography>
                    <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="optionOne"
                    fullWidth
                    // value={optionOne}
                    onChange={this.handleChangeOne}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                </Container>
                <Container maxWidth="sm">
                    <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    placeholder="optionTwo"
                    fullWidth
                    // value={optionTwo}
                    onChange={this.handleChangeTwo}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                <Fab
                variant="extended"
                size="medium"
                color="primary"
                aria-label="add"
                className={classes.margin}
                type='submit'
                >
                Submeit
                </Fab>
            </Container>
            </CardContent>
            </div>
            </Container>
                    </form>
            </Card>
        </React.Fragment>

    )
}
}

function mapStateToProps ({ authedUser,users }) {
    const avatar = users[authedUser].avatarURL

    return {
        avatar:avatar,
        authedUser: authedUser
    }
  }
  
  export default connect(mapStateToProps)(NewQuestions)