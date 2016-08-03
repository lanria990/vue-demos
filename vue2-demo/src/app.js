import Vue from 'vue';
import ExclamationViewer from './exckamation_veiwer.vue';

new Vue({
    el:'#app-container',
    render(createElement){
        return createElement(ExclamationViewer);
    },
});

