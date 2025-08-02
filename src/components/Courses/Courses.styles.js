import styled from 'styled-components';

export const CoursesContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const CoursesGrid = styled.div`
  display: grid;
  gap: 2rem;
  /* AUMENTAMOS A LARGURA MÁXIMA PARA OS CARDS FICAREM MAIS LARGOS NO DESKTOP */
  max-width: 1400px; 
  margin: 0 auto;

  /* Padrão (Mobile): 1 coluna */
  grid-template-columns: 1fr;

  /* Tablet: 2 colunas */
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 4 colunas */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;