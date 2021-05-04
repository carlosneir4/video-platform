import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Conatiner = styled.div`
  padding: 0.3em;
  margin: 5% 15%;
  padding: 2% 7%;
  
  background: #fff;
  border: 1px solid #ccc;
  border-color: rgba(0,0,0,.2);
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);

  @media (max-width: 700px) {
    font-size: 20px;
  }

  input[type=button] {
   
    font-size: 15px;
    color: #ee6e73;
    background-color: #fff0;
    border:none;
    display:inline-block;
  }


`

const Title = styled.p`
    text-align: left;
    font-size: 24px;
    font-weight: bold;
    color:black;

`
const Description = styled.p`
    text-align: left;
    font-size: 16px;
    color:#696666;
`

const UploadedDate = styled.p`
    text-align: left;
    font-size: 10px;
    color:#bdb8b8;
`
const Delete = styled.div`
    text-align: right;
`

const parserDate = (timestamp) => {
    var date = new Date(timestamp);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}

const Video = ({ id, video, handleClick }) => {

    return (
        <Conatiner>
            <Delete><input id="delete-btn" type="button" onClick={() => handleClick(id)} value="x" title="delete" /></Delete>
            <Title id="title">{video.title}</Title>
            <Description id="description">{video.description}</Description>
            <UploadedDate id="date">Uploaded Date :{parserDate(video.createTimestamp)}</UploadedDate>
            <ReactPlayer id={id}
                url={video.url}
                width='100%'
                height='50%'
                controls={true}
                volume={1}
                progressInterval={5000}
                pip={true}
            />

        </Conatiner>
    );
};

export default Video;