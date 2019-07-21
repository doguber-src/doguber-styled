import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.1);
  padding: 50px;
  z-index: 3;
`;

export const StyledContent = styled.div`
  background-color: white;
  max-width: 500px;
  min-height: 300px;
  margin: 0 auto;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const StyledBody = styled.div``;
