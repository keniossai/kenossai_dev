import styled from 'styled-components'


export const FindMe = styled.section`
    padding: 90px 60px;
    background: #131419;

    @media screen and (max-width: 350px){
        padding: 90px 20px;
    }
`
export const Title = styled.section`
    font-weight: 800;
    font-size: 55px;
    margin-bottom: 30px;
    color: #fff;
`

export const Topic = styled.div`
    font-size: 17px;
    color: #858383;
    font-weight: 700;
    margin-bottom: 100px;
`

export const SocialBox = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-column-gap: 45px;
    grid-row-gap: 50px;

    

    .gitHub{
        height: 90px;
        transition: border-color .2s linear;
        position: relative;
        background: #131419;
        border: 1px solid #3e3e3e;
        z-index: 0;

        :hover{
            border-color: #3B267B;
        }

        ::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 10px;
            z-index: -1;
            bottom: 0;
            left: -10px;
            right: 0;
            border-top: none;
            border-right: none;
            transition: all .2s linear;
            border: 1px solid #3e3e3e;
        }
        
    }
    .gitHub:hover::after{
        background-color: #3B267B;
        top: 14px;
        left: -12px;
        border: none;
    }


    .twitter{
        height: 90px;
        transition: border-color .2s linear;
        position: relative;
        background: #131419;
        border: 1px solid #3e3e3e;
        z-index: 0;

        :hover{
            border-color: #2A97FF;
        }

        ::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 10px;
            z-index: -1;
            bottom: 0;
            left: -10px;
            right: 0;
            border-top: none;
            border-right: none;
            transition: all .2s linear;
            border: 1px solid #3e3e3e;
        }

        :hover::after{
            background-color: #2A97FF;
            top: 14px;
            left: -12px;
            border: none;
        }
    }

    .codePen{
        height: 90px;
        transition: border-color .2s linear;
        position: relative;
        background: #131419;
        border: 1px solid #3e3e3e;
        z-index: 0;

        :hover{
            border-color: #E6CD70;
        }

        ::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 10px;
            z-index: -1;
            bottom: 0;
            left: -10px;
            right: 0;
            border-top: none;
            border-right: none;
            transition: all .2s linear;
            border: 1px solid #3e3e3e;
        }

        :hover::after{
            background-color: #E6CD70;
            top: 14px;
            left: -12px;
            border: none;
        }
    }
    .Dev{
        height: 90px;
        transition: border-color .2s linear;
        position: relative;
        background: #131419;
        border: 1px solid #3e3e3e;
        z-index: 0;

        :hover{
            border-color: #A0B4B7;
        }

        ::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 10px;
            z-index: -1;
            bottom: 0;
            left: -10px;
            right: 0;
            border-top: none;
            border-right: none;
            transition: all .2s linear;
            border: 1px solid #3e3e3e;
        }

        :hover::after{
            background-color: #A0B4B7;
            top: 14px;
            left: -12px;
            border: none;
        }
    }
    .linkedIn{
        height: 90px;
        transition: border-color .2s linear;
        position: relative;
        background: #131419;
        border: 1px solid #3e3e3e;
        z-index: 0;

        :hover{
            border-color: #0A66C2;
        }

        ::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 10px;
            z-index: -1;
            bottom: 0;
            left: -10px;
            right: 0;
            border-top: none;
            border-right: none;
            transition: all .2s linear;
            border: 1px solid #3e3e3e;
        }
        :hover::after{
            background-color: #0A66C2;
            top: 14px;
            left: -12px;
            border: none;
        }
    }
    .instagram{
        height: 90px;
        transition: border-color .2s linear;
        position: relative;
        background: #131419;
        border: 1px solid #3e3e3e;
        z-index: 0;

        :hover{
            border-color: #FF358F;
        }

        ::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 10px;
            z-index: -1;
            bottom: 0;
            left: -10px;
            right: 0;
            border-top: none;
            border-right: none;
            transition: all .2s linear;
            border: 1px solid #3e3e3e;
        }

        :hover::after{
            background-color: #FF358F;
            top: 14px;
            left: -12px;
            border: none;
        }
    }
`
export const Content = styled.div`
    position: relative;
    z-index: 2;
    width: calc(100%);
    padding: 20px;
    background: #131419;
    height: calc(100%);
    display: flex;
    justify-content: space-between;

    path{
        fill: #858383;
    }

    

    .gitIcon{
        color: #858383;
        font-size: 30px;
        
    }
    
`
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
`
export const User = styled.div`
    color: #858383;
`
export const Name = styled.div`
    font-weight: 600;
    font-size: 17px;
`
