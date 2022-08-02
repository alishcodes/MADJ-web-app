import React from "react";
import { IconButton, Typography, Stack, AppBar, Drawer, Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from "@mui/material/Toolbar";
import { Link } from 'react-router-dom';

const MenuBar = () => {
    {/*Initialize menuOpen to false and func to set state*/}
    const [menuOpen, setMenuOpen] = React.useState(false);

    {/*Open = boolean, sets menuOpen state*/}
    const toggleDrawer = (open) => {
        setMenuOpen(open);
    }

    const menuItems = [
        { link: "/", text: 'Tops' },
        { link: "/", text: 'Bottoms'},
        { link: "/", text: 'Shoes'},
        { link: "/", text: 'Accessories'}
    ];

    return (
        <div>
            <AppBar position="static" color="default">  {/*AppBar has shadows*/}
                <Toolbar>
                    <Stack
                        flex="1"
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                        <IconButton size="large" edge="start" onClick={() => toggleDrawer(true)}> {/*When clicked, open=true*/}
                            <MenuIcon sx={{ color: "gray" }}/>
                        </IconButton>
                        <Link to={"/"} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                            <Typography variant="overline" fontSize={30} sx={{ color: "gray" }}>
                                Sprint
                            </Typography>
                        </Link>
                        <Link to={"/"} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                            <IconButton size="large">
                                <ShoppingCartIcon sx={{ color: "gray"}}/>
                            </IconButton>
                        </Link>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='left'
                open={menuOpen}
                onClose={() => toggleDrawer(false)}
            >
                <Box
                    role="presentation"
                    sx={{ width: 250}}
                >
                    <List>

                        {menuItems.map( ( curr, index ) => (
                            <Link to={curr.link} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => toggleDrawer(false)}>
                                        <ListItemText primary={curr.text} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}

export default MenuBar;