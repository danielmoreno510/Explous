import Button from './button';
import Card from './card';
import Checkbox from './checkbox';
import Carousel from './carousel';
import Datepicker from './datepicker';
import Grid from './grid';
import Input from './input';
import InputFile from './input-file';
import InputRange from './input-range';
import Loader from './loader';
import Popup from './popup';
import RadioButton from './radio-button';
import SlideToggle from './slide-toggle';
import Snackbar from './snackbar';
import Table from './table';

(function(window){
    let _init = (params)=> {
        Button.init(params);
    }
    window.ExplousButton= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        Card.init(params);
    }
    window.ExplousCard= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        Carousel.init(params);
    }
    window.ExplousCarousel= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        Checkbox.init(params);
    }
    window.ExplousCheckbox= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        Datepicker.init(params);
    }
    window.ExplousDatepicker= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        Grid.init(params);
    }
    window.ExplousGrid= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        Input.init(params);
    }
    window.ExplousInput= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        InputFile.init(params);
    }
    window.ExplousInputFile= {
        init:_init,
    }
})(window);

(function(window){
    let _init = (params)=> {
        InputRange.init(params);
    }
    window.ExplousInputRange= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        Loader.init(params);
    }
    window.ExplousLoader= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        Popup.init(params);
    }
    let _open= (id,time)=> {
        Popup.open(id,time);
    }
    let _close = (id,time)=> {
        Popup.close(id,time);
    }
    window.ExplousPopup= {
        init:_init,
        open:_open,
        close:_close
    }
})(window);

(function(window){
    let _init = (params)=> {
        RadioButton.init(params);
    }
    window.ExplousRadioButton= {
        init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        SlideToggle.init(params);
    }
    window.ExplousSlideToggle = {
      init:_init
    }
})(window);

(function(window){
    let _init = (params)=> {
        Snackbar.init(params);
    }
    let _show = (id,time)=> {
        Snackbar.show(id,time);
    }
    window.ExplousSnackbar = {
      init:_init,
      show:_show
    }
})(window);

(function(window){
  let _init = (params)=> {
    Table.init(params);
  }
  window.ExplousTable = {
    init:_init
  }
})(window);

export {Button as ExplousButton, Card as ExplousCard, Checkbox as ExplousCheckbox, Datepicker as ExplousDatepicker, Grid as ExplousGrid, Input as ExplousInput, InputFile as ExplousInputFile, InputRange as ExplousInputRange, Loader as ExplousLoader, Popup as ExplousPopup, RadioButton as ExplousRadioButton, SlideToggle as ExplousSlideToggle, Snackbar as ExplousSnackbar, Table as ExplousTable}