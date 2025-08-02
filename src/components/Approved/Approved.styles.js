import styled from 'styled-components';

export const ApprovedSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding-bottom: 100px;
`;

export const TabContainer = styled.div`
  display: inline-flex;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin: 0 auto 3rem auto;
  
  left: 50%;
  transform: translateX(-50%);
`;

export const TabButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.headings};
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.8rem 2.5rem;
  background: transparent;
  border: none;
  position: relative;
  z-index: 2;
  
  color: ${({ $active, theme }) => $active ? theme.colors.white : theme.colors.primary};
  
  transition: color 0.4s ease;
`;

export const SlidingIndicator = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  z-index: 1;
  opacity: 0;

  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
`;

export const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  display: inline-flex; /* Alterado para inline-flex para se ajustar ao conteúdo */
  align-items: center; /* Alinha o ícone e o texto verticalmente */
  gap: 0.8rem; /* Espaçamento entre o ícone e o texto */

  /* Estiliza o ícone SVG dentro do título */
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: -2px; /* Pequeno ajuste vertical */
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
`;

export const ApprovedCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  padding: 1.5rem 1rem;
  border-radius: 8px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.secondary};
  transition: transform 0.2s ease-in-out;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StudentName = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const StudentCourse = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
`;