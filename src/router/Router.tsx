import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'


const PortfolioRouter = (
    <Route path='/'>
            <Route path='/' element={<HomePage />} />
    </Route>
)

export default PortfolioRouter