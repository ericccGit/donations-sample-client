import styled, { css } from "styled-components";

export const ButtonPrimary = styled.button`
  display: inline-flex;
  justify-content: center; /* horizontal alignment */
  align-items: center; /* vertical alignment */
  font-weight: 400;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 2px solid transparent;
  padding: 1em;
  font-size: 16px;
  border-radius: 3px;
  color: ${(props) => props.theme.BUTTON_PRIMARY_TEXT};
  background-color: ${(props) => props.theme.BUTTON_PRIMARY};

  &:hover {
    cursor: pointer;
  }

  ${(p: { disabled: boolean }) =>
    p.disabled &&
    css`
      opacity: 0.5;
    `}
`;
