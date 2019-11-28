import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './../src/pages/login/login'
import Work from './../src/pages/log_work/index'
import NoMatch from './../src/pages/nomatch/index'

export default class IRouter extends React.Component{

    render(){
        return (
           <HashRouter>
               <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                                 <Route path="/admin/log/work" component={Work}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                           
                        </Admin>
                    }></Route>
               </App>
           </HashRouter>     
        )
    }    
}