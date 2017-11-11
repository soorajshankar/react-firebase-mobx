import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'

// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'
import { firebaseAuth } from './auth/config'


function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

function PublicRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to='/firebase' />}
        />
    )
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
            loading:false
        };
    }
    componentDidMount() {
        console.log('mounting');
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) { 
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false
                })
            }
        })

    }

    componentWillUnmount() {
        this.removeListener()
    }
    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <PublicRoute authed={this.state.authed} exact path="/login" name="Login Page" component={Login} />
                    <PublicRoute authed={this.state.authed} exact path="/register" name="Register Page" component={Register} />
                    <PublicRoute authed={this.state.authed} exact path="/404" name="Page 404" component={Page404} />
                    <PublicRoute authed={this.state.authed} exact path="/500" name="Page 500" component={Page500} />
                    <PrivateRoute authed={this.state.authed} path="/" name="Home" component={Full} />
                </Switch>
            </BrowserRouter>
        );
    }
}


export default (App)