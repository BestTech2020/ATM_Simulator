alert("Welcome to LCI ATM centre");
var pin = prompt("Kindly enter pin");
if(pin.length==4){
            alert("Continue?");
        }else{
            alert("invalid Pin");
        }

function display(){
    var x = prompt("Select an option\n1. Withdraw \n2. Transfer \n3. Airtime Reacharge \n 4. Deposit");
    if(x==1){
        withdraw();
    }else if(x==2){
        transfer();
    }else if(x==3){
        airtime();
    }else if(x==4){
        deposit();
    }else{
        alert("invalid option");
        display();
    }
}
display();

function transfer(){
    var bank = prompt("SELECT BANK TYPE\n 1. GTB\n 2. First Bank \n 3. UBA");
    if(bank==1 || bank==2 || bank==3){
        var accountNumber = prompt("Enter account number");
        amount();
    }else{
        alert("invalid input");
        transfer();
    }

}

function withdraw(){
    var acct = prompt("SELECT BANK TYPE\n 1. Savings \n 2. Current");
    if(acct==1 || acct==2){
        amount();
    }
}


function airtime(){
    var network= prompt("SELECT NETWORK\n 1. MTN \n 2. Airtel \n 3. Etisalat");
    if(network==1 || network==2 || network==3);
    recharge();

}

function recharge(){
    var card = prompt("Select Card\n 1. 200 \n 2. 500 \n 3. 1000 \n 4. 5000");
    if(card==1 || card==2 || card==3 || card==4){
        alert("processing....");
        alert("Transfer Successful");
        alert("Thanks for banking with us");
        
        }else{
        alert("invalid input");
        recharge();
        amount();
    }
}



function amount(){
    var amt = prompt("SELECT AMOUNT \n 1. 1000 \n 2. 2000 \n 3. 5000 \n 4. 10000");
    if(amt==1 || amt==2 || amt==3 || amt==4){
        alert("processing....");
    alert("Transfer Successful");
    alert("Thanks for banking with us");
    
    }else{
    alert("invalid input");
    amount();
    }
}