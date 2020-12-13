import { Container, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { tags } from './data'

const useStyles = makeStyles({
    singleTagContainer: {
        backgroundColor: "gray",
        padding: "2px 5px",
        borderRadius: "20px",
        border: "2px solid #00FF72",

        "&:hover": {
            backgroundColor: "black",
            color: "white",
            cursor: "pointer",
            transition: "0.9s",
        }
    },

    link: {
        textDecoration: "none",
        color: "black"
    }
})

function FindByTags() {
    // console.log(tags)
    const classes = useStyles();
    return (
        <div style={{ paddingLeft: "2%", paddingRight: "2%", marginBottom: "100px" }}>
            <h1 style={{ color: "white", marginBottom: "35px" }}>Find By Tags</h1>
            <Container style={{ border: "2px solid #00FF72", borderRadius: "10px", padding: "3%", textAlign: "center" }}>
                <Grid container spacing={2}>
                    {
                        tags.map((tagName, id) =>
                            <Grid item xs={4} sm={2} key={id} >
                                <Link to={`/${tagName.toLocaleLowerCase()}`} className={classes.link}>
                                    <div className={classes.singleTagContainer}>
                                        <p>{tagName}</p>
                                    </div>
                                </Link>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default FindByTags





// {/* <Grid item xs={4} sm={2}>
//                         <div style={{ backgroundColor: "gray", padding: "2px 5px", borderRadius: "20px", border: "2px solid #00FF72", }}>
//                             <Typography variant="body1" component="p">Python</Typography>
//                         </div>
//                     </Grid> */}