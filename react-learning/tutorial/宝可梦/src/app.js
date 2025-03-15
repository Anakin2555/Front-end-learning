// 函数写法
const App=()=>{
    const [pokemons,setPokemons]=React.useState([])
    const [filteredPokemons,setFilteredPokemons]=React.useState([])

    // console.log("Fetch前")
    // 如果直接将fetch放在函数里，将一直循环执行，因为会改变state导致重新渲染，渲染又会执行fetch
    React.useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(json => {
                json.results.map((result, index) => {
                    result.id = index + 1
                })
                setPokemons(json.results)
                setFilteredPokemons(json.results)
            })
    },[])
    
    
    const onChangeHandler = (event) => {
        setFilteredPokemons(pokemons.filter(pokemon => {
            return pokemon.name.includes(event.target.value)
        }))
    }

    
    return (
        <div className="app-container">
            <h1>Pokemons</h1>
            <InputComponent onChangeHandler={onChangeHandler}></InputComponent>
            <ListComponent pokemonsList={filteredPokemons}></ListComponent>
        </div>
    );
    
}



// 类写法
/*
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: [],
            filteredPokemons: [],
        }
    }

    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(json => {
                json.results.map((result,index)=>{
                    result.id=index+1
                })
                this.setState({
                    pokemons: json.results,
                    filteredPokemons: json.results
                })
            })
    }
    
    onChangeHandler = (event) => {
        this.setState(() => {
            return {
                filteredPokemons: this.state.pokemons.filter(pokemon => {
                    return pokemon.name.includes(event.target.value)
                })
            }
        })
    }
    
    render() {
        return (
            <div className="app-container">
                <h1>Pokemons</h1>
                <InputComponent onChangeHandler={this.onChangeHandler}></InputComponent>
                <ListComponent pokemonsList={this.state.filteredPokemons}></ListComponent>
            </div>
        );
    }
}*/
