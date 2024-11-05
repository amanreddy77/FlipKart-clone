import styled from "@emotion/styled"
import { Box, InputBase, List, ListItem,  } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions/productActions";
import { Link } from "react-router-dom";
const SearchContainer =styled(Box)`
    background-color: #fff;
    width: 35%;
    border-radius: .2rem;
    margin-left: 1rem;
    display: flex;
`
const InputSearchBase=styled(InputBase)`
    padding: 0.1rem 0.5rem;
    width: 100%;
    fontsize: unset;
    overflow: hidden;
`
const SearchIconWrapper=styled(Box)`
    color: #2874f0;
    padding: 0 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

`
const ListWrapper = styled(List)`
    position: absolute;
    background-color: #fff;
    color: #000;
    margin-top: 2.4rem;
    width: 34%;
    border-radius: .2rem;
`
const Search = () => {
    const [text,setText]=useState('')
    const {products} = useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    const getText = (text) => {
        setText(text)
    }
    return (
        <SearchContainer>
            <InputSearchBase placeholder="Search for Products,brands and more" onChange={(e)=>getText(e.target.value)} value={text}/>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            {
                text && 
                <ListWrapper>
                    {
                        products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product,i)=>(
                            <ListItem key={i}>
                                <Link to={`/product/${product.id}`} onClick={()=>setText('')}>
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search