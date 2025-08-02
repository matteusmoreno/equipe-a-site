import styled from 'styled-components';

export const ApprovedSection = styled.section`
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding-bottom: 100px;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const TabButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.headings};
  padding: 0.8rem 2rem;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  
  background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.white};
  color: ${({ active, theme }) => active ? theme.colors.white : theme.colors.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
  }
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
  display: inline-block;
`;

export const SliderWrapper = styled.div`
  position: relative;
  
  /* REMOVIDO: a estilização das setas e o padding do swiper */
  .swiper {
    /* O padding foi removido pois não há mais setas para dar espaço */
  }
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