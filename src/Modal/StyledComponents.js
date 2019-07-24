import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.3);
  padding: 50px;
  z-index: 9999;
  overflow-y: scroll;
`;

export const StyledContent = styled.div`
  background-color: white;
  max-width: 700px;
  min-height: 300px;
  margin: 0 auto;
`;
