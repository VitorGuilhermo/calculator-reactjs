import { Container, Content } from "./styles";

export function Calculator() {

    return (
        <Container>
            <Content>
                <header>
                    <div className="switchBox">
                        <input type="checkbox" value="switch" />
                        <div className="box"></div>
                    </div>
                    
                </header>
                <section>
                    <div className="result">
                        0
                    </div>

                    <div className="keys">
                        <div className="row">
                            <button type="button" className="btn-dif btn-option">AC</button>
                            <button type="button" className="btn-option">%</button>
                            <button type="button" className="btn-operation">/</button>
                        </div>
                        <div className="row">
                            <button type="button">7</button>
                            <button type="button">8</button>
                            <button type="button">9</button>
                            <button type="button" className="btn-operation">x</button>
                        </div>
                        <div className="row">
                            <button type="button">4</button>
                            <button type="button">5</button>
                            <button type="button">6</button>
                            <button type="button" className="btn-operation">-</button>
                        </div>
                        <div className="row">
                            <button type="button">1</button>
                            <button type="button">2</button>
                            <button type="button">3</button>
                            <button type="button" className="btn-operation">+</button>
                        </div>
                        <div className="row">
                            <button type="button">0</button>
                            <button type="button">.</button>
                            <button type="button" className="btn-operation btn-dif">=</button>
                        </div>
                    </div>
                </section>
            </Content>
        </Container>
    );
}