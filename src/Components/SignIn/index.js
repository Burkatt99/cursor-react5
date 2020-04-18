import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Block } from "../style.js";
import { Icon } from "../style.js";
import { Img } from "../style.js";
import { Title } from "../style.js";
import { Input } from "../style.js";
import { Check } from "../style.js";
import { Button } from "../style.js";
import { AskIn } from "../style.js";
import { Span } from "../style.js";
import { End } from "../style.js";

import { isMailValid } from "../check.js";
import { isPassValid } from "../check.js";

import padlock from "../images/padlock.png";
import "../fonts.css";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      colorMail: "",
      colorPass: "",
    };
  }

  checkEmail = (e) => {
    const colorMail = isMailValid(e.target.value) ? "green" : "red";
    this.setState({
      colorMail,
      email: e.target.value,
    });
  };
  checkPass = (e) => {
    const colorPass = isPassValid(e.target.value) ? "green" : "red";
    this.setState({
      colorPass,
      password: e.target.value,
    });
  };
  checkUser = () => {
    const arrUsers = JSON.parse(localStorage.getItem("users"));
    arrUsers.forEach((el) => {
      if (
        (this.state.email === el.email) &
        (this.state.password === el.password)
      ) {
        alert("Sucessful");
      } else {
        alert("Failed");
      }
    });
  };
  render() {
    return (
      <Block>
        <Icon>
          <Img src={padlock} alt="padlock" />
        </Icon>
        <Title>Sign In</Title>
        <Input
          placeholder="Email Address*"
          value={this.state.email}
          onChange={this.checkEmail}
          color={this.state.colorMail}
        ></Input>
        <Input
          placeholder="Password*"
          type="password"
          value={this.state.password}
          onChange={this.checkPass}
          color={this.state.colorPass}
        ></Input>
        <Check>
          <input id="member" type="checkbox" value="check2" />
          <label for="member">Remember me</label>
        </Check>
        <Button onClick={this.checkUser}>SIGN IN</Button>
        <AskIn>
          <Link to="/password" className="link">
            <Span>Forgot password?</Span>
          </Link>
          <Link to="/registr" className="link">
            <Span>Don't have an account?Sign up</Span>
          </Link>
        </AskIn>
        <End>Copyright@ Your Website 2020</End>
      </Block>
    );
  }
}
