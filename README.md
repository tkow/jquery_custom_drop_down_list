# jquery_custom_drop_down_list
This jQuery plugin enables you to use drop down lists with options restrected with singleton choise.
# Usage

```javascript
//examples
for(var i =0;i<3;i++){
  $('<select class="hoge"></select>').appendTo('body');
}

var options =$(["value1","value2","value3","value4"]).each(function(i,v){
    return '<option value='+i+'>'+v+'</option>';
  });
  
var dropdowns = new CustomDropDown(select,options);
var selects = $('.hoge');

//initialize
dropdowns.set(selects,options);
//reload method use dom manipulation when changing options 
selects.change(dropdowns.reload.bind(selects));

// if add_button and delete_button exist

$('.add_button').click(function(){
  some_process();
//After some process like dom-appending runs for example $('<select class="hoge"></select>').appendTo('body');
//All you need is  set dropdownlists on selects.drop_down_list and call CustomDropDown.prototype.set()
  selects.drop_down_list = $(".field_before");
  selects.set();
});

$('.delete_button').click(function(){
  some_process();
//After some process like dom-removing runs for example $('<select class="hoge"></select>').appendTo('body');
//All you need is set dropdownlists on selects.drop_down_list and call CustomDropDown.prototype.set()
  selects.drop_down_list = $(".field_before");
  selects.set();
});

```
