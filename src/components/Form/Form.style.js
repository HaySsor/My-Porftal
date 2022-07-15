import styled from 'styled-components';

export const StyledForm = styled.form`
 
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    label{
        margin-bottom: 1rem;
        margin-top: .5rem;
        font-size: 2rem;
        text-align: center
    }
    input{
        border-radius: 20px;
        padding: 10px 20px;
        border: none;
        &:focus{
            outline: none;
            background-color: rgba(108, 99, 255,0.2);
        }
    }
    .login{
        background-color: ${({error}) => error.login? 'rgb(252, 146, 158)': 'white'};
        animation: ${({error}) => error.login? 'bad 1s': null};
    }
    .password{
        background-color: ${({error}) => error.password? 'rgb(252, 146, 158)': 'white'};
        animation: ${({error}) => error.password? 'bad 1s': null};
    }
    button{
     margin: 1rem;
     border-radius: 25px;
     padding: 10px 20px;
     border: none;
     background-color: #ffff;
     cursor: pointer;

        &:hover{
            background-color: rgba(108, 99, 255,0.2);
        }
    }
    .password-info{
        display: ${({error}) => error.password? 'block': 'none'};
        color: rgb(252, 146, 158);
        margin-top: 0.5rem;
        font-size: 1rem;
    }
    .login-info{
        display: ${({error}) => error.login? 'block': 'none'};
        color: rgb(252, 146, 158);
        margin-top: 0.5rem;
        font-size: 1rem;
    }
  
    @keyframes bad {
        0%{ transform:rotate(0) }
        35%{ transform:rotate(10deg) }
        70%{ transform:rotate(-10deg) }
        100%{ transform:rotate(0deg) }
    }

  
  `;
