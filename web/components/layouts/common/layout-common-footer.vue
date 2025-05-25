<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutCommonFooter',
    setup(props) {
        return () => (
            <n-card class="layout-common-footer" bordered={false}>
                <div class="common-width-inline flex flex-col overflow-hidden p-block-24">
                    {/* <n-card>的哈萨克的哈萨克巨大花洒就看到哈桑的撒大大萨达萨达33333333333333</n-card>
                    <n-card>的哈萨克的哈萨克巨大花洒就看到哈桑的撒大大萨达萨达33333333333333</n-card> */}
                    <n-divider class="m-block-14!" />
                    <div class="flex items-center justify-between overflow-hidden">
                        <div class="flex items-center gap-10">
                            <n-button text focusable={false}>
                                <element-wrapper name="nest-facebook" size={28}></element-wrapper>
                            </n-button>
                            <n-button text focusable={false}>
                                <element-wrapper name="nest-linkedin" size={28}></element-wrapper>
                            </n-button>
                            <n-button text focusable={false}>
                                <element-wrapper name="nest-twitter" size={28}></element-wrapper>
                            </n-button>
                            <n-button text focusable={false}>
                                <element-wrapper name="nest-youtube" size={28}></element-wrapper>
                            </n-button>
                        </div>
                        <div class="flex items-center gap-24">
                            <n-a target="_blank" href="https://lisfes.cn">
                                <n-text depth={1} class="hover:underline">
                                    SKYLINE 官网
                                </n-text>
                            </n-a>
                            <n-text depth={3}>© 2025 China Skyline. All rights reserved.</n-text>
                            <n-text depth={1}>PrivacyPolicy</n-text>
                        </div>
                    </div>
                </div>
            </n-card>
        )
    }
})
</script>

<style lang="scss" scoped>
.layout-common-footer {
    --n-padding-bottom: 0;
    --n-padding-left: 0;
    // position: relative;
    // background-color: var(--element-footer-background-color);
}
</style>
