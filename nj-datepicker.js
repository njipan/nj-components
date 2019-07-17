var njDatepicker = Vue.component('nj-datepicker', {
    props : ['name','fieldName'],
    template : `
        <span class="custom-datepicker">
            <input type="text" class="datepicker" :name="name" :data-field="fieldName" @blur="onWatch" ref="datepicker">
            <span class="icon-area"></span>
        </span>
    `,
    methods : {
        onWatch : function(e){
            var _self = this;
            setTimeout(function(){
                const value = _self.$refs.datepicker.value;
                _self.$emit('input', value);    
            }, 100);
        }
    },
    created : function(){
        setTimeout(bindDatepicker, 200);
    }
});