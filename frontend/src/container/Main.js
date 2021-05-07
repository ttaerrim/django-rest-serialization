import React from "react";
import axios from "axios";
import { render } from "react-dom";
import Minute from "./Minute";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loaded: false,
      placeholder: "Loading",
    };
  }

  componentDidMount() {
    this._renderMinute();
  }

  render() {
    const { results } = this.state;
    console.log(results);
    return (
      <div>
        <div className="minutes">
          {results.map((r) => (
            <Minute id={r.id} code={r.code} language={r.language} />
          ))}
        </div>
      </div>
    );
  }
  _renderMinute = () => {
    axios
      .get("/s/snippets/")
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };
}
export default Main;
