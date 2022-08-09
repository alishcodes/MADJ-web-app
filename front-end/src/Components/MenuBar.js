import React from "react";
import { 
    IconButton, Typography, Stack, AppBar, 
    Drawer, Box, List, ListItem, ListItemButton,
    ListItemText, Divider } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import { Menu, ShoppingCart, ExpandLess, ExpandMore } from '@mui/icons-material';
import Toolbar from "@mui/material/Toolbar";
import { Link } from 'react-router-dom';

const MenuBar = () => {
    /*Initialize menuOpen to false and func to set state*/
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [openSubMenu, setOpenSubMenu] = React.useState(false);

    /*isOpen = boolean, sets menuOpen state*/
    const toggleDrawer = (isOpen) => {
        setMenuOpen(isOpen);
    }

    const toggleSubMenu = () => {
        setOpenSubMenu((!openSubMenu));
    }

    const menuItems = [
        { link: "/catalog", text: 'All' },
        { link: "/catalog/tops", text: 'Tops' },
        { link: "/catalog/outerwear", text: 'Outerwear'},
        { link: "/catalog/shorts", text: 'Shorts'},
        { link: "/catalog/pants", text: 'Pants'}
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
                        <IconButton component={Link} to={"/"} size="large" sx={{ textDecoration: 'inherit', color: 'inherit' }}>
                            <ShoppingCart sx={{ color: "gray"}}/>
                        </IconButton>
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
                    <List component="nav" disablePadding>
                        <ListItemButton onClick={toggleSubMenu} sx={{ margin: "10px", padding: "10px"}}>
                            <ListItemText primary={"Clothing"}/>
                            {openSubMenu ? <ExpandLess/> : <ExpandMore/>}
                        </ListItemButton>
                        <Collapse in={openSubMenu} unmountOnExit> {/*Show children when subMenuOpen = true*/}
                            <Divider/>
                            <List component="div">
                                {menuItems.map( ( curr, index ) => (
                                    <ListItem component={Link} to={curr.link} key={curr.text} sx={{ padding: "0", margin:"0", textDecoration: 'inherit', color: 'inherit' }}>
                                        <ListItemButton onClick={() => toggleDrawer(false)} sx={{ padding: "10px", pl: 4 }}>
                                            <ListItemText primary={curr.text} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            <Divider/>
                        </Collapse>
                        <ListItem component={Link} to={"/catalog/shoes"} sx={{ padding: 0, margin: 0, marginTop: "8px", textDecoration: 'inherit', color: 'inherit' }}>
                            <ListItemButton onClick={() => toggleDrawer(false)} sx={{ pl: 4 }}>
                                <ListItemText primary={"Shoes"}/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem component={Link} to={"/catalog/accessories"} sx={{ padding: 0, margin: 0, marginTop: "8px", textDecoration: 'inherit', color: 'inherit' }}>
                            <ListItemButton onClick={() => toggleDrawer(false)} sx={{ pl: 4 }}>
                                <ListItemText primary={"Accessories"}/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}

export default MenuBar;