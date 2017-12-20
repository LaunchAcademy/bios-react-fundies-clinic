import React from 'react'
import Bio from './bio'

import bioData from '../data/bios'

const BioList = (props) => {
  const bioComponents = bioData.map((bio) => {
    return (
      <Bio name={ bio.name }
        description={ bio.description }
        title={ bio.title }
        imageUrl={ bio.imageUrl}
      />
    )
  })
  return (
    <div>
      { bioComponents }
    </div>
  )
}

export default BioList