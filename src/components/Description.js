import React from 'react'

const Description = ({heightpok,weightpok,pokstat1,pokstat2,pokstat3,pokstat4,pokstat5,pokstat6,posbs1,posbs2,posbs3,posbs4,posbs5,posbs6}) => {
  return (
    <div>
      <p><b>Height</b> is a <b>{heightpok}</b> cm.</p>
      <p><b>Weight</b> is a <b>{weightpok}</b> cm.</p>
      <h3>stat</h3>
      <p><b>{pokstat1} : {posbs1}</b></p>
      <p><b>{pokstat2} : {posbs2}</b></p>
      <p><b>{pokstat3} : {posbs3}</b></p>
      <p><b>{pokstat4} : {posbs4}</b></p>
      <p><b>{pokstat5} : {posbs5}</b></p>
      <p><b>{pokstat6} : {posbs6}</b></p>
    </div>
  )
}

export default Description