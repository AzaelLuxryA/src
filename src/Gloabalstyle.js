import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }
a:hover {
    color: #2d53d2;
    }

    body{
       background-color:rgb(7, 7, 8); 
        color:rgb(254, 255, 255); 
        font-size: 1.2rem; 
        &::-webkit-scrollbar{
            width: 7px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #27AE60;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #EDEDED;
        }
    }
`;


export default GlobalStyle;