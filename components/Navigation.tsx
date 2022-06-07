import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useTranslation} from "next-i18next";
import LanguageIcon from '@mui/icons-material/Language';
import NavigationButton from "./ui/NavigationButton";
import MenuIcon from "@mui/icons-material/Menu"
import {useRouter} from "next/router";
import Link from "next/link";

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const languages = ['ru', 'en'];
const pages = ["news", "docs", "info", "feedback", "contacts"];

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElLanguage, setAnchorElLanguage] = React.useState<null | HTMLElement>(null);
    const { t, i18n } = useTranslation('common');
    const router = useRouter();

    const onNavigate = (page: string) => {
        router.push(page);
    }

    const handleCloseNavMenu = (page: string) => {
        onNavigate(page);
        setAnchorElNav(null);
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

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
                        {t<string>('logo')}
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(page => (
                            <NavigationButton key={page} label={t(page)} onNavigate={() => onNavigate(page)} />
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                    <Typography textAlign="center">{t<string>(page)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        {t<string>('logo')}
                    </Typography>
                    <Box sx={{ flexGrow: 0, marginRight: '10px' }}>
                        <Tooltip title="Change language">
                            <IconButton onClick={handleOpenLanguageMenu} sx={{ p: 0 }}>
                                <Typography
                                    sx={{ marginRight: 1 }}
                                    variant="body2"
                                    color="white"
                                >
                                    {t<string>(i18n.language)}
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
                                <MenuItem key={lang}>
                                    <Typography textAlign="center">
                                        <Link
                                            style={{ textDecoration: 'none', color: 'black'}}
                                            href={router.route}
                                            locale={lang}
                                        >
                                            {t<string>(lang)}
                                        </Link>
                                    </Typography>
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
