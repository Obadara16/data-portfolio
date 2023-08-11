import './index.css'
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
    } ,

  :root {
    {
      bg: "#1f1f38",
      bg_variant: "#2c2c6c",
      primary: "#4db5ff",
      primary_variant: "rgba(77, 181, 255, 0.4)",
      white: "#fff",
      light: "rgba(255, 255, 255, 0.6)"
      
  }
`;


