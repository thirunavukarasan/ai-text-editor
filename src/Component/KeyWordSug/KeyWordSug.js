import React, { Component } from "react";
import { editorConext } from "../../context/EditorContext";
import ApiService from "../../services/apiService";

class KeyWordSug extends Component {
  static contextType = editorConext;
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
    };
  }

  onChangeHandler = async (e) => {
    if (e && e.target.value === "") {
      this.context.setKeyWordsTouse([]);
    }
    this.setState({ inputVal: e.target.value });
    this.context.setinputKey(e.target.value);
  };

  onKeyPressEnter = (e) => {
    if (e.key === "Enter") {
      this.search();
    }
  };

  async search() {
    if (!this.state.inputVal) {
      return;
    }
    let keyWordsResp = await ApiService.getKeyWords(this.state.inputVal);
    let mappingKeyColor = await ApiService.keyWordsToUse(
      keyWordsResp,
      this.context.editorText
    );
    this.context.setKeyWordsTouse(mappingKeyColor);
  }

  render() {
    return (
      <div className="my-4">
        <h4 className="text-left">Key Words To Use</h4>
        <div className="row mb-2">
          <div className="col-12 input-group">
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                className="form-control"
                aria-label="Search Key Words"
                placeholder="Search Key Words"
                onKeyPress={(e) => this.onKeyPressEnter(e)}
                onChange={(e) => this.onChangeHandler(e)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => this.search()}
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="row" style={{ paddingLeft: `12px` }}>
          <div className="col-12" style={{ display: "contents" }}>
            {this.context.KeyWordsTouse.map((data) => {
              return (
                <span
                  className={`badge badge-pill ${data.color} mx-1 my-1`}
                  key={data.keyword}
                >
                  {data.keyword}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default KeyWordSug;
