import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './pages/backend/dashboard/Dashboard'
import Product from './pages/backend/product/Product'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import Login from './pages/login/Login'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import Register from './pages/register/Register'

const Routes = () => {

    return (
        <BrowserRouter basename={'/reactgithubpage'}>

        

        <Switch>

            {/* Frontend */}
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={Forgotpassword} />

            {/* Backend */}
            <Route path="/backend/dashboard" component={Dashboard} />
            <Route path="/backend/product" component={Product} />

            <Route component={PageNotFound} />

        </Switch>
        </BrowserRouter>
    )
}

export default Routes