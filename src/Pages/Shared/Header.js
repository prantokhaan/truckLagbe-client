import React from 'react';
import { Menu, Dropdown, Button, Space, Row, Col } from "antd";
import { Link } from "react-router-dom";

const Header = (props) => {
    const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/">Home</a>
      </Menu.Item>
      <Menu.Item>
        <Link to="/userbookings">My Bookings</Link>
      </Menu.Item>
      {user?.role === "admin" && (
        <Menu.Item>
          <Link to="adminHome">Admin</Link>
        </Menu.Item>
      )}
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        <li style={{ color: "orangered" }}>Logout</li>
      </Menu.Item>
    </Menu>
  );
    return (
      <div>
        <div className="header bs1">
          <Row gutter={16} justify="center">
            <Col lg={20} sm={24} xs={24}>
              <div className="d-flex justify-content-between">
                <h1>
                  <b>
                    <Link
                      to="/"
                      style={{ color: "orangered", textDecoration: "none" }}
                    >
                      <span
                        style={{
                          textTransform: "uppercase",
                          fontFamily: `'Oswald', sans-serif`,
                        }}
                      >
                        <span>Truck</span>{" "}
                        <span style={{ color: "green" }}>Lagbe?</span>
                      </span>
                    </Link>
                  </b>
                </h1>

                {user ? (
                  <Dropdown placement="bottomCenter" overlay={menu}>
                    <Button>{user?.username}</Button>
                  </Dropdown>
                ) : (
                  <Button><Link to="/login">Login</Link></Button>
                )}
              </div>
            </Col>
          </Row>
        </div>
        <div className="content">{props.children}</div>

        <div className="footer text-center">
          <hr />

          <p>Desinged and Developed By</p>

          <p>Pranto</p>
        </div>
      </div>
    );
};

export default Header;