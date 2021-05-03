import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';
import { uploadVideo } from '../actions';

class NewVideo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      video: {
        title: '',
        description: '',
        file: ''
      }
    };
    this.inputFile=React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
    this.uploadVideo = this.uploadVideo.bind(this);
  }


  head() {
    return (
      <Helmet>
        <title>{`Upload New video`}</title>
        <meta property="og:title" content="Video Platform App" />
      </Helmet>
    );
  }

  loading() {
    if (this.props.newVideo.videoLoading) {
      return <div className="progress">
        <div className="indeterminate"> cargando ...</div>
      </div>
    }
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      video: { ...this.state.video, title: e.target.value }
    });
  }

  handleTextAreaChange(e) {
    e.preventDefault();
    this.setState({
      video: { ...this.state.video, description: e.target.value }
    });
  }

  handleFileSelected(e) {
    e.preventDefault();
    this.setState({
      video: { ...this.state.video, file: e.target.files[0] }
    });
  }

  uploadVideo(e) {
    let _this = this; 
    this.props.uploadVideo(this.state.video)
      .then(response => {
        console.log("intento borrar state")
        this.setState({
          video: { ...this.state.video, title: '', description: '', file: '' }
        });
        this.inputFile.current.value='';
      });
  }

  render() {
    const message = this.props.newVideo.createMessage;
    return (
      <div className="container">
        {this.head()}
        <div className="row">
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Title" id="title" type="text" className="validate" onChange={this.handleInputChange} value={this.state.video.title} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea" onChange={this.handleTextAreaChange}  value={this.state.video.description}></textarea>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input type="file" onChange={this.handleFileSelected} ref={this.inputFile}/>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="input-field col s6">
            <input type="button" onClick={this.uploadVideo} value="Upload" />
          </div>
          <div className="input-field col s6">
            <p>{message}</p>
          </div>
        </div>
        {this.loading()}
      </div>
    );
  }
}

function mapStateToProps({ newVideo }) {
  return { newVideo };
}

const mapDispatchToProps = dispatch => ({
  uploadVideo: (video) => dispatch(uploadVideo(video))
})

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(NewVideo)
};