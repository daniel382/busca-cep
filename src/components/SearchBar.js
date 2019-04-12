"use strict"

const SearchBarComponent = props =>
    <form className='form-row' onSubmit={ props.handleSubmit } >
        <div className="col-md-5 form-group">
            <input className='form-control' placeholder='Digite o CEP ou a Rua: ' onChange={ props.handleSearch } />
        </div>

        <div className="col-md-5 form-group">
            <select className='form-control' onChange={ props.handleCity } >
                <option value="Suzano">Suzano</option>
                <option value="Mogi das Cruzes">Mogi das Cruzes</option>
                <option value="Poá">Poá</option>
                <option value="Arujá">Arujá</option>
                <option value="Itaqua">Itaqua</option>
                <option value="Ferraz">Ferraz</option>
                <option value="São Paulo">São Paulo</option>
                <option value="São Roque">São Roque</option>
            </select>
        </div>
        
        <div className="col-md-2 form-group">
            <button className="btn btn-primary">
                Ok
            </button>
        </div>
    </form>