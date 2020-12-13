import { AppBar, Button, Grid, IconButton, ListItemIcon, ListItemText, ListItem, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
    navHeading: {
        fontSize: "15px",
        fontWeight: 1000,
        fontFamily: "Montserrat",
        lineHeight: 1.1,
    },

    inputStyle: {
        padding: "5px",
        backgroundColor: "transparent",
        outline: "none",
        color: "white",
        border: "none",
        fontSize: "15px",
        width: "95%"
    },

    drawerRoot: {
        '& .MuiDrawer-paper': {
            width: "70%",
            backgroundColor: "#022d41",
            paddingTop: "5%",
            fontSize: "14px",
        },

        '& .drawerListItem': {
            color: "white",
            borderBottom: "1px solid #00ff72",
            // borderTop: "0.5px solid #00ff72",
            padding: "5px 10px"
        },

        '& .MuiSvgIcon-root': {
            color: "white"
        }
    }
})

function NavbarPhone() {

    const [isDrawerOpen, setDrawer] = React.useState(false);
    const [isLogIn, setLogIn] = React.useState(false);
    const [searchInput, setsearchInput] = React.useState("");

    const toggelDrawer = (open) => (event) => {
        console.log("clicked")
        setDrawer(open);
    }

    const onHandelChange = (e) => {
        setsearchInput(e.target.value);
        console.log(searchInput);
    }

    const onSearchClickHandelar = () => {
        console.log(searchInput);
        console.log("onsubmit handeler")
    }

    const classes = useStyles();
    return (
        <AppBar position="sticky" style={{ backgroundColor: "#002333", paddingTop: "15px", paddingBottom: "15px" }}>
            <Toolbar>

                <Grid container spacing={2} alignItems="center" justify="space-between">
                    <Grid item xs={6}>
                        <Typography className={classes.navHeading}>
                            FREE<span style={{ color: "#00FF72" }}>COURSE</span>YARD
                        </Typography>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: "end", padding: "0" }}>
                        <IconButton onClick={toggelDrawer(true)}>
                            <MenuIcon color="primary" />
                        </IconButton>
                        <Drawer anchor="left" open={isDrawerOpen} onClose={toggelDrawer(false)} className={classes.drawerRoot}>
                            <List>
                                {
                                    (!isLogIn) ? (<>
                                        <ListItem button className="drawerListItem" style={{ borderTop: "1px solid #00ff72" }}>
                                            <ListItemIcon>
                                                <PersonAddRoundedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Sign Up" />
                                        </ListItem>
                                        <ListItem button className="drawerListItem">
                                            <ListItemIcon>
                                                <PeopleAltRoundedIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Log In" />
                                        </ListItem>
                                    </>)
                                        :
                                        (<>
                                            <ListItem button className="drawerListItem" style={{ borderTop: "1px solid #00ff72" }}>
                                                <ListItemIcon>
                                                    <FavoriteRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Favorite" />
                                            </ListItem>
                                            <ListItem button className="drawerListItem">
                                                <ListItemIcon>
                                                    <ExitToAppRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Log Out" />
                                            </ListItem>
                                        </>)
                                }
                            </List>
                        </Drawer>
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ border: "1px solid white", padding: "5px", height: "40%", borderRadius: "5px", display: "flex" }}>
                            <input
                                className={classes.inputStyle}
                                placeholder="Search here..."
                                value={searchInput} onChange={onHandelChange}
                            />
                            <IconButton style={{ color: "white", padding: "0px 5px" }} onClick={onSearchClickHandelar}>
                                <SearchIcon />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavbarPhone


{/* <Button variant="contained" style={{ backgroundColor: "#00FF72",
 fontWeight: "bolder", fontSize: "11px" }} size="small">sign up</Button> */}