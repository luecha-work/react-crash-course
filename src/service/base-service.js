import { Component } from "react";

// Superclass
class BaseService extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      sound: "",
    };

    this.options = {
      application: "text/json",
    };
  }
}

class Cat extends BaseService {
  constructor(props) {
    super(props);
    this.state = {
      name: "Cat",
      sound: "Meow!",
    };
  }
}
