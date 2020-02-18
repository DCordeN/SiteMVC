var logins = [];
var passwords = [];

var xhr = new XMLHttpRequest();
xhr.open("GET", "js/data.json", false);
xhr.send();
var td = xhr.responseText;
var parsedData = JSON.parse(td);
for(let i = 0; i < parsedData.length; i++){
    logins[i] = parsedData[i].login;
    passwords[i] = parsedData[i].password;
}


var firstS_node = document.body.cloneNode(true);
var ext_descs = []; 
var wares = [];
var prices = [];

var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "js/items.json", false);
xhr2.send();
var ti = xhr2.responseText;
var parsedItem = JSON.parse(ti);
for(let i = 0; i < parsedItem.length; i++){
    ext_descs[i] = parsedItem[i].description;
    wares[i] = parseInt(parsedItem[i].wares);
    prices[i] = parseInt(parsedItem[i].price);
}

function validate(cur_login, cur_password){                                                                                                          
    for(let i = 0; i < logins.length; i++){
        if(cur_login == logins[i] && cur_password == passwords[i])
            return true;       
        if((cur_login != logins[i] || cur_password != passwords[i]) && i == logins.length-1)
            return false;    
    }

}

var in_cont = 0;
function incrInCont(){                                                           
    in_cont++;
}

function getInnerNname(els){
    return document.getElementsByClassName("item-name")[els.indexOf(event.currentTarget)].innerHTML;
}

function getInnerNware(els){
    return "На складе: " + wares[els.indexOf(event.currentTarget)];
}

function getInnerNtext(els){
    return getExtDescs()[els.indexOf(event.currentTarget)];
}

function getExtDescs(){
    return ext_descs;
}

function getSrcNimg(els){
    return document.getElementsByClassName("item-img")[els.indexOf(event.currentTarget)].src;
}

function getInnerNbut(){
    return "Скрыть описание";
}

function getInCont(){
    return in_cont;
}

function decrInCont(){
    in_cont--;
}

var cur_prices = [];
var ind_war = [];
var sum = 0;
function buy(els, currentElem){
    if(wares[els.indexOf(currentElem)] !== 0){
        sum += prices[els.indexOf(currentElem)];
        cur_prices.push(prices[els.indexOf(currentElem)]);

        if(wares[els.indexOf(currentElem)] !== 0){
            wares[els.indexOf(currentElem)]--;
            ind_war.push(els.indexOf(currentElem));
        }
        return true;
    }
    else 
        return false;
}

function getSum(){
    return sum;
}

function deleteItem(els, cur_item){	
    sum -= cur_prices[els.indexOf(event.currentTarget)];
    cur_prices.splice(cur_prices.indexOf(cur_prices[els.indexOf(event.currentTarget)]), 1);
    wares[ind_war[els.indexOf(event.currentTarget)]]++;
    ind_war.splice(ind_war.indexOf(ind_war[els.indexOf(event.currentTarget)]), 1);
    if(sum == 0)  
        return false;
    return true;
}


function getIndWar(){
    return ind_war;
}

function sumZeroing(){                                                          
    sum = 0;
}