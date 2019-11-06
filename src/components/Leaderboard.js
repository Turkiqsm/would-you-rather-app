import React, { Component } from 'react'
import { connect } from 'react-redux'
import MediaControlCard from './LeaderCard'
import CssBaseline from '@material-ui/core/CssBaseline';



class Leaderboard extends Component {
    render() {
    const {usersArr} = this.props
    return (
        <React.Fragment>
        <CssBaseline />
        {usersArr.map((user)=> 
        <MediaControlCard
        avatar={user.avatarURL}
        name = {user.name}
        key ={user.id}
        questions = {user.questions.length}
        answers = {Object.values(user.answers).length}
        />
        )}
        </React.Fragment>
    )}
    }

function mapStateToProps ({ users }) {
    const usersArr = Object.values(users)
  return {
    usersArr: usersArr
  }
}

export default connect(mapStateToProps)(Leaderboard)