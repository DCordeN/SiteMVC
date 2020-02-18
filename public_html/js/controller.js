function loadContr(){                                               
    initView();
}

function authFormContr(){                                           
    if(!validate(getCurLogin(), getCurPassword())){
        showWrongMessage();
        return false;
    }
    else
        toSecondScreen();
}

function exitFromMain(){                                            
    sumZeroing();
    clearBasket();
}

function showDescContr(){                                           
    var elements = Array.prototype.slice.call(document.getElementsByClassName('item-name'), 0); 
    createDescElems(getInCont());
    incrInCont();
    setInnerNname(getInnerNname(elements));
    setInnerNware(getInnerNware(elements));
    setInnerNtext(getInnerNtext(elements));
    setSrcNimg(getSrcNimg(elements));
    setInnerNbut(getInnerNbut());
}

function hideDescContr(){
    var elements = Array.prototype.slice.call(document.getElementsByClassName('but_desc'), 0);
    removeItemFromDesc(elements);
    decrInCont();
}

function buyContr(){
    var elements = Array.prototype.slice.call(document.getElementsByClassName('item-backet'), 0);
    var cur_elem = event.currentTarget;
    showTotalInMain();
    addClonedNd(elements, cur_elem);
    addDelButton();
    addBuyAllButton();
    if(buy(elements, cur_elem) === true)
        rmvBuyAll();
    else
        setTotalSum(getSum());
 
    showSum(getSum());   
}

function deleteItemContr(){
    var elements = Array.prototype.slice.call(document.getElementsByClassName('del_but'), 0);
    var curItem = document.getElementsByClassName("del_but")[elements.indexOf(event.currentTarget)];

    if(deleteItem(elements, curItem) == false){
        hideSum();
        hideBuyAll();
    }
    setTotalSum(getSum());
    removeFromBasket(elements);
    removeCurItem(curItem);
}

function buyAllContr(){
    toThirdScreen();
    addToCh(getIndWar(), getSum());

}

function backToMain(){
    document.getElementsByTagName('h2')[0].remove(); 
    for(let i = 0; i < ind_war.length; i++) document.getElementsByClassName('check-item')[0].remove(); 
    toSecondScreen();
}