import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Controller, useForm, SubmitHandler} from "react-hook-form";
import './auth-form.css'

interface ISignInForm {
    email: string;
    password: string;
}

const AuthForm = () => {
    const {handleSubmit, control} = useForm<ISignInForm>();

    const onSubmit: SubmitHandler<ISignInForm> = (data) => console.log(data)

    return (
        <div className="auth-form">
            <Typography variant="h4" component="div">
                Sign in
            </Typography>
            <form className="auth-form_form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="email"
                    render={({field}) => (
                        <TextField
                            label="email"
                            size="small"
                            margin="normal"
                            className="email"
                            fullWidth={true}
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({field}) => (
                        <TextField
                            label="password"
                            type="password"
                            size="small"
                            margin="normal"
                            className="password"
                            fullWidth={true}
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                        />
                    )}
                />
                <Button type="submit"
                        fullWidth={true}
                        disableElevation={true}
                        className="submit"
                        sx={{
                            marginTop: 2
                        }}>
                    Sign in
                </Button>
            </form>
        </div>
    );
};

export {AuthForm};