"use strict"

const ResultTableRowComponent = props =>
	<tr>
		<th scope='row'></th>
		<td>{ props.data.logradouro }</td>
		<td>{ props.data.cep }</td>
		<td>{ props.data.localidade }</td>
		<td>{ props.data.bairro }</td>
	</tr>