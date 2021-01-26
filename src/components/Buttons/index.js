import styled from 'styled-components';

const ButtonIniciar = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${({ theme }) => theme.colors.primary};
  color:${({ theme }) => theme.colors.contrastText};

  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  margin-right: 40px;
  margin-left: 40px;
  padding: 4px 80px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 3px;


  
`;

export default ButtonIniciar;
