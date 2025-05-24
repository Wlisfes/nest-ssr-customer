<script lang="tsx">
import { defineComponent, computed, h, PropType, VNode, Fragment } from 'vue'
import { iconNames } from '@/utils/utils-common'

export default defineComponent({
    name: 'ElementWrapper',
    emits: ['click'],
    props: {
        /**图标名称**/
        name: { type: String },
        /**图标组件**/
        component: { type: Object as PropType<VNode> }
    },
    setup(props, { slots }) {
        const VNodeCurrent = computed(() => iconNames[String(props.name)])

        return () => (
            <n-icon class="element-wrapper">
                {slots.default ? (
                    slots.default()
                ) : props.component ? (
                    props.component
                ) : (
                    <Fragment>{props.name && VNodeCurrent.value && h(VNodeCurrent.value)}</Fragment>
                )}
            </n-icon>
        )
    }
})
</script>
