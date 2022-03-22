import React ,{useState}from 'react'

function Material() {
    const [user,setUser]=useState("")
    const handler=e=>{
        setUser(e.target.value)
    }
    return (
        <div>
            <h1>Welcome</h1>
            <input type="text" name='user' placeholder='userName' value={user}
            onChange={handler}/>
            <div>
                {user}
            </div>
        </div>
    )
}

export default Material
