<script lang="tsx">
import { defineComponent } from 'vue'
import { useHomeStore } from '@/views/home/store/home-store'

export default defineComponent({
    name: 'LayoutHomeChoose',
    setup(props) {
        const store = useHomeStore()

        return () => (
            <div class="layout-home-choose flex-col overflow-hidden">
                <n-h2 class="common-width-inline lg:text-28 sm:text-20 xxs:text-16  line-height-34 m-be-0 p-bs-44">
                    Take a look at our core products
                </n-h2>
                <div class="common-width-inline p-block-16">
                    <n-grid x-gap={16} y-gap={24} cols={2}>
                        <n-grid-item>
                            <n-card content-class="flex flex-col gap-5 justify-center why-choose-cover">
                                <n-text class="text-18" depth={3} v-html="Global coverage"></n-text>
                                <n-text class="text-24" depth={1} v-html={`More than <span class="text-32">200</span> countries`}></n-text>
                            </n-card>
                        </n-grid-item>
                        <n-grid-item>
                            <n-card content-class="flex flex-col gap-5 justify-center why-choose-traffic">
                                <n-text class="text-18" depth={3} v-html="Daily SMS traffic"></n-text>
                                <n-text class="text-24" depth={1} v-html={`<span class="text-32">50</span> million`}></n-text>
                            </n-card>
                        </n-grid-item>
                        <n-grid-item>
                            <n-card content-class="flex flex-col gap-5 justify-center why-choose-team">
                                <n-text class="text-18" depth={3} v-html="Team"></n-text>
                                <n-text
                                    class="text-24"
                                    depth={1}
                                    v-html={`Global team of <span class="text-32">500</span> people`}
                                ></n-text>
                            </n-card>
                        </n-grid-item>
                        <n-grid-item>
                            <n-card content-class="flex flex-col gap-5 justify-center why-choose-service">
                                <n-text class="text-18" depth={3} v-html="Support"></n-text>
                                <n-text
                                    class="text-24"
                                    depth={1}
                                    v-html={`<span class="text-32">7</span>X<span class="text-32">12</span> hours, <span class="text-32">1-to-1</span> service`}
                                ></n-text>
                            </n-card>
                        </n-grid-item>
                    </n-grid>
                </div>
            </div>
        )
    }
})
</script>

<style lang="scss" scoped>
.layout-home-choose {
    position: relative;
    :deep(.n-card) {
        position: relative;
        height: 156px;
        overflow: hidden;
    }
    :deep(.why-choose-cover) {
        background-image: url('@/assets/images/why-choose-cover.png');
        background-size: 306px 190px;
        background-repeat: no-repeat;
        background-position-x: 106%;
        background-position-y: -14px;
    }
    :deep(.why-choose-traffic) {
        background-image: url('@/assets/images/why-choose-traffic.png');
        background-size: 287px 148px;
        background-repeat: no-repeat;
        background-position-x: 105%;
        background-position-y: 7px;
    }
    :deep(.why-choose-team) {
        background-image: url('@/assets/images/why-choose-team.png');
        background-size: 239px 146px;
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: 22px;
    }
    :deep(.why-choose-service) {
        background-image: url('@/assets/images/why-choose-service.png');
        background-size: 239px 188px;
        background-repeat: no-repeat;
        background-position-x: 100%;
        background-position-y: -28px;
    }
}
</style>
