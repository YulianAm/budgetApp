var budgetController = (function(){
var x = 23;

var add = function(a){
    return x +a; 
}

var minus = function(b){
    return x - b;
}

return{
    publicTest: function(b){
        return add(b);
    },
    publicTestMinus: function(x){
        console.log(minus(x));
    }
}

})();

var UIController = (function(){
    
})();

var controller = (function(budgetCtrl, UICtrl){
    var z = budgetCtrl.publicTest(5);

    return{
        publicMethod: function(){
            console.log(z);
        }
    }
})(budgetController, UIController);