import React, { Component } from 'react'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomizedSelects from './LoginCard'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
    state = {
        toHome: false,
      }
      signIn = (username) => {
      
          const { dispatch} = this.props
      
          dispatch(setAuthedUser(username))
          
          this.setState(() => ({
            toHome: username === null ? false : true,
          }))

        }
    render() {

        const {usersInfo , authedUser,location } = this.props

        const { from } = location.state || { from: { pathname: `/${authedUser}`  }}
        if(authedUser !== null) {
            return (
                <Redirect to={from} />
            )
        }
    return (
        <React.Fragment>
        <CssBaseline />
            <CustomizedSelects
                usersInfo={usersInfo}
                signIn={this.signIn}
            />
        </React.Fragment>
    )}
    }

function mapStateToProps ({  authedUser , users }) {
    const usersInfo = Object.values(users)
  return {
    usersInfo:usersInfo,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Login)