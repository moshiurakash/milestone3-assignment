function feetToMile(feet)
{
    if(feet<=0)
    {
        return "Distance can not be negative or null"
    }
    else{
        var miles = feet/5280;
    }
    return miles;
}
var feetToMileResult = feetToMile(10560);
console.log(feetToMileResult);
