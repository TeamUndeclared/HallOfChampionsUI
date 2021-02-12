import React, { Component } from "react";
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import storage from "../../Firebase/index";
import { Typography } from "@material-ui/core";

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: null,
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = (e) => {
    e.preventDefault()
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // Progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        // Completed function ...
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
          });
      }
    );
  };
  render() {
    return (
      <FormControl className="formInput">
        <Typography variant="h5">Upload a Screenshot:</Typography>
          <input 
            id="fileSelectInput"
            type="file" 
            onChange={this.handleChange}
            accept=".jpg,.jpeg,.png,.gif"
          />
          <input className="file-path validate" hidden type="text" />

          { this.state.image !== null && this.state.url === null
            ? <Button id="fileSelectButton" onClick={this.handleUpload} variant="contained" color="secondary">Upload</Button>
            : null
          }
          
          { this.state.url !== null
            ? <img src={this.state.url} className="uploadedImage" alt="Uploaded Images"/>
            : null
          }
          <input type="text" id="projectImages" value={this.state.url || null } hidden required />
      </FormControl>
    );
  }
}

export default ImageUpload;
