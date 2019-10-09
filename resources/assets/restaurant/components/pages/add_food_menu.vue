<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Add Food Menu" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
                            <!-- Main Part -->
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="name">Food Name</label>
                                                <input v-model="model.name" id="name" name="name" type="text"
                                                       required autofocus placeholder="Food Name" class="form-control"/>
                                                <field-messages name="name" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Food name is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="name">Price</label>
                                                <input v-model="model.price" id="price" name="price" type="number"
                                                       required autofocus placeholder="Food Price" class="form-control"/>
                                                <field-messages name="name" show="$invalid && $submitted"
                                                                class="text-danger">
                                                    <div slot="required">Food price is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Cook time</label>
                                            <input v-model="model.cook_time" name="cook_time" type="number"
                                                   autofocus placeholder="Cook Time" class="form-control"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="name">Sequence</label>
                                            <input v-model="model.sequence" name="sequence" type="number"
                                                   autofocus placeholder="Sequence" class="form-control"/>
                                        </div>
                                        <div class="form-group">
                                            <label>Min Qty</label>
                                            <input v-model="model.min_qty" name="min_qty" type="number"
                                                   autofocus placeholder="Sequence" class="form-control" step="1" min="1"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="description"> Food Description</label>
                                            <textarea v-model="model.description" name="description" id="description"
                                                      required placeholder="Brief description of Food" class="form-control" rows="8">
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="col-lg-12 col-12 mt-4">
                                        <div class="form-group">
                                            <label>Food Picture</label>
                                            <image-input :file="model.image" v-model="model.image"></image-input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Main Part-->

                            <div class="col-12 mt-4">
                                <b-card header="Category For Food" class="bg-primary-card food-size-holder" header-tag="h4">
                                    <multiselect v-model="model.category" :options="categories" :close-on-select="true" :clear-on-select="false" :hide-selected="true" placeholder="Pick Category For food"
                                                 track-by="name" label="name">
                                    </multiselect>
                                </b-card>
                            </div>
                            <!---->

                            <!--Size Option Part-->
                            <div class="col-12 mt-4">
                                <b-card header="Food Size Options" class="bg-primary-card food-size-holder" header-tag="h4">
                                    <multiselect v-model="model.selected_sizes" :options="menu_size" :multiple="true" :close-on-select="true" :clear-on-select="false" :hide-selected="true" placeholder="Pick Sizes For food"
                                                 track-by="name" label="name" @select="SizeSelected" @remove="SizeRemoved">
                                    </multiselect>
                                    <button class="btn btn-secondary" id="add-size-button" @click.prevent.stop="addNewSize">Add Size</button>

                                    <div class="food-quantity-option" v-for="(item,index) in model.selected_sizes">
                                        <b-card class="b-card-primary"  show-footer>
                                            <h6 slot="header" class="size-name">{{item.name}}<span class="remove-new-size"><i class="fas fa-close" @click="removeSize(item)"></i> </span></h6>
                                            <div class="form-group">
                                                <image-input :file="`${item.image}`" v-model="item.image"></image-input>
                                            </div>

                                            <div class="form-group quantity-option-input">
                                                <validate tag="div">
                                                    <label>Size Name</label>
                                                    <input v-model="item['name']" :name="`size_name-${index}`" type="text"
                                                           autofocus placeholder="Size Name" class="form-control" disabled/>
                                                    <field-messages :name="`size_name-${index}`" show="$invalid && $submitted"
                                                                    class="text-danger">
                                                        <div slot="required">Size Name is required</div>
                                                    </field-messages>
                                                </validate>
                                            </div>

                                            <div class="form-group quantity-option-input">
                                                <validate tag="div">
                                                    <label>Price</label>
                                                    <input v-model="item['price']" :name="`size_price-${index}`" type="number"
                                                           autofocus placeholder="Price for Size" class="form-control"/>
                                                    <field-messages :name="`size_price-${index}`" show="$invalid && $submitted"
                                                                    class="text-danger">
                                                        <div slot="required">Size Price is required</div>
                                                    </field-messages>
                                                </validate>
                                            </div>
                                        </b-card>
                                    </div>

                                    <!--Adding New Size Part-->
                                    <div class="food-quantity-option" v-for="(item,index) in model.new_sizes">
                                        <b-card class="b-card-primary"  show-footer>
                                            <h6 slot="header" class="size-name">{{item.name}}<span class="remove-new-size"><i class="fas fa-close" @click="removeNewSize(index)"></i> </span></h6>
                                            <div class="form-group">
                                                <image-input :file="item['image']" v-model="item['image']"></image-input>
                                            </div>

                                            <div class="form-group quantity-option-input">
                                                <validate tag="div">
                                                    <label>Size Name</label>
                                                    <input v-model="item['name']" :name="`new_size_name-${index}`" type="text"
                                                           required autofocus  placeholder="Enter New Size Name" class="form-control"/>
                                                    <field-messages :name="`new_size_name-${index}`" show="$invalid && $submitted"
                                                                    class="text-danger">
                                                        <div slot="required">Size Name is required</div>
                                                    </field-messages>
                                                </validate>
                                            </div>

                                            <div class="form-group quantity-option-input">
                                                <validate tag="div">
                                                    <label>Price</label>
                                                    <input v-model="item['price']" :name="`size_price-${index}`" type="number"
                                                           autofocus placeholder="Price for Size" class="form-control"/>
                                                    <field-messages :name="`size_price-${index}`" show="$invalid && $submitted"
                                                                    class="text-danger">
                                                        <div slot="required">Size Price is required</div>
                                                    </field-messages>
                                                </validate>
                                            </div>
                                        </b-card>
                                    </div>
                                    <div class="clearfix"></div>

                                </b-card>
                            </div>
                            <!--End Size Option parr-->

                            <!--Food Option  Part-->
                            <div class="col-12 mt-4">
                                <b-card class="food-option-holder bg-primary-card" header="Food Options" header-tag="h4">
                                    <multiselect v-model="model.selected_options" :options="option_tags" :multiple="true" :close-on-select="true" :clear-on-select="false" :hide-selected="true" placeholder="Pick Options For food"
                                                 track-by="title" label="title">
                                    </multiselect>
                                    <button class="btn btn-secondary add-new-option" @click.prevent.stop="addNewOption" >Add New Option</button>
                                    <div class="clearfix"></div>

                                    <v-collapse-group :onlyOneActive="true">
                                        <!-- Selected Existing Options -->
                                        <div class="food-option" v-for="(option_tag,index) in model.selected_options">
                                            <v-collapse-wrapper :active="true">
                                                <div class="header" v-collapse-toggle>
                                                    <h5 class="option-title">{{option_tag.title}}<span class="option-close" @click.prevent.stop="unselectOption(index)"><i class="fas fa-close"></i></span></h5>
                                                </div>
                                                <div class="my-content" v-collapse-content>
                                                        <div class="col-lg-12">
                                                            <div class="form-group">
                                                                <label style="display:block"><strong>Selectable Item Numbers</strong></label>
                                                                <div class="row" style="margin-left:0">
                                                                    <div class="form-group">
                                                                        <validate tag="div">
                                                                            <label>At Least</label>
                                                                            <input v-model="option_tag.min"  name="min" type="number"
                                                                                   required autofocus placeholder="0" class="form-control"/>
                                                                            <field-messages name="min" show="$invalid && $submitted"
                                                                                            class="text-danger">
                                                                                <div slot="required">Minimum Number is required</div>
                                                                            </field-messages>
                                                                        </validate>
                                                                    </div>
                                                                    <div class="form-group" style="margin-left:15px">
                                                                        <label>Upto</label>
                                                                        <input v-model="option_tag.max" name="max" type="number" autofocus placeholder="No Limit" class="form-control"/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <!-- Selected Sizes in option tag -->
                                                            <div class="form-group">
                                                                <label style="display:block" v-if="option_tag.selected_sizes.length>0 || model.new_sizes.length>0"><strong>Alternative Item Numbers Due to Size</strong></label>
                                                                <div class="form-group" v-for="item in option_tag.selected_sizes" style="margin-left:20px">
                                                                    <b-form-checkbox class="primarycheck" v-model="item.enabled">{{item.name}}</b-form-checkbox>
                                                                    <div class="row" style="margin-left:30px">
                                                                        <div class="form-group">
                                                                            <label>At Least</label>
                                                                            <input v-model="item.min" type="number"
                                                                                   autofocus placeholder="0" class="form-control"  :disabled="!item.enabled"/>
                                                                        </div>
                                                                        <div class="form-group" style="margin-left:15px">
                                                                            <label>Upto</label>
                                                                            <input v-model="item.max" type="number" autofocus placeholder="No Limit" class="form-control" :disabled="!item.enabled"/>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!--New Sizes in option  tag-->
                                                                <div class="form-group" v-for="(item,new_size_index) in model.new_sizes" style="margin-left:20px">
                                                                    <b-form-checkbox class="primarycheck" v-model="option_tag.new_sizes[new_size_index].enabled">{{item.name}}</b-form-checkbox>
                                                                    <div class="row" style="margin-left:30px">
                                                                        <div class="form-group">
                                                                            <label>At Least</label>
                                                                            <input v-model="option_tag.new_sizes[new_size_index].min" type="number"
                                                                                   autofocus placeholder="0" class="form-control"  :disabled="!option_tag.new_sizes[new_size_index].enabled"/>
                                                                        </div>
                                                                        <div class="form-group" style="margin-left:15px">
                                                                            <label>Upto</label>
                                                                            <input v-model="option_tag.new_sizes[new_size_index].max" type="number" autofocus placeholder="No Limit" class="form-control" :disabled="!option_tag.new_sizes[new_size_index].enabled"/>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <!--Option Items-->
                                                        <div class="option-item-holder">
                                                            <h3 class="option-item-header-title">Option Items</h3>
                                                            <button class="btn btn-secondary add-new-option-item"  @click.prevent.stop="addNewItem(option_tag)">Add Item</button>
                                                            <div class="clearfix"></div>
                                                            <!-- Selected Item -->
                                                            <div v-for="(option_item,index2) in option_tag.option_items">
                                                                <b-card show-footer class="option-item">
                                                                    <h6 slot="header" class="option-item-name">{{option_item.name}}</h6>
                                                                    <div class="col-lg-12">
                                                                        <div class="row">
                                                                            <div class="form-group" style="margin-top:10px;">
                                                                                <label style="width:100%">Use this Item ?</label>
                                                                                <toggle-button v-model="option_item.is_enabled" :labels="{checked: 'Yes', unchecked: 'No'}" :sync="true" :color="{checked: '#09BD8F', unchecked: '#dc6460'}" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label>Name</label>
                                                                        <input type="text" v-model="option_item.name" disabled>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label>Price</label>
                                                                        <input type="number" v-model="option_item.price" :disabled="!option_item.is_enabled">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label>Upto</label>
                                                                        <input type="number" v-model="option_item.max" :disabled="!option_item.is_enabled" placeholder="No Limit">
                                                                    </div>
                                                                </b-card>
                                                            </div>
                                                            <!-- End Selected Item -->

                                                            <!-- New added Item -->
                                                            <div v-for="(new_item,new_item_index) in option_tag.new_items">
                                                                <b-card show-footer class="option-item">
                                                                    <h6 slot="header" class="option-item-name">{{new_item.name}}<span class="new-option-item-close" @click.prevent.stop="removeNewOptionItem(option_tag,new_item_index)"><i class="fas fa-close"></i></span></h6>
                                                                    <div class="col-lg-12">
                                                                        <div class="row">
                                                                            <div class="form-group" style="margin-top:10px;">
                                                                                <label style="width:100%">Use this Item ?</label>
                                                                                <toggle-button v-model="new_item.is_enabled" :labels="{checked: 'Yes', unchecked: 'No'}" :sync="true" :color="{checked: '#09BD8F', unchecked: '#dc6460'}" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <validate tag="div">
                                                                            <label>Name</label>
                                                                            <input type="text" v-model="new_item.name" :disabled="!new_item.is_enabled" placeholder="Enter Item Name" required autofocus :name="`new-item-${new_item_index}`">
                                                                            <field-messages :name="`new-item-${index}-${new_item_index}`" show="$invalid && $submitted"
                                                                                            class="text-danger">
                                                                                <div slot="required">Item Name is required</div>
                                                                            </field-messages>
                                                                        </validate>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label>Price</label>
                                                                        <input type="number" v-model="new_item.price" :disabled="!new_item.is_enabled">
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label>Upto</label>
                                                                        <input type="number" v-model="new_item.max" :disabled="!new_item.is_enabled" placeholder="No Limit">
                                                                    </div>
                                                                </b-card>
                                                            </div>
                                                            <!-- End New Added Item -->
                                                        </div>

                                                </div>

                                            </v-collapse-wrapper>
                                        </div>
                                        <!-- End selected existing options-->


                                        <!-- Food New Option Part -->
                                        <div class="food-option" v-for="(option_tag,index) in model.new_options">
                                            <v-collapse-wrapper :active="true">
                                                <div class="header" v-collapse-toggle>
                                                    <h5 class="option-title">{{option_tag.title}}<span class="new-option-span">(new)</span><span class="option-close" @click.prevent.stop="removeNewOption(index)"><i class="fas fa-close"></i></span></h5>
                                                </div>
                                                <div class="my-content" v-collapse-content>
                                                    <div class="col-lg-12">
                                                        <div class="form-group new-option-title-input">
                                                            <validate tag="div">
                                                                <label>Option Title</label>
                                                                <input v-model="option_tag.title"  :name="`option-new-title-${index}`" type="text"
                                                                       required autofocus placeholder="Enter option title" class="form-control"/>
                                                                <field-messages :name="`option-new-title-${index}`" show="$invalid && $submitted"
                                                                                class="text-danger">
                                                                    <div slot="required">Option Title is required</div>
                                                                </field-messages>
                                                            </validate>

                                                        </div>
                                                        <div class="form-group">
                                                            <label style="display:block"><strong>Selectable Item Numbers</strong></label>
                                                            <div class="row" style="margin-left:0">
                                                                <div class="form-group">
                                                                    <validate tag="div">
                                                                        <label>At Least</label>
                                                                        <input v-model="option_tag.min"  name="min" type="number"
                                                                               required autofocus placeholder="0" class="form-control"/>
                                                                        <field-messages name="min" show="$invalid && $submitted"
                                                                                        class="text-danger">
                                                                            <div slot="required">Minimum Number is required</div>
                                                                        </field-messages>
                                                                    </validate>
                                                                </div>
                                                                <div class="form-group" style="margin-left:15px">
                                                                    <label>Upto</label>
                                                                    <input v-model="option_tag.max"  name="max" type="number" autofocus placeholder="No Limit" class="form-control"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="form-group">
                                                            <label style="display:block" v-if="option_tag.selected_sizes.length>0 || model.new_sizes.length>0"><strong>Alternative Item Numbers Due to Size</strong></label>
                                                            <div class="form-group" v-for="(item,index) in option_tag.selected_sizes" style="margin-left:20px">
                                                                <b-form-checkbox class="primarycheck" v-model="item.enabled">{{item.name}}</b-form-checkbox>
                                                                <div class="row" style="margin-left:30px">
                                                                    <div class="form-group">
                                                                        <label>At Least</label>
                                                                        <input v-model="item.min" type="number"
                                                                               autofocus placeholder="0" class="form-control"  :disabled="!item.enabled"/>
                                                                    </div>
                                                                    <div class="form-group" style="margin-left:15px">
                                                                        <label>Upto</label>
                                                                        <input v-model="item.max" type="number" autofocus placeholder="No Limit" class="form-control" :disabled="!item.enabled"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <!--New Sizes in option  tag-->
                                                            <div class="form-group" v-for="(item,new_size_index) in model.new_sizes" style="margin-left:20px">
                                                                <b-form-checkbox class="primarycheck" v-model="option_tag.new_sizes[new_size_index].enabled">{{item.name}}</b-form-checkbox>
                                                                <div class="row" style="margin-left:30px">
                                                                    <div class="form-group">
                                                                        <label>At Least</label>
                                                                        <input v-model="option_tag.new_sizes[new_size_index].min" type="number"
                                                                               autofocus placeholder="0" class="form-control"  :disabled="!option_tag.new_sizes[new_size_index].enabled"/>
                                                                    </div>
                                                                    <div class="form-group" style="margin-left:15px">
                                                                        <label>Upto</label>
                                                                        <input v-model="option_tag.new_sizes[new_size_index].max" type="number" autofocus placeholder="No Limit" class="form-control" :disabled="!option_tag.new_sizes[new_size_index].enabled"/>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>



                                                    <!--Option Items-->
                                                    <div class="option-item-holder">
                                                        <h3 class="option-item-header-title">Option Items</h3>
                                                        <button class="btn btn-secondary add-new-option-item" @click.prevent.stop="addNewItem(option_tag)">Add Item</button>
                                                        <div class="clearfix"></div>
                                                        <div v-for="(option_item,index2) in option_tag.new_items">
                                                            <b-card show-footer class="option-item">
                                                                <h6 slot="header" class="option-item-name">{{option_item.name}}<span class="new-option-item-close" @click.prevent.stop="removeNewOptionItem(option_tag,index2)"><i class="fas fa-close"></i></span></h6>
                                                                <div class="col-lg-12">
                                                                    <div class="row">
                                                                        <div class="form-group" style="margin-top:10px;">
                                                                            <label style="width:100%">Use this Item ?</label>
                                                                            <toggle-button v-model="option_item.is_enabled" :labels="{checked: 'Yes', unchecked: 'No'}" :sync="true" :color="{checked: '#09BD8F', unchecked: '#dc6460'}" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="form-group">
                                                                    <validate tag="div">
                                                                        <label>Name</label>
                                                                        <input type="text" :name="`new-option-tag-item-name-${index}-${index2}`" v-model="option_item.name" :disabled="!option_item.is_enabled" autofocus required>
                                                                        <field-messages :name="`new-option-tag-item-name-${index}-${index2}`" show="$invalid && $submitted"
                                                                                        class="text-danger">
                                                                            <div slot="required">Item Name is required</div>
                                                                        </field-messages>
                                                                    </validate>
                                                                </div>
                                                                <div class="form-group">
                                                                    <label>Price</label>
                                                                    <input type="number" v-model="option_item.price" :disabled="!option_item.is_enabled">
                                                                </div>
                                                                <div class="form-group">
                                                                    <label>Upto</label>
                                                                    <input type="number" v-model="option_item.max" :disabled="!option_item.is_enabled" placeholder="No Limit">
                                                                </div>
                                                            </b-card>
                                                        </div>
                                                    </div>
                                                </div>
                                            </v-collapse-wrapper>

                                        </div>
                                        <!--End Food Option Part-->
                                    </v-collapse-group>
                                    <div class="clearfix"></div>
                                </b-card>
                            </div>


                            <div class="row">
                                <div class="col-sm-12" v-show="show_error">
                                    <ul>
                                        <li v-for="error in validationErrors" class="text-danger">{{error[0]}}</li>
                                    </ul>
                                </div>
                                <div class="col-sm-12" v-show="show_success">
                                    <ul>
                                        <li class="text-success">Food Menu added successfully</li>
                                    </ul>
                                </div>

                                <div class="col-lg-12">
                                    <div class="col-md-offset-4 col-md-8 m-t-25">
                                        <button type="submit" class="btn btn-primary">Submit
                                        </button>
                                        <button type="reset" class="btn btn-effect-ripple btn-secondary  reset_btn1"
                                                @click="form_reset">
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import VueForm from "vue-form";
    import options from "restaurant_src/validations/validations";
    import ApiService from "restaurant_resources/common/api.service";
    import AdminApiService from "common/api.service";
    import Multiselect from 'vue-multiselect';
    import VueCollapse from 'vue2-collapse';

    // My own made elements.
    import ImageInput from 'restaurant_pages/ImageInput';

    require("checkbox.css/dist/css/checkbox.min.css");
    require("radiobox.css/dist/css/radiobox.min.css");
    require("vue-multiselect/dist/vue-multiselect.min.css");

    Vue.use(VueForm, options);
    export default {
        name: "add_user",
        data() {
            return {
                formstate: {},
                model: {
                    name: "",
                    description: "",
                    image:"",
                    price:0,
                    cook_time:0,
                    selected_options:[],
                    selected_sizes:[],
                    new_sizes:[],
                    new_options:[],
                    menu_id:"",
                    category:{},
                    min_qty:1,
                    sequence:null
                },
                option_tags:[],
                menu_size:[],
                show_error:false,
                show_success:false,
                validationErrors:[],
                categories:[],
                restaurant_id:0,
                api_service:ApiService
            }
        },

        methods: {
            SizeSelected(size){
                let size_id=size.id;
                let size_name=size.name;
                for(let i=0;i<this.model.selected_options.length;i++){
                    this.addSelectedSizeToOption(this.model.selected_options[i],size_id,size_name);
                }
                for(let i=0;i<this.option_tags.length;i++){
                    this.addSelectedSizeToOption(this.option_tags[i],size_id,size_name);
                }
                for (let i=0;i<this.model.new_options.length;i++){
                    this.addSelectedSizeToOption(this.model.new_options[i],size_id,size_name);
                }
            },
            SizeRemoved(size){
                let size_id=size.id;
                for(let i=0;i<this.model.selected_options.length;i++){
                    this.deleteSelectedSizeToOption(this.model.selected_options[i],size_id);
                }
                for(let i=0;i<this.option_tags.length;i++){
                    this.deleteSelectedSizeToOption(this.option_tags[i],size_id);
                }
                for(let i=0;i<this.model.new_options.length;i++){
                    this.deleteSelectedSizeToOption(this.model.new_options[i],size_id);
                }

            },
            removeSize(size){
                let size_id=size.id;
                for(let i=0;i<this.model.selected_options.length;i++){
                    this.deleteSelectedSizeToOption(this.model.selected_options[i],size_id);
                }
                for(let i=0;i<this.option_tags.length;i++){
                    this.deleteSelectedSizeToOption(this.option_tags[i],size_id);
                }
                for(let i=0;i<this.model.new_options.length;i++){
                    this.deleteSelectedSizeToOption(this.model.new_options[i],size_id);
                }
                for (let i=0;i<this.model.selected_sizes.length;i++){
                    if (this.model.selected_sizes[i].id==size_id){
                        this.model.selected_sizes.splice(i,1);
                    }
                }
            },
            addSelectedSizeToOption(option_tag,size_id,size_name){
                let temp={};
                temp.id=size_id;
                temp.min=0;
                temp.max=null;
                temp.enabled=false;
                temp.name=size_name;
                let size_min_max=option_tag.size_min_max;
                for (let i=0;i<size_min_max.length;i++){
                    if (size_min_max[i].size_id==size_id){
                        temp.enabled=true;
                        temp.min=size_min_max[i]['min'];
                        temp.max=size_min_max[i]['max'];
                        break;
                    }
                }
                option_tag.selected_sizes.push(temp);
            },
            deleteSelectedSizeToOption(option_tag,size_id){
                for (let i=0;i<option_tag.selected_sizes.length;i++){
                    if (option_tag.selected_sizes[i].id==size_id)
                    {
                        option_tag.selected_sizes.splice(i,1);
                        break;
                    }
                }
            },
            addNewSize(){
                let temp={};
                temp.image="";
                temp.name="";
                temp.price=null;
                this.model.new_sizes.push(temp);

                temp={};
                temp.enabled=false;
                temp.min=0;
                temp.max=null;

                for (let i=0;i<this.model.selected_options.length;i++){
                    this.model.selected_options[i]['new_sizes'].push(temp);
                }
                for (let i=0;i<this.option_tags.length;i++)
                    this.option_tags[i]['new_sizes'].push(temp);
                for (let i=0;i<this.model.new_options.length;i++){
                    this.model.new_options[i]['new_sizes'].push(temp);
                }
            },
            removeNewSize(index){
                this.model.new_sizes.splice(index,1);
                for (let i=0;i<this.model.selected_options.length;i++){
                    if (this.model.selected_options[i]['new_sizes'][index])
                        this.model.selected_options[i]['new_sizes'].splice(index,1);
                }
                for (let i=0;i<this.option_tags.length;i++)
                {
                    if (this.option_tags[i]['new_sizes'][index])
                        this.option_tags[i]['new_sizes'].splice(index,1);
                }
                for (let i=0;i<this.model.new_options.length;i++){
                    this.model.new_options[i]['new_sizes'].splice(index,1);
                }
            },
            unselectOption(index){
                this.model.selected_options.splice(index,1);
            },
            removeNewOptionItem(option_tag,new_item_index){
                option_tag.new_items.splice(new_item_index,1);
            },
            removeNewOption(index){
                this.model.new_options.splice(index,1);
            },
            addNewItem(option_tag){
                let temp={};
                temp.is_enabled=true;
                temp.max=null;
                temp.name="";
                temp.price=0;
                option_tag.new_items.push(temp);
            },
            addNewOption(){
                let temp={};
                temp.min=0;
                temp.max=null;
                temp.title="";
                temp.selected_sizes=[];
                temp.new_sizes=[];
                temp.size_min_max=[];
                temp.new_items=[];
                for (let i=0;i<this.model.selected_sizes.length;i++){
                    let selected_size_temp={};
                    selected_size_temp.id=this.model.selected_sizes[i].id;
                    selected_size_temp.size_name=this.model.selected_sizes[i].name;
                    selected_size_temp.min=0;
                    selected_size_temp.max=null;
                    selected_size_temp.enabled=false;
                    temp.selected_sizes.push(selected_size_temp);
                }
                for (let i=0;i<this.model.new_sizes.length;i++){
                    let new_size_temp={};
                    new_size_temp.min=0;
                    new_size_temp.max=null;
                    new_size_temp.enabled=false;
                    temp.new_sizes.push(new_size_temp);
                }
                this.model.new_options.push(temp);
            },

            onSubmit: function () {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    let api_service=this.api_service;
                    let restaurant_id=this.restaurant_id;
                    let add_restaurant_id=restaurant_id!=0 ? "/"+this.restaurant_id : '';
                    api_service.post('restaurant/add_menu'+add_restaurant_id, this.model)
                        .then(data => {
                            if (!data.data.error) {  // if category added
                                this.show_error = false;
                                this.show_success = true;
                            } else {
                                this.validationErrors = data.data.error;
                                this.show_error = true;
                                this.show_success = false;
                                throw new Error('handled');
                            }
                        },error=>{
                            console.log(error.response);
                            throw new Error('handled');
                            }
                        )
                        .then(() => {
                            setTimeout(() => {
                                this.$router.push("/menu_list"+add_restaurant_id)
                            }, 100);
                        })
                        .catch(error => {

                        })
                }
            },
            form_reset() {
                this.model = {
                    name: "",
                    description: "",
                    price: 0,
                    sequence:null
                };
            },
        },
        components: {
            ImageInput:ImageInput,
            Multiselect
        },
        beforeMount() {
            var add_restaurant_id='';
            let api_service=ApiService;
            if(this.$route.params.restaurant_id)
            {
                this.restaurant_id=this.$route.params.restaurant_id;
                add_restaurant_id="/"+this.restaurant_id;
                api_service=AdminApiService;
            }
            this.api_service=api_service;
            if (!this.$route.params.menu_id){ // For adding menu
                api_service.get('restaurant/get_information_for_create_menu'+add_restaurant_id)
                    .then(response => {
                        let data=response.data;
                        this.option_tags=data.option_tags;
                        this.menu_size=data.size;
                        this.categories=data.categories;
                        this.model.sequence=data.max_sequence;
                    })
            }
            else{
                this.model.menu_id=this.$route.params.menu_id;
                api_service.get(`restaurant/get_menu/${this.model.menu_id}}`)
                    .then(response => {
                            let data=response.data;
                            this.option_tags=data.option_tags;
                            this.menu_size=data.size;
                            this.model.name=data.menu.name;
                            this.model.price=data.menu.price;
                            this.model.description=data.menu.description;
                            this.model.cook_time=data.menu.cook_time;
                            this.model.image=data.menu.image;
                            this.model.selected_sizes=data.selected_size;
                            this.model.selected_options=data.selected_options;
                            this.model.sequence=data.menu.sequence;
                            this.model.min_qty=data.menu.min_qty;
                            this.model.category=data.selected_category;
                            this.categories=data.categories;
                            let that = this;
                            this.model.selected_sizes.forEach(function (item) {
                                that.$set(item,'image',item.image);
                            })
                        },
                        data => {
                            console.log(data.response);
                        }
                    )
            }
        },
    }
