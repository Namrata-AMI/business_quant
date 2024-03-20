const  mongoose = require("mongoose");
const initData= require("./modal/data.js");
const value = require("./modal/main.js");



main()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/business");
}

/*let allData = [
    {
        revenue:0,
        gross_profit:0,
        floating_cost:0,    
        capital_expenditure:0
    }
]
*/
const initDB = async()=>{                             //initialising db//
    await value.deleteMany({});                     // first empty the db before initilaise//
   let res = await value.insertMany(initData.data);           // then inserting data to db//
    console.log("data was initialised");
    console.log(res);
}
initDB();