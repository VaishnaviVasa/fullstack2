function Four()
{
    const names=["Vaish","Divya","Harshi"];
    return (
        <div>
            <h1>Names List</h1>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Four;