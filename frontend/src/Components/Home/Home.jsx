import Navbar from "./Navbar"
import Banner from "./Banner"
import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { useEffect } from "react"
import { getProducts } from "../../Redux/Actions/productActions"
import { useDispatch, useSelector } from "react-redux"
import Slide from "./Slide"
import AddSlide from "./AddSlide"
import MidAd from "./MidAd"

const Container = styled(Box)`
    padding: 10px 10px;
    background-color: #f2f2f2;
`
const Home = () => {
    const {products} = useSelector(state=>state.getProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    return (
        <>
            <Navbar/>
            <Container>
                <Banner />
                <AddSlide products={products} title="Deal of the Day" timer={true}/>
                <MidAd/>
                <Slide products={products} title="Discounts For You" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recomended Items" timer={false}/>
                <Slide products={products} title="Top Deals" timer={false}/>
            </Container>
            
        </>
    )
}

export default Home