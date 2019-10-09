<template>
    <div class="listbrdr">
        <router-link :to="link" exact :class="calcActiveClass()">
            <i class="leftmenu_icon" :class="icon"></i>
            <span class="name"><slot></slot></span>
        </router-link>
    </div>
</template>
<script>
export default {
    props: ["link", "icon"],
    methods:{
        calcActiveClass(){
            let class_name='menu-item ';
            let this_link=this.link.replace('/','');
            class_name+=this_link;
            let path=this.$route.path;
            if (this.link.includes('list')){
                if (path.includes('edit_')){
                    let path_array=path.split('/');
                    let edit_path=path_array[path_array.length-2];
                    let link_name=edit_path.split('_');
                    let link_name_object=link_name[link_name.length-1];
                    if (link_name_object+'_list'==this_link)
                        class_name+=' active';
                }
            }
            return class_name;
        }
    }
}
</script>
<style scoped lang="scss">
@import "../../../css/customvariables";
a {
    color: $menu_color;
    position: relative;
    display: block;
    line-height: 21px;
    padding: 10px 30px;
    &:hover {
        color: $menu_hover_color;
    }
    &.active {
        color: $menu_active_color;
        background-color: $menu_active;
        i {
            color: $active_icon;
        }
    }
}

  /*.submenu-content-box .listbrdr::after{
      content: "";
     display: block;
     position: absolute;
     width: 11px;
     left: 25px;
     margin-top: -21px;
     border-top: 2px solid #888585;
     }*/

.submenu-content-box .listbrdr:active{
    color: #000;
}
.submenu-content {
    a {
        padding: 11px 20px 10px 45px;
        position: relative;  
    }
    .leftmenu_icon {
        font-size: 14px;
        color:inherit;
         
    }
}

.name {
    vertical-align: text-bottom;
}

.collapse-item .card-content .card-content-box div a {
    padding-left: 43px;

}

.leftmenu_icon {
    margin-right: 1px;
    line-height: 22px;
    height: 23px;
    width: 20px;
    text-align: center;
    font-size: 16px;
    color:$menu_color;


}
</style>
