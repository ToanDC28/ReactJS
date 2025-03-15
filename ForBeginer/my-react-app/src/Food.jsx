function Food(){
    const food = ["Orange", "Banana"]
    return(
        <ul>
            {
                food.map(element => (
                    <li key={element}>
                        {element}
                    </li>
                ))
            }
        </ul>
    );
}

export default Food