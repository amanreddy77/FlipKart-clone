import { Badge, Box, Button, Typography,styled } from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';
import Login from "../Login/Login";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    fontSize: '.9rem',
    marginLeft: '1rem',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}))
const Container=styled(Link)`
    display: flex;
    align-items: center;
`
const LoginButton = styled(Button)`
    background-color: #ffffff;
    color: #2874f0;
    box-shadow: none;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    font-size: 14px;
    font-weight: 600;
    height: 32px;
`
const CustomButtons = () => {
    const [open,setOpen]=useState(false)
    const {account,setAccount} = useContext(DataContext)
    const {cartItems} = useSelector(state=>state.cart)
    const openDialog=()=>{
        setOpen(true)
    }
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/> : <LoginButton variant="contained" onClick={openDialog} >Login</LoginButton>
            }
            
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>
            
            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color="warning">
                    <ShoppingCart/>
                </Badge>
                
            </Container>
            <Login open={open} setOpen={setOpen}/>
        </Wrapper>
        
    )
}

export default CustomButtons