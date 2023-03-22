  // js.review feb 14-2023// 
//1. normal abnormal//
let height=parseInt(prompt("enter the height:"));
	 if(height<150)
	 {
		  console.log("its dwarf");
	 }
	 else if((height>150)&&(height<=165))
	 {
		  console.log("Average person");
	 }
	 
	 else if((height>165)&&(height<195))
	 {
		  console.log("tallest person");
	 }
	 else 
	 {
		 console.log("abnormal person");
	 }
	 //2.nested if//
	 ///second //
	   let temp=parseInt(prompt("enter the temp:"));
	   if(temp<0)
	   {
		    console.log("Freezing");
	   }
	   else if((temp>0)&&(temp<=10))
	   {
		    console.log("Very cold");
	   }
	   else if((temp>10)&&(temp<=20))
	   {
		   console.log("Cold");
	   }
	   else if((temp>20)&&(temp<=30))
	   {
		    console.log("normal");
	   }
	   else if((temp>30)&&(temp<=40))
	   {
		    console.log("it's hot");
	   }
	   else(temp>=40)
	   {
		   console.log("its very hot");
	   }
	  //3.switch case//
	  let grade=prompt("enter the  grade:");
switch(grade)
{
case A:
  console.log("Outstanding");
  break;
case b:
    console.log("Excellent");
	break;
case c:
      console.log("well done");
	  break;
case d:
     console.log("passed");
	 break;
case f:
     console.log("failed");
	 break;
}
 console.log("exit");