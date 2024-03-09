import DataCards from 'components/DataCards/DataCards'
import { otherFinAndLegaltData } from 'mock-data/Data'
import React from 'react'

const OtherFinAndLegal = () => {
  return (
    <div className="pt-5 pt-md-8 mb-3">
      <DataCards cardVal={otherFinAndLegaltData} />
    </div>
  )
}

export default OtherFinAndLegal