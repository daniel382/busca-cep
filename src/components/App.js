"use strict"

class AppComponent extends React.Component {
    render() {
        const data = {
            logradouro: 'Rua A',
            cep: '00000-000',
            localidade: 'Cidade A',
            bairro: 'Bairro A'
        }

        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mt-4">
                        <SearchBarComponent />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <ResultTableComponent data={ data } />
                    </div>
                </div>
            </div>
        )
    }
}