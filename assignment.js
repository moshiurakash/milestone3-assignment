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
    //take inputs and multiply it with cubic feet wood needed for make single one and add all three
    else
    {
            var chairWood = chair*1;
            var tableWood = table*3;
            var bedWood = bed*5;
            var totalWood = chairWood + tableWood + bedWood;
    }
    return totalWood;
}

