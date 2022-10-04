import React from "react";
import { TagCloud } from "react-tagcloud";

function RequestChart({ requests }) {
  let wordArray = [];
  // TODO: make wordFreqArray represent the sum of all words in all long descriptions within the request list.
  let wordFreqArray = [];

  // Put all long descriptions into a single array
  requests.map((x) => {
    let tempArray = x.ldescription.split(" ");
    wordArray = wordArray.concat(tempArray);
  });

  for (let x = 0; x < wordArray.length; x++) {
    let doesNotExist = true;
    for (let i = 0; i < wordFreqArray.length; i++) {
      if (wordFreqArray[i].value == wordArray[x]) {
        wordFreqArray[i].count++;
        doesNotExist = false;
      }
    }
    if (doesNotExist) {
      wordFreqArray.push({ value: wordArray[x], count: 1 });
    }
  }

  return (
    <div className="form-contain">
      <TagCloud
        minSize={24}
        maxSize={48}
        tags={wordFreqArray}
        colorOptions={{ luminosity: "dark" }}
        className="simple-cloud"
        randomSeed={484}
      />{" "}
    </div>
  );
}

export default RequestChart;