import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import {
    StudentAreaContainer,
    LinksGrid,
    LinkCard,
    IconWrapper,
    CardTitle,
    // O AccessText foi removido dos imports pois não será mais usado
} from './StudentArea.styles';

import { FaUserGraduate, FaBook, FaPlayCircle, FaChartLine } from 'react-icons/fa';

const studentLinks = [
    {
        name: "Portal do Aluno (Sponte)",
        // Link atualizado
        url: "https://portal.sponteeducacional.net.br/Default.aspx",
        icon: <FaUserGraduate />
    },
    {
        name: "Portal SAS",
        // Link atualizado
        url: "https://app.portalsaseducacao.com.br/entrar/",
        icon: <FaBook />
    },
    {
        name: "Edify Play",
        // Link atualizado
        url: "https://edifyeducation.com.br/edify-play/",
        icon: <FaPlayCircle />
    },
    {
        name: "Plataforma Evolucional",
        // Link atualizado
        url: "https://simulados.evolucional.com.br/entrar?ReturnUrl=%2fpainel",
        icon: <FaChartLine />
    }
];

const StudentArea = () => {
    return (
        <StudentAreaContainer id="student-area">
            <SectionTitle>Área do Estudante</SectionTitle>
            <LinksGrid>
                {studentLinks.map((link, index) => (
                    <LinkCard key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        <IconWrapper>{link.icon}</IconWrapper>
                        <CardTitle>{link.name}</CardTitle>
                        {/* O componente AccessText foi REMOVIDO daqui */}
                    </LinkCard>
                ))}
            </LinksGrid>
        </StudentAreaContainer>
    );
};

export default StudentArea;