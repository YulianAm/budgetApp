var budgetController = (function () {
    //
})();

var UIController = (function () {
    //
})();

//global app controller
var controller = (function (budgetCtrl, UICtrl) {
    document.querySelector('.add__btn').addEventListener('click', function () {
        //get field info data
        //add item to the budget controller 
        //add the new item to the user interface 
        //calculkate budget 
        //display buget 
    });

    document.addEventListener('keypress', function(event){
        console.log(event);
    });
})(budgetController, UIController);