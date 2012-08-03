var yy,mm,dd,ndays;
var godays;
var datesarray=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
jQuery(document).ready(function()
{
	var y=document.getElementById("year");
	var gd=new Date();
	var curdate=parseInt(gd.getDate());
	var curmonth=parseInt(gd.getMonth());
	var curyear=parseInt(gd.getFullYear());
	for(var year=1960;year<=curyear;year++)
	{
		var option=document.createElement("option");
		option.text=year;
		y.add(option,y.options[null]);
	}
	 jQuery("#year").change(function(){
	 yy=this.value;
	 document.getElementById("month").options.length =1;
	 document.getElementById("days").options.length =1;
    months(this.value);
  });
  function months(yy)
	{
		var m=document.getElementById("month");
		for(var month=1;month<=12;month++)
		{
			var option=document.createElement("option");
			option.text=month;
			m.add(option,m.options[null]);	
		}
	}
	 jQuery("#month").change(function(){
	 mm=this.value;	

	 document.getElementById("days").options.length =1;	 	
	  if(check(yy) && mm==2){
  		godays=29;
  		
  	}
  	else
  	{
  		godays=datesarray[mm-1];  		
  		 if(yy==curyear && mm>curmonth+1)
				 	alert("Select Correct Month");
			else 	
			  days(godays);
	}
	
  });
  function days(ndays)
  {
  	
  	var d=document.getElementById("days");

			for(var i=1;i<=ndays;i++)
			{
				
				var option=document.createElement("option");
				option.text=i;
				d.add(option,d.options[null]);
				
			}
			jQuery("#days").change(function(){
				 dd=this.value;
				 //alert(dd+"/"+mm+"/"+yy);  
				 if(yy==curyear && mm==curmonth+1 && dd>curdate)
				 	alert("Select Correct Date");
				 else
					self.setInterval("calculate(dd,mm,yy)",1000);
					//calculate(dd,mm,yy);


			});
  }
 
});


 function check(lyear)
	{		
		if(lyear % 4 == 0 && ( lyear % 100 != 0 || lyear % 400 == 0))
  		return true
 		 else
   	return false;
	}
	function calculate(dd,mm,yy)
	{
		var gd=new Date();
		var curdate=parseInt(gd.getDate());
		var curmonth=parseInt(gd.getMonth());
		var curyear=parseInt(gd.getFullYear());
		var curhours=parseInt(gd.getHours());
		var curmins=parseInt(gd.getMinutes());
		var cursecs=parseInt(gd.getSeconds());
		var j=parseInt(yy);
		var k=parseInt(mm);
		var l=parseInt(dd);
		var countdays=0;
		var countyears=0;
		var countmonths=0;
	//	alert(dd+"/"+mm+"/"+yy+"    "+j+"/"+k+"/"+l);
		for( ;j<=curyear;j++)
		{	
			while(k!=13)
			{
				if(j==curyear && k==curmonth+1 && l<=curdate)
				{
					countdays=countdays+curdate-l;
					break;
				}
				else if(j==curyear && k==curmonth+1)
				{
					countdays=countdays+curdate;
							break;
				}
				else if(k==mm && j==yy)
					countdays=countdays+datesarray[k-1]-l+1;
				else
					countdays=countdays+datesarray[k-1];
	
				countmonths=countmonths+1;
				if(k==mm && j!=yy)
					countyears=countyears+1;
				k++;
			}
			if(j==curyear && k<curmonth)
				countdays=countdays+1;			
			else if(check(j) && j!=curyear)
				countdays=countdays+1;
			k=1;
		} 
		var hours=curhours+countdays*24;
		var mins=curmins+hours*60;
		var secs=cursecs+mins*60;	
		var msg=document.getElementById("msg");
						msg.innerHTML="<br><br>Years="+countyears+"<br>"+"Months="+countmonths+"<br>"+"Days="+countdays;
						msg.innerHTML+="<br>Hours="+hours+"<br>"+"Minutes="+mins+"<br>"+"Seconds="+secs;
						 		jQuery("#msg").slideDown();
}


