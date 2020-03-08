import React, {Component} from 'react';

const svg = {
  iamport: 'M0,0h27.438v106.395H0V0z M57.224,0h24.23v20.31L65.277,45.395H50.096l7.128-25.085V0z M182.575,39.834 c3.23-4.941,7.065-8.702,11.508-11.294c4.439-2.589,9.322-3.883,14.642-3.883c9.171,0,16.155,2.829,20.952,8.481 c4.797,5.653,7.198,13.872,7.198,24.657v48.6h-25.653V64.779c0.044-0.62,0.08-1.261,0.107-1.925 c0.022-0.664,0.034-1.615,0.034-2.851c0-5.652-0.831-9.752-2.494-12.293c-1.662-2.54-4.347-3.813-8.052-3.813 c-4.845,0-8.588,1.995-11.225,5.984c-2.636,3.994-4.001,9.764-4.096,17.32v39.193h-25.653V64.779c0-8.839-0.764-14.528-2.283-17.069 c-1.518-2.54-4.229-3.813-8.123-3.813c-4.893,0-8.672,2.006-11.331,6.022c-2.662,4.015-3.989,9.752-3.989,17.208v39.267H108.46 V26.582h25.656v11.685c3.134-4.513,6.733-7.909,10.796-10.189c4.06-2.282,8.54-3.421,13.433-3.421c5.509,0,10.379,1.331,14.609,3.99 C177.18,31.309,180.388,35.037,182.575,39.834 M286.189,94.85v41.903h-25.513V26.582h25.513v11.685 c3.518-4.654,7.412-8.086,11.689-10.295c4.277-2.212,9.189-3.315,14.75-3.315c9.837,0,17.905,3.909,24.232,11.722 c6.313,7.814,9.47,17.877,9.47,30.181c0,12.305-3.157,22.364-9.47,30.178c-6.327,7.816-14.395,11.722-24.232,11.722 c-5.56,0-10.472-1.103-14.75-3.312C293.601,102.939,289.707,99.507,286.189,94.85 M303.151,43.186 c-5.465,0-9.654,2.006-12.581,6.022c-2.92,4.015-4.381,9.797-4.381,17.353c0,7.552,1.461,13.337,4.381,17.353 c2.927,4.016,7.116,6.021,12.581,6.021s9.631-1.994,12.5-5.988c2.876-3.99,4.314-9.787,4.314-17.386 c0-7.603-1.439-13.4-4.314-17.389C312.782,45.182,308.616,43.186,303.151,43.186 M403.129,24.657 c13.732,0,24.455,3.706,32.176,11.118c7.722,7.411,11.578,17.673,11.578,30.785s-3.857,23.374-11.578,30.785 c-7.721,7.412-18.444,11.115-32.176,11.115c-13.776,0-24.55-3.703-32.316-11.115c-7.772-7.411-11.651-17.673-11.651-30.785 s3.878-23.374,11.651-30.785C378.58,28.363,389.354,24.657,403.129,24.657 M403.129,42.898c-5.649,0-9.971,2.032-12.935,6.095 c-2.965,4.06-4.455,9.916-4.455,17.566c0,7.647,1.49,13.503,4.455,17.566c2.964,4.06,7.286,6.091,12.935,6.091 c5.56,0,9.809-2.031,12.758-6.091c2.942-4.063,4.418-9.919,4.418-17.566c0-7.651-1.475-13.506-4.418-17.566 C412.938,44.93,408.689,42.898,403.129,42.898 M524.701,48.315c-2.233-1.043-4.453-1.818-6.659-2.316 c-2.211-0.498-4.433-0.749-6.667-0.749c-6.55,0-11.608,2.103-15.139,6.309c-3.541,4.204-5.311,10.226-5.311,18.064v36.771h-25.51 V26.582h25.51v13.112c3.282-5.225,7.042-9.038,11.29-11.438c4.255-2.4,9.352-3.599,15.295-3.599c0.856,0,1.777,0.037,2.772,0.107 c1.003,0.07,2.45,0.225,4.351,0.461L524.701,48.315z M574.008,3.92v22.662h26.289v18.241h-26.289v33.85 c0,3.705,0.736,6.213,2.205,7.519c1.474,1.309,4.396,1.961,8.769,1.961h13.112v18.241h-21.881c-10.074,0-17.205-2.102-21.41-6.305 c-4.21-4.204-6.304-11.343-6.304-21.416v-33.85h-12.685V26.582H548.5V3.92H574.008z M619.975,78.817h25.723v21.733l-17.671,26.582 h-15.178l7.126-26.582V78.817z M619.975,26.582h25.723V54.16h-25.723V26.582z',
}

class SVG extends Component {

  render() {
    return (
      <svg
        x="0px" y="0px"
        width={this.props.width ? this.props.width : "auto"}
        height={this.props.height ? this.props.height : "auto"}
        viewBox="0 0 645.698 136.753">
        <path
          fill={this.props.color}
          d={svg[this.props.name]}
        />
      </svg>
    );
  }
}

export default SVG;