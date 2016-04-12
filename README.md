# jquery_custom_drop_down_list
This jQuery plugin enables you to use drop down lists with options restrected with singleton choise.
# Usage
require jQuery
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
  selects.drop_down_list = $(".your_dropdowns");
  selects.set();
});

$('.delete_button').click(function(){
  some_process();
//After some process like dom-removing runs for example $('<select class="hoge"></select>').appendTo('body');
//All you need is set dropdownlists on selects.drop_down_list and call CustomDropDown.prototype.set()
  selects.drop_down_list = $(".your_dropdowns");
  selects.set();
});

```
#additional feature
```javascript
// additional_filter function can filter options whichever you like.
// Return option_doms after some dom manipulation.
selects.additional_filter = function(option_doms,dropdown){
  some_process(option_doms);
  return option_doms;
}
```
If you request some additional feature or want to know this code, Please take it easy to question me.

#Future Work (Unimplemented)
I want to follow code bellow in near future.

```javascript
selects.push(dropdown);
// #=> This code will be same "selects.drop_down_list.push(dropdown);" and dropdown type can be string or jQueryDomObject 
```
