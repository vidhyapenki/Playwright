let empName = ['Sachin', 'Ramesh', 'Suresh'];

for(let i in empName)
{
    console.log(empName[i]);
}

let data = [1,"Name", true, 34.56];

for(let x of data)
{
    console.log(x);
}

function search(ele, arrayDemo)
{
    let flag = false;
    for(let i = 0; i<arrayDemo.length; i++)
    {
        if(arrayDemo[i]===ele)
        {
            console.log('Element Found')
            flag = true;
            break
        }
    }

    if(flag === false)
    {
        console.log("ELEMENT NOT FOUND");
    }

}

let arrayValue  = [1,2,3,4,5,6,7]
let searchValue = 7;
search(searchValue, arrayValue);