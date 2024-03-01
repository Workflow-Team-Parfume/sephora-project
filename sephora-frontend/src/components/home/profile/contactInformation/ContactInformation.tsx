import {Button, FormControl, FormHelperText, Grid, IconButton, InputAdornment, OutlinedInput, Stack, TextField} from "@mui/material";
import {useTranslation} from "react-i18next";
import { useState } from "react";
import textFieldStyle from '../../../../common/textFieldStyle';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PhoneMask from "../../../../common/phoneMask";



const ContactInformation = () => {
    const {t} = useTranslation();    


    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [date, setDate] = useState<string>();
    const [phone, setPhone] = useState<string>('');
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [newPassword2, setNewPassword2] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const [showOldPassword, setShowOldPassword] = useState(false);
    const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    const [showNewPassword2, setShowNewPassword2] = useState(false);
    const handleClickShowNewPassword2 = () => setShowNewPassword2((show) => !show);

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value)
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(passwordError)
            setPasswordError('');
        setNewPassword2(event.target.value);
    };

    const handleSaveClick = () => {
        if(newPassword != newPassword2){
            setPasswordError(t('profile.contactInformation.passwordsDoNotMatch'));
        }
        // navigate('/');
    };

    return (
        <Stack alignItems='center' margin='0 17%' spacing={5}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Stack spacing={2}>
                        <Stack>
                            <Stack className="text">
                                {name!='' && t('name')}
                            </Stack>
                            <TextField
                                sx={{ ...textFieldStyle }} 
                                placeholder={t('name')}
                                value={name}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                            />
                        </Stack>
                        <Stack>
                            <Stack className="text">
                                {surname!='' && t('surname')}
                            </Stack>
                            <TextField
                                sx={{ ...textFieldStyle }} 
                                placeholder={t('surname')}
                                value={surname}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSurname(event.target.value)}
                            />
                        </Stack>
                        <Stack>
                            <Stack className="text">
                                {email!='' && t('email/login')}
                            </Stack>
                            <TextField
                                sx={{ ...textFieldStyle }} 
                                placeholder={t('email/login')}
                                value={email}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                            />
                        </Stack>
                        <Stack>
                            <Stack className="text">
                                {date!='' && t('date')}
                            </Stack>
                            <TextField
                                sx={{ ...textFieldStyle }} 
                                placeholder={t('date')}
                                type={"date"}
                                value={date}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
                            />
                        </Stack>
                        <Stack>
                            <Stack className="text">
                                {phone!='' && t('phone')}
                            </Stack>
                            <TextField
                                sx={{ ...textFieldStyle }}
                                value={phone}
                                placeholder={t('phone')}
                                onChange={handlePhoneChange}
                                name="phone"
                                InputProps={{
                                    inputComponent: PhoneMask as any
                                }}
                            />
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Stack spacing={2}>
                        <Stack>    
                            <Stack className="text">
                                {oldPassword!='' && t('profile.contactInformation.oldPassword')}
                            </Stack>
                            <FormControl 
                                sx={{ ...textFieldStyle }} 
                                variant="outlined"
                            >
                                <OutlinedInput
                                    placeholder={t('profile.contactInformation.oldPassword')}
                                    type={showOldPassword ? 'text' : 'password'}
                                    value={oldPassword}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setOldPassword(event.target.value)}    
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowOldPassword}
                                            edge="end"
                                        >
                                            {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Stack>
                        <Stack>
                            <Stack className="text">
                                {newPassword!='' && t('profile.contactInformation.newPassword')}
                            </Stack>
                            <FormControl 
                                sx={{ ...textFieldStyle }} 
                                variant="outlined"
                            >
                                <OutlinedInput
                                    placeholder={t('profile.contactInformation.newPassword')}
                                    type={showNewPassword ? 'text' : 'password'}
                                    value={newPassword}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPassword(event.target.value)}    
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowNewPassword}
                                            edge="end"
                                        >
                                            {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Stack>
                        <Stack>
                            <Stack className="text">
                                {newPassword2!='' && t('profile.contactInformation.passwordVerification')}
                            </Stack>
                            <FormControl 
                                sx={{ ...textFieldStyle }} 
                                variant="outlined"
                            >
                                <OutlinedInput
                                    placeholder={t('profile.contactInformation.passwordVerification')}
                                    type={showNewPassword2 ? 'text' : 'password'}
                                    value={newPassword2}
                                    onChange={handlePasswordChange}  
                                    error={!!passwordError}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowNewPassword2}
                                            edge="end"
                                        >
                                            {showNewPassword2 ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                                <FormHelperText>{passwordError}</FormHelperText>
                            </FormControl>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Button onClick={handleSaveClick} className="link">{t('profile.save')}</Button>
        </Stack>
    );
}

export default ContactInformation;