</script>
<style scoped>
    .dropzone_wrapper {
        width: 100%;
    }

    .align-left {
        float: left;
    }

    .align-right {
        float: right;
    }
    .food-quantity-option{
        float:left;
        margin-right:20px;
    }
    toggle-button{
        margin-top:5px;
    }
    .quantity-option-input{
        margin-top:5px;
        max-width:200px;
    }

    .size-name{
        margin-bottom:0;
    }

    .option-item-holder{

    }

    .option-item{
        width:250px;
        float:left;
        margin-right:20px;
        margin-bottom:20px;
    }

    .option-item-header-title{
        margin-top:20px;
    }

    .option-item-name{
        font-weight:bold;
        margin-bottom:0;
    }

    #add-size-button{
        display:block;
        float:right;
        margin-bottom:20px;
    }
    h6.size-name{
        min-height:16px;
    }
    .remove-new-size{
        float:right;
        cursor:pointer;
        font-size:18px;
    }
    .food-quantity-option .card{
        border:1px solid #666;
    }
    .food-size-holder,.food-option-holder{
        border:2px solid #596bc3;

    }
    .food-quantity-option .card .card-header{
        background:#e1e1e1;
    }
    .food-option-card{
        border: 1px solid #868080;
    }
    .food-option-card .card-header{
        background:#efe4e4;;
        min-height:40px;
    }
    .food-option-card .card-header h5{
        margin-bottom:0;
    }

    .food-option {
        padding: 10px;
        padding-bottom:0;
    }

    .food-option .header.v-collapse-toggler {
        background: #efe4e4;
        margin-bottom: 0;
        padding: 10px 15px;
        border: 1px solid #aaa;
        border-radius: 5px 5px 0 0;
    }

    h5.option-title {
        margin-bottom: 0;
        min-height:19px;
    }
    span.new-option-span {
        margin-left: 5px;
        color: #c77a17;
    }



    .option-close{
        float:right;
        cursor:pointer;
    }

    .option-item{
        border: 1px solid #636a80;
    }
    .option-item .card-header{
        background: #e1e1e1;
        min-height:35.5px;
    }
    .option-item label {
        width: 45px;
    }
    .add-new-option-item{
        float:right;
        display:block;
        margin-bottom:20px;
    }
    span.new-option-item-close {
        float: right;
        font-size: 18px;
        margin-top: -2px;
        margin-bottom: -2px;
        cursor: pointer;
    }
    .add-new-option{
        float:right;
        margin-bottom:20px;
    }
</style>

<style>
    .custom-control-label::before {
        width: 1.5rem;
        height: 1.5rem;
        top: 0rem;
    }
    .custom-control-label::after {
        width: 1.5rem;
        height: 1.5rem;
        top: 0rem;
    }
    .multiselect {
        margin-bottom: 20px;
    }

    /*Collapse Part*/
    .v-collapse-content {
        max-height: 0;
        transition: max-height 0.3s ease-out;
        overflow: hidden;
        padding: 0;
    }
    .v-collapse-content-end {
        transition: max-height 0.3s ease-in;
        max-height: none;
    }
    .food-option .v-collapse-content-end {
        border: 1px solid #555;
        border-top: none;
        padding: 20px;
        padding-bottom:0;
    }

</style>
