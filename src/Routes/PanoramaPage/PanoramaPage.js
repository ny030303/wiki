import * as React from 'react';
import "./PanoramaPage.css";
import "photo-sphere-viewer/dist/photo-sphere-viewer.min.css";
import PhotoSphereViewer from "photo-sphere-viewer";
import eventService from "../../services/EventService";
import FontAwesome from "react-fontawesome";

export default class PanoramaPage extends React.Component {

  constructor(props) {
    super(props);
    this.viewer = null;
  }


  componentDidMount() {
    eventService.emitEvent("panoramaState", true);
    this.viewer = new PhotoSphereViewer({
      container: 'viewer',
      panorama: `image/streetview/${this.props.match.params.type}.jpeg`
    });
  }

  componentWillUnmount() {
    eventService.emitEvent("panoramaState", false);
  }

  render() {
    return (
      <div className="panoramaPage page">
        <div className="panoramaPage_head"/>
        <div id="viewer"/>
        <div className="panoramaPage_left"/>
        <div className="panoramaPage_body">
          <div onClick={() => this.props.history.push("/")}>
            <FontAwesome
              className=""
              name="home"
              style={{color: "rgb(73, 67, 61)", fontSize: "38px", margin: "30px 0", cursor: "pointer"}}
            />
          </div>
        </div>
      </div>
    );
  };
};