var initialPrice = document.querySelector("#initial_price");
var stockQuantity = document.querySelector("#stock_quantity");
var currentPrice = document.querySelector("#current_price");
var btnCalculate = document.querySelector("#btn_calculate");
var outboxContainer = document.querySelector("#outbox_container");



btnCalculate.addEventListener("click", clickHandler);


function clickHandler(){
  if(initialPrice.value || stockQuantity.value || currentPrice.value === ""){
  alert("Please Enter all the information required to Calculate the Profit or Loss")
  }else{
  calculateProfitOrLoss(Number(initialPrice.value),Number(stockQuantity.value),Number(currentPrice.value))
  }
}

function calculateProfitOrLoss(initial,quantity,current){
  console.log(initial,quantity,current)
  if(current > initial){
    var profitPerShare = current - initial;
    var totalProfit = quantity * profitPerShare;
    var profitPercentage = (totalProfit/initial) * 100;
    showMessage(`Hey the profit is ${totalProfit} and the percent is ${profitPercentage.toFixed(2)}`); 
  }else if(current < initial){
    var lossPerShare = initial - current;
    var totalLoss = quantity * lossPerShare;
    var lossPercentage = (totalLoss / initial) * 100;
    showMessage(`Hey the loss is ${totalLoss} and the percent is ${lossPercentage.toFixed(2)}`);
  }else{
    showMessage("The old Chinese proverb springs to mind - No pain, no gain.");
  }
}

function showMessage(message){
  outboxContainer.innerHTML = message
}