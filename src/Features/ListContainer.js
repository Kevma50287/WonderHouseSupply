import React from 'react'
import ListItem from './ListItem'

export default function ListContainer({props}) {
    const arrayItems = props.map((item) => {
        return (
            <ListItem item={item} key={item.id} />
        )
    })
  return (
    <div>
        <h3>ListContainer</h3>
        {arrayItems}
    </div>
  )
}
