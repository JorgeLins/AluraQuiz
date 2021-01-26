/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Input = styled.input`
  padding: 8px 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 40px;
  margin-left: 40px;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.contrastText};
  border:  2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
`;

export default Input;
