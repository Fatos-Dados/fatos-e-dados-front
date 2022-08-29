import React from "react";
import { Navigate } from 'react-router';

export const PublicRoute = ({ children }: any) => {
    if (window.location.pathname === '/')
        return <Navigate to="/login" />
}