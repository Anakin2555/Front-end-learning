
// 函数写法
const ListComponent = (props )=> {
    
    const {pokemonsList}=props
    return (
        <ul className="list-container">
            {
                pokemonsList.map(((item, index) => {
                    return (
                        <div>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}/>
                            <div key={item.url}>{item.name}</div>
                        </div>

                    )
                }))
            }
        </ul>
    ) 
}

// 类写法
/*
class ListComponent extends React.Component {
    
    render() {
        /!*const style={
            border:"2px solid black",
            borderRadius:"10px"
        }*!/
        // console.log(this.props)
        return (
            <ul className="list-container">
                {
                    this.props.pokemonsList.map(((item, index) =>{
                        return (
                            <div>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}/>
                                <div key={item.url}>{item.name}</div>
                            </div>

                        )
                    }))
                }
            </ul>
        )
    }
                    
                
}*/
