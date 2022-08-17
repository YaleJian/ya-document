<template>
    <div class="ya-markdown">
        <div class="content" v-html=htmlValue></div>
        <div class="inPageNav">
            <div v-for="n in inPageNavList" :key="n.key" :class="'item level-'+n.level">{{ n.value }}</div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from "vue";
import {marked} from "marked"

const props = defineProps({
    mdData: {
        type: String,
        default: ''
    }
})
const mdData = ref(props.mdData)

const htmlValue = computed(() => {

    return marked(mdData.value)
})
const inPageNavList = computed(() => {
    let m = mdData.value.match(/#.*?\n/g);
    return m.map((value, key) => {
        return {key, value: value.replaceAll("#", '').slice(1), level: value.match(/#.*? /)[0].length - 2}
    })
})

onMounted(() => {

})
</script>

<style lang="less">
.ya-markdown {
    position: relative;
    display: flex;


    .content{
        flex: 1;
        padding: 20px;
    }
    .inPageNav {

        display: inline-block;

        .item{
            cursor: pointer;
            padding: 6px 16px;
            background: #f9f9f9;
            border-radius: 8px;
            &:hover{
                color: #03a9f4;
                background: #f7f9f8;
            }
        }

        @h-list: 1, 2, 3, 4, 5;
        each(@h-list, {
            .level-@{value} {
                padding-left: ~'@{value}em';
            }
        })
    }
}
</style>
