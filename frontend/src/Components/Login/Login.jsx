import{ Dialog,Box,TextField,Typography,Button, styled} from '@mui/material';
import { useContext, useState } from 'react';
import { authenticateLogin, authenticateSignup } from '../../services/api';
import { DataContext } from '../../context/DataProvider';
const Component =styled(Box)`
    height: 70vh;
    width: 90vh;
`
const Image = styled(Box)`
    background: #2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') no-repeat center 85%;
    height:auto;
    width:40%;
    padding:45px 35px;
    & > p,h5{
        color: #ffffff;
        font-weight: bold;
    }
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div,& > button, & > p{
        margin-top:20px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background-color: #fb641b;
    color: #ffffff;
    height: 48px;
    border-radius: 3px;
    font-size: 16px;
`
const OTPButton = styled(Button)`
    text-transform: none;
    background-color: #fff;
    color: #28f70;
    height: 48px;
    border-radius: 3px;
    font-size: 16px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
    
`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    text-align: center;
    cursor: pointer;
`
const accountIntialValues={
    login:{
        view:'login',
        heading:'Login',
        subheading:'Get access to your Orders, Wishlist and Recommendations',
    },
    signUp:{
        view:'signup',
        heading:'Looks like you are new here',
        subheading:'Sign up with your mobile number to get started',
    }
}
const signUpIntialValues={
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
    password:'',
    phone:'',
}
const loginIntialValues={
    userName:'',
    password:''
}
const Error = styled(Typography)`
    color: #ff6161;
    font-size: 14px;
    line-height: 0;
`
const Login = ({open,setOpen}) => {
    const [account,toggleAccount]=useState(accountIntialValues.login)
    const [signUp,setSignUp]=useState(signUpIntialValues)
    const [login,setLogin] = useState(loginIntialValues)
    const {setAccount}=useContext(DataContext)
    const [error,setError] = useState(false)
    const handleClose=()=>{
        setOpen(false)
        toggleAccount(accountIntialValues.login)
        setError(false)
    }
    const toggleSignUp =()=>{
        toggleAccount(account.view==='login' ? accountIntialValues.signUp : accountIntialValues.login)
    }
    const HandleChange =(e) =>{
        setSignUp({...signUp,[e.target.name]:e.target.value})
        console.log(signUp);
    }
    const signupUser=async ()=>{
        let response = await authenticateSignup(signUp);
        if(!response) return;
        handleClose();
        setAccount(signUp.userName);
    }
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const LoginUser=async()=>{
        let response =await authenticateLogin(login);
        if (response.status===200){
            handleClose();
            setAccount(login.userName)
        } else {
            setError(true)
        }
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth:'unset'}}}> 
            <Component>
                <Box style={{display:'flex',height:'100%'}}>
                    <Image>
                        <Typography variant='h5' >{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subheading}</Typography>
                    </Image>
                    { account.view==='login' ? (
                        <Wrapper>
                            <TextField variant='standard' name='userName' label='Enter Username' onChange={onValueChange} />
                            <TextField variant='standard' name='password' label='Enter Password' onChange={onValueChange}/>
                            {error && <Error>Please enter valid credentials</Error>}
                            <Text>By continuing, you agree to Flipkarts Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={LoginUser}>Login</LoginButton>
                            <Typography style={{textAlign: 'center'}}>OR</Typography>
                            <OTPButton>Request OTP</OTPButton>
                            <CreateAccount onClick={toggleSignUp}>New to Flipkart? Create Account</CreateAccount>
                        </Wrapper>
                    ):  (
                        <Wrapper>
                            <TextField variant='standard' name='firstName' label='Enter First Name' onChange={HandleChange} />
                            <TextField variant='standard' name='lastName' label='Enter Last Name'onChange={HandleChange} />
                            <TextField variant='standard' name='userName' label='Enter User Name' onChange={HandleChange} />
                            <TextField variant='standard' name='email' label='Enter Email' onChange={HandleChange}/>
                            <TextField variant='standard' name='password' label='Enter Password' onChange={HandleChange}/>
                            <TextField variant='standard' name='phone' label='Enter Phone No' onChange={HandleChange}/>
                            
                            <LoginButton onClick={signupUser}>Continue</LoginButton>
                        </Wrapper>
                    )}
                </Box>
            </Component>
        </Dialog>
    )
}

export default Login