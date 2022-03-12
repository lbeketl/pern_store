import React, { useState, useContext } from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Auth = observer(() => {
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const { user } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">
                    {isLogin ? "Авторизація" : "Реєстрація"}
                </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш емейл"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введіть ваш пароль"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? (
                            <div>
                                Немає акаунта?&nbsp;
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Зареєструватись
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                Є акаунт?&nbsp;
                                <NavLink to={LOGIN_ROUTE}>Вхід</NavLink>
                            </div>
                        )}
                        <Button
                            className="mt-3"
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? "Вхід" : "Реєстрація"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
