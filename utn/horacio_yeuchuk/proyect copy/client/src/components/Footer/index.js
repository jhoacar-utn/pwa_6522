import { AppBar } from "@mui/material";


export default function Footer() {

    return (
        <AppBar position="static" sx={{
            minHeight: '4vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            UTN/CURSO WEB
        </AppBar>
    )
}