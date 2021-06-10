import styled from "styled-components"

export const Card = styled.div`
  width: 100%;
  height: 4em;
  margin: 1em;
  background-color: ${(props) => props.theme.CARD_BG};
  color: ${(props) => props.theme.CARD_TEXT_PRIMARY};
  padding: 5px;
  border-radius: 0px 0px 3px 3px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  box-shadow: 2px 2px 10px ${(props) => props.theme.CARD_ACCENT_1};
`;

export const Label = styled.div`
  justify-self: center;
  align-self: center;
  color: ${(props) => props.theme.CARD_TEXT_SECONDARY};
`;

export const Data = styled.div`
  justify-self: center;
  align-self: center;
`;
