// import {Outlet} from "react-router-dom";
// import { Container } from "@mui/material";
import RegisterPage from "../../../auth/register/RegisterPage";
import HomeHeader from "../../../home/homeHeader/HomeHeader";
// import HomeFooter from "../../../home/homeFooter/homeFooter";

const DefaultLayout = () => {
    return (
        <main>
            <HomeHeader />
            {/* <Container style={{padding: 0, maxWidth:"100%"}}>
                <Outlet/>
            </Container>
            <HomeFooter /> */}
            <RegisterPage />
        </main>
    );
}

export default DefaultLayout;