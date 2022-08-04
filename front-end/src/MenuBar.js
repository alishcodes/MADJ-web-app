import React from "react";
import { 
    IconButton, Typography, Stack, AppBar, 
    Drawer, Box, Button, List, ListItem, ListItemButton, 
    ListItemText, ListItemIcon, Grid, Divider } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import { Menu, ShoppingCart, ExpandLess, ExpandMore } from '@mui/icons-material';
import Toolbar from "@mui/material/Toolbar";
import { Link } from 'react-router-dom';

const MenuBar = () => {
    {/*Initialize menuOpen to false and func to set state*/}
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [openSubMenu, setOpenSubMenu] = React.useState(false);

    {/*Open = boolean, sets menuOpen state*/}
    const toggleDrawer = (open) => {
        setMenuOpen(open);
    }

    const toggleSubMenu = () => {
        setOpenSubMenu((!openSubMenu));
    }

    const menuItems = [
        { link: "/", text: 'All' },
        { link: "/", text: 'Tops' },
        { link: "/", text: 'Outerwear'},
        { link: "/", text: 'Shorts'},
        { link: "/", text: 'Pants'}
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
                            <Menu sx={{ color: "gray" }}/>
                        </IconButton>
                        <Link to={"/"} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                            <Typography variant="overline" fontSize={30} sx={{ color: "gray" }}>
                                Sprint
                            </Typography>
                        </Link>
                        <Link to={"/"} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                            <IconButton size="large">
                                <ShoppingCart sx={{ color: "gray"}}/>
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
                    <List component="nav" >
                        <ListItem>
                            <ListItemButton onClick={toggleSubMenu}>
                                <ListItemText primary={"Clothing"}/>
                                {openSubMenu ? <ExpandLess/> : <ExpandMore/>}
                            </ListItemButton>
                        </ListItem>
                        <Collapse in={openSubMenu} unmountOnExit> {/*Show children when subMenuOpen = true*/}
                            <Divider/>
                            <List component="div" disablePadding>
                                {menuItems.map( ( curr, index ) => (
                                    <Link to={curr.link} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                                        <ListItem>
                                            <ListItemButton onClick={() => toggleDrawer(false)} sx={{ pl: 4 }}>
                                                <ListItemText primary={curr.text} />
                                            </ListItemButton>
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                            <Divider/>
                        </Collapse>
                        <Link to="/" style={{ textDecoration: 'inherit', color: 'inherit' }}>
                            <ListItem>
                                <ListItemButton onClick={() => toggleDrawer(false)}>
                                    <ListItemText primary={"Shoes"}/>
                                </ListItemButton>  
                            </ListItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'inherit', color: 'inherit' }}>
                            <ListItem>
                                <ListItemButton onClick={() => toggleDrawer(false)}>
                                    <ListItemText primary={"Accessories"}/>
                                </ListItemButton>  
                            </ListItem>
                        </Link>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}

export default MenuBar;