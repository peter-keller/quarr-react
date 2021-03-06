import React, { Component } from "react";
import { Input, Label, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Contact extends Component {
  state = {
    fireRedirect: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, subject, email, message } = this.state;
    axios
      .post("http://localhost:5000/api/contact", {
        name,
        subject,
        email,
        message
      })
      .then(res => this.setState({ fireRedirect: true }));
  };

  render() {
    const { fireRedirect } = this.state;

    return (
      <section className="clean-block clean-form dark">
        <div className="container">
          <div className="block-heading" style={{ marginTop: "80px" }}>
            <h2 className="text-info">Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="form-group">
              <Label htmlFor="name">Your Name</Label>
              <Input
                onChange={this.handleChange}
                className="form-control item"
                id="name"
                type="text"
                name="name"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label htmlFor="subject">Subject</Label>
              <Input
                onChange={this.handleChange}
                className="form-control item"
                id="subject"
                type="text"
                name="subject"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={this.handleChange}
                className="form-control item"
                id="email"
                type="text"
                name="email"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Label htmlFor="message">Message</Label>
              <Input
                onChange={this.handleChange}
                className="form-control item"
                id="message"
                type="textarea"
                name="message"
              />
            </FormGroup>
            <FormGroup>
              <button
                className="btn-block btn-lg btn btn-primary"
                type="submit"
              >
                Send
                {fireRedirect && <Redirect to={"/success"} />}
              </button>
            </FormGroup>
          </Form>
        </div>
      </section>
    );
  }
}

export default Contact;
