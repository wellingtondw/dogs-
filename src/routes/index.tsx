import { Route } from 'react-router-dom'
import SignIn from '../pages/SignIn'

const Routes = () => {
  return (
    <Route path='/' element={<SignIn/>}/>
  )
}

export default Routes
