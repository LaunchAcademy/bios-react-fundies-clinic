import React from 'react'

const Bio = (props) => {
  return (
    <div>
      <p>WHERE IS IT?</p>
      <img src={ props.imageUrl } alt={ props.name } />
      <h2>{ props.name }</h2>
      <h3>{ props.title }</h3>
      <p>{ props.description }</p>
    </div>
  )
}

export default Bio