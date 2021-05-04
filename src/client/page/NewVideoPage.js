import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { uploadVideo } from '../actions';
import styled, {keyframes} from 'styled-components'

const Conatiner = styled.div`
  text-align: center;
  border-radius: 1em;
  color: #3c4043;
  padding: 0.3em;
  margin: 5% 10%;
  font-size: 20px;
  background: #fff;
  border: 1px solid #ccc;
  border-color: rgba(0,0,0,.2);
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

  @media (max-width: 700px) {
    font-size: 20px;
  }

  p{
      color: #ee6e73;
  }

  .message{
    color: #ee6e73;
  }

  input[type=button] {
    padding: 3px ;
    font-size: 20px;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: .5px;
    -webkit-transition: .2s ease-out;
    transition: .2s ease-out;
    cursor: pointer;
    border-radius:2px;
    border:1px solid #b2b8ad;
    display:inline-block;
    width:40%;
    font-size:15px;
    margin-right:2%;
    padding:9px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #ced9bf;
  }

  input[type=file] {
    display: none;
  }

  input[type=text] {
    text-align: center;
  }

  .custom-file-upload{
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: .5px;
    -webkit-transition: .2s ease-out;
    transition: .2s ease-out;
    cursor: pointer;
    border-radius:2px;
    border:1px solid #b2b8ad;
    display:inline-block;
    font-size:15px;
    margin-right:2%;
    padding:9px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #ced9bf;
    width:40%;
  }
`;
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: fixed;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  left: 50%;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
const Row = styled.div`
  input{
    width: 70%;
  }

  textarea{
    width: 70%;
  }

  span{
    width: 70%;
  }
`;


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
    this.inputFile = React.createRef();
    this.spanFile = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
    this.handleFileButtonClick = this.handleFileButtonClick.bind(this);
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
      return <Spinner />
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

    this.spanFile.current.value = e.target.files[0].name
  }

  handleFileButtonClick(e) {
    this.inputFile.current.click();
  }

  uploadVideo(e) {
    let _this = this;
    this.props.uploadVideo(this.state.video)
      .then(response => {
        this.setState({
          video: { ...this.state.video, title: '', description: '', file: '' }
        });
      });
  }

  render() {
    const message = this.props.newVideo.createMessage;
    return (
      <Conatiner>
        {this.head()}
        <Row>
          <p>UPLOAD VIDEO</p>
        </Row>
        <Row>
          <input id="title" placeholder="Enter title of you video" onChange={this.handleInputChange} value={this.state.video.title} />
        </Row>
        <Row>
          <textarea id="textarea1" className="materialize-textarea" onChange={this.handleTextAreaChange} value={this.state.video.description} placeholder="Add some description"></textarea>
        </Row>
        <Row>
          <input id="file-upload" type="file" onChange={this.handleFileSelected} ref={this.inputFile} />
          <label htmlFor="file-upload" className="custom-file-upload">
            Choose Video
          </label>
          <input disabled={true} style={{ textAlign: 'center' }} ref={this.spanFile} value={this.state.video.file.name || ''}></input>

        </Row>
        <Row>
          <input type="button" onClick={this.uploadVideo} value="Upload" />
          <p className="message">{message}</p>
          {this.loading()}
        </Row>
        
      </Conatiner>
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