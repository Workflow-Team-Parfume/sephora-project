import {Box, Button, Container, FormControl, Grid, IconButton, InputAdornment, Link, OutlinedInput, Stack, Tab, Tabs, TextField, Typography} from "@mui/material";
import "./order.scss";
import {useTranslation} from "react-i18next";
import { Perfume } from "../data";
import OrderProduct from "../products/orderProduct/OrderProduct";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
function CustomTabPanel(props: TabPanelProps) {
const { children, value, index, ...other } = props;

return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
    {value === index && (
        <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
        </Box>
    )}
    </div>
);
}
  
function a11yProps(index: number) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}

const Order = () => {
    const {t} = useTranslation();
    const products = Perfume;

    const total: number = calculateTotal();
    const discount = 0;

    function calculateTotal(): number {
        const total: number = products.reduce((acc, price) => acc + Number(price.volume[0].price), 0);
        return total;
    }
    

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue); event;
    };


    const navigate = useNavigate();
    
    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const [nameError, setNameError] = useState<string>('');
    const [surnameError, setSurnameError] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setName(value);
        setNameError(value ? '' : 'Це поле обов\'язкове');
    };

    const handleSurnameChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSurname(value);
        setSurnameError(value ? '' : 'Це поле обов\'язкове');
    };

    const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPhone(value);
        setPhoneError(value ? '' : 'Це поле обов\'язкове');
    };

    const handleFurtherClick = () => {
        if (name && surname && phone) {
           navigate('/');
        } else {
            setNameError(name ? '' : 'Це поле обов\'язкове');
            setSurnameError(surname ? '' : 'Це поле обов\'язкове');
            setPhoneError(phone ? '' : 'Це поле обов\'язкове');
        }
    };
    
    const handleSingInClick = () => {
        navigate('/');
    }

    return (
        <Container
        className="containerOrder"
        style={{maxWidth: "90%", justifyContent: "center", margin: '60px'}}
        >
                <Grid container justifyContent='space-between' spacing={3} >
                    <Grid item sm={12} lg={6} className='boxOrder'>
                        <Typography className="title">{t('order.yourOrder')}</Typography>
                        <Stack spacing={2} sx={{margin: '8px'}} className="containerScroll">
                            {products.map((piece) => (
                                <OrderProduct piece={piece} key={piece.id}/>
                            ))}
                        </Stack>
                        <Stack padding={2} className="containerTotalOrder">
                            <Stack 
                                margin='0 15px'
                                justifyContent='space-between' direction='row'>
                                <Typography className="text">{t('basket/order.orderAmount')}</Typography>
                                <Typography className="text">{total} {t('uan')} </Typography>
                            </Stack>
                            <Stack
                                margin='15px'
                                justifyContent='space-between' direction='row'>
                                <Typography className="text">{t('basket/order.discount')}</Typography>
                                <Typography className="text">{discount} {t('uan')} </Typography>
                            </Stack>
                            <Box className='line'/>
                            <Stack 
                                margin='15px'
                                justifyContent='space-between' direction='row'>
                                <Typography className="total">{t('basket/order.total')}</Typography>
                                <Typography className="total">{total - discount} {t('uan')} </Typography>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item sm={12} lg={6}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="buyer" 
                        sx={{
                            "& .MuiTabs-indicator": {
                                display: 'none'
                            },
                            marginBottom: '60px'
                        }}
                    >
                        <Tab label={t('order.newBuyer')} 
                            sx={{flexGrow: 1,
                                '&.Mui-selected': {
                                    color: 'black',
                                    fontSize: '20px',
                                    textTransform: 'none'
                                },
                                '&:not(.Mui-selected)': {
                                    color: 'grey',
                                    fontSize: '20px',
                                    textTransform: 'none',
                                }}} 
                            {...a11yProps(0)}/>
                        <Tab label={t('order.regularCustomer')}
                            sx={{flexGrow: 1, 
                                '&.Mui-selected': {
                                    color: 'black',
                                    fontSize: '20px',
                                    textTransform: 'none'
                                },
                                '&:not(.Mui-selected)': {
                                    color: 'grey',
                                    fontSize: '20px',
                                    textTransform: 'none',
                                }}} 
                            {...a11yProps(1)}/>
                    </Tabs>

                       <CustomTabPanel value={value} index={0}>
                        <Stack alignItems='center'>
                            <Stack direction='column' spacing={1} minWidth='400px'>
                                <TextField
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#9D9D9D',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#9D9D9D',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#9D9D9D',
                                            }},
                                        }} 
                                    placeholder={t('name')+'*'}
                                    required
                                    id="newBuyer-name"                                    
                                    value={name}
                                    onChange={handleNameChange}
                                    error={!!nameError}
                                    helperText={nameError}
                                />
                                <TextField
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#9D9D9D',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#9D9D9D',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#9D9D9D',
                                            }},
                                        }} 
                                    placeholder={t('surname')+'*'}
                                    required
                                    id="newBuyer-surname"                                    
                                    value={surname}
                                    onChange={handleSurnameChange}
                                    error={!!surnameError}
                                    helperText={surnameError}
                                />
                                <TextField
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#9D9D9D',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#9D9D9D',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#9D9D9D',
                                            }},
                                        }} 
                                    placeholder={t('phone')+'*'}
                                    required
                                    id="newBuyer-phone"                
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    error={!!phoneError}
                                    helperText={phoneError}
                                />
                                <TextField
                                    sx={{ 
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#9D9D9D',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#9D9D9D',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#9D9D9D',
                                            }},
                                        }} 
                                    placeholder={t('email')}
                                    id="newBuyer-email"
                                    value={email}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}      
                                />

                                <Button className="orderBut" onClick={handleFurtherClick}>{t('order.further')}</Button>

                                <Stack alignItems='center'>
                                    <Link href='/' className="link">{t('order.continueShopping')}</Link>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomTabPanel>

                    <CustomTabPanel value={value} index={1}>
                        <Stack alignItems='center'>
                            <Stack direction='column' spacing={1} minWidth='400px'>

                                <FormControl sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#9D9D9D',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#9D9D9D',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#9D9D9D',
                                        },} 
                                    }} variant="outlined"
                                >
                                    <OutlinedInput
                                        placeholder={t('email')}
                                        id="order-email"
                                        type={'text'}
                                    />
                                </FormControl>
                                <FormControl sx={{ 
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#9D9D9D',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#9D9D9D',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#9D9D9D',
                                        }},
                                    }} 
                                    variant="outlined"
                                >
                                    <OutlinedInput
                                        placeholder={t('password')}
                                        id="order-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <Stack alignItems='end'>
                                    <Link href='#' className="link">{t('forgotPassword')}</Link>
                                </Stack>
                                <Button className="orderBut" onClick={handleSingInClick}>{t('singIn')}</Button>

                                <Stack alignItems='center'>
                                    <Link href='/' className="link">{t('order.continueShopping')}</Link>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CustomTabPanel>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Order;
