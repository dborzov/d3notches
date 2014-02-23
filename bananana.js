$(function() {
    var data = [234, 345, 470];
    var x = d3.scale.linear()
        .domain([0, d3.max(data)])
        .range([0,420]);

    d3.select(".chart")
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", function(d) {
         return x(d) + "px";
        })
        .text(function(d) {return d;});

    $('#actionButton').click(function() {
        bars =  d3.select(".chart").selectAll("div");
        bars.style('width','100px');
        console.log('Button handler loves you');
    });

});