import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavTabs from './Tabs'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

class Dashboard extends Component {
    render() {
      const {authedUser,unanswerd, answerd ,questionIds } = this.props
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
        <NavTabs
        authedUser={authedUser}
        questionIds ={questionIds}
        unanswerd ={unanswerd}
        answerd ={answerd}
        />
        </Container>
        </React.Fragment>
    )}
    }

function mapStateToProps ({ questions , authedUser , users }) {
    const questionIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    const answeredIds = Object.keys(users[authedUser].answers)
    const answerd = Object.values(questions)
      .filter(question => answeredIds.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp);
    const unanswerd = Object.values(questions)
    .filter(question => !answeredIds.includes(question.id)).sort((a, b) => b.timestamp - a.timestamp);
  return {
    questionIds: questionIds ,
      authedUser: authedUser,
      answerd: answerd,
      unanswerd: unanswerd
  }
}

export default connect(mapStateToProps)(Dashboard)