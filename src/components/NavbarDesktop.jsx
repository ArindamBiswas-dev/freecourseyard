import { AppBar, Button, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    navHeading: {
        fontSize: "35px",
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
        fontSize: "25px",
        width: "95%"
    },

})

function NavbarDesktop() {
    const classes = useStyles();
    const [searchInput, setsearchInput] = React.useState("");

    const onHandelChange = (e) => {
        setsearchInput(e.target.value);
        console.log(searchInput);
    }

    const onSearchClickHandelar = () => {
        console.log(searchInput);
        console.log("onsubmit handeler")
    }
    return (
        <AppBar position="sticky" style={{ backgroundColor: "#002333", paddingTop: "5px", paddingBottom: "5px", }}>
            <Toolbar>

                <Grid container spacing={2} alignItems="center" justify="space-between">
                    <Grid item xs={3}>
                        <Typography className={classes.navHeading}>
                            FREE<br /><span style={{ color: "#00FF72" }}>COURSE</span><br />YARD
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{ border: "1px solid white", padding: "5px", height: "40%", borderRadius: "5px", display: "flex" }}>
                            <input
                                className={classes.inputStyle}
                                placeholder="Search here..."
                                value={searchInput}
                                onChange={onHandelChange}
                            />
                            <IconButton style={{ color: "white", padding: "0px 10px" }} onClick={onSearchClickHandelar}>
                                <SearchIcon />
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={3} style={{ textAlign: "center" }}>
                        <Button variant="contained" style={{ backgroundColor: "#00FF72", fontWeight: "bolder", margin: "5px" }}>sign up</Button>
                        <Button variant="contained" style={{ backgroundColor: "#00FF72", fontWeight: "bolder", margin: "5px" }}>log in</Button>
                    </Grid>
                </Grid>



                {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div><Typography className={classes.navHeading}>
                        FREE<br /><span style={{ color: "#00FF72" }}>COURSE</span><br />YARD
                    </Typography></div>
                    <div style={{ border: "1px solid white", padding: "5px", height: "40%", borderRadius: "5px" }}>
                        <input className={classes.inputStyle} placeholder="Search here..." />
                    </div>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default NavbarDesktop
