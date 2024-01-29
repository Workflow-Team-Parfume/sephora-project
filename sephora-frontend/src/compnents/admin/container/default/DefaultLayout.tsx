import {Outlet} from "react-router-dom";
import { Container } from "@mui/material";
import HomeHeader from "../../../home/homeHeader/HomeHeader";

const DefaultLayout = () => {
    return (
        <main>
            <HomeHeader />
            <Container style={{padding: 0, maxWidth:"100%"}}>
                <Outlet/>
            </Container>
            
        </main>
    );
}

export default DefaultLayout;