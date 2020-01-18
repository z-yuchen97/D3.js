        d3.csv("../data/cities.csv", function(data) {
		  var dataEU = data.filter(function(d){ 
			  d.population = +d.population;
			  d.x = +d.x;
			  d.y = +d.y;
		      return d.eu === "true";
		  })
		  
		  var tip = d3.tip()
		    .attr('class', 'd3-tip')
		    .offset([-10, 0])
		    .html(function(d) {
		      return d.city+": <span style='color:red'>" + d.population + "</span>";
		    })
		  
		  var svg = d3.select("#div1").append("svg")
		       .attr("width", 700)
		       .attr("height", 550);
		  	
	      svg.call(tip)
				   
		  		svg.selectAll("circle")
		  		  .data(dataEU)
		  		  .enter()
		  		  .append("circle")
		  		  .attr("fill", "brown")
		  		  .attr("stroke", "black")
		  		  .attr("stroke-width",1)
		  		  .attr("r", function(d, index){
		  			  if(d.population<1000000){
		  				  return 4;
		  			  }else{
		  				  return 8;
		  			}
		  		  })
		  		  .attr("cx", function(d, index){
		  		  		return d.x;
		  		  })
		  		  .attr("cy", function(d, index) {
		  			    return d.y;
		  		  })
				  // .on('mouseover', tip.show)
				  .on('mouseover', function(d){
					  d3.select(this)
					      .attr("fill", "blue");
					  tip.show(d);
				  })
				  // .on('mouseout', tip.hide)
				  .on("mouseout", function(d,i) { 
					  d3.select(this) 
					      .attr("fill", "brown"); 
					  tip.hide(d);
				  });
				
			  svg.selectAll("text")
			  .data(dataEU)
			  .enter()
			  .append("text")
			  .attr("class", "city-label")
			  .text(function(d, index){
					  return d.city
			  })
			  .style("opacity", function(d, index){
				  if(d.population<1000000){
					  return 0;
				  }else{
					  return 100;
				  }
			  })
			  .attr("text-anchor","middle")
			  .attr("font-size", 11)
			  .attr("font-weight", 700)
			  .attr("x", function(d, index){
			  		return d.x;
			  })
			  .attr("y", function(d, index) {
			  		return d.y-10;
			  });
			  
			  var p = d3.select("#city-number").append("text")
			       .attr("id", "describe");
			    
				 p.text("Number of cities:"+dataEU.length);
        });
	  
	  
	   // var numericData = [1, 2, 4, 8, 16];
       
       // Add svg element (drawing space)
       // var svg = d3.select("#div1").append("svg")
       //   .attr("width", 300)
       //   .attr("height", 50);
       
       //Add rectangle
  //      svg.selectAll("rect")
  //        .data(numericData)
  //        .enter()
  //        .append("rect")
  //        .attr("fill", "red")
  //        .attr("width", 50)
  //        .attr("height", 50)
  //        .attr("y", 0)
  //        .attr("x", function(d, index) {
  //          return (index * 60);
  //        });
		 
	 //    var svg2 = d3.select("#div2").append("svg")
	 //      .attr("width", 500)
	 //      .attr("height", 500);
		  
		// var sandwiches = [
		//   { name: "Thesis", price: 7.95, size: "large" },
		//   { name: "Dissertation", price: 8.95, size: "large" },
		//   { name: "Highlander", price: 6.50, size: "small" },
		//   { name: "Just Tuna", price: 6.50, size: "small" },
		//   { name: "So-La", price: 7.95, size: "large" },
		//   { name: "Special", price: 12.50, size: "small" }
		// ];
		
		// svg2.selectAll("circle")
		//   .data(sandwiches)
		//   .enter()
		//   .append("circle")
		//   .attr("fill", function(d, index){
		// 	  if(d.price>=7){
		// 		  return "yellow";
		// 	  }else if(d.price<7){
		// 		  return "green";
		// 	  }
		//   })
		//   .attr("stroke", "gray")
		//   .attr("stroke-width",2)
		//   .attr("r", function(d, index){
		// 	  if(d.size=="large"){
		// 		  return 30;
		// 	  }else if(d.size=="small"){
		// 		  return 15;
		// 	}
		//   })
		//   .attr("cx", function(d, index){
		//   		return (index*70)+32;
		//   })
		//   .attr("cy", function(d, index) {
		// 	    return 32;
		//   });
		  
		//   d3.csv("../data/sandwiches.csv", function(data) {
		//     console.log("Data loading complete. Work with dataset.");
		//     console.log(data);
		//   });
		  
		//   console.log("Do something else, without the data");