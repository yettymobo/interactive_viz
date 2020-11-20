// function buildData(sample) {
    d3.json("../data/samples.json").then(function(data) {

      console.log(data)})};


// function buildData(sample) {
//   d3.json("../data/samples.json").then(function(data) {
    
//     var metadata = data.metadata;
   
//      // filter results for each ID
//     var IDs = metadata.filter(row => row.id == sample);
//     firstID = IDs[0]
  
//      // select panel object
//     var panel = d3.select('#sample-metadata');
//     panel.html('');
  
//     Object.entries(firstID).forEach(([key, value]) => {
//         console.log([key, value])
//         panel.append('p').text(`${key}: ${value}`)
//     });
//   })
//   };

//   function buildCharts(sample) {
//     d3.json("../data/samples.json").then((data) => {
//       var samples= data.samples;
//       var findings= samples.filter(d => d.id == sample);
//       var finding = findings[0]
  
//       var ids = finding.otu_ids;
//       var labels = finding.otu_labels;
//       var values = finding.sample_values;
  
//        //  Build bar Chart
      
//        var bar_data =[
//         {
//           y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
//           x:values.slice(0,10).reverse(),
//           text:labels.slice(0,10).reverse(),
//           type:"bar",
//           orientation:"h"
  
//         }
//       ];
  
//       var barLayout = {
//         title: "Top 10 Bacteria Cultures",
//         margin: { t: 30, l: 150 }
//       };
  
//       Plotly.newPlot("bar", bar_data, barLayout);


//       // Build a Bubble Chart using the sample data
//       var BubbleChart = {
//         margin: { t: 0 },
//         xaxis: { title: "Sample IDs" },
//         hovermode: "closest",
//         };
  
//         var Bubble = [
//         {
//           x: ids,
//           y: values,
//           text: labels,
//           mode: "markers",
//           marker: {
//             color: ids,
//             size: values,
//             }
//         }
//       ];
  
//       Plotly.plot("bubble", Bubble, BubbleChart);
  
     
//     });
//   }
     
  
  
//   function init() {
//     // Grab a reference to the dropdown select element
//     var selector = d3.select("#selDataset");
  
   
  
//     d3.json("samples.json").then((data) => {
//       var sampleNames = data.names;
//       //for (var i=0; i<sampleNames.length; i++){
//       //  select
//       //}
//       sampleNames.forEach((sample) => {
//         selector
//           .append("option")
//           .text(sample)
//           .property("value", sample);
//       });
  
//       // Use the first sample from the list to build the initial plots
//       const firstSample = sampleNames[0];
//       buildCharts(firstSample);
//       buildMetadata(firstSample);
//     });
//     // console.log(json_obj)
//   }
  
//   function optionChanged(newSample) {
//     // Fetch new data each time a new sample is selected
//     buildCharts(newSample);
//     buildMetadata(newSample);
//   }
  
//   // Initialize the dashboard
//   init();