import React from 'react'
import ListContainer from '../Features/ListContainer'

export default function Main() {
    return (
        <div>
            <h1>Main</h1>
            <ListContainer props={category} />
            <ListContainer props={product} />
            <ListContainer props={review} />
        </div>
    )
}
