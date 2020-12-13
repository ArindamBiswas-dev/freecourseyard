import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Choice from "./Choice";
import { datas } from './data'

function PopularChoice() {
    // console.log(datas);
    return (
        <div style={{ paddingLeft: "2%", paddingRight: "2%", marginBottom: "50px" }}>
            <h1 style={{ color: "white", marginBottom: "35px" }}>Popular Choices</h1>
            <Container>
                <Grid container spacing={2} justify="space-around">
                    {
                        datas.map((data, id) => <Choice item={data} key={id} />)
                    }
                </Grid>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>
                        <Link to="/popularchoice" style={{ textDecoration: "none" }}>
                            <Button variant="contained"
                                style={{ backgroundColor: "#00FF72", fontWeight: "bolder", marginTop: "10px" }}>
                                View All
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>

        </div>
    );
}

export default PopularChoice;
