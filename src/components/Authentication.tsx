import React from 'react'

type Props = {
    children: any
}



function Authentication(props: Props) {
    return (
        <div style={{height:"100%"}}>
            {props.children}
        </div>
    )
}

export default Authentication
