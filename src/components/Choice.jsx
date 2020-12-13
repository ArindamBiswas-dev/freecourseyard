import React from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    makeStyles,
} from "@material-ui/core";

import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    media: {
        height: "170px",
    },

    gridItem: {
        padding: "5px",
        backgroundColor: "grey",
        border: "2px solid #00FF72",
        borderRadius: "5px",
        marginBottom: "20px"
    },

    title: {
        margin: "0px",
        fontSize: "25px",
        marginBottom: "10px"
    },

    description: {
        fontSize: "15px"
    },

    instructor: {
        fontWeight: "bold"
    }
});

function Choice(props) {
    // console.log(props)
    const { title, description, courseUrl, instructor } = props.item;
    const classes = useStyles();
    return (
        <Grid item sm={3} xs={12} className={classes.gridItem}>
            <Card
                variant="outlined"
                style={{ backgroundColor: "grey", border: "none" }}
            >
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={process.env.PUBLIC_URL + "/Images/csilde2.jpg"}
                />
                <CardContent style={{ paddingLeft: "0", textAlign: "justify" }}>
                    <h5 className={classes.title}> {title}</h5>
                    <p className={classes.description}>{description}</p>
                    <h4 className={classes.instructor}>
                        Instructor:
                        <span style={{ marginLeft: "5%" }}>{instructor}</span>
                    </h4>
                </CardContent>
                <CardActions style={{ textAlign: "center" }}>
                    <Button
                        size="medium"
                        variant="contained"
                        href={courseUrl}
                        target="_blank"
                        style={{ backgroundColor: "#00FF72", fontWeight: "bolder" }}
                    >
                        Go to the course
                                </Button>
                    <IconButton
                        aria-label="addToFev"
                        style={{ marginLeft: "auto" }}
                    >
                        <FavoriteIcon fontSize="large" style={{ color: "red" }} />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Choice
