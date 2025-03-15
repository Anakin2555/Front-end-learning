// 函数写法
const InputComponent=(props)=>{
    const {onChangeHandler} = props;
    return (
        <input className={"input-component"} onChange={onChangeHandler} placeholder={"搜索"}/>
    )
}








// 类写法
/*
class InputComponent extends React.Component {
    
    render() {
        const {onChangeHandler} = this.props;
        return (
            <input className={"input-component"} onChange={onChangeHandler} placeholder={"搜索"}/>
        )

    }
}*/
