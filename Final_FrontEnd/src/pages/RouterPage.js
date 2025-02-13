import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp'
import SingUpSuccess from './SignUpSuccess'

export default function RouterPage() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signUp" component={SignUp}/>
                    <Route path="/signUpSuccess" component={SingUpSuccess}/>
                </Switch>
            </Router>
        </div>
    )
}
