var xhr = new XMLHttpRequest();
xhr.open("GET", "js/data.json", false);
xhr.send();
var t = xhr.responseText;
var parsed = JSON.parse(t);
console.log(parsed.name);

var logins = ["stud", "stud1234"];
var passwords = ["stud", "123456"];
var firstS_node = document.body.cloneNode(true);
var ext_descs = ["Смарт-часы для мультиспорта, сочетающие в себе систему навигации GPS, хронограф, альтиметр, компас, а также продвинутые возможности мониторинга сердечного ритма. Оптическая технология измерения пульса - оптический датчик пульса на нижней стороне часов испускает свет в запястье пользователя с помощью светодиодов и измеряет количество света, которое рассеивается кровотоком. Синхронизация со смартфоном через Bluetooth Smart с мобильным приложением Suunto, iOS и Android. Приложение Suunto при подключении часов к смартфону поддерживает спортивные онлайн-сообществ, обновление ПО часов из облака, так же позволяет получать уведомления телефона на часах.", "Многофункциональные удобные часы с внушительным дизайном отлично подойдут для целеустремленного мужчины.", "Внешний стальной корпус отполирован и выглядит хромированным, а на безеле сохранена стальная текстура. Задняя крышка черная и защищена сверхпрочным DLC-покрытием. Внутри, гасящий любые удары, слой из материала Alpha Gel® и металлическая капсула с механизмом часов.", "В механизме 24 камня, частота 21600 полуколебаний в час. Возможность ручного завода. Запас хода 40 часов. Противоударное устройство оси баланса. Завинчивающаяся заводная головка с защитой."];
var wares = [3, 4, 1, 1];
var prices = [35000, 15000, 65000, 95000];

var conts;                                                                      //view
const first_scr = document.getElementsByClassName("container")[0];
const second_scr = document.getElementsByClassName("container")[1];
const third_scr = document.getElementsByClassName("container")[2];
function load(){                                                                //view
    conts = document.getElementsByClassName("container");    
    conts[2].remove();
    conts[1].remove();
}

function validate(){                                                            //model
    var cur_login = document.forms["form"]["login"].value;                      
    var cur_password = document.forms["form"]["password"].value;                
    for(let i = 0; i < logins.length; i++){
        if(cur_login == logins[i] && cur_password == passwords[i]){
            toSecondScreen();
            break;
        }
        if((cur_login != logins[i] || cur_password != passwords[i]) && i == logins.length-1){
            let node = document.createElement("p");
            node.className = "form-wrong_text";
            node.innerHTML = "Попробуйте ещё раз!";
            document.forms["form"].appendChild(node);
        }
    }

    return false;
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

var in_cont = 0;
function showDesc(){
    var els = Array.prototype.slice.call( document.getElementsByClassName('item-name'), 0 );
  	console.log(els.indexOf(event.currentTarget));
    var cur_item = document.getElementsByClassName("item-name")[els.indexOf(event.currentTarget)];
    
    console.log(cur_item);

    var n_cont = document.createElement("div");
    n_cont.className = "cont_desc";

    var n_img = document.createElement("img");
    var n_text = document.createElement("p");
    var n_name = document.createElement("p");
    n_name.innerHTML = document.getElementsByClassName("item-name")[els.indexOf(event.currentTarget)].innerHTML;
    n_text.innerHTML = ext_descs[els.indexOf(event.currentTarget)];
    n_img.src = document.getElementsByClassName("item-img")[els.indexOf(event.currentTarget)].src;
    n_img.className = "ext_desc-img";


    document.getElementsByClassName("container")[0].appendChild(n_cont);
    document.getElementsByClassName("cont_desc")[in_cont].appendChild(n_name);
    document.getElementsByClassName("cont_desc")[in_cont].appendChild(n_text);
    document.getElementsByClassName("cont_desc")[in_cont].appendChild(n_img);


    var n_ware = document.createElement("p");
    n_ware.className = "ext_desc-ware";
    n_ware.innerHTML = "На складе: " + wares[els.indexOf(event.currentTarget)];
    document.getElementsByClassName("cont_desc")[in_cont].appendChild(n_ware);    

    var n_but = document.createElement("button");
    n_but.className = "but_desc";
    n_but.setAttribute("onclick", "hideDesc()");
    n_but.innerHTML = "Скрыть описание";
    document.getElementsByClassName("cont_desc")[in_cont].appendChild(n_but);    
    in_cont++;
}

function hideDesc(){
    var els = Array.prototype.slice.call( document.getElementsByClassName('but_desc'), 0 );
  	console.log(els.indexOf(event.currentTarget));
    var cur_item = document.getElementsByClassName("but_desc")[els.indexOf(event.currentTarget)];

    console.log(cur_item);
    document.getElementsByClassName("cont_desc")[els.indexOf(event.currentTarget)].remove();
    in_cont--;
}

var cur_prices = [];
var ind_war = [];
var sum = 0;
function buy(){
    document.getElementsByClassName("sum")[0].style.visibility = "visible";
    document.getElementsByClassName("sum")[0].style.marginLeft = "200px";
    document.getElementsByClassName("sum")[0].style.marginTop = "100px";
    document.getElementsByClassName("sum")[0].style.fontWeight = "bold";
    document.getElementsByClassName("sum")[0].innerHTML = "Общая сумма покупки: ";

    var els = Array.prototype.slice.call( document.getElementsByClassName('item-backet'), 0 );
  	console.log(els.indexOf(event.currentTarget));
    var cur_item = document.getElementsByClassName("item-backet")[els.indexOf(event.currentTarget)];

    if(wares[els.indexOf(event.currentTarget)] != 0){
        sum += prices[els.indexOf(event.currentTarget)];
        document.getElementsByClassName("sum")[0].innerHTML += Number(sum);
        cur_prices.push(prices[els.indexOf(event.currentTarget)]);
        
        var cur_i = document.getElementsByClassName("item")[els.indexOf(event.currentTarget)].cloneNode(1);
        cur_i.getElementsByClassName("item-backet")[0].remove();
        cur_i.getElementsByClassName("item-name")[0].setAttribute("onclick", "");
        
        var del_but = document.createElement("button");
        del_but.className = "del_but";
        del_but.innerHTML = "Удалить товар";
        del_but.style.marginLeft = "200px";
        del_but.setAttribute("onclick", "deleteItem()");

        var buy_all = document.createElement("button");
        buy_all.className = "buy_all";
        buy_all.innerHTML = "Купить всё";
        buy_all.style.marginLeft = "650px";
        buy_all.setAttribute("onclick", "buyAll()");


        if(wares[els.indexOf(event.currentTarget)] != 0){
            wares[els.indexOf(event.currentTarget)]--;
            ind_war.push(els.indexOf(event.currentTarget));
        }
        document.getElementsByClassName("backet")[0].appendChild(cur_i);
        document.getElementsByClassName("backet")[0].appendChild(del_but);
        document.getElementsByClassName("backet")[0].appendChild(buy_all);
        if(document.getElementsByClassName("buy_all").length != 1)
            document.getElementsByClassName("buy_all")[document.getElementsByClassName("buy_all").length-2].remove();
    }
    else {
        alert("Товар кончился!");
        document.getElementsByClassName("sum")[0].innerHTML = "Общая сумма покупки: ";
        document.getElementsByClassName("sum")[0].innerHTML += Number(sum);
    }
}

function deleteItem(){
    var els = Array.prototype.slice.call( document.getElementsByClassName('del_but'), 0 );
  	console.log(els.indexOf(event.currentTarget));
    var cur_item = document.getElementsByClassName("del_but")[els.indexOf(event.currentTarget)];

    document.getElementsByClassName("sum")[0].innerHTML = "Общая сумма покупки: ";
    console.log(cur_prices[els.indexOf(event.currentTarget)]);
    sum -= cur_prices[els.indexOf(event.currentTarget)];
    document.getElementsByClassName("sum")[0].innerHTML += Number(sum);

    document.getElementsByClassName("backet")[0].getElementsByClassName("item")[els.indexOf(event.currentTarget)].remove();

    
    
    cur_prices.splice(cur_prices.indexOf(cur_prices[els.indexOf(event.currentTarget)]), 1);
    wares[ind_war[els.indexOf(event.currentTarget)]]++;
    ind_war.splice(ind_war.indexOf(ind_war[els.indexOf(event.currentTarget)]), 1);
    cur_item.remove();
    if(sum == 0){
        document.getElementsByClassName("sum")[0].style.visibility = "hidden";
        document.getElementsByClassName("buy_all")[0].remove();
    }
}

function buyAll(){
    toThirdScreen();

    for(let i = 0; i < ind_war.length; i++){
        var node = document.createElement("p");
        node.className = "check-item";
        node.innerHTML = second_scr.getElementsByClassName('item-name')[ind_war[i]].innerHTML;
        node.innerHTML += " ";
        node.innerHTML += second_scr.getElementsByClassName('item-price')[ind_war[i]].innerHTML;
        node.style.textAlign = "center";
        document.getElementsByClassName("check")[0].appendChild(node);
    }

    var n_sum = document.createElement("h2");
    n_sum.innerHTML = "Общая сумма покупки: " + sum + "руб.";
    n_sum.style.textAlign = "center";
    n_sum.style.marginTop = "100px";
    document.getElementsByClassName("check")[0].appendChild(n_sum);

}

