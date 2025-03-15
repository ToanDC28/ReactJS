function Greeting(props){
    if(props.isLogin){
        return(
            <h2>Welcome {props.name}</h2>
        )
    }else{
        return(
            <h2>You are not login</h2>
        )
    }
}
export default Greeting