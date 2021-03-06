import { Component } from 'react';

class MiClaseComponente extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contador: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props) {
        
        // this.state.contador = this.state.contador + 1;
        
        this.setState({
            contador: this.state.contador + 1
        })
    }


    render() {

        return (
            <div>
                Hola desde MiClaseComponente
                <div>Esto es un boton incremental: </div>
                <div id="contador">
                    <span id="contador_numero">{this.state.contador}</span>
                    <button onClick={this.handleClick}>Incrementar</button>
                </div>
            </div>
        );

    }
}

export default MiClaseComponente;