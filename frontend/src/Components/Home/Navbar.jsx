import { Box, Typography } from "@mui/material"
import { navData } from "../Constants/data"
import { styled } from '@mui/system';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.2rem',
    margin: 'auto',
    padding: '1rem 0rem',
    flexWrap: 'wrap',
    textAlign:'center' ,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'row', 
        gap: '1rem',
        '& > *': {
            width: '25%', 
        },
    },
}));
const Container = styled(Box)`
    display: block;
    place-items: center;
    align-items: center;
    padding: 1rem 1rem;
    text-align: center;
`
const Text = styled(Typography)`
    font-size: .9rem;
    font-weight: 500;
    color: #000;
    text-align: center;
`
const Navbar = () => {
    return (
        <Component>
            {navData.map((data,index) => (
                <Container key={index}>
                    <img src={data.url} alt={data.text} style={{width:74}}/>
                    <Text>{data.text}</Text>
                </Container>
            ))}
        </Component>
    )
}

export default Navbar