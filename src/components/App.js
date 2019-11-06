import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  logOut = ()=>{
      this.props.dispatch(setAuthedUser(null))
    }
  render(){
    const {authedUser} = this.props
  return (
    <div className="App">
      <Router>
        <Fragment>
        <Nav logOut={this.logOut} authedUser={authedUser} />
        <LoadingBar/>
        {this.props.loading === true
          ? 
          <div className='container'>
               <div>
                  <Route path='/LeaderBoard' exact component={Leaderboard} />
                  <Route path='/Login' exact component={Login} />
                </div>
          </div>
          :<div className='container'>
               <div>
                  <Route path={`/${authedUser}`} exact component={Dashboard} />
                  <Route path='/questions/:id' exact component={Answer}/>
                  <Route path='/LeaderBoard' exact component={Leaderboard} />
                  <Route path='/Login' exact component={Login} />
                  <Route path='/NewQuestions' exact component={NewQuestions} />
                </div>
          </div>}
        </Fragment>
      </Router>
    </div>
  );
  }
}

function mapStateToProps ({ authedUser,questions }) {
  return {
    loading: questions ,
    authedUser: authedUser

  }
}

export default connect(mapStateToProps)(App)