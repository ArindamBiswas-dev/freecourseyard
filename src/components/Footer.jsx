import { Container, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles({
    hrClass: {
        width: "90%",
        height: "1px",
        border: "none",
        backgroundColor: "#00FF72"
    },

    contactUs: {
        textDecoration: "none",
        color: "white",
        "& span": {
            color: "#00FF72",
            marginRight: "10px"
        }
    }
})

function Footer() {
    const classes = useStyles();
    return (
        <div>
            <hr className={classes.hrClass} />
            <Container style={{ marginBottom: "15%" }}>
                <Grid container spacing={2} justify="space-between">
                    <Grid item xs={12} sm={4} style={{ color: "white" }}>
                        <h1 style={{ color: "white", marginBottom: "5%" }}>About Us</h1>
                        <h4>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, eius!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, eius!
                        </h4>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{ color: "white" }}>
                        <h1 style={{ color: "white", marginBottom: "5%" }}>Contact</h1>
                        <h4>
                            <a href="mailto:contact@freecourseyard.com" className={classes.contactUs}>
                                <span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>contact@freecourseyard.com
                            </a>
                        </h4>
                    </Grid>
                </Grid>
            </Container>
            <h4 style={{ color: "white", marginBottom: "15px", textAlign: "center" }} className="footerName">
                Design and Development  by  <span className="footerSpanName">FREE<span style={{ color: "#00FF72" }}>COURSE</span>YARD</span>
            </h4>
        </div>
    )
}

export default Footer
