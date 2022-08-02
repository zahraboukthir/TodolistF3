import React from 'react'
import Tasks from './Tasks'
export  const TaskLists = ({data}) => {
//   console.log(data)
    return (
    <div>
        {data.map(
            (el,i)=><Tasks key={i} elp={el} />
        )}
    </div>

  )
}
