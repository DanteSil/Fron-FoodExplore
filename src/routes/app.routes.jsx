import { Route, Routes } from 'react-router-dom'

import {Home} from '../pages/Home'
import {CostumerOrders} from '../pages/CostumerOrders'
import {Details} from '../pages/Details'
import {CheckOut} from '../pages/CheckOut'
import {NewFood} from '../pages/NewFood'
import {OrderManager} from '../pages/OrderManager'
import {DishUpdate} from '../pages/DishUpdate'
import {NotFound} from '../pages/NotFound'

export function AppRoutes() {
  return(
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/new" element={<NewFood />} />
    <Route path="/order" element={<OrderManager />} />
    <Route path="/" element={<Home />} />
    <Route path="/orders" element={<CostumerOrders />} />
    <Route path="/details/:id" element={<Details />} />
    <Route path="/checkout" element={<CheckOut />} />
    <Route path="/dishEdit/:id" element={<DishUpdate />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  )
    }
  





