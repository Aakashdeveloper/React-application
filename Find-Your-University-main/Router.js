import React,{ Component } from 'react';
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom';
import Entrypage from './entrypage';
import Footer from './footer';
import Optionspage from './optionspage';
import Mainspage from './mainspageapi';
import College from './collegeapi'
import Particular from './Particularapi';
import Payment from './payment';
import PaidOrders from './paid';
import Contact from './contactus';

const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path='/' component={Entrypage}></Route>
                <Route path="/entry" component={Optionspage}></Route>
                <Route path="/city" component={Mainspage}></Route>
                <Route path="/mains/:id" component={College}></Route>
                <Route path="/maincollege/:id" component={Particular}></Route>
                <Route path="/payment" component={Payment}></Route>
                <Route path="/orders" component={PaidOrders}></Route>
                <Route path="/contact" component={Contact}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Router;