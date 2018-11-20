import styled from "styled-components";

const Column = styled.div`
  display: grid;
  grid-column: ${props => props.startCol} / span ${props => props.span};
`;

export default Column;
