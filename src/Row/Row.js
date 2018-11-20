import React from "react";
import styled from "styled-components";

const RowWrapper = styled.div`
  display: grid;
  display: -ms-grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  -ms-grid-columns: ${`(1fr)[12]`};
`;

const Row = props => {
  return <RowWrapper>{props.children}</RowWrapper>;
};

export default Row;
