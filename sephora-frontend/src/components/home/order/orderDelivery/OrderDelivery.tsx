import {Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, MenuItem, Select, SelectChangeEvent, Stack, TextField, Typography} from "@mui/material";
import "./orderDelivery.scss";
import {useTranslation} from "react-i18next";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const OrderDelivery = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();


    const [city, setCity] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [house, setHouse] = useState<string>('');
    const [sq, setSq] = useState<string>('');

    const [cityError, setCityError] = useState<string>('');
    const [streetError, setStreetError] = useState<string>('');
    const [houseError, setHouseError] = useState<string>('');

    const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCity(value);
        setCityError(value ? '' : 'Це поле обов\'язкове');
    };

    const handleStreetChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setStreet(value);
        setStreetError(value ? '' : 'Це поле обов\'язкове');
    };

    const handleHouseChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setHouse(value);
        setHouseError(value ? '' : 'Це поле обов\'язкове');
    };


    const handleToOrderClick = () => {
        if (city && street && house) {
           navigate('/thank');
        } else {
            setCityError(city ? '' : 'Це поле обов\'язкове');
            setStreetError(street ? '' : 'Це поле обов\'язкове');
            setHouseError(house ? '' : 'Це поле обов\'язкове');
        }
    };

    const [options, setOptions] = useState('');
    const handleOptionsChange = (event: SelectChangeEvent) => {
        setOptions(event.target.value as string);
    };

    const [paymentMethods, setPaymentMethods] = useState('');
    const handlePaymentMethodsChange = (event: SelectChangeEvent) => {
        setPaymentMethods(event.target.value as string);
    };

    const [comment, setComment] = useState('');
    const handleCommentChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setComment(value);
    }
    const [isComment, setIsComment] = useState<boolean>(false);
    const handleIsCommentChange = () => {
        if((isComment && comment=='') || (!isComment))
            setIsComment(!isComment);
    }

    const [promoCode, setPromoCode] = useState('');
    const handlePromoCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPromoCode(value);
    }
    const [isPromoCode, setIsPromoCode] = useState<boolean>(false);
    const handleIsPromoCodeChange = () => {
        if((isPromoCode && promoCode=='') || (!isPromoCode))
            setIsPromoCode(!isPromoCode);
    }

    return (
        <Stack className="orderDelivery" marginTop='80px'>
            <Stack alignItems='center'>
                <Stack direction='column' spacing={2} minWidth='400px'>
                    <Stack spacing={2}>
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
                            placeholder={t('order.delivery.city')+'*'}
                            required
                            id="delivery-city"
                            value={city}
                            onChange={handleCityChange}
                            error={!!cityError}
                            helperText={cityError}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <FormControl fullWidth
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
                        >
                            <Select
                                id="select-options"
                                value={options}
                                onChange={handleOptionsChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    {t('order.delivery.options')}
                                </MenuItem>
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'2'}>2</MenuItem>
                                <MenuItem value={'3'}>3</MenuItem>
                            </Select>
                        </FormControl>
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
                            placeholder={t('order.delivery.street')+'*'}
                            required
                            id="delivery-street"
                            value={street}
                            onChange={handleStreetChange}
                            error={!!streetError}
                            helperText={streetError}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Stack direction='row' spacing={2} maxWidth='400px'>
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
                                placeholder={t('order.delivery.house')+'*'}
                                required
                                id="delivery-house"
                                value={house}
                                onChange={handleHouseChange}
                                error={!!houseError}
                                helperText={houseError}
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
                                placeholder={t('order.delivery.sq')}
                                id="delivery-sq"
                                value={sq}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSq(event.target.value)}
                            />
                        </Stack>
                        <FormControl fullWidth
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
                        >
                            <Select
                                id="select-paymentMethods"
                                value={paymentMethods}
                                onChange={handlePaymentMethodsChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled
                                    sx={{
                                        color:'#9D9D9D'
                                    }}
                                >
                                    {t('order.delivery.paymentMethods')}
                                </MenuItem>
                                <MenuItem value={'1'}>1</MenuItem>
                                <MenuItem value={'2'}>2</MenuItem>
                                <MenuItem value={'3'}>3</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>

                    <Stack className='additionally'>
                        <Button onClick={handleIsCommentChange}>
                            <Stack direction='row' spacing={2}>
                                <Box className="img">
                                    {isComment ? <RemoveIcon/> : <AddIcon/>}
                                </Box>
                                <Typography>{t('order.delivery.addComment')}</Typography>
                            </Stack>
                        </Button>
                        {isComment ?
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
                                id="delivery-comment"
                                value={comment}
                                onChange={handleCommentChange}
                                multiline
                            />
                            : <></>
                        }
                        <Button onClick={handleIsPromoCodeChange}>
                            <Stack direction='row' spacing={2}>
                                <Box className="img">
                                    {isPromoCode ? <RemoveIcon/> : <AddIcon/>}
                                </Box>
                                <Typography>{t('order.delivery.promoCode')}</Typography>
                            </Stack>
                        </Button>
                        {isPromoCode ?
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
                                id="delivery-comment"
                                value={promoCode}
                                onChange={handlePromoCodeChange}
                            />
                            : <></>
                        }
                        <FormGroup>
                            <FormControlLabel className="checkCallMe" control={<Checkbox size='small'/>} label={t('order.delivery.callMe')} />
                        </FormGroup>
                    </Stack>

                    <Button className="orderBut" onClick={handleToOrderClick}>{t('basket/order.toOrder')}</Button>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default OrderDelivery;
