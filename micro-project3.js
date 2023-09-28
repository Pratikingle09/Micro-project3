const fooddata= require('./food.json');

function listFood(food='')
{
    if(food.length>0)
    {
        return fooddata.filter((food) => fooddata.category===food )
    }
    else{
        return fooddata;
    }
}

listFood("Protein")
listFood('Nuts')
listFood()

function sortC(cond)
{
    if(cond==="as")
    {
        return fooddata.filter((food) => food.calorie < calorie)
    }
    else if(cond==="des")
    {
        return fooddata.filter((food) => food.calorie > calorie)
    }
}

sortC('asec')
sortC('desc')

function sort(type){
    if(type=="protein")
    {
        return fooddata.sort((a,b) => b.proteins - a.proteins)
    }
    else if(type==="crab")
    {
        return fooddata.sort((a,b)=>a.cab-b.cab)
    }
}

sort('protein')
sort('carb')
