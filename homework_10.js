var vg_1 = "homework10.vg.json";
var vg_2 = "map.vg.json";
vegaEmbed("#stacked_area_chart", vg_1, {"actions":false});
vegaEmbed("#map", vg_2, {"actions":false}).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);