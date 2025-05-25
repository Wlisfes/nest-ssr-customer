<script lang="tsx">
import { defineComponent, computed } from 'vue'
import { useState } from '@/hooks/hook-state'
import { fetchColumnWhere } from '@/utils/utils-common'

export default defineComponent({
    name: 'LayoutLanguage',
    setup(props, ctx) {
        const { state, setState } = useState({
            visible: false,
            value: 'en',
            options: [
                { label: '简体中文', value: 'cn' },
                { label: 'English', value: 'en' }
            ]
        })

        const node = computed(() => fetchColumnWhere(state.options, state.value))

        return () => (
            <n-popselect trigger="click" v-model:value={state.value} options={state.options}>
                <div class="w-98 flex items-center justify-end select-none cursor-pointer">
                    <div class="capitalize text-10 line-height-16 w-16 text-center bg-[var(--icon-color)] text-[var(--base-color)] b-rd-[var(--border-radius)]">
                        {state.value}
                    </div>
                    <div class="p-is-8 p-ie-2">{node.value.label}</div>
                    <element-wrapper name="nest-arrow-switch" size={16}></element-wrapper>
                </div>
            </n-popselect>
        )
    }
})
</script>
