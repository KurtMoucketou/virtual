import Styled from 'styled-components';

const SectionBottomShapeStc=Styled.div`
        -webkit-transform: rotateX(180deg);
        transform: rotateX(181deg);
        position: absolute;
        z-index: 1;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 70px;
         svg path {
            fill: #fff;
        }
        svg {
            width: 100%;
            height: 100%;
        }
        
        svg:not(:root) {
            overflow: hidden; 
        }
`
export default SectionBottomShapeStc