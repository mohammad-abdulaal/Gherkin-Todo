const {Given, When, Then } = require('cucumber');

let lists = {
    currenttask:"",
    concatenateToEmptyString:function(x){
        return this.currenttask +=x
    }
}

Given("I am on the todo list page" , function (){
    lists.currenttask="";
})

When ('I add a new task {string}',function(x){
    lists.currenttask=lists.concatenateToEmptyString(x);
})


Then ("the task {string} should be added to the list",function(x){
    if (lists.currenttask !== x) {
        throw new Error(`Expected ${x} but got ${lists.currenttask}`);
      }
})
