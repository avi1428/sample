$(document).ready(function()
{
//		var digital = Raphael(100, 100, 200, 200);
		var digital = Raphael(30, 7, 200, 200);
//		var circle = digital.circle(100, 100, 95);
		var circle = digital.circle(50, 50, 46);
			circle.attr("fill", "white");
			circle.attr("stroke", "red");
			circle.attr("stroke-width", 1);
			var text=digital.text(50,40, "Gowri");
			text.attr({'font-size':20, 'fill': "blue", "stroke-width": 10, "stroke-opacity": 0.7});
		var c=0;
		var s=0;
	       var hour_sign;
				for(i=0;i<12;i++){
					var start_x = 50+Math.round(40*Math.cos(30*i*Math.PI/180));
					var start_y = 50+Math.round(40*Math.sin(30*i*Math.PI/180));
					var end_x = 50+Math.round(45*Math.cos(30*i*Math.PI/180));
					var end_y = 50+Math.round(45*Math.sin(30*i*Math.PI/180));	
					hour_sign = digital.path("M"+start_x+" "+start_y+"L"+end_x+" "+end_y);
				}    
	   
			hour_hand = digital.path("M50 50L50 25");
				hour_hand.attr({stroke: "#444444", "stroke-width": 4});
				minute_hand = digital.path("M50 50L50 20");
				minute_hand.attr({stroke: "#444444", "stroke-width": 3});
				//second_hand = digital.path("M100 110L100 25");
				second_hand = digital.path("M50 50L50 15");
				second_hand.attr({stroke: "#444444", "stroke-width": 2}); 
				var pin = digital.circle(50, 50, 2.5);
				pin.attr("fill", "#000000");    
				
					var now = new Date();
				var hours = now.getHours();
				var minutes = now.getMinutes();
				var seconds = now.getSeconds();
				hour_hand.rotate(30*hours+(minutes/2.5), 50, 50);
				minute_hand.rotate(6*minutes, 50, 50);
				second_hand.rotate(6*seconds, 50, 50);
				//update_clock();
				setInterval("update_clock()",1000);
				
				
});

	function update_clock(){
				var now = new Date();
				var hours = now.getHours();
				var minutes = now.getMinutes();
				var seconds = now.getSeconds();
				hour_hand.rotate(1/120, 50, 50);
				minute_hand.rotate(1/10, 50, 50);
				second_hand.rotate(6, 50, 50);
 
			}