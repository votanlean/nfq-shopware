(this.webpackJsonp=this.webpackJsonp||[]).push([["swag-brand"],{"1EOH":function(e){e.exports=JSON.parse('{"swag-brand":{"general":{"mainMenuItemGeneral":"Brands","descriptionTextModule":"Manage brands here","placeholderSearchBar":"Search brands..."},"list":{"addButtonText":"Add brand","columnName":"Brand","columnLink":"Website Url"},"detail":{"nameLabel":"Name","cancelButtonText":"Cancel","saveButtonText":"Save","errorTitle":"Error saving the brand","textHeadline":"New brand","textMediaSelection":"Media selection","buttonCancel":"Cancel","buttonSave":"Save","labelName":"Name","labelDescription":"Description","labelLink":"Website","placeholderName":"Enter brand name...","placeholderDescription":"Enter description...","placeholderLink":"Enter brand website...","messageSaveSuccess":"Brand \\"{name}\\" has been saved.","labelLogo":"Logo","labelUseAsLogo":"Use as Logo"}}}')},"5+Dv":function(e,a){const{Component:n}=Shopware;n.extend("swag-brand-create","swag-brand-detail",{methods:{getBrand(){this.brand=this.repository.create(Shopware.Context.api)},onClickSave(){this.isLoading=!0,this.repository.save(this.brand,Shopware.Context.api).then((()=>{this.isLoading=!1,this.$router.push({name:"swag.brand.detail",params:{id:this.brand.id}})})).catch((e=>{this.isLoading=!1,this.createNotificationError({title:this.$t("swag-brand.detail.errorTitle"),message:e})}))}}})},E7fg:function(e){e.exports=JSON.parse('{"swag-brand":{"general":{"mainMenuItemGeneral":"Brands","descriptionTextModule":"Manage brands here","placeholderSearchBar":"Search brands..."},"list":{"addButtonText":"Add brand","columnName":"Brand","columnLink":"Website Url"},"detail":{"nameLabel":"Name","cancelButtonText":"Cancel","saveButtonText":"Save","errorTitle":"Error saving the brand","textHeadline":"New brand","textMediaSelection":"Media selection","buttonCancel":"Cancel","buttonSave":"Save","labelName":"Name","labelDescription":"Description","labelLink":"Website","placeholderName":"Enter brand name...","placeholderDescription":"Enter description...","placeholderLink":"Enter brand website...","messageSaveSuccess":"Brand \\"{name}\\" has been saved.","labelLogo":"Logo","labelUseAsLogo":"Use as Logo"}}}')},LAHF:function(e,a){e.exports='{% block swag_brand_list %}\n    <sw-page class="swag-brand-list">\n        {% block swag_brand_list_smart_bar_actions %}\n            <template slot="smart-bar-actions">\n                <sw-button variant="primary" :routerLink="{ name: \'swag.brand.create\' }">\n                    {{ $t(\'swag-brand.list.addButtonText\') }}\n                </sw-button>\n            </template>\n        {% endblock %}\n\n        <template slot="content">\n            {% block swag_brand_list_content %}\n                <sw-entity-listing\n                    v-if="brands"\n                    :items="brands"\n                    :repository="repository"\n                    :showSelection="false"\n                    :columns="columns"\n                    :isLoading="isLoading"\n                    detailRoute="swag.brand.detail"\n                    :criteriaLimit="limit"\n                    :sortBy="sortBy"\n                    :sortDirection="sortDirection"\n                >\n                </sw-entity-listing>\n            {% endblock %}\n\n            {% block swag_brand_list_grid_loader %}\n                <sw-loader v-if="isLoading"></sw-loader>\n            {% endblock %}\n        </template>\n    </sw-page>\n{% endblock %}\n'},TFx8:function(e,a){e.exports='{% block swag_brand_detail %}\n    <sw-page class="swag-brand-detail">\n\n        {% block swag_brand_detaill_header %}\n            <template #smart-bar-header>\n                <h2>{{ placeholder(brand, \'name\', $tc(\'swag-brand.detail.textHeadline\')) }}</h2>\n            </template>\n        {% endblock %}\n\n        {% block swag_brand_detail_actions %}\n            <template #smart-bar-actions>\n\n                {% block swag_brand_detail_actions_abort %}\n                    <sw-button :disabled="brandIsLoading" @click="onCancel">\n                        {{ $tc(\'swag-brand.detail.buttonCancel\') }}\n                    </sw-button>\n                {% endblock %}\n\n                {% block swag_brand_detail_actions_save %}\n                    <sw-button-process\n                        class="swag-brand-detail__save-action"\n                        :isLoading="isLoading"\n                        v-model="isSaveSuccessful"\n                        :disabled="isLoading"\n                        variant="primary"\n                        @click.prevent="onSave">\n                        {{ $tc(\'swag-brand.detail.buttonSave\') }}\n                    </sw-button-process>\n                {% endblock %}\n\n            </template>\n        {% endblock %}\n\n        {% block swag_brand_detail_language_switch %}\n            <template #language-switch>\n                <sw-language-switch\n                    :disabled="brandId == null"\n                    :saveChangesFunction="saveOnLanguageChange"\n                    :abortChangeFunction="abortOnLanguageChange"\n                    @on-change="onChangeLanguage">\n                </sw-language-switch>\n            </template>\n        {% endblock %}\n\n        {% block swag_brand_detail_content %}\n            <sw-card-view slot="content">\n\n                {% block swag_brand_detail_content_language_info %}\n                    <sw-language-info\n                        :entityDescription="placeholder(brand, \'name\', $tc(\'swag-brand.detail.textHeadline\'))">\n                    </sw-language-info>\n                {% endblock %}\n\n                {% block swag_brand_detail_base_basic_info_card %}\n                    <sw-card :isLoading="brandIsLoading">\n                        <template v-if="!brandIsLoading">\n                            <sw-container class="swag-brand-detail__container"\n                                          columns="repeat(auto-fit, minmax(250px, 1fr))"\n                                          gap="0 30px">\n                                <div class="swag-brand-detail__base-info-wrapper">\n\n                                    {% block swag_brand_detail_base_info_field_name %}\n                                        <sw-field type="text"\n                                                  :label="$tc(\'swag-brand.detail.labelName\')"\n                                                  :placeholder="placeholder(brand, \'name\', $tc(\'swag-brand.detail.placeholderName\'))"\n                                                  name="name"\n                                                  validation="required"\n                                                  required\n                                                  :error="brandNameError"\n                                                  v-model="brand.name">\n                                        </sw-field>\n                                    {% endblock %}\n\n                                    {% block swag_brand_detail_base_info_field_link %}\n                                        <sw-field type="text"\n                                                  :label="$tc(\'swag-brand.detail.labelLink\')"\n                                                  :placeholder="$tc(\'swag-brand.detail.placeholderLink\')"\n                                                  name="link"\n                                                  v-model="brand.link"\n                                        >\n                                        </sw-field>\n                                    {% endblock %}\n                                </div>\n\n                                {% block swag_brand_detail_logo_upload %}\n                                    <sw-upload-listener\n                                        :uploadTag="mediaUploadTag"\n                                        autoUpload\n                                        @media-upload-finish="setMediaItem">\n                                    </sw-upload-listener>\n                                    <sw-media-upload-v2\n                                        class="swag-brand-detail__logo-upload"\n                                        :source="brand.mediaId"\n                                        :allowMultiSelect="false"\n                                        variant="regular"\n                                        :uploadTag="mediaUploadTag"\n                                        :label="$tc(\'swag-brand.detail.labelLogo\')"\n                                        :defaultFolder="brandRepository.entityName"\n                                        @sw-media-upload-v2-media-upload-success="setMediaItem"\n                                        @media-drop="onDropMedia"\n                                        @media-upload-sidebar-open="openMediaSidebar"\n                                        @media-upload-remove-image="onUnlinkLogo">\n                                    </sw-media-upload-v2>\n                                {% endblock %}\n                            </sw-container>\n\n                            {% block swag_brand_detail_base_info_field_description %}\n                                <sw-text-editor\n                                    :label="$tc(\'swag-brand.detail.labelDescription\')"\n                                    :placeholder="placeholder(brand, \'description\', $tc(\'swag-brand.detail.placeholderDescription\'))"\n                                    name="description"\n                                    v-model="brand.description">\n                                </sw-text-editor>\n                            {% endblock %}\n                        </template>\n                    </sw-card>\n                {% endblock %}\n\n                {% block swag_brand_detail_custom_field_sets %}\n                    <sw-card :title="$tc(\'sw-settings-custom-field.general.mainMenuItemGeneral\')"\n                             v-if="customFieldSets.length > 0"\n                             :isLoading="brandIsLoading">\n                        <sw-custom-field-set-renderer\n                            v-if="brand"\n                            :entity="brand"\n                            :sets="customFieldSets">\n                        </sw-custom-field-set-renderer>\n                    </sw-card>\n                {% endblock %}\n            </sw-card-view>\n        {% endblock %}\n\n        {% block swag_brand_detail_sidebar %}\n            <template slot="sidebar">\n                <sw-sidebar :propagateWidth="true">\n                    <sw-sidebar-media-item ref="mediaSidebarItem">\n                        <template slot="context-menu-items" slot-scope="media">\n                            <sw-context-menu-item @click="setMediaFromSidebar(media.mediaItem)">\n                                {{ $tc(\'swag-brand.detail.labelUseAsLogo\') }}\n                            </sw-context-menu-item>\n                        </template>\n                    </sw-sidebar-media-item>\n                </sw-sidebar>\n            </template>\n        {% endblock %}\n\n    </sw-page>\n{% endblock %}\n'},"sAX+":function(e,a,n){"use strict";n.r(a);var t=n("LAHF"),i=n.n(t);const{Component:s,Mixin:r}=Shopware,{Criteria:o}=Shopware.Data;s.register("swag-brand-list",{template:i.a,inject:["repositoryFactory"],mixins:[r.getByName("listing")],data:()=>({repository:null,brands:null,isLoading:!0,sortBy:"name",sortDirection:"ASC",total:0,searchPlaceHolder:"Brands"}),metaInfo(){return{title:this.$createTitle()}},computed:{columns:()=>[{property:"name",dataIndex:"name",allowResize:!0,routerLink:"swag.brand.detail",label:"swag-brand.list.columnName",inlineEdit:"string",primary:!0},{property:"link",label:"swag-brand.list.columnLink",inlineEdit:"string"}]},created(){this.repository=this.repositoryFactory.create("swag_brand")},methods:{onChangeLanguage(e){},getList(){this.isLoading=!0,this.repository.search(new o,Shopware.Context.api).then((e=>{this.brands=e,this.total=e.total,this.isLoading=!1}))},updateTotal({total:e}){this.total=e}}});var d=n("TFx8"),l=n.n(d);const{Component:c,Mixin:b,Data:{Criteria:g}}=Shopware,{mapPropertyErrors:p}=Shopware.Component.getComponentHelper();c.register("swag-brand-detail",{template:l.a,inject:["repositoryFactory"],mixins:[b.getByName("placeholder"),b.getByName("notification"),b.getByName("discard-detail-page-changes")("brand")],props:{brandId:{type:String,required:!1,default:null}},data:()=>({brand:null,customFieldSets:[],isLoading:!1,isSaveSuccessful:!1}),metaInfo(){return{title:this.$createTitle(this.identifier)}},computed:{identifier(){return this.placeholder(this.brand,"name")},brandIsLoading(){return this.isLoading||null==this.brand},brandRepository(){return this.repositoryFactory.create("swag_brand")},mediaRepository(){return this.repositoryFactory.create("media")},customFieldSetRepository(){return this.repositoryFactory.create("custom_field_set")},customFieldSetCriteria(){const e=new g;return e.setPage(1),e.setLimit(100),e.addFilter(g.equals("relations.entityName","swag_brand")),e.getAssociation("customFields").addSorting(g.sort("config.customFieldPosition","ASC",!0)).setLimit(100),e},mediaUploadTag(){return`sw-brand-detail--${this.brand.id}`},...p("brand",["name"])},watch:{brandId(){this.createdComponent()}},created(){this.createdComponent()},methods:{createdComponent(){this.brandId?this.loadEntityData():(Shopware.State.commit("context/resetLanguageToDefault"),this.brand=this.brandRepository.create(Shopware.Context.api))},loadEntityData(){this.isLoading=!0,this.brandRepository.get(this.brandId,Shopware.Context.api).then((e=>{this.isLoading=!1,this.brand=e})),this.customFieldSetRepository.search(this.customFieldSetCriteria,Shopware.Context.api).then((e=>{this.customFieldSets=e.filter((e=>e.customFields.length>0))}))},abortOnLanguageChange(){return this.brandRepository.hasChanges(this.brand)},saveOnLanguageChange(){return this.onSave()},onChangeLanguage(){this.loadEntityData()},setMediaItem({targetId:e}){this.brand.mediaId=e},setMediaFromSidebar(e){this.brand.mediaId=e.id},onUnlinkLogo(){this.brand.mediaId=null},openMediaSidebar(){this.$refs.mediaSidebarItem.openContent()},onDropMedia(e){this.setMediaItem({targetId:e.id})},onSave(){this.isLoading=!0,this.brandRepository.save(this.brand,Shopware.Context.api).then((()=>{this.isLoading=!1,this.isSaveSuccessful=!0,null!==this.brandId?this.loadEntityData():this.$router.push({name:"swag.brand.detail",params:{id:this.brand.id}})})).catch((e=>{throw this.isLoading=!1,this.createNotificationError({message:this.$tc("global.notification.notificationSaveErrorMessageRequiredFieldsInvalid")}),e}))},onCancel(){this.$router.push({name:"swag.brand.list"})}}});n("5+Dv");var m=n("1EOH"),h=n("E7fg");const{Module:u}=Shopware;u.register("swag-brand",{type:"plugin",name:"Brand",title:"swag-brand.general.mainMenuItemGeneral",description:"sw-property.general.descriptionTextModule",color:"#ff3d58",icon:"default-shopping-paper-bag-product",snippets:{"de-DE":m,"en-GB":h},routes:{list:{component:"swag-brand-list",path:"list"},detail:{component:"swag-brand-detail",path:"detail/:id",meta:{parentPath:"swag.brand.list"},props:{default:e=>({brandId:e.params.id})}},create:{component:"swag-brand-create",path:"create",meta:{parentPath:"swag.brand.list"}}},navigation:[{label:"swag-brand.general.mainMenuItemGeneral",color:"#ff3d58",path:"swag.brand.list",icon:"default-shopping-paper-bag-product",position:100,parent:"sw-catalogue"}]})}},[["sAX+","runtime"]]]);