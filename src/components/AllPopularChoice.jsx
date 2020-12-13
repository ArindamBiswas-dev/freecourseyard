import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Choice from './Choice'
import { datas } from './data'

const useStyles = makeStyles({
    hrClass: {
        width: "90%",
        height: "1px",
        border: "none",
        backgroundColor: "#00FF72",
        marginBottom: "50px"
    }
})

function AllPopularChoice() {
    const classes = useStyles();
    return (
        <div style={{ paddingLeft: "2%", paddingRight: "2%", marginBottom: "50px" }}>
            <h1 style={{ color: "white", marginBottom: "35px", textAlign: "center" }}>Popular Choices</h1>
            <hr className={classes.hrClass} />
            <Grid container spacing={1} justify="space-between">
                {
                    datas.map((data, id) => <Choice item={data} key={id} />)
                }
            </Grid>
        </div>
    )
}

export default AllPopularChoice
