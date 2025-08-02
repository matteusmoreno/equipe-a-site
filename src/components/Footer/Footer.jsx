import React from 'react';
import { FooterContainer, FooterContent, InfoColumn, ColumnTitle, InfoText, SocialLinks, SocialIcon, Copyright } from './Footer.styles';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const addressUrl = "https://www.google.com/maps/search/?api=1&query=Rua+João+Laureano+da+Silva,+nº+5,+Fátima+(Bacaxá),+Saquarema,+RJ";
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5522997499766";

    return (
        // NOVO ID para link do header
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

                {/* A COLUNA "ÁREA DO ESTUDANTE" FOI REMOVIDA DESTE ARQUIVO */}

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