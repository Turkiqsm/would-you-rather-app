import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewQuestions from './NewQuestions'
import Leaderboard from './Leaderboard'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import '../App.css'
import { setAuthedUser } from '../actions/authedUser';
import Login from './Login'
import Answer from './Answer'
import Page404 from './Page404'
import PrivateRoute from './PrivateRoute'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  logOut = ()=>{
      this.props.dispatch(setAuthedUser(null))
    }
  render(){
    const {authedUser,user} = this.props
  return (
    <div className="App">
      <Router>
        <Fragment>
        <Nav user={user} logOut={this.logOut} authedUser={authedUser} />
        <LoadingBar/>
        {this.props.loading === true 
          ? 
           null
          :<div className='container'>
               <div>
               <Switch>
                  <Route path='/login' exact component={Login} />
                  <PrivateRoute path={`/${authedUser}`} exact component={Dashboard} />
                  <PrivateRoute path='/questions/:question_id' exact component={Answer}/>
                  <PrivateRoute path='/leaderboard' exact component={Leaderboard} />
                  <PrivateRoute path='/add' exact component={NewQuestions} />
                  <Route path='/Page404' component={Page404} />
                  <Route  component={Page404} />
               </Switch>
                </div>
          </div>}
        </Fragment>
      </Router>
    </div>
  );
  }
}

function mapStateToProps ({ users,authedUser,questions }) {
  const user = users[authedUser]
  return {
    loading: questions ,
    authedUser: authedUser,
    user: user

  }
}

export default connect(mapStateToProps)(App)