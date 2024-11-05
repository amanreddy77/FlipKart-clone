import { Box } from "@mui/material"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import DataProvider from "./context/DataProvider"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailView from "./Components/Details/DetailView"
import Cart from "./Components/Cart/Cart"
import Favourites from "./Components/Favourites/Favourites"
import Orders from "./Components/Orders/Orders"

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop: 54}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<DetailView/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            <Route path="/viewOrders" element={<Orders/>}/>
          </Routes>
          
        </Box>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
