// function buildData(sample) {
//     d3.json("../data/samples.json").then(function(data) {
//       // print out the results for metadata
//       // var metadata = data.metadata;
//       console.log(data)})};


function buildData(sample) {
  d3.json("../data/samples.json").then(function(data) {
    
    var metadata = data.metadata;
   
     // filter results for each ID
    var IDs = metadata.filter(row => row.id == sample);
    firstID = IDs[0]
  
     // select panel object
    var panel = d3.select('#sample-metadata');
    panel.html('');
  
    Object.entries(firstID).forEach(([key, value]) => {
        console.log([key, value])
        panel.append('p').text(`${key}: ${value}`)
    });
  })
  };

 