var initialPrice = document.querySelector("#initial_price");
var stockQuantity = document.querySelector("#stock_quantity");
var currentPrice = document.querySelector("#current_price");
var btnCalculate = document.querySelector("#btn_calculate");
var outboxContainer = document.querySelector("#outbox_container");
var body = document.querySelector("body");



btnCalculate.addEventListener("click", clickHandler);


function clickHandler(){
  if(initialPrice.value === "" || stockQuantity.value === "" || currentPrice.value === ""){
    console.log(initialPrice.value,stockQuantity.value,currentPrice.value)
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
    var profitPercentage = (profitPerShare / initial) * 100;
    showMessage(`Hey the profit is ${totalProfit} and the percent is ${profitPercentage.toFixed(2)}%`); 
    showImage("PROFIT");
    changeTheme("PROFIT");
  }else if(current < initial){
    var lossPerShare = initial - current;
    var totalLoss = quantity * lossPerShare;
    var lossPercentage = (lossPerShare / initial) * 100;
    showMessage(`Hey the loss is ${totalLoss} and the percent is ${lossPercentage.toFixed(2)}%`);
    showImage("LOSS")
    changeTheme("LOSS");
  }else{
    showMessage("The old Chinese proverb springs to mind - No pain, no gain.");
    showImage("NOGAIN");
    changeTheme("NOGAIN");
  }
}

function showMessage(message){
  outboxContainer.innerHTML = message
}

function showImage(status){
  var img = document.createElement("img");
  img.setAttribute("id", "result_img");
  switch (status) {
    case "PROFIT":
      img.setAttribute("src", "./images/profit.png");
      outboxContainer.appendChild(img)
      break;
    case "LOSS":
      img.setAttribute("src", "./images/loss.png");
      outboxContainer.appendChild(img);
      break;

    case "NOGAIN":
      img.setAttribute("src", "./images/nogain.png");
      outboxContainer.appendChild(img);
      break;
    default:
      break;
  }
}

function changeTheme(status){
  switch (status) {
    case "PROFIT":
      body.style.backgroundColor = "green";
      break;
    case "LOSS":
      body.style.backgroundColor = "red";
      break;

    case "NOGAIN":
      body.style.backgroundColor = "#FFF49A";
      break;
    default:
      break;
  }
}