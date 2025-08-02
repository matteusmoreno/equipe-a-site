import React from 'react';
import { FooterContainer, FooterContent, InfoColumn, ColumnTitle, InfoText, SocialLinks, SocialIcon, Copyright } from './Footer.styles';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const addressUrl = "https://www.google.com/maps/search/?api=1&query=Rua+João+Laureano+da+Silva,+nº+5,+Fátima+(Bacaxá),+Saquarema,+RJ";
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5522997499766";

    return (
        <FooterContainer id="contato">
            <FooterContent>
                <InfoColumn>
                    <ColumnTitle>Colégio e Curso Equipe A</ColumnTitle>
                    <InfoText>Potencializando vencedores desde 2018. Referência em educação e aprovação em Saquarema e região.</InfoText>
                </InfoColumn>

                <InfoColumn>
                    <ColumnTitle>Contato</ColumnTitle>
                    <InfoText><FaMapMarkerAlt /> <a href={addressUrl} target="_blank" rel="noopener noreferrer">Rua João Laureano da Silva, nº 5, Fátima (Bacaxá), Saquarema, RJ</a></InfoText>
                    <InfoText><FaPhone /> (22) 2653-3589</InfoText>
                    <InfoText><FaWhatsapp /> (22) 99749-9766</InfoText>
                    <InfoText><FaEnvelope /> secretariacursoequipea@gmail.com</InfoText>
                </InfoColumn>

                <InfoColumn>
                    <ColumnTitle>Área do Estudante</ColumnTitle>
                    <InfoText><a href="https://portal.sponteeducacional.net.br/Default.aspx" target="_blank" rel="noopener noreferrer">Portal do aluno (Sponte)</a></InfoText>
                    <InfoText><a href="https://app.portalsaseducacao.com.br/entrar/" target="_blank" rel="noopener noreferrer">Portal SAS</a></InfoText>
                    <InfoText><a href="https://edifyeducation.com.br/edify-play/" target="_blank" rel="noopener noreferrer">Edify Play</a></InfoText>
                    <InfoText><a href="https://simulados.evolucional.com.br/entrar?ReturnUrl=%2fpainel" target="_blank" rel="noopener noreferrer">Plataforma Evolucional</a></InfoText>
                </InfoColumn>
            </FooterContent>
            <Copyright>
                <SocialLinks>
                    <SocialIcon href="#" target="_blank"><FaFacebook /></SocialIcon>
                    <SocialIcon href="#" target="_blank"><FaInstagram /></SocialIcon>
                    <SocialIcon href={whatsappUrl} target="_blank"><FaWhatsapp /></SocialIcon>
                </SocialLinks>
                © {new Date().getFullYear()} Colégio e Curso Equipe A. Todos os direitos reservados.
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;