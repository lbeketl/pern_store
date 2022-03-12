import React, { useContext } from "react";
import { Context } from "..";
import { observer } from "mobx-react-lite";
import Nav from "react-bootstrap/Nav";
import { Button, Container, Navbar } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink, useHistory } from "react-router-dom";

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    const logout = () => {
        user.setUser({});
        user.setIsAuth(false);
        history.push(LOGIN_ROUTE);
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{ color: "white" }}>
                    Купити Девайс
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(`${ADMIN_ROUTE}`)}
                        >
                            Адмін панель
                        </Button>
                        <Button variant={"outline-light ml-2"} onClick={() => logout()}>
                            Вийти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >
                            Авторизація
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
