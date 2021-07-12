import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Monitor from '../pages/Monitor'
import Operation from '../pages/Operation'
import Warehouse from '../pages/Warehouse'
import Settings from '../pages/Subdivision/Settings'
import Reports from '../pages/Reports'

const Content = () => {
    return (            
        <Switch>
            <Route path='/' component={Monitor} exact/>
            <Route path='/operation' component={Operation} exact/>
            <Route path='/warehouse' component={Warehouse} exact/>
            <Route path='/settings' component={Settings} exact/>
            <Route path='/reports' component={Reports} exact/>
        </Switch>
    )
}

export default Content