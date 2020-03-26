import React, {Component} from 'react';
import './DaumMap.css';

class DaumMap extends Component {
  componentDidMount() {
    const {kakao} = window;
    let mapContainer = document.getElementById('map');
    let mapOption = {
      center: new kakao.maps.LatLng(37.374084, 127.140999), // 지도의 중심 좌표
      level: 4 // 지도의 확대 레벨
    };
    let map = new kakao.maps.Map(mapContainer, mapOption);
    let bounds = new kakao.maps.LatLngBounds();

    // 지도에 마커를 추가
    new kakao.maps.Marker({position: mapOption.center, map: map});

    // LatLngBounds 객체에 좌표를 추가
    bounds.extend(mapOption.center);

    //좌표 기준으로 지도의 범위를 재설정으로 지도의 중심좌표와 레벨이 변경됨
    map.setBounds(bounds);
    map.relayout();
  }

  render() {
    return (
      <div className="App" id="map" style={{
        width: "600px", height: "250px",
        position: "absolute",
        top: "25%"
      }}></div>
    );
  }
}

export default DaumMap;