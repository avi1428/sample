var date,yy,mm,dd,d1;
var day=new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
var mon=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
var ndays=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var m1,y1;
var i,j,k;
var num=1;
function loadtime()
{	
	var table=document.getElementById("mytable");
	date=new Date();	
	yy=date.getFullYear();
	mm=date.getMonth();
	dd=date.getDate();
	d1=date.getDay();
	table.rows[0].cells[0].childNodes[0].data=day[d1]+" "+dd+" "+mon[mm]+" "+yy;
	table.rows[1].cells[1].childNodes[0].data=mon[mm];
	table.rows[1].cells[5].childNodes[0].data=yy;
	m1=mm;
	y1=yy;
	var one = new Date(yy,mm,1);
	var dayname=one.getDay();	
	displaydate(day[dayname],mm,yy);
}
function changemonth(str)
{
var table=document.getElementById("mytable");
	if(str=='left')
	{		
		m1--;
		if(m1<0)
			m1=11;
		table.rows[1].cells[1].childNodes[0].data=mon[m1];		
	}
	else
	{
		m1++;
		if(m1>11)
			m1=0;
		table.rows[1].cells[1].childNodes[0].data=mon[m1];
	}
	var one = new Date(y1,m1,1);
	var dayname=one.getDay();
	displaydate(day[dayname],m1,y1);
}
function changeyear(str)
{
var table=document.getElementById("mytable");

	if(str=='left')
	{	
	//alert(str);	
		y1--;		
		if(y1<1960)
			y1=2031;
		table.rows[1].cells[5].childNodes[0].data=y1;		
	}
	else
	{
		y1++;		
		if(y1>2031)
			y1=1960;
		table.rows[1].cells[5].childNodes[0].data=y1;
	}
	var one = new Date(y1,m1,1);
	var dayname=one.getDay();
	displaydate(day[dayname],m1,y1);
}
function displaydate(dayname,monthindex,yearname)
{
	num=1;
	var table=document.getElementById("mytable");
	if(check(yearname))
	{
		if(monthindex==1)
			ndays[monthindex]=29;		
	}
	else
	{
		ndays[1]=28;
	}
	for(j=0;j<=6;j++)
	{
		if(table.rows[2].cells[j].childNodes[0].data==dayname)
		{
				var c=j;
				break;
		}	
	}
	for(i=3;i<=8;i++)
	{
		for(j=0;j<=6;j++)
		{
			if(j<c && i==3)					
				table.rows[i].cells[j].childNodes[0].data=" ";										
			else 
			{
				if(num<=ndays[monthindex])
					table.rows[i].cells[j].childNodes[0].data=num;	
				else
					table.rows[i].cells[j].childNodes[0].data=" ";	
				num++;
			}
			if(dd==table.rows[i].cells[j].childNodes[0].data )//&& yearname==yy && monthindex==mm)				
				table.rows[i].cells[j].style.background='blue';
			else
				table.rows[i].cells[j].style.background='gray';
		}
	}
}
function check(lyear)
{
		if(lyear % 4 == 0 && ( lyear % 100 != 0 || lyear % 400 == 0))
  		return true
 		 else
   	return false;
}