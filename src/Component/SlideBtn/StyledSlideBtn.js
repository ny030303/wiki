import React, {Component} from 'react';
import styled, { keyframes, withTheme } from 'styled-components';

const animateKeyFrames = (props) =>  keyframes`
  0% { background-image: linear-gradient(90deg,  ${props.bgColor}  0% , white  0% )  }
  1% { background-image: linear-gradient(90deg,  ${props.bgColor}  1% , white  2% )  }
  2% { background-image: linear-gradient(90deg,  ${props.bgColor} 2% , white  4% )  }
  3% { background-image: linear-gradient(90deg,  ${props.bgColor} 3% , white  6% )  }
  4% { background-image: linear-gradient(90deg,  ${props.bgColor} 4% , white  8% )  }
  5% { background-image: linear-gradient(90deg,  ${props.bgColor} 5% , white  10% )  }
  6% { background-image: linear-gradient(90deg,  ${props.bgColor} 6% , white  12% )  }
  7% { background-image: linear-gradient(90deg,  ${props.bgColor} 7% , white  14% )  }
  8% { background-image: linear-gradient(90deg,  ${props.bgColor} 8% , white  16% )  }
  9% { background-image: linear-gradient(90deg,  ${props.bgColor} 9% , white  18% )  }
  10% { background-image: linear-gradient(90deg,  ${props.bgColor} 10% , white  20% )  }
  11% { background-image: linear-gradient(90deg,  ${props.bgColor} 11% , white  22% )  }
  12% { background-image: linear-gradient(90deg,  ${props.bgColor} 12% , white  24% )  }
  13% { background-image: linear-gradient(90deg,  ${props.bgColor} 13% , white  26% )  }
  14% { background-image: linear-gradient(90deg,  ${props.bgColor} 14% , white  28% )  }
  15% { background-image: linear-gradient(90deg,  ${props.bgColor} 15% , white  30% )  }
  16% { background-image: linear-gradient(90deg,  ${props.bgColor} 16% , white  32% )  }
  17% { background-image: linear-gradient(90deg,  ${props.bgColor} 17% , white  34% )  }
  18% { background-image: linear-gradient(90deg,  ${props.bgColor} 18% , white  36% )  }
  19% { background-image: linear-gradient(90deg,  ${props.bgColor} 19% , white  38% )  }
  20% { background-image: linear-gradient(90deg,  ${props.bgColor} 20% , white  40% )  }
  21% { background-image: linear-gradient(90deg,  ${props.bgColor} 21% , white  42% )  }
  22% { background-image: linear-gradient(90deg,  ${props.bgColor} 22% , white  44% )  }
  23% { background-image: linear-gradient(90deg,  ${props.bgColor} 23% , white  46% )  }
  24% { background-image: linear-gradient(90deg,  ${props.bgColor} 24% , white  48% )  }
  25% { background-image: linear-gradient(90deg,  ${props.bgColor} 25% , white  50% )  }
  26% { background-image: linear-gradient(90deg,  ${props.bgColor} 26% , white  52% )  }
  27% { background-image: linear-gradient(90deg,  ${props.bgColor} 27% , white  54% )  }
  28% { background-image: linear-gradient(90deg,  ${props.bgColor} 28% , white  56% )  }
  29% { background-image: linear-gradient(90deg,  ${props.bgColor} 29% , white  58% )  }
  30% { background-image: linear-gradient(90deg,  ${props.bgColor} 30% , white  60% )  }
  31% { background-image: linear-gradient(90deg,  ${props.bgColor} 31% , white  62% )  }
  32% { background-image: linear-gradient(90deg,  ${props.bgColor} 32% , white  64% )  }
  33% { background-image: linear-gradient(90deg,  ${props.bgColor} 33% , white  66% )  }
  34% { background-image: linear-gradient(90deg,  ${props.bgColor} 34% , white  68% )  }
  35% { background-image: linear-gradient(90deg,  ${props.bgColor} 35% , white  70% )  }
  36% { background-image: linear-gradient(90deg,  ${props.bgColor} 36% , white  72% )  }
  37% { background-image: linear-gradient(90deg,  ${props.bgColor} 37% , white  74% )  }
  38% { background-image: linear-gradient(90deg,  ${props.bgColor} 38% , white  76% )  }
  39% { background-image: linear-gradient(90deg,  ${props.bgColor} 39% , white  78% )  }
  40% { background-image: linear-gradient(90deg,  ${props.bgColor} 40% , white  80% )  }
  41% { background-image: linear-gradient(90deg,  ${props.bgColor} 41% , white  82% )  }
  42% { background-image: linear-gradient(90deg,  ${props.bgColor} 42% , white  84% )  }
  43% { background-image: linear-gradient(90deg,  ${props.bgColor} 43% , white  86% )  }
  44% { background-image: linear-gradient(90deg,  ${props.bgColor} 44% , white  88% )  }
  45% { background-image: linear-gradient(90deg,  ${props.bgColor} 45% , white  90% )  }
  46% { background-image: linear-gradient(90deg,  ${props.bgColor} 46% , white  92% )  }
  47% { background-image: linear-gradient(90deg,  ${props.bgColor} 47% , white  94% )  }
  48% { background-image: linear-gradient(90deg,  ${props.bgColor} 48% , white  96% )  }
  49% { background-image: linear-gradient(90deg,  ${props.bgColor} 49% , white  98% )  }
  50% { background-image: linear-gradient(90deg,  ${props.bgColor} 50% , white  100% )  }
  51% { background-image: linear-gradient(90deg,  ${props.bgColor} 51% , white  102% )  }
  52% { background-image: linear-gradient(90deg,  ${props.bgColor} 52% , white  104% )  }
  53% { background-image: linear-gradient(90deg,  ${props.bgColor} 53% , white  106% )  }
  54% { background-image: linear-gradient(90deg,  ${props.bgColor} 54% , white  108% )  }
  55% { background-image: linear-gradient(90deg,  ${props.bgColor} 55% , white  110% )  }
  56% { background-image: linear-gradient(90deg,  ${props.bgColor} 56% , white  112% )  }
  57% { background-image: linear-gradient(90deg,  ${props.bgColor} 57% , white  114% )  }
  58% { background-image: linear-gradient(90deg,  ${props.bgColor} 58% , white  116% )  }
  59% { background-image: linear-gradient(90deg,  ${props.bgColor} 59% , white  118% )  }
  60% { background-image: linear-gradient(90deg,  ${props.bgColor} 60% , white  120% )  }
  61% { background-image: linear-gradient(90deg,  ${props.bgColor} 61% , white  122% )  }
  62% { background-image: linear-gradient(90deg,  ${props.bgColor} 62% , white  124% )  }
  63% { background-image: linear-gradient(90deg,  ${props.bgColor} 63% , white  126% )  }
  64% { background-image: linear-gradient(90deg,  ${props.bgColor} 64% , white  128% )  }
  65% { background-image: linear-gradient(90deg,  ${props.bgColor}  65% , white  130% )  }
  66% { background-image: linear-gradient(90deg,  ${props.bgColor}  66% , white  132% )  }
  67% { background-image: linear-gradient(90deg,  ${props.bgColor} 67% , white  134% )  }
  68% { background-image: linear-gradient(90deg,  ${props.bgColor} 68% , white  136% )  }
  69% { background-image: linear-gradient(90deg,  ${props.bgColor} 69% , white  138% )  }
  70% { background-image: linear-gradient(90deg,  ${props.bgColor} 70% , white  140% )  }
  71% { background-image: linear-gradient(90deg,  ${props.bgColor} 71% , white  142% )  }
  72% { background-image: linear-gradient(90deg,  ${props.bgColor} 72% , white  144% )  }
  73% { background-image: linear-gradient(90deg,  ${props.bgColor} 73% , white  146% )  }
  74% { background-image: linear-gradient(90deg,  ${props.bgColor} 74% , white  148% )  }
  75% { background-image: linear-gradient(90deg,  ${props.bgColor} 75% , white  150% )  }
  76% { background-image: linear-gradient(90deg,  ${props.bgColor} 76% , white  152% )  }
  77% { background-image: linear-gradient(90deg,  ${props.bgColor} 77% , white  154% )  }
  78% { background-image: linear-gradient(90deg,  ${props.bgColor} 78% , white  156% )  }
  79% { background-image: linear-gradient(90deg,  ${props.bgColor} 79% , white  158% )  }
  80% { background-image: linear-gradient(90deg,  ${props.bgColor} 80% , white  160% )  }
  81% { background-image: linear-gradient(90deg,  ${props.bgColor} 81% , white  162% )  }
  82% { background-image: linear-gradient(90deg,  ${props.bgColor} 82% , white  164% )  }
  83% { background-image: linear-gradient(90deg,  ${props.bgColor} 83% , white  166% )  }
  84% { background-image: linear-gradient(90deg,  ${props.bgColor} 84% , white  168% )  }
  85% { background-image: linear-gradient(90deg,  ${props.bgColor} 85% , white  170% )  }
  86% { background-image: linear-gradient(90deg,  ${props.bgColor} 86% , white  172% )  }
  87% { background-image: linear-gradient(90deg,  ${props.bgColor} 87% , white  174% )  }
  88% { background-image: linear-gradient(90deg,  ${props.bgColor} 88% , white  176% )  }
  89% { background-image: linear-gradient(90deg,  ${props.bgColor} 89% , white  178% )  }
  90% { background-image: linear-gradient(90deg,  ${props.bgColor} 90% , white  180% )  }
  91% { background-image: linear-gradient(90deg,  ${props.bgColor} 91% , white  182% )  }
  92% { background-image: linear-gradient(90deg,  ${props.bgColor} 92% , white  184% )  }
  93% { background-image: linear-gradient(90deg,  ${props.bgColor} 93% , white  186% )  }
  94% { background-image: linear-gradient(90deg,  ${props.bgColor} 94% , white  188% )  }
  95% { background-image: linear-gradient(90deg,  ${props.bgColor} 95% , white  190% )  }
  96% { background-image: linear-gradient(90deg,  ${props.bgColor} 96% , white  192% )  }
  97% { background-image: linear-gradient(90deg,  ${props.bgColor} 97% , white  194% )  }
  98% { background-image: linear-gradient(90deg,  ${props.bgColor} 98% , white  196% )  }
  99% { background-image: linear-gradient(90deg,  ${props.bgColor} 99% , white  198% )  }
  100% { background-image: linear-gradient(90deg,  ${props.bgColor} 100% , white  200% )  }
`;

const SlideHoverBox = styled.div`
  width: 350px;
  height: 50px;
  border: solid 1px ${props => props.bgColor};

  &:hover {
    animation: ${animateKeyFrames} 0.5s;
    background-image: linear-gradient(270deg, ${props => props.bgColor} 100%, white 100%);
  }
`;

class StyledSlideBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Current theme: ', this.props.theme);
    return (
      <SlideHoverBox bgColor={this.props.bgColor}>
        {this.props.children}
      </SlideHoverBox>
    );
  }
}

export default withTheme(StyledSlideBtn);