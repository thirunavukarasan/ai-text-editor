import React, { Component } from "react";
export const editorConext = React.createContext();

class editorConextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      editorWords: 0,
      readabilty: "N/A",
      powerWords: "N/A",
      seteditorWords: this.seteditorWords,
      setreadabilty: this.setreadabilty,
      setpowerWords: this.setpowerWords,
    };
  }

  seteditorWords = (count) => {
    this.setState({ editorWords: count });
  };

  setreadabilty = (score) => {
    let scoreValue = score.toFixed(0);
    let comment = "N/A";

    if (scoreValue < 10) {
      comment = "Extremely difficult to read";
    } else if (scoreValue >= 10 && scoreValue < 30) {
      comment = "Very difficult to read";
    } else if (scoreValue >= 30 && scoreValue < 50) {
      comment = "Difficult to read";
    } else if (scoreValue >= 50 && scoreValue < 60) {
      comment = "Fairly difficult to read";
    } else if (scoreValue >= 60 && scoreValue < 70) {
      comment =
        "Plain English.Easily understood by 13- to 15-year-old students.";
    } else if (scoreValue >= 70 && scoreValue < 80) {
      comment = "Fairly easy to read";
    } else if (scoreValue >= 80 && scoreValue < 90) {
      comment = "Easy to read";
    } else if (scoreValue >= 90 && scoreValue <= 100) {
      comment = "Very easy to read";
    }
    this.setState({ readabilty: comment });
  };

  setpowerWords = (wordsCount) => {
    this.setState({ powerWords: wordsCount });
  };

  render() {
    return (
      <editorConext.Provider value={this.state}>
        {this.state.children}
      </editorConext.Provider>
    );
  }
}

export default editorConextProvider;
