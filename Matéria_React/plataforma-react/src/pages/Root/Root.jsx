import { Menu } from "../../components/Menu/Menu";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import "./Root.css"

export function Root() {

    return (
        <div className="root">
            <Menu />
            <Container className="areaContainer">
                <Outlet />   
            </Container>
        </div>
    );
}