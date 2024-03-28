import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const SocialIcons = styled.div`
  margin-top: 10px;
`;

const IconLink = styled.a`
  color: #555;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Footer = ({ fecha }) => (
  <FooterContainer>
    <Copyright>
      Todos los derechos reservados &copy; {fecha} Shalomsolutiontech
    </Copyright>
    <SocialIcons>
      <IconLink href="https://api.whatsapp.com/send?text=¡Hola!&phone=+50768828672">
        <FaWhatsapp />
      </IconLink>
      <IconLink href="https://www.instagram.com/shalomsolutiontech/">
        <FaInstagram />
      </IconLink>
      <IconLink href="https://github.com/rolycore">
        <FaGithub />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/rolycore/">
        <FaLinkedin />
      </IconLink>
      {/* Agrega aquí más iconos de redes sociales con sus respectivos enlaces */}
    </SocialIcons>
    <p>Desarrollado con ❤️ por Rolando Alfredo Salinas Campos</p>
  </FooterContainer>
);

export default Footer;
