import React from 'react';
import Carousel from 'react-material-ui-carousel'


function ImgSlider() {
    var items = [
        {
            srce: "/csilde3.jpg"
        },
        {
            srce: "/csilde2.jpg"
        },
        {
            srce: "/csilde3.jpg"
        }
    ]
    return (
        <Carousel navButtonsAlwaysVisible="true" animation="fade" autoPlay={false}>
            {
                items.map((item, i) => <Item key={i} item={item} />)

            }
        </Carousel>
    )
}

function Item(props) {
    // console.log(props.item.srce)
    return (

        <div style={{ height: "300px" }}>
            <img src={process.env.PUBLIC_URL + "/Images" + props.item.srce}
                style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="i" />
        </div>
    )
}

export default ImgSlider
