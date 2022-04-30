import styled from 'styled-components';


export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:80px ;
    `;

export const ContainerLoginForm = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #BDBDBD;
    border-radius: 24px;
    width:473px;
    height: 531px;
    gap: 1rem;
    .container-title{
        padding-left: 30px;
        display: flex;
        flex-direction: column;
    }
    `;
export const ContainerLoginFormTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:3rem;
    `;
export const DivInputs = styled.div`
    width: 356.48px;
    height:48px;
    border:1px solid #BDBDBB;
    border-radius: 8px;
    display: flex;
    input{
        border: none;
        &:focus{
            outline: none;  
        }
    }
    `;