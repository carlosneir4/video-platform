import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos, deleteVideo } from '../actions';
import { Helmet } from 'react-helmet';
import Video from '../component/video/Video';

class VideoList extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  handleClick(idVideo) {
    if(confirm("Are you sure, you want to delete this video ?")){
      this.props.deleteVideo(idVideo);
    }
  }

  renderVideos() {
    const list = this.props.videos.list
    if (list) {
      return Object.keys(list).map(function (idVideo, index) {
        return (
          <li key={index}>
            <Video id={idVideo} video={list[idVideo]} handleClick={this.handleClick} />
          </li>
        )
      },this);
    }
  }

  head() {
    return (
      <Helmet>
        <title>{`List Video`}</title>
        <meta property="og:title" content="Video Platform App" />
      </Helmet>
    );
  }

  render() {
    return (
      <div>
        {this.head()}
        <ul>
          {this.renderVideos()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ videos }) {
  return { videos };
}

function loadData(store) {
  return store.dispatch(fetchVideos());
}

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
  deleteVideo: (id) => dispatch(deleteVideo(id))
})

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(VideoList)
};
