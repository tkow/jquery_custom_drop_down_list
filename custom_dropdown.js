//require jquery
jQuery.noConflict();

"use strict";

var CustomDropDown =(function($){

  function CustomDropDown(drop_down_list,options){
    this.drop_down_list = drop_down_list || [];
    this.to_delete =[];
    this.options = options || [];
  }

  CustomDropDown.prototype.set = function(){
    // this.to_delete = this.get_current_values();

    $(this.drop_down_list).each(function(i, drop_down) {
    var length = $(this.options).length;
    var j = 0;
    while(j<length && this._check_value(drop_down)) { 
      $(drop_down).val($(this.options)[j].value);
      j++;
    } 
    this.reload();
    }.bind(this));
  }
  // 注意：jqueryオブジェクトと配列オブジェクトではfilterメソッドの引数指定が違う。jqueryのメソッドではインデクサ実装のオブジェクトは全て「配列のようなオブジェクト」で返り値が返ってくる。
  CustomDropDown.prototype._check_value = function(drop_down){
     return $(this.get_current_values()).filter(function(i,v){ return v===$(drop_down).val()}).length > 1;
  }

  CustomDropDown.prototype.reload = function(){
    this.to_delete = this.get_current_values();
    $(this.drop_down_list).each(function(i,drop_down){
      var selected_val = $(drop_down).val();
      $(drop_down).html(this.filter(drop_down));
      $(drop_down).val(selected_val || $(drop_down).children('option').first().attr('value'));
    }.bind(this));
  }

  CustomDropDown.prototype.filter = function(drop_down,force_flag){
    var options = $(this.options);
    $(this.to_delete).each(function(i,value){     
      if(this._delete_option_flg(value,drop_down,force_flag)){
        options = options.filter(function(i,v){return $(v).val() !==value;});
      }
    }.bind(this));
    return this.additional_filter(options,drop_down);
  }

  CustomDropDown.prototype._delete_option_flg = function(delete_value,drop_down,force_flag){
   return delete_value !== $(drop_down).val() || force_flag; 
 }

  CustomDropDown.prototype._args_separate = function(args){
  for (var i=0;i<args.length;i++){
    var v = args[i];
    if(v.hasOwnProperty('length')&& (typeof v !=='string')){
      if(v.length===0){
        args.splice(i,1);
        i--;
      }
      else if(v instanceof $ || typeof v == 'object'){
        debugger;
      }else{
       args.splice.apply(args,[i,1].concat(v));
       i--;
     }
   }
    console.log(v);
   }
   return args; 
  }

  CustomDropDown.prototype.additional_filter = function(options,dropdown){
    return options;
  }
  
  // CustomDropDown.prototype.add = function(drop_down_list){
  // this.drop_down_list.push(drop_down_list);
  // }
  
  CustomDropDown.prototype.push = function(drop_down_list){
  // if (Array.isArray(drop_down_list)){
  // this.drop_down_list.push.appry(this.drop_down_list,drop_down_list);
  // }else {
    var args = [].slice.call(arguments);
    this.drop_down_list.push(this._args_separate(args));
  // }
  }
  
  
  CustomDropDown.prototype.to_delete_option = function(option_value){
    this.to_delete.push(option_value);
  }
  
  CustomDropDown.prototype.to_delete_set = function(delete_arrays){
    this.to_delete = delete_arrays;
  }
  
  
  CustomDropDown.prototype.get_current_values = function(delete_option){
   return $(this.drop_down_list).map(function(i,v){ 
    console.log($(v).prop('value'));
    return $(v).prop('value');

  });
  }
  
  CustomDropDown.prototype.to_remain_option = function(option_value){
    var length = this.to_delete.length;
    for(var i = length-1;i>=0; i--){
     if(this.to_delete[i]===option_value){
      this.to_delete.splice(i);
    }
  }
  }
  
  // CustomDropDown.prototype.update = function(drop_down_list){
  // this.drop_down_list.push(drop_down_list);
  // }
  
  return CustomDropDown;
  
  })(jQuery); 