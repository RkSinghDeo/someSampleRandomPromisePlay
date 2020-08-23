function getTheTimeNowAndPrint (message)
{
  const randomTimeInterval = Math.floor(Math.random() * Math.floor(1000));
   return  new Promise ((resolve,reject)=>{setTimeout(()=>{
      let dateNow= new Date();
      console.log(`print after ${randomTimeInterval} miliseconds-->${dateNow} --> ${message}`);
      resolve(randomTimeInterval);

   },randomTimeInterval);
});
};

var functionArray=
[
   { fn: getTheTimeNowAndPrint,para:'hieeeee!!'},
  { fn: getTheTimeNowAndPrint,para:'hieeeee!!'},
  { fn: getTheTimeNowAndPrint,para: 1},
  { fn: getTheTimeNowAndPrint,para: 2},
  { fn: getTheTimeNowAndPrint,para:'hieeeee!!'},
  { fn: getTheTimeNowAndPrint,para: 3},
  { fn: getTheTimeNowAndPrint,para: 4}

];


// how can I make the below function also as promise so it returns me the sum of all the random generated numbers. No use of global variables inside the function. 


   function executeArray(funAry,i=0) 
    
{   
    if(i<5)
    {
    funAry[i].fn(funAry[i].para).then((result)=>{
    console.log(result);
    executeArray(functionArray,++i);
    }
    )
    }
}

 
   executeArray(functionArray);

 
  