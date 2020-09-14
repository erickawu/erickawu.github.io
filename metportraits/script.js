
window.createGraphic = function(graphicSelector) {
	var graph = d3.select('#viz')

	var margin = 40
	var size = 1000
	var chartSize = size - margin * 2
	var scaleX = null
    var scaleR = null
    data = d3.range(170)
	var extent = d3.extent(data)
	var minR = 10
    var maxR = 60
    var sw = 0

    var faces = "https://raw.githubusercontent.com/erickawu/met-portraits/master/json/portraits_year.json"

    var slidenum = 0
    var maxslides = 4
	
    function translate(x, y) {
		return 'translate(' + x + ',' + y + ')'
    }
    function timeline() {

        var t = d3.transition()
        .duration(800)
        .ease(d3.easeQuadInOut)

        d3.select(".chart").append("svg")
                        .classed("time",true)
                        .attr("width", size)
            
        var x = d3.scalePoint()
                .domain(["1200", "1250", "1300", "1350", "1400", "1450", "1500", "1550", "1600","1650","1700","1750","1800","1850","1900","1950"])
                .range([14, size-73]) 
        
        
        var styled_ticks = d3.axisBottom(x).ticks(16).tickSize(-3)

        graph.selectAll(".time")
            .append("g") 
            .transition(t)  
            .attr('opacity', 1)
            .attr("transform", translate(0,chartSize/2+20))
            .call(styled_ticks)     
            .style("font", "12px inconsolata")    
            .selectAll("text")
                .attr("transform", translate(0,7))
    }
    function slides(num) {
        var t = d3.transition()
        .duration(800)
        .ease(d3.easeQuadInOut)

        var tbig = d3.transition()
        .duration(800)
        .ease(d3.easeQuadInOut)
        
        if (num == 1) {
            sw = 0
            var bigsize = 450
            var smallsize = 55
                        
            var item = graph.selectAll('.item')
                
            item.transition(t)
                .attr('transform', translate((chartSize - smallsize)/ 2, (chartSize - smallsize)/ 2))
    
            item.select('image')
                .transition(t)
                .attr('height', smallsize)
                .attr('width', smallsize)
                .attr('opacity', 0)

            var big = graph.selectAll('.big')
                
            big.transition(tbig)
                .attr('transform', translate((chartSize - bigsize)/ 2, (chartSize - bigsize)/ 2 - 120))
    
            big.select('image')
                .transition(tbig)
                .attr('height', bigsize)
                .attr('width', bigsize)
                .attr('opacity', 1)  

            graph.selectAll(".time")
                .transition(d3.transition().duration(400).ease(d3.easeQuadInOut))
                .attr('opacity', 0)
            
            graph.selectAll('.intro2').select('text').remove() 

            d3.select('svg')
                        .transition(d3.transition()
                            .duration(500)
                            .ease(d3.easePoly)) 
                        .attr('height', size - 300 + 'px')

        }

        else if (num == 2) {
            var bigsize = 230
            var smallsize = 55
            var big = graph.selectAll('.big')
                
            big.transition(tbig)
                .attr('transform', translate((chartSize - bigsize)/ 2, (chartSize - 700)/ 2))
    
            big.select('image')
                .transition(tbig)
                .attr('height', bigsize)
                .attr('width', bigsize)  
                .attr("xlink:href", "img/europeanpaintingsall.jpg")   
                
            var item = graph.selectAll('.item')
                
            item.transition(t)
                .attr('transform', function(d, i) {
                    return translate(scaleX(i), chartSize / 2-50)
                })

            
            item.selectAll('image')
                .on('mouseover', function (d) {
                })
                .on('mouseout', function (d) {              
                })
                .transition(t)
                .attr('height', smallsize)
                .attr('width', smallsize)    
                .attr('opacity', 1)
            
            if (sw == 0) {
                timeline() 
            }
            d3.selectAll('.info').select('text').remove()
            item.selectAll('image').attr('opacity', 1) 

            d3.selectAll('.all').remove()
            graph.selectAll('.intro2').select('text').remove() 

            d3.select('.chart').append('g')
                .classed('intro2', true)
                .attr('transform', translate((chartSize) / 2, (chartSize) / 2-80))
                .append('text')
                .transition(t)
                .text("Averages Per 50 Years:")
                .style("text-anchor", "middle")
                .style("font", "12px inconsolata")
                .style("fill", "black")   

        
        if (sw == 1) {        
                    d3.select('.chart').append('g')
                        .classed('intro', true)
                        .attr('transform', translate((chartSize) / 2, (chartSize) / 2-400))
                        .append('text')
                            .text("THE AVERAGE (1200-1950)")
                            .style("text-anchor", "middle")
                            .style("font", "15px inconsolata")
                            .style("fill", "black")
                    d3.select('.chart').append('g')
                        .classed('intro', true)
                        .attr('transform', translate((chartSize) / 2, (chartSize) / 2-380))
                        .append('text')
                            .text("The Metropolitan Museum of Art, Department of European Paintings")
                            .style("text-anchor", "middle")
                            .style("font", "12px inconsolata")
                            .style("fill", "black")
            }
                    d3.select('svg')
                        .transition(d3.transition()
                            .duration(500)
                            .ease(d3.easePoly)) 
                        .attr('height', size - 370 + 'px')
    
        }
    
        else if (num == 3 ) {
            sw = 1
            var bigsize = 230
            var smallsize = 55
            var big = graph.selectAll('.big')
                
            big.transition(tbig)
                .attr('transform', translate((chartSize - bigsize)/ 2, (chartSize - 710)/ 2 ))
    
            big.select('image')
                .transition(tbig) 
                            
            var t = d3.transition()
                .duration(800)
                .ease(d3.easeQuadInOut)
            
            var fast = d3.transition()
                .duration(200)
                .ease(d3.easeQuadInOut)
                

            var item = graph.selectAll('.item')

            item.transition(t)
                .attr('transform', function(d, i) {
                    return translate(scaleX(i)-(scaleR(d.count)-55)/2, (chartSize-scaleR(d.count)+55) / 2 - 50)
                })
                
            item.select('image')
                .transition(t)
                .attr('height', function(d, i) {
                    return scaleR(d.count)
                })   
                .attr('width', function(d, i) {
                    return scaleR(d.count)
                })

            d3.select('.chart').append('g')
                .classed('info',true)
                .attr("transform",translate(chartSize/2,chartSize/2-85))
                .attr("width", chartSize)
                .attr("height", 100)
            
            item.selectAll('image')
                .on('mouseover', function (d) {
                    d3.select('.info').append('text')
                          .text(d.time + ", " + d.count + " total paintings averaged")
                          .style("fill","black")
                          .style("font", "12px inconsolata")
                          .style("text-anchor", "middle")
                    d3.select(this).attr("opacity",1) 

                    d3.select('svg')
                        .transition(d3.transition()
                            .duration(500)
                            .ease(d3.easePoly)) 
                        .attr('height', size - 320 + 41*(d.count/24 | 0) + 'px')

                    d3.select('.chart').append('g')
                        .classed('all', true)
                        .attr('transform', translate(0, (chartSize) / 2 + 70))
                        .selectAll('small')
                        .data(d.all)
                        .enter().append("svg:image")
                            .classed('small', true)
                            .attr('x', function(d,i) {return((40*i)%960-5)})
                            .attr('y', function(d,i) {return(41*(i/24 | 0))})                            
                            .transition(d3.transition()
                            .duration(500)
                            .ease(d3.easePoly)) 
                            .attr('height', 40)
                            .attr('width', 40)
                            .attr("xlink:href", function(d) {return(d)})
                        
                    graph.selectAll('.big').select('image').attr("xlink:href", d.link) 
                })
                .on('mouseout', function (d) {
                    d3.selectAll('.info').select('text').remove()
                    d3.selectAll('.info2').select('text').remove()
                    item.selectAll('image').attr('opacity', 1) 
                    d3.select(this).attr("opacity",1) 
                   
                    d3.select('svg')
                        .transition(d3.transition()
                            .duration(500)
                            .ease(d3.easePoly)) 
                        .attr('height', size - 370 + 'px')

                    d3.selectAll('.all').remove()
                })
    
            graph.selectAll('.intro').select('text').remove() 
            graph.selectAll('.intro2').select('text').remove() 

            d3.select('.chart').append('g')
                .classed('intro2', true)
                .attr('transform', translate((chartSize) / 2, (chartSize) / 2-385))
                .append('text')
                .text("MOUSE OVER A SUBSET:")
                .transition(d3.transition()
                .duration(500)
                .ease(d3.easePoly))               
                .style("text-anchor", "middle")
                .style("font", "12px inconsolata")
                .style("fill", "black")
        }
    }

    function update(action) {
        if (slidenum == 0 && action == 0) {
            slides(slidenum)
        }
        else if (slidenum == maxslides && action == 1){
            slides(slidenum)
        }
        else {
            if (action == 1) {
                slidenum = slidenum + 1
                slides(slidenum)
            }
            else if (action == 0) {
                slidenum = slidenum - 1
                slides(slidenum)
            }
        }
    }
    
	function setupCharts() {
		var svg = graph.append('svg')
			.attr('width', size + 'px')
            .attr('height', size  - 300 +  'px')
            
		
		var chart = svg.append('g')
            .classed('chart', true)
            .attr('transform', translate(margin-10, margin))  

		scaleR = d3.scaleLinear()
		scaleX = d3.scaleBand()

        
        var domainX = d3.range(15)
        
		scaleX
			.domain(domainX)
            .range([14, chartSize+14])

		scaleR
			.domain(extent)
			.range([minR, maxR])

            
        d3.json(faces).then(function(display) {
            chart.selectAll('item')
                .data(display)
                .enter().append('g')
                    .classed('item', true)
                    .attr('transform', translate(chartSize / 2, chartSize / 2))
                    .append('svg:image')
                        .attr('height', 0)
                        .attr('width', 0)
                        .attr("xlink:href", function(d) {return (d.link)})
        })
        
        chart.append('g')
            .classed('big', true)
            .attr('transform', translate((chartSize) / 2, (chartSize) / 2) - 140)
            .append('svg:image')
                .attr('height', 0)
                .attr('width', 0)
                .attr('opacity', 0)
                .attr("xlink:href", "img/europeanpaintingsall.jpg")
    
        chart.append('g')
                .classed('intro', true)
                .attr('transform', translate((chartSize) / 2, (chartSize) / 2-380))
                .append('text')
                    .text("The Metropolitan Museum of Art, Department of European Paintings")
                    .style("text-anchor", "middle")
                    .style("font", "12px inconsolata")
                    .style("fill", "black")
        chart.append('g')
                .classed('intro', true)
                .attr('transform', translate((chartSize) / 2, (chartSize) / 2-400))
                .append('text')
                        .text("THE AVERAGE (1200-1950)")
                        .style("text-anchor", "middle")
                        .style("font", "15px inconsolata")
                        .style("fill", "black")
        
        chart.append('g')
                    .classed('intro', true)
                    .attr('transform', translate((chartSize) / 2, (chartSize) / 2+170))



	}

	function init() {
        setupCharts()      
        d3.select('body')
            .on("keydown", function() {
                if(d3.event.keyCode === 37){
                    update(0)
                    console.log(slidenum)
                }
                else if (d3.event.keyCode === 39) {
                    update(1)
                    console.log(slidenum)
                }
          })
        update(1)
    }
    
	init()
	
}

createGraphic('#viz')