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
    padding-top: 30px;
    gap: 1rem;
    .container-title{
        padding-left: 55px;
        display: flex;
        flex-direction: column;
        font-family:Noto Sans;
        font-size: 18px;
        font-weight: 600;
        color:#E0E0E0
    }
    .div{
        display: flex;
        justify-content: center;
        font-family: Noto Sans;
        font-size: 14px;
        color: #828282;
        font-weight: 400;
        Link{
            color: blue;
            text-decoration: none;

        }
    }
    `;
export const ContainerLoginFormTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:3rem;
    >p{
        font-family:Noto Sans;
        font-size: 14px;
        font-weight: 400;
        color: #828282;
    }
    `;
export const DivInputs = styled.div`
    width: 356px;
    height:48px;
    display: flex;
    
    .svg{
        position: relative;
        top: 5px;
        left: 5px;
        font-size: 35px;
        color:#828282;
    }
    input{
        border: none;
        position: absolute;
        width: 356px;
        height:45px;
        border-radius: 8px;
        border:1px solid #BDBDBB;
        padding-left: 50px;
        &:focus{
            outline: none;  
        }
    }
    `;
    export const ButtonLogin = styled.button`
    width: 356px;
    height:38px;
    background: #2F80ED;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
    border: none;
    font-family: Noto Sans;
    cursor: pointer;
    `;

    export const ContainerRedes= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color:#828282;
    gap:1.5rem;
    `;

    export const ButtonRedes = styled.button`
    background-color: #333333;
    color: #828282;
    border: 1px solid #828282;
    Width:50px;
    Height:50px;
    border-radius: 48px;
    padding-top: 7px;
    font-size: 35px;
    cursor: pointer;
    `;