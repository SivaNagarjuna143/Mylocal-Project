import React from 'react'

function Dashoard({match}) {
    return (
        <div>
            <center>
                <h3>Iam from Dashboard Component/:{match.params.name}</h3>
            </center>
            
        </div>
    )
}

export default Dashoard
