import React, { Component } from "react";
import { editorConext } from "../../context/EditorContext";
import "./SideBar.css";

class SideBar extends Component {
  static contextType = editorConext;
  render() {
    return (
      <div id="sideBar">
        <div>
          <h3 className="text-left">Performance</h3>
          <div className="card">
            <div className="card-body p-2">
              <div className="head-icon">
                <h5 className="card-title text-left">Power Words</h5>
                <span>
                  {" "}
                  <i
                    className="fas fa-info"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Tooltip on top"
                  ></i>
                </span>
              </div>

              <p className="card-text text-left power-word-p">
                {this.context.powerWords}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-2">
              <div className="head-icon">
                <h5 className="card-title text-left">Readability</h5>
                <span>
                  {" "}
                  <i
                    className="fas fa-info"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Tooltip on top"
                  ></i>
                </span>
              </div>
              <p className="card-text text-left readabilty-word-p">
                {this.context.readabilty}
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-body p-2">
              <h5 className="card-title text-left">Words Count</h5>
              <p className="card-text text-left word-count-p">
                {this.context.editorWords}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-left">Adds on</h3>
          <div className="card">
            <div className="card-body">
              <a href="/" className="btn btn-primary">
                Fact Check
              </a>
            </div>
          </div>
        </div>

        <div className="my-4">
          <h3 className="text-left">Key Words To Use</h3>
          <div className="">
            {/* <div className="">
              <span className="badge badge-pill badge-success mx-1">Primary</span>
              <span className="badge badge-pill badge-success mx-1">Secondary</span>
              <span className="badge badge-pill badge-success mx-1">Success</span>
              <span className="badge badge-pill badge-danger mx-1">Danger</span>
              <span className="badge badge-pill badge-danger mx-1">Warning</span>
              <span className="badge badge-pill badge-danger mx-1">Info</span>
              <span className="badge badge-pill badge-danger mx-1">Dark</span>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
