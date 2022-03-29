import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useTranslation} from "react-i18next";
import { useNavigate } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import I18n from "../i18n";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const languages = ['ru', 'en'];

const Navigation = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElLanguage, setAnchorElLanguage] = React.useState<null | HTMLElement>(null);
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElLanguage(event.currentTarget);
    };

    const handleCloseLanguageMenu = () => {
        setAnchorElLanguage(null);
    };

    const onChangeLang = (lang: string) => {
        handleCloseLanguageMenu();
        I18n.changeLanguage(lang);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        {t('logo')}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => {
                                navigate("/news");
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {t('news')}
                        </Button>
                        <Button
                            onClick={() => {
                                navigate("/docs");
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {t('docs')}
                        </Button>
                        <Button
                            onClick={() => {
                                navigate("/info");
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {t('info')}
                        </Button>
                        <Button
                            onClick={() => {
                                navigate("/feedback");
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {t('feedback')}
                        </Button>
                        <Button
                            onClick={() => {
                                navigate("/contacts");
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {t('contacts')}
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0, marginRight: '10px' }}>
                        <Tooltip title="Change language">
                            <IconButton onClick={handleOpenLanguageMenu} sx={{ p: 0 }}>
                                <Typography
                                    sx={{ marginRight: 1 }}
                                    variant="body2"
                                    color="white"
                                >
                                    {t(I18n.language)}
                                </Typography>
                                <LanguageIcon sx={{ color: 'white'}} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '35px' }}
                            id="menu-appbar"
                            anchorEl={anchorElLanguage}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElLanguage)}
                            onClose={handleCloseLanguageMenu}
                        >
                            {languages.map((lang) => (
                                <MenuItem key={lang} onClick={() => onChangeLang(lang)}>
                                    <Typography textAlign="center">{t(lang)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;
