import React from 'react';
import {AuthForm} from "./auth-form";
import './auth-page.css'

const AuthPage: React.FC = () => {
    return (
        <div className="auth-page">
            <AuthForm />
        </div>
    );
};

export {AuthPage};