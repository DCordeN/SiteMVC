var conts;                                                                      
const first_scr = document.getElementsByClassName("container")[0];
const second_scr = document.getElementsByClassName("container")[1];
const third_scr = document.getElementsByClassName("container")[2];
function initView(){                                                              
    conts = document.getElementsByClassName("container");    
    conts[2].remove();
    conts[1].remove();
}

function getCurLogin(){                                                         
    return document.forms["form"]["login"].value;       
}

function getCurPassword(){                                                      
    return document.forms["form"]["password"].value;
}

function clearBasket(){                                                         
    while(document.getElementsByClassName('backet')[0].childNodes.length != 2) 
        document.getElementsByClassName('backet')[0].removeChild(document.getElementsByClassName('backet')[0].lastChild);
                                                                                                                             
    document.getElementsByClassName('sum')[0].style.visibility = 'hidden'; 
    toFirstScreen();
}

function toFirstScreen(){                                                       
    document.getElementsByClassName("container")[0].remove();
    document.body.appendChild(first_scr);
}

function toSecondScreen(){                                                           
    document.getElementsByClassName("container")[0].remove();
    document.body.appendChild(second_scr);
}

function toThirdScreen(){                                                       
    document.getElementsByClassName("container")[0].remove();
    document.body.appendChild(third_scr);
}


var countMessages = 0;
function showWrongMessage(){                                                    
    countMessages++;
    if(countMessages == 1){
        let node = document.createElement("p");
        node.className = "form-wrong_text";
        node.innerHTML = "Попробуйте ещё раз!";
        document.forms["form"].appendChild(node);
    }
}

var n_cont, n_name, n_text, n_img, n_ware, n_but;
function createDescElems(inCnt){
    n_cont = document.createElement("div");
    n_cont.className = "cont_desc";

    n_img = document.createElement("img");
    n_img.className = "ext_desc-img";
    n_text = document.createElement("p");
    n_name = document.createElement("p");  
    
    n_name.innerHTML = "";
    n_text.innerHTML = "";
    n_img.innerHTML = "";

    console.log(inCnt);
    document.getElementsByClassName("container")[0].appendChild(n_cont);
    document.getElementsByClassName("cont_desc")[inCnt].appendChild(n_name);
    document.getElementsByClassName("cont_desc")[inCnt].appendChild(n_text);
    document.getElementsByClassName("cont_desc")[inCnt].appendChild(n_img);  
    
    n_ware = document.createElement("p");
    n_ware.className = "ext_desc-ware";
    
    document.getElementsByClassName("cont_desc")[inCnt].appendChild(n_ware);
    
    n_but = document.createElement("button");
    n_but.setAttribute("onclick", "hideDescContr()");
    n_but.className = "but_desc";
    
    document.getElementsByClassName("cont_desc")[inCnt].appendChild(n_but);  
}

function setInnerNname(inner){
    n_name.innerHTML = inner;
}

function setInnerNware(inner){
    n_ware.innerHTML = inner;
}

function setInnerNtext(inner){
    n_text.innerHTML = inner;
}

function setSrcNimg(src){
    n_img.src = src;
}

function setInnerNbut(inner){
    n_but.innerHTML = inner;
}

function removeItemFromDesc(elements){
    document.getElementsByClassName("cont_desc")[elements.indexOf(event.currentTarget)].remove();
}

function showTotalInMain(){
    document.getElementsByClassName("sum")[0].style.visibility = "visible";
    document.getElementsByClassName("sum")[0].style.marginLeft = "200px";
    document.getElementsByClassName("sum")[0].style.marginTop = "100px";
    document.getElementsByClassName("sum")[0].style.fontWeight = "bold";
    document.getElementsByClassName("sum")[0].innerHTML = "Общая сумма покупки: ";
}

function showSum(sm){
    document.getElementsByClassName("sum")[0].innerHTML += Number(sm);
}

function addClonedNd(elems, curElem){
    var cur_i = document.getElementsByClassName("item")[elems.indexOf(curElem)].cloneNode(1);
    cur_i.getElementsByClassName("item-backet")[0].remove();
    cur_i.getElementsByClassName("item-name")[0].setAttribute("onclick", "");
    document.getElementsByClassName("backet")[0].appendChild(cur_i);
}

function addDelButton(){
    var del_but = document.createElement("button");
    del_but.className = "del_but";
    del_but.innerHTML = "Удалить товар";
    del_but.style.marginLeft = "200px";
    del_but.setAttribute("onclick", "deleteItemContr()");
    document.getElementsByClassName("backet")[0].appendChild(del_but);
}

function addBuyAllButton(){
    var buy_all = document.createElement("button");
    buy_all.className = "buy_all";
    buy_all.innerHTML = "Купить всё";
    buy_all.style.marginLeft = "650px";
    buy_all.setAttribute("onclick", "buyAllContr()");
    document.getElementsByClassName("backet")[0].appendChild(buy_all);
}

function rmvBuyAll(){
    if(document.getElementsByClassName("buy_all").length !== 1)
            document.getElementsByClassName("buy_all")[document.getElementsByClassName("buy_all").length-2].remove();
}

function setTotalSum(sm){
    document.getElementsByClassName("sum")[0].innerHTML = "Общая сумма покупки: ";
    document.getElementsByClassName("sum")[0].innerHTML += Number(sm);
}

function removeFromBasket(els){
    document.getElementsByClassName("backet")[0].getElementsByClassName("item")[els.indexOf(event.currentTarget)].remove();
}

function hideSum(){
    document.getElementsByClassName("sum")[0].style.visibility = "hidden";
}

function hideBuyAll(){
    document.getElementsByClassName("buy_all")[0].remove();
}

function removeCurItem(cur_item){
    cur_item.remove();
}

function addToCh(indWar, sm){
    for(let i = 0; i < indWar.length; i++){
        var node = document.createElement("p");
        node.className = "check-item";
        node.innerHTML = second_scr.getElementsByClassName('item-name')[indWar[i]].innerHTML;
        node.innerHTML += " ";
        node.innerHTML += second_scr.getElementsByClassName('item-price')[indWar[i]].innerHTML;
        node.style.textAlign = "center";
        document.getElementsByClassName("check")[0].appendChild(node);
    }
    
    var n_sum = document.createElement("h2");
    n_sum.innerHTML = "Общая сумма покупки: " + sm + "руб.";
    n_sum.style.textAlign = "center";
    n_sum.style.marginTop = "100px";
    document.getElementsByClassName("check")[0].appendChild(n_sum);
}