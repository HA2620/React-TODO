export function TodoList({todos}){

    return <div>
        {todos.map(function(item){
            return <div>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
                <button onClick={()=>fetch("http://localhost:3000/status",{
                method:"PUT",
                body:JSON.stringify({
                    id:item._id,
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async function(res){
                const json=await res.json();
                alert("todo updated")
            })} >{item.completed==true?"Completed":"Mark as Complete"}</button>
            </div>
        })}
    </div>

}