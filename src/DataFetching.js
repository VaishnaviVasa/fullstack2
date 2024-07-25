import { useEffect, useState } from "react";

function DataFetching(){
    const [data,setData]=useState(([]));
    useEffect(()=>{
        const fetchMyData=async ()=>
        {
            const res=await fetch('https://jsonplaceholder.typicode.com/posts');//await keyword it wait until the data is fetched ,for this async is used
            console.log(await res.ok);
            const resData=await res.json();
            setData(resData);
            console.log(resData);  
        }
        fetchMyData();
    })
    return(
        <div>
            <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">UserId</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem,index)=>
                    <tr key={index}>
                        <td>{dataItem.id}</td>
                        <td>{dataItem.userId}</td>
                        <td>{dataItem.title}</td>
                        <td>{dataItem.body}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
    );
}
export default DataFetching;