import * as React from 'react';
import "./PanoramaPage.css";
import "photo-sphere-viewer/dist/photo-sphere-viewer.min.css";
import PhotoSphereViewer from "photo-sphere-viewer";
import eventService from "../../services/EventService";

export default class PanoramaPage extends React.Component {

  constructor(props) {
    super(props);
    this.viewer = null;
  }


  componentDidMount() {
    eventService.emitEvent("panoramaState", true);
    this.viewer = new PhotoSphereViewer({
      container: 'viewer',
      panorama: '/image/streetview/exam.jpeg'
    });
  }

  componentWillUnmount() {
    eventService.emitEvent("panoramaState", false);
  }

  render() {
    return (
      <div className="page">
        <div id="viewer"/>
      </div>
    );
  };
};