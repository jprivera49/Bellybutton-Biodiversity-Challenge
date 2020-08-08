function init() {
  var selector = d3.select("#selDataset");

  d3.json("samples.json").then((data) => {
    console.log(data);
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });
})}

init();

function optionChanged(newSample) {
  console.log(newSample);
}

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    var str1 = "ID: ";
    var res1 = str1.concat(result.id);
    PANEL.append("h6").text(res1);
    var str2 = "ETHNICITY: ";
    var res2 = str2.concat(result.ethnicity);
    PANEL.append("h6").text(res2);
    var str3 = "GENDER: ";
    var res3 = str3.concat(result.gender);
    PANEL.append("h6").text(res3);
    var str4 = "AGE: ";
    var res4 = str4.concat(result.age);
    PANEL.append("h6").text(res4);
    var str5 = "LOCATION: ";
    var res5 = str5.concat(result.location);
    PANEL.append("h6").text(res5);
    var str6 = "BBTYPE: ";
    var res6 = str6.concat(result.bbtype);
    PANEL.append("h6").text(res6);
    var str7 = "WFREQ: ";
    var res7 = str7.concat(result.wfreq);
    PANEL.append("h6").text(res7);
  });
}