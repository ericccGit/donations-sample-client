import styled, { css } from "styled-components"

export const FieldLabel = styled.div`
  color: ${(props) => props.theme.FORM_LABEL};
  ${(props : {isActive : boolean }) =>
    props.isActive &&
    css`
      font-weight: bold;
    `}
`;

export const FormCtr = styled.div`
`;

export const FormItemCtr = styled.div`

`;

export const ErrorMsg = styled.div`
  color: ${(props) => props.theme.FORM_ERROR_MESSAGE};
  font-size: 80%;
  margin-top: 5px;
  font-family: manulifeLight;
  ${(props : {isVisible : boolean}) =>
    !props.isVisible &&
    css`
      visibility: hidden;
    `}
`;