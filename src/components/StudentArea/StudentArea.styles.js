import styled from 'styled-components';

export const StudentAreaContainer = styled.section`
  /* NOVO: background alterado para lightGray para combinar com as seções anteriores */
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const LinksGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  grid-template-columns: 1fr;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const LinkCard = styled.a`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 3rem 1.5rem;
  box-shadow: 0 4px 25px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  border-bottom: 5px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.12);
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IconWrapper = styled.div`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0; 
  min-height: 40px;
`;