import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaPhone,
  FaMailBulk,
  FaMailchimp,
  FaEnvelope,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.whatsapp && (
          <li>
            <a href={socialprofils.whatsapp}>
              <FaPhone />
            </a>
          </li>
        )}
        {socialprofils.email && (
          <li>
            <a href={socialprofils.email}>
              <FaEnvelope />
            </a>
          </li>
        )}
      </ul>
      <p>Contact Me</p>
    </div>
  );
};
