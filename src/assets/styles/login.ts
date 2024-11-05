import styled from "styled-components";

export const TemplateWrapper = styled.div`
    height: 100%;
    display: flex;
    padding: 2rem;

    .registration-container{

    }
    .template-container{
        width: 50%;
    display: flex;
    justify-content: center;
    }
`;

export const CardWrapper = styled.div`
max-width: 500px;
    flex-direction: column;
    display: flex;
    width: 100%;
    justify-content: center;
    /* padding: 4.5rem; */
    gap: 2rem;

    .header{
        display: flex;
        flex-direction: column;
        gap: 5rem;
        .logo-container{
        display: flex;
        justify-content: center;
    }
    .title-container{
        display: flex;
        flex-direction: column-reverse;

            h1{
                color: ${(props) => props.theme.colors.secondary.regular};
                font-family: 'nexa-black';
                font-size: 2.79rem;
                font-weight: 900;
                text-align: center;
                margin: 0;
            }
            h3{
                font-family: 'nexa-black';
                font-size: 1.163rem;
                font-weight: 700;
                text-align: center;
                margin: 0;
            }
            
    }
    }
    .card-content{
        border-radius: 16px;
        background-color: white;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        .alert-container{
            margin-bottom: 1rem;
        }
    }
    .registration-container{
        display: flex;
        justify-content: center;
        padding: 1rem 1rem 0;
    }
   
`;

export const LoginWrapper = styled.div`

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
   .form-item{
            display: flex;
            flex-direction: column;
            gap: 4px;
        label{
            font-size: ${(props) => props.theme.fontSizes.base};
            color: #344054;
            font-weight: 500;
            margin-bottom:0;
        }
    .input-error-message{
        
            color: #ff4d4f;
    }
   }
   .login-action{
    display: flex;
    width: 100%;
   }
   .rememberme-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
     padding:0.6rem 0.2rem;
     .forgot-pwd{
        font-size:${(props) => props.theme.fontSizes.sm};
    }

   }
`;