import React, { useState } from 'react'
import DisplayRow from './DisplayRow'
import EditRow from './EditRow'

function Row({item}) {
    const [state, setState] = useState(false)

    return (
        state
        ?   
            <EditRow item={item} setState={setState}/>
        :
            <DisplayRow item={item} setState={setState}/>
    )
}

export default Row