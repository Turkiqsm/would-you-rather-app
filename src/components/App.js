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
          <div className='container'>
               <div>
               <Switch>
                  <Route path='/LeaderBoard' exact component={Leaderboard} />
                  <Route path='/' exact component={Login} />
                  <Route path='/login' exact component={Login} />
                  <Route path='/add' exact component={Login} />
                  <Route component={Page404} />
               </Switch>
                </div>
          </div>
          :<div className='container'>
               <div>
               <Switch>
                  <Route path={`/${authedUser}`} exact component={Dashboard} />
                  <Route path='/questions/:id' exact component={Answer}/>
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/login' exact component={Login} />
                  <Route path='/add' exact component={NewQuestions} />
                  <Route component={Page404} />
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