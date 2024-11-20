<template>
    <div>
        <input type="file" name="file" id="file" @change="handleChangeFile" accept=".txt">
        <div class="viewer">
            <div class="content" v-html="text">
                
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'text-viewer',
    data: () => ({
        text: ''
    }),
    methods: {
        handleChangeFile(ev) {
            const { files } = ev.target
            const file = files[0]
            const fileReader = new FileReader();
            fileReader.onload = (fileLoad) => {
                this.text = fileLoad.target.result.replaceAll('\n', '<br />')
            }
            fileReader.readAsText(file)
        }
    }
};
</script>
<style>
.viewer {
    background-color: white;
    color:black;
    margin-top: 10px;
    max-height: 60vh;
    overflow-y: scroll;
    width: 100%;
}
.viewer .content {
    margin: 2px 5px;
}
</style>