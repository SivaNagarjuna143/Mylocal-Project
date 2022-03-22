import React,{useState} from 'react'

function Main() {
    const [data,setData]=useState('');
    const [task,setTask]=useState([])
    const submitHandler=e=>{
        e.preventDefault();
        let newTodos=[...task,data];
        setTask(newTodos);
        setData('')

    }
    const deleteHandler=(event,index)=>{
        // const deleteList=task.filter((index)=>index!==indexvalue);
        // setTask(deleteList)
const deleteList=task;
deleteList.splice(index,1)
setTask([...deleteList])
    }
  return (
    <div>
        <h1>Add TodoList</h1>
        <form onSubmit={submitHandler}>
            <input type='text' value={data} onChange={(e)=>setData(e.target.value)}/>
            <button className='btn btn-primary'>Add</button>
        </form>
<div>
    {task.map((item,index)=>
    <>
    <div>
    <span key={index}>{item}</span>
    <button className='btn btn-danger' onClick={(event)=>deleteHandler(event,item,index)}>Delete</button>
    </div>
    </>
    )}
</div>
    </div>
  )
}

export default Main