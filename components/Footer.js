import React, { useState } from "react";
import Container from "./Container";
import Typography from "@mui/material/Typography";

function Footer(){
    return(
        <Container>
            <Typography style={{
                margin: "10px",
                'textAlign': 'center'
          }}>
                copyright@ 深维闪想科技(深圳)有限责任公司
            </Typography>
        </Container>
    )
}


export default Footer;