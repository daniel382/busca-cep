"use strict"

const renderRow = place => <ResultTableRowComponent key={ place.cep } data={ place } />

const ResultTableComponent = props =>
    props.data ?
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Logradouro</th>
                    <th scope='col'>CEP</th>
                    <th scope='col'>Cidade</th>
                    <th scope='col'>Bairro</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data instanceof Array
                        ? props.data.map(renderRow) 
                        : renderRow(props.data)
                }
            </tbody>
        </table>
    :
        null