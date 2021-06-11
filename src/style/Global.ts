import { createGlobalStyle } from 'styled-components'
import '../fonts/conthrax-sb.ttf'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #131313;
    
    img {
      height: auto;
      max-width: 100%;
    }
  }

  ul {
    list-style: none; 
  }

  li {
    display: flex;
    align-items: center;
  }

  li::before {
    font-family: 'conthrax-sb';
    color: white;
    font-size: 50px;
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }
`

export default GlobalStyle
