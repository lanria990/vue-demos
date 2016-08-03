<template>
    <form class="form-inline" v-on:submit.prevent='onFormSubmit'>
        <div class="form-group">
            <label for='exclamationText'>Exclamation:</label>
            <input  class="form-control" placeholder="Enter exclamation here." v-model='exclamationText' id="exclamationText" />
        </div>
        <input type="submit" value="Add" class="btn btn-success">
    </form>
</template>

<script>
    export default {
        data() {
            return {
                exclamationText: '',
            };
        },
        props: ['onAdd'],
        methods: {
            onFormSubmit() {
                this.onAdd(this.exclamationText);
                this.exclamationText = '';
            },
        },
    };
</script>