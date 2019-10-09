<template>
    <div
        class="base-image-input"
        :style="{ 'background-image': `url('${backgroundImage}')` }"
        @click="chooseImage"
    >
    <span
        v-if="!backgroundImage"
        class="placeholder"
    >
      Choose an Image
    </span>
        <input
            class="file-input"
            ref="fileInput"
            type="file"
            @input="onSelectFile"
        >
    </div>
</template>
<script>
    export default {
        name: "ImageInput",
        props: ['file'],
        components: {},
        computed:{
            backgroundImage(){
                let result=null;
                if (this.file && !this.imageData)
                    result=this.file;
                if (this.imageData)
                    result=this.imageData;
                return result;
            }

        },
        data() {
            return {
                imageData: null,
            }
        },
        methods: {
            chooseImage() {
                this.$refs.fileInput.click()
            },
            onSelectFile (){
                const input = this.$refs.fileInput
                const files = input.files
                if (files && files[0]) {
                    const reader = new FileReader
                    reader.onload = e => {
                        this.imageData = e.target.result;
                        this.$emit('input', this.imageData)
                    }
                    reader.readAsDataURL(files[0])
                }
            }
        },

        watch:{
            // file:function(value){
            //     this.imageData = value;
            //     console.log(value);
            // }
        }
    }
</script>
<style scoped>
    .base-image-input {
        display: block;
        width: 200px;
        height: 200px;
        cursor: pointer;
        background-size: 100% 100%;
        background-position: center center;
    }
    .placeholder {
        background: #F0F0F0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #333;
        font-size: 18px;
        font-family: Helvetica;
    }
    .placeholder:hover {
        background: #E0E0E0;
    }
    .file-input {
        display: none;
    }
</style>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->

