import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Block } from "../style.js";
import { Icon } from "../style.js";
import { Img } from "../style.js";
import { Title } from "../style.js";
import { Input } from "../style.js";
import { Check } from "../style.js";
import { Button } from "../style.js";
import { AskUp } from "../style.js";
import { Span } from "../style.js";
import { End } from "../style.js";
import { Person } from "../style.js";
import { Name } from "../style.js";

import { isMailValid } from "../check.js";
import { isPassValid } from "../check.js";
import { isNameValid } from "../check.js";
import { isSurnameValid } from "../check.js";

import padlock from "../images/padlock.png";
import "../fonts.css";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      surname: "",
      colorMail: "",
      colorPass: "",
      colorName: "",
      colorSurname: "",
      arrUser: [],
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
  checkName = (e) => {
    const colorName = isNameValid(e.target.value) ? "green" : "red";
    this.setState({
      colorName,
      name: e.target.value,
    });
  };
  checkSurname = (e) => {
    const colorSurname = isSurnameValid(e.target.value) ? "green" : "red";
    this.setState({
      colorSurname,
      surname: e.target.value,
    });
  };
  saveUser = () => {
    if (
      (this.state.colorMail === "green") &
      (this.state.colorPass === "green") &
      (this.state.colorName === "green") &
      (this.state.colorSurname === "green")
    ) {
      let arr = this.state.arrUser;
      const user = {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        password: this.state.password,
      };
      arr.push(user);
      console.log(arr);
      localStorage.setItem("users", JSON.stringify(arr));
      this.setState({
        email: "",
        password: "",
        name: "",
        surname: "",
        colorMail: "",
        colorPass: "",
        colorName: "",
        colorSurname: "",
      });
    }
  };
  render() {
    return (
      <Block>
        <Icon>
          <Img src={padlock} alt="padlock" />
        </Icon>
        <Title>Sign Up</Title>
        <Person>
          <Name
            placeholder="First Name*"
            value={this.state.name}
            onChange={this.checkName}
            color={this.state.colorName}
          />
          <Name
            placeholder="Last Name*"
            value={this.state.surname}
            onChange={this.checkSurname}
            color={this.state.colorSurname}
          />
        </Person>
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
          <label for="member">
            I want to receive inspiration, marketing promotions and updates via
            email.
          </label>
        </Check>
        <Button onClick={this.saveUser}>SIGN UP</Button>
        <AskUp>
          <Link to="/sign" className="link">
            <Span>Already have an account? Sign in</Span>
          </Link>
        </AskUp>
        <End>Copyright@ Your Website 2020</End>
      </Block>
    );
  }
}
