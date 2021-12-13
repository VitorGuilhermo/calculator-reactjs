import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-itens:center;
    justify-content:center;
`

export const Content = styled.div`
    width: 25rem;
    height: 39rem;
    margin-top: 5rem;

    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.25rem;

    background: var(--background-calculator);

    header{
        width: 100%;
        height: 3rem;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-itens: center;

        padding: 1rem 2rem 0 2rem;

        div.switchBox {
            width: 4rem;
            height: 1.8rem;

            background: var(--grey);
            border-radius: 1.5rem;
            
            position: relative;

            input {
                width: 100%;
                height: 100%;
                
                cursor: pointer;

                position: absolute;
                z-indez: 100;-webkit-appearance: none;
            }

            input:checked ~ .box{
                left: 60%;
                background: var(--blue);
            }

            div.box {
                position: absolute;
                top: 5%;
                width: 1.6rem;
                height: 90%;
                background: var(--orange);
                border-radius: 1.5rem;
                transition: all 0.4s;
            }
            
        }

    }

    section {
        width: 100%;
        height: 100%;

        div.result {
            width: 100%;
            height: 7rem;

            padding: 1rem 3rem;

            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-itens: center;

            font-size: 4rem;
            font-weight: 500;
            color: var(--text);
        }

        div.keys {
            padding: 1rem 1rem 0 1rem;

            div.row {
                width: 100%;
                height: 17%;

                margin-bottom: 1rem;

                display: flex;
                flex-direction: row;
                justify-content: space-around;

                button{
                    width: 4rem;
                    height: 4rem;

                    border: 0 solid white;
                    border-radius: 100%;
                    
                    background: var(--grey);
                    color: var(--text);
                    font-size: 1.5rem;

                    cursor: pointer;

                    transition: filter 0.2s;

                    &:hover {
                        filter: brightness(0.8);
                    }
                }

                button.btn-dif {
                    width: 10rem;

                    text-align: left;
                    padding-left: 1rem;
                    border-radius: 3rem;

                    &:last-child {
                        text-align: right;
                        padding-right: 1.5rem;
                    }
                }

                button.btn-option {
                    background: var(--grey-light);
                    color: #000;
                }

                button.btn-operation {
                    background: var(--orange);
                    font-weight: 700;
                }
            }
        }
        
    }
`