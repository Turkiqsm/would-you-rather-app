import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

class Page404 extends Component {
    render() {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
            <div>
                <h2>No match found for <code>{window.location.pathname}</code></h2>
            </div>

        </Container>
        </React.Fragment>
    )}
    }


export default Page404