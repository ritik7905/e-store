import React from "react";
import { Form, InputGroup } from "react-bootstrap";

import { IoIosSend, IoLogoPinterest } from "react-icons/io";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <IoIosSend className="newsletter icon text-white" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div>
                <InputGroup>
                  <Form.Control
                    className="shadow-none border-0"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Text id="basic-addon2">
                    {/* <BiSearch className="icon icon-search fs-6" /> */}
                    Subscribe
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="text-white fs-6 footer-address">
                <address>
                  Hno: G-45 / 18, Laxmi Park, <br /> New Delhi, India
                  <br />
                  PinCode: 110041
                </address>
                <a href="tel:+91 9599567905" className="mt-4 d-block mb-1">
                  +91 9599567905
                </a>
                <a
                  href="mailto:ritik.trilok7905@gmail.com"
                  className="mt-4 d-block mb-3"
                >
                  ritik.trilok7905@gmail.com
                </a>
              </div>

              <div className="social-icons d-flex align-items-center gap-15">
                <a
                  href="https://www.facebook.com/"
                  className="d-flex justify-content-center align-items-center"
                >
                  <AiOutlineTwitter className="icon-twitter icon text-white" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="d-flex justify-content-center align-items-center"
                >
                  <AiFillFacebook className="icon-facebook icon text-white" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="d-flex justify-content-center align-items-center"
                >
                  <IoLogoPinterest className="icon-pinterest icon text-white" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="d-flex justify-content-center align-items-center"
                >
                  <AiOutlineInstagram className="icon-insta icon text-white" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="d-flex justify-content-center align-items-center"
                >
                  <AiFillYoutube className="icon-youtube icon text-white" />
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Term & Conditions
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Faq
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white py-2 mb-1">
                  Laptop
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Filmy Chunk
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
