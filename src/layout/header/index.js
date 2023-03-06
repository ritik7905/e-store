import React from "react";
import { Dropdown, Form, InputGroup } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

// icons
import { BiSearch } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-start text-white mb-0">
                Free Shipping Over ${100} & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a
                  href="tel:+91 9599567905"
                  className="text-decoration-none text-white"
                >
                  +91 999567905
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-middle py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3 className="mb-0">
                <Link to="/" className="text-decoration-none text-white">
                  Filmy Chunk
                </Link>
              </h3>
            </div>
            <div className="col-5">
              <InputGroup>
                <Form.Control
                  className="shadow-none border-0"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                  <BiSearch className="icon icon-search fs-6" />
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="col-5">
              <div className="header-middle-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center text-decoration-none gap-10 text-white">
                    <img
                      src={require("../../assets/icons/compare.png")}
                      alt="icon"
                    />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-decoration-none gap-10 text-white">
                    <img
                      src={require("../../assets/icons/favourite.png")}
                      alt="icon"
                    />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-decoration-none gap-10 text-white">
                    <img
                      src={require("../../assets/icons/user.png")}
                      alt="icon"
                    />
                    <p className="mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-decoration-none gap-10 text-white">
                    <img
                      src={require("../../assets/icons/cart.png")}
                      alt="icon"
                    />
                    <div className="d-flex flex-column align-items-center">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ {500}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="shadow-none border-0 rounded-0"
                    >
                      <img
                        src={require("../../assets/icons/more.png")}
                        className="igm-fluid icon me-3"
                        alt="more"
                      />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                      <FaChevronDown />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item to="/" className="text-white">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item to="/" className="text-white">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item to="/" className="text-white">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink
                      to={"/"}
                      className="text-decoration-none text-white"
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to={"/about"}
                      className="text-decoration-none text-white"
                    >
                      Our Store
                    </NavLink>
                    <NavLink
                      to={"/"}
                      className="text-decoration-none text-white"
                    >
                      Blogs
                    </NavLink>
                    <NavLink
                      to={"/contact"}
                      className="text-decoration-none text-white"
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
