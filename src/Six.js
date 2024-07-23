function Six(){
    const names=["Vaishnavi","Divya","Harshi"];
    return (
        <div>
            <h1>Names</h1>
                {
                    names.map((name,index) =>(
                        <div key={index}>{name}</div>
                    ))
                }
        </div>
    );
}
export default Six;