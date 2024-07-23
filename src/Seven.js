import Three from "./Three"
function Seven()
{
    // const name="Vaishnavi";//creating the object
    // const college="svecw";
    // const y="3rd";
    //instead of above 
    const user1={name:"Vaishnavi",branch:"IT",Year:"3rd"};
    const user2={name:"Divya",branch:"CSE",Year:"4th"};
    const users=["name1","name2","name3","name4","name5"];
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {users.map(
                (info,index)=>(
                    <Three key={index} pro={user1}/>
                ))}
        </div>
    );
}
export default Seven;