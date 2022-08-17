<template>
    <yaMarkdown :mdData="mdData"></yaMarkdown>
</template>

<script>
import yaMarkdown from './components/ya-markdown/ya-markdown'
export default {
    name: "App",
    components:{
        yaMarkdown
    },
    data(){
        return {
            mdData: '# mdtest\n' +
                '## 第一个目录\n' +
                '这里是第一级别的目录测试文字\n' +
                '### 二级目录\n' +
                '#### 三级目录\n' +
                '**这里是第二级别的目录测试文字**\n' +
                '* * *\n' +
                '这里通常是引用\n' +
                '* * *\n' +
                '##### 四级目录\n' +
                '*这里是第二级别的目录测试文字*\n' +
                '##### 五级目录\n' +
                '- [ ] List item 1\n' +
                ' - [x] List item 2\n' +
                ' - [ ]  List item 3\n' +
                '1. List item 1\n' +
                '2. List item 2\n' +
                '2.1 List item 2.1\n' +
                '2.1 List item 2.2\n' +
                '\n' +
                '- List item\n' +
                '  - List item\n' +
                '  - List item\n' +
                '\n' +
                '## 第二个目录\n' +
                '`\n' +
                '{a:1,\n' +
                'b:2}\n' +
                '`\n' +
                '## 第三个目录\n' +
                '\n' +
                '![vulkan-1.dll](https://pics0.baidu.com/feed/0ff41bd5ad6eddc49b0e4e404d077cfa50663380.jpeg?token=a369c5afb4356baf7c521ae972f7e983&s=19C3336E2D621719085AD210020050C9)\n' +
                '[vulkan-1.dll](https://pics0.baidu.com/feed/0ff41bd5ad6eddc49b0e4e404d077cfa50663380.jpeg?token=a369c5afb4356baf7c521ae972f7e983&s=19C3336E2D621719085AD210020050C9)\n' +
                '\n' +
                '## 第四个目录\n' +
                '## 第五个目录'
        }
    }
}
</script>

<style scoped>

</style>