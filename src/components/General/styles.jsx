import styled from "styled-components";
import { devices } from "../../components/Devices";

export const NavHeader = styled.header`
  background: #018fff;
  box-shadow: 0px 11px 36px -5px rgba(0, 0, 0, 0.41);
  height: auto;
  .navbar {
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #fff;
      font-size: 1.7em;
    }
    .navigation {
      list-style: none;
      display: flex;
      align-items: center;
      @media ${devices.mobileS} {
        display: none;
      }
      @media ${devices.laptop} {
        display: flex;
      }
    }

    .navigation li {
      display: block;
      padding: 0.8em 1rem;
      float: left;
      button {
        background: #424242;
        border: none;
        cursor: pointer;
        padding: 10px 20px;
        color: #fff;
        font-weight: bold;
      }
    }

    .navigation a {
      //   display: block;
      text-decoration: none;
      color: #fff;
      display: inline-block;
    }
  }
`;

export const SubNavHeader = styled.header`
  background: #414141;
  box-shadow: 0px 11px 36px -5px rgba(0, 0, 0, 0.41);
  height: auto;
  .navbar {
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #fff;
      font-size: 1.7em;
    }
  }
`;

export const FooterContainer = styled.footer`
  background: #1e1e1e;
  margin-top: 7em;
  width: 100%;
  color: #fff;
  padding: 5em 0;
  .footer-link {
    display: flex;
    flex-wrap: wrap;
    p {
      margin: 10px 10px;
    }
  }
  .footer-content {
    margin: 20px 10px;
    color: #fff;
  }
  .social-app-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .socials {
      img {
        height: 40px;
        margin: 10px 20px;
      }
    }
    .apps {
      img {
        height: 40px;
        margin: 10px 20px;
      }
    }
  }
`;
