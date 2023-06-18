import React from "react";
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = props =>{
    const imgUrl ="https://img.freepik.com/free-photo/salmon-with-ingredients-table_1220-5155.jpg?w=900&t=st=1687020214~exp=1687020814~hmac=089a94c43981992438744ddceb004477aea66fdf30639886e0cd936fa83390c7"
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Order-Food</h1>
            <HeaderCartButton cartShow={props.cartShow}/>
        </header>
        <div className={classes['main-image']}>
            <img src = {imgUrl}/>
        </div>
    </React.Fragment>

}

export default Header;