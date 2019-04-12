"use strict"

class AppComponent extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            city: 'Suzano',
            search: '',
            data: null,
            error: null
        }

        this.handleCity = this.handleCity.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleCity = event => this.setState({ city: event.target.value })
	handleSearch = event => this.setState({ search: event.target.value })

    handleSubmit(event) {
        event.preventDefault()

		const { search } = this.state
		if(search.length > 3) {
			const regex = /\d{8}/
			const url = (regex.test(search))
				? `https://viacep.com.br/ws/${search}/json/`
				: `https://viacep.com.br/ws/SP/${this.state.city}/${search}/json/`
			
			fetch(url)
				.then(response => response.json())
				.then(data => this.setState({ data, error: null }))
				.catch(error => this.setState({ data: null, error }))
		}
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mt-4">
                        <SearchBarComponent
                            handleCity={ this.handleCity }
                            handleSearch={ this.handleSearch }
                            handleSubmit={ this.handleSubmit }
                        />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <ResultTableComponent data={ this.state.data } />
                    </div>
                </div>
            </div>
        )
    }
}