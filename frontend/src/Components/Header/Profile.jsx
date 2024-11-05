import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';
import { PowerSettingsNew,FavoriteBorder,AccountCircleOutlined,KeyboardArrowDownOutlined, SellOutlined,NotificationsNoneOutlined,RedeemOutlined} from '@mui/icons-material';

const Component = styled(Menu)`
    margin-top: 10px;
    cursor: pointer;
    margin-left: -20px;
`;

const Container=styled(Link)`
    display: flex;
    align-items: center;
`

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
    
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        setAccount('');
    }
    
    return (
        <>
            <Box onClick={handleClick} className="flex justify-center items-center"><AccountCircleOutlined/><Typography style={{ cursor:'pointer',fontSize:'16px',paddingRight:'4px',marginTop:'-2'}} >
            
            {account} </Typography><KeyboardArrowDownOutlined/>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <Container to='/favourites' onClick={() => { handleClose(); }}>
                        <MenuItem  >
                            <FavoriteBorder color="primary" fontSize="small"/>
                            <p className='pl-4 font-medium'>Wishlist</p>
                        </MenuItem>
                </Container>
                <Container to='/viewOrders' onClick={() => { handleClose(); }}>
                        <MenuItem  >
                            <RedeemOutlined color="primary" fontSize="small"/>
                            <p className='pl-4 font-medium'>orders</p>
                        </MenuItem>
                </Container>
                <Container>
                <MenuItem onClick={() =>  handleClose()}>
                    <SellOutlined fontSize='small' color='primary'/> 
                    <p className='pl-4 font-medium'>Coupons</p>
                </MenuItem>
                </Container>
                <Container>
                <MenuItem onClick={() =>  handleClose() }>
                    <NotificationsNoneOutlined fontSize='small' color='primary'/> 
                    <p className='pl-4 font-medium'>Notifications</p>
                </MenuItem>
                </Container>
                
                <Container>
                <MenuItem onClick={() => { handleClose(); logout();}}>
                    <PowerSettingsNew fontSize='small' color='primary'/> 
                    <p className='pl-4 font-medium'>Logout</p>
                </MenuItem>
                </Container>
            </Component>
        </>
    )    
}

export default Profile;