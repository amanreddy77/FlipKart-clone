import { AppBar, Box, Drawer, IconButton, List, ListItem, Toolbar, Typography, styled } from '@mui/material'
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;
`
const Component =styled(Link)`
    margin-left: 12%;
    line-height: 0;
    cursor: pointer;
`
const Title = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const Container = styled(Box)`
    display: flex;
    &:hover {
        text-decoration: underline;
    }
`
const PlusImage= styled('img')`
    width: 15px;
    height: 15px;
    padding-left: 5px;
`
const CustomButtonWrapper = styled(Box)(({theme}) => ({
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const MenuButton = styled(IconButton)(({theme}) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
        color: 'white'
    }
}));


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const list = () => (
        <Box style={{width:'100%'}} onClick={handleClose}>
            <List>
                <ListItem>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <StyledHeader position='fixed'>
            <Toolbar style={{minHeight:55}}>
                <MenuButton onClick={handleMenu}>
                    <MenuIcon/>
                </MenuButton>
                <Drawer  open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{width: 75}}/>
                    <Container>
                        <Title >Explore&nbsp;<Box component="span" style={{color: '#ffe500'}}>Plus</Box></Title>
                        <PlusImage src={subURL} alt="subLogo" />
                    </Container>
                </Component>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header
