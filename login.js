let temp=num;
     final=0;
    while(num>0){
        rem = num%10;
	   num= Math.floor(num/10);
	    final=final*10+rem;
    }if(final==temp){
        console.log("Yes");
    }else{
        console.log("No");
    }