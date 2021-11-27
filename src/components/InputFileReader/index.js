import {Component} from 'react'

import ReactFileReader from 'react-file-reader'

class InputFileReader extends Component {
  state = {selectedFile: ''}

  handleFiles = event => {
    this.setState({
      selectedFile: event.fileList[0],
    })
  }

  render() {
    const {selectedFile} = this.state
    console.log(selectedFile)
    return (
      <ReactFileReader
        fileTypes={['.json']}
        base64
        handleFiles={this.handleFiles}
      >
        <button type="button" className="upload-button">
          Upload
        </button>
      </ReactFileReader>
    )
  }
}

export default InputFileReader
