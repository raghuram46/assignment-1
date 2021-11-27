import {Component} from 'react'

import ReactFileReader from 'react-file-reader'
import axios from 'axios'

class InputFileReader extends Component {
  state = {data: ''}

  onFileUpload = () => {
    const {data} = this.state
    const updatedData = {
      userList: data,
    }
    const url = 'http://localhost:3001/api/users'
    axios
      .post(url, JSON.stringify(updatedData))
      .then(response => console.log('success'))
  }

  handleFiles = files => {
    const reader = new FileReader()
    reader.readAsText(files[0])
    reader.onload = () => {
      this.setState({data: reader.result}, this.onFileUpload)
    }
  }

  render() {
    return (
      <ReactFileReader fileTypes={['.json']} handleFiles={this.handleFiles}>
        <button type="button" className="upload-button">
          Upload
        </button>
      </ReactFileReader>
    )
  }
}

export default InputFileReader
