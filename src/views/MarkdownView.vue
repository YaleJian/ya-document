<script setup lang="ts">
import YaMarkdown from '@/components/ya-markdown/ya-markdown.vue'
import {ref, onMounted} from "vue";
import axios from "axios";

const mdData = ref()
onMounted(() => {
    axios.get('testFiles/test.md').then(res => {
        mdData.value = res.data
    })
})

</script>
<template>
    <YaMarkdown :mdData="mdData"/>
</template>
<style scoped>

</style>