import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVideos, deleteVideo } from '../actions';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player'

class VideoList extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  handleClick(key) {

    console.log("tratando de eliminar",key);
    this.props.deleteVideo(key);
  }

  renderVideos() {
    const list = this.props.videos.list
    if (list) {
      return Object.keys(list).map(function (key, index) {
        return (
          <li key={index}>
            <div className="container">
              <p>Title:{list[key].title}</p>
              <p>Description:{list[key].description}</p>
              <ReactPlayer id={key}
                url={list[key].url}
                width='100%'
                height='100%'
                playing={true}
                controls={true}
                volume={1}
                progressInterval={5000}
                pip={true}
              />
              <input type="button" onClick={() => this.handleClick(key)} value="delete" />
            </div>
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
        Here's a big list of videos:
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
