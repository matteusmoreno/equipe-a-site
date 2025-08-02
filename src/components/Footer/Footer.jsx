import React from 'react';
import logoWhite from '../../assets/logo-equipe-a.png';
import {
    FooterContainer,
    FooterContent,
    InfoColumn,
    ColumnTitle,
    InfoText,
    SocialLinks,
    SocialIcon,
    Copyright,
    FooterLogo,
    MapWrapper
} from './Footer.styles';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const addressUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Jo%C3%A3o+Laureano+da+Silva,+5,+Saquarema,RJ";
    const whatsappUrl = "https://api.whatsapp.com/send?phone=5522997499766";
    const mapEmbedUrl = "https://maps.google.com/maps?q=Rua%20Jo%C3%A3o%20Laureano%20da%20Silva%2C%205%2C%20Saquarema%2C%20RJ&t=&z=16&ie=UTF8&iwloc=&output=embed";

    return (
        <FooterContainer id="contato">
            <FooterContent>
                {/* COLUNA 1: LOGO E DESCRIÇÃO */}
                <InfoColumn>
                    <FooterLogo src={logoWhite} alt="Colégio e Curso Equipe A" />
                    <InfoText>Potencializando vencedores desde 2018.</InfoText>
                </InfoColumn>

                {/* COLUNA 2: CONTATO */}
                <InfoColumn>
                    <ColumnTitle>Contato</ColumnTitle>
                    <InfoText><FaMapMarkerAlt /> <a href={addressUrl} target="_blank" rel="noopener noreferrer">Rua João Laureano da Silva, nº 5, Fátima (Bacaxá), Saquarema, RJ</a></InfoText>
                    <InfoText><FaPhone /> (22) 2653-3589</InfoText>
                    <InfoText><FaWhatsapp /> (22) 99749-9766</InfoText>
                </InfoColumn>

                {/* COLUNA 3: MAPA */}
                <InfoColumn>
                    <ColumnTitle>Encontre-nos</ColumnTitle>
                    <MapWrapper>
                        <iframe
                            title="Localização do Colégio e Curso Equipe A"
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </MapWrapper>
                </InfoColumn>

                {/* COLUNA 4: REDES SOCIAIS */}
                <InfoColumn>
                    <ColumnTitle>Redes Sociais</ColumnTitle>
                    <SocialLinks>
                        <SocialIcon href="#" target="_blank"><FaFacebook /></SocialIcon>
                        <SocialIcon href="#" target="_blank"><FaInstagram /></SocialIcon>
                        <SocialIcon href={whatsappUrl} target="_blank"><FaWhatsapp /></SocialIcon>
                    </SocialLinks>
                </InfoColumn>
            </FooterContent>

            {/* ÁREA DO COPYRIGHT E CRÉDITOS AGRUPADA E CENTRALIZADA */}
            <Copyright>
                <p>© {new Date().getFullYear()} Colégio e Curso Equipe A. Todos os direitos reservados.</p>
                <p style={{ marginTop: '0.5rem' }}>
                    Desenvolvido por <a href="https://github.com/matteusmoreno" target="_blank" rel="noopener noreferrer">Matteus Moreno</a>
                </p>
            </Copyright>
        </FooterContainer>
    );
};

export default Footer;