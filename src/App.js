import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import asyncComponent from './hoc/asyncComponent/asyncComponent';
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions';

const asyncCheckout = asyncComponent(() => import('./containers/Checkout/Checkout'));
const asyncOrders = asyncComponent(() => import('./containers/Orders/Orders'));
const asyncAuth = asyncComponent(() => import('./containers/Auth/Auth'));

class App extends Component {

    componentDidMount() {
        this.props.onAutoSignin();
    }

    render() {
        let routes = (
            <Switch>
                <Route path="/auth" component={asyncAuth} />
                <Route path="/" exact component={BurgerBuilder} />
                <Redirect to="/" />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/checkout" component={asyncCheckout} />
                    <Route path="/orders" component={asyncOrders} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/auth" component={asyncAuth} />
                    <Route path="/" exact component={BurgerBuilder} />
                    <Redirect to="/" />
                </Switch>
            );
        }

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.token !== null
});

const mapDispatchToProps = dispatch => ({
    onAutoSignin: () => dispatch(actions.authCheckState())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
