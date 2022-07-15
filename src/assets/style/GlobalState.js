import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

    html{
        html {
	font-size: 62.5%;
	scroll-behavior: smooth;
	height: -webkit-fill-avaiable;
}
    }


    *,
    *::before,
    *::after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }

    a, button{
        font-family: 'Montserrat', sans-serif;
    }
`;
