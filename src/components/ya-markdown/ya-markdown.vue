<template>
    <div class="ya-markdown">
        <div class="content" v-html=htmlValue></div>
        <div class="inPageNav">
            <div v-for="n in inPageNavList" :key="n.key" :class="'item level-'+n.level">{{ n.value }}</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {marked} from "marked"
import {computed, onMounted} from "vue";

const props = defineProps({
    mdData: {
        type: String,
        default: ''
    }
})

const htmlValue = computed(() => marked(props.mdData))

//计算目录
const inPageNavList = computed(() => {
    let m = props.mdData.match(/#.*?\n/g) || [];
    return m.map((value: any, key: number) => {
        let titleTag = value.match(/#.*? /) || []
        let level = titleTag[0].length - 2
        return {key, value: value.replaceAll("#", '').slice(1), level}
    })
})

onMounted(() => {

})
</script>

<style lang="less">
.ya-markdown {
    position: relative;
    display: flex;


    .content {
        flex: 1;
        padding: 20px;
    }

    .inPageNav {

        display: inline-block;

        .item {
            cursor: pointer;
            padding: 6px 16px;
            background: #f9f9f9;
            border-radius: 8px;

            &:hover {
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
