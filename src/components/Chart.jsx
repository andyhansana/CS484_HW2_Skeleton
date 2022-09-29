import React from 'react'
import { TagCloud } from 'react-tagcloud'


function RequestChart() {
  // TODO: make wordFreqArray represent the sum of all words in all long descriptions within the request list.
  const wordFreqArray = [{value: 'example',count:10}]
  return (
    <div className="form-contain">
      <TagCloud minSize={24}
        maxSize={48}
        tags={wordFreqArray}
        colorOptions={{luminosity: 'dark'}}
        className="simple-cloud"
        randomSeed={484}
      />  </div>
  )
}

export default RequestChart 