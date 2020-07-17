//function for converting feet to mile
function feetToMile(feet)
{
    //first condition to check if the input is invalid. If invalid necessary warnig given
    if(feet<=0)
    {
        return "Distance can not be negative or null"
    }
    //if not invalid then converting the input
    else{
        var miles = feet/5280;
    }
    return miles;
}

//function for calculating the needed cubic feet wood for given number of chair, table and bad.
// one chair needs 1 cubic feet wood, one table needs 3 cubic feet wood and one bed needs 5 cubic feet wood.
// the input order should be first chair, then table and in the end bed.
function woodCalculator(chair, table, bed)
{
    //first condition to check if any valu is negative or not. If negative necessary warnings given
    if(chair<0 || table<0 || bed<0)
    {
        return "Physical entity can not be negative"
    }
    //take inputs and multiply it with cubic feet wood needed to make single one and add all three
    else
    {
            var chairWood = chair*1;
            var tableWood = table*3;
            var bedWood = bed*5;
            var totalWood = chairWood + tableWood + bedWood;
    }
    return totalWood;
}

//function for calculating bricks needed to build a multi store building.
//hight of first ten floor is 15 feet, next 10 floor is 12 feet and after that is 10 feet.
//bricks neede to build per feet is 1000.
function brickCalculator(floorCount)
{
    //first condition to check if the bulding is more than 20 floors and then calculate needed bricks. for first 20 floor needed bricks are pre-defined.
    if(floorCount>20)
    {
        var excess = floorCount - 20;
        var feetCount = excess*10;
        var totalFeet = feetCount + (10*12) + (10*15);
        var neededBricks = totalFeet*1000;
    }
    //second condition to check if the building is more than 10 floors but less than or equal 20 floors. For first 10 floors needed bricks are pre-defined.
    else if(floorCount>10 && floorCount<=20)
    {
        var excess = floorCount - 10;
        var feetCount = excess*12;
        var totalFeet = feetCount + (10*15);
        var neededBricks = totalFeet*1000;
    }
    //third condition to check if the bulding is less than or equal 10 floors.
    else if(floorCount>0 && floorCount<=10)
    {
        var feetCount = floorCount*15;
        var neededBricks = feetCount*1000;
    }
    //if input is invalid necessary warnings are given.
    else
    {
        return "Floor can not be negative or you do not need any bricks";
    }
    return neededBricks;
}

//function for checking the smallest name from an array.
//the input shuld be in an array
function tinyFriends(nameArray)
{
    //initial variable are decleared to store the temporary values of string length and sname. Initial values are determined as that do not effect future values.
    var tinyLength = Infinity;
    var tinyest = "";
    //first condition to check the array have any component in it.
    if(nameArray.length>0)
    {
        //loop is run to itarate the array
        for(var i = 0; i < nameArray.length; i++)
        {
            //nested condition to check if the value is string.
            if(typeof nameArray[i]=='string')
            {
                //another nested condition to find the shortest naame.
                if(nameArray[i].length<=tinyLength)
                {
                    tinyLength = nameArray[i].length;
                    tinyest = nameArray[i];
                }        
            }
            //if the value is not string necessary warnings are given.
            else
            {
                return "Digit can not be a Name";
            }
        }
    //if there are no input then necessary warnings are given.
    }
    else
    {
        return "No input found";
    }
    return tinyest;
}

