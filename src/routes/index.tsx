import { Routes as RoutesReactRouter, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'

const Routes = () => {
  return (
    <RoutesReactRouter>
     <Route path='/' element={<Home />}/>
     <Route path='/login' element={<SignIn/>}/>
    </RoutesReactRouter>
  )
}

export default Routes
