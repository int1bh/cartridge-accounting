import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Monitor from '../pages/Monitor'
import AddCartridge from '../pages/AddCartridge'
import IssuedCartridge from '../pages/IssueCartridge'
import ReturnWarehouse from '../pages/ReturnWarehouse'
import ToRefuel from '../pages/ToRefuel'
import ReturnRefuel from '../pages/ReturnRefuel'
import TrashCartridge from '../pages/TrashCartridge'
import Subdivision from '../pages/Subdivision/Subdivision'
import ModelCartridge from '../pages/ModelCartridge'
import Reports from '../pages/Reports'

const Content = () => {
    return (            
        <Switch>
            <Route path='/' component={Monitor} exact/>
            <Route path='/issue' component={IssuedCartridge} exact/>
            <Route path='/returnwarehouse' component={ReturnWarehouse} exact/>
            <Route path='/torefuel' component={ToRefuel} exact/>
            <Route path='/returnrefuel' component={ReturnRefuel} exact/>
            <Route path='/addcartridge' component={AddCartridge} exact/>
            <Route path='/trash' component={TrashCartridge} exact/>
            <Route path='/subdivision' component={Subdivision} exact/>
            <Route path='/directory' component={ModelCartridge} exact/>
            <Route path='/reports' component={Reports} exact/>
        </Switch>
    )
}

export default Content