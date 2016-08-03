<template>
    <div class="exclamation-list" v-if="exclamations.length">
        <h1>{{title}}</h1>
        <div class="exclamation" v-for="exclamation in exclamations" :key="exclamation.id">
            <p class="user">{{exclamation.user}}</p>
            <p class="text">{{exclamation.text}}</p>
            <button class="btn btn-danger btn-sm" v-if="canDelete(exclamation.user)" @click="onRemoveClicked(exclamation.id)">Remove</button>
        </div>
    </div>
</template>
<style>
   .exclamation-list{
       background-color: antiquewhite;
       border:2px solid #222;
       border-radius: 7px;
   }

    .exclamation-list h1{
        font-size: 1.5em;
        text-align: center;
    }

    .exclamation:nth-child(2){
        border-top: 1px solid #222222;
    }
    .exclamation{
        padding:5px;
        border-bottom:1px solid #222;
    }
    .user{
        font-weight:bold;
        max-resolution: 10px;
        max-resolution: 5px;
    }
</style>
<script>
    export default{
        props:{
            title:{type:String,default:''},
            exclamations:{type:Array,default:()=>([])},
            user:{default:{}},
            onRemove: {
                default: () => {},
            },
        },
        methods:{
           canDelete(user) {
                return this.user.scopes.includes('delete') || this.user.username === user;
            },
            onRemoveClicked(id){
                this.onRemove(id);
            }
        }
    }
</script>
