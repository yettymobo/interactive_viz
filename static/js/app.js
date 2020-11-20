function init() {
  // Grab a reference to the dropdown select element
  var selection = d3.select("#selDataset");

  d3.json("../../samples.json").then((data) => {
    var sampleNames = data[0].names;
   
    sampleNames.forEach((sample) => {
      selection
        .append("option")
        .text(sample)
        .property("value", sample)
    })
    buildCharts(sampleNames[0]);
  })
  
};

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  
}

// Initialize 
init();

//function when sample id is changed 
function buildCharts(sampleid) {
  //update demographic info area
  var demoarea = d3.select('#sample-metadata');
  d3.json("../../samples.json").then((data) => {
    
    var metadata = data[0].metadata;
       
    // filter results for each ID
      var IDs = metadata.filter(row => row.id == sampleid)
      console.log(IDs);
      var firstID = IDs[0];
      
      //clear list
      demoarea.html("")
      Object.entries(firstID).forEach(([key, value]) => {
          demoarea.append("p").text(`${key}: ${value}`)
      })
            
      var findings= data[0].samples.filter(d => d.id == sampleid);
      var finding = findings[0];

      var ids = finding.otu_ids;
      var labels = finding.otu_labels;
      var values = finding.sample_values;
  
       //  Build bar Chart
      
       var trace =[
        {
          y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
          x:values.slice(0,10).reverse(),
          text:labels.slice(0,10).reverse(),
          type:"bar",
          marker: {
            color: 'rgb(142,124,195)'
          },
          orientation:"h"
  
        }
      ];
  
      var layout = {
        title: "Top 10 Bacteria Cultures per Individual",
        
      };
  
      Plotly.newPlot("bar", trace, layout);

      

      //create bubble chart
      var trace2 = {
        x: finding.otu_ids,
        y: finding.sample_values,
        text: finding.otu_labels,
        mode: "markers",
        marker: {
          color: finding.otu_ids,
          size: finding.sample_values
          }
      };

      var data = [trace2];

      var layout = {
        
        showlegend: false,
        margin: { t: 0 },
        xaxis: { title: "OTU ID" },
        hovermode: "closest",
        };

      Plotly.newPlot('bubble', data, layout);
  });
};