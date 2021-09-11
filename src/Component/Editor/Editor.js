import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState,convertToRaw} from "draft-js";
import { editorConext } from "../../context/EditorContext";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {powerWords} from "../../asset/PowerWords";
import ApiService from "../../services/apiService";

class EditorComp extends Component {
  static contextType = editorConext;
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      powerWords: [],
      powerWordCount: 0,
      predictedWords: [],
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  componentDidMount() {
    let powerWrdsPrediction = powerWords.map(words => words.toLowerCase());
    this.setState({
      powerWords:powerWrdsPrediction
    })
  }

  async onEditorStateChange() { 

    this.setState({predictedWords:[],powerWordCount:'N/A'});
    let count = 0;
    let sentenceCount = 0 ;
    let syllabusCount = 0;
    let powerWordsCount = 0;
    let blocksData = convertToRaw(this.state.editorState.getCurrentContent()).blocks;
    let text = blocksData.map(block => (block.text)).join('\n').trim().replaceAll("\n"," ");
    let splitWords = text.replace(/[ ]{2,}/gi," ").split(".");
    
    let keyWordsResp = await ApiService.getKeyWords(this.context.inputKey);
    let mappingKeyColor = await ApiService.keyWordsToUse(keyWordsResp,text);

    splitWords.forEach(string => {
        if(string) {
            const splitSentence = string.split(" ").filter(str => (str));
            const sentenceLength = splitSentence.length;
            splitSentence.forEach(element => {

                let powerStrn = element.toLowerCase();

                if(this.state.powerWords.indexOf(powerStrn) > -1 && this.state.predictedWords.indexOf(powerStrn) === -1) {
                  this.state.predictedWords.push(powerStrn);
                  powerWordsCount = this.state.predictedWords.length
                  this.setState({
                      predictedWords:this.state.predictedWords,
                      powerWordCount:powerWordsCount
                  })
                }

                if(this.state.predictedWords.length === 0) {this.setState({powerWordCount:powerWordsCount})}
            });

            count += sentenceLength;
            syllabusCount += (sentenceLength * 2) - 2;
            sentenceCount++
        }
    });

    //formula for calculating readabilty score
    const readabilityScore = (206.835-(1.015 * (count/sentenceCount))-(84.6 *(syllabusCount/count)));

    //updating state 
    this.context.setreadabilty(readabilityScore);
    this.context.seteditorWords(count);
    this.context.setpowerWords(this.state.powerWordCount);
    this.context.seteditorText(text);
    this.context.setKeyWordsTouse(mappingKeyColor);
  }

  render() {
    return (
      <div>
        <Editor
            initialEditorState={this.state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="section-editor"
            onEditorStateChange={(e) => {
              this.setState({editorState: e});
              setTimeout(() => this.onEditorStateChange(), 100);
            }}
          />
      </div>
    );
  }
}

export default EditorComp;
