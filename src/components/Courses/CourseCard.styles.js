import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 2.5rem 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  text-align: center;
  border-top: 4px solid ${({ theme }) => theme.colors.secondary};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;