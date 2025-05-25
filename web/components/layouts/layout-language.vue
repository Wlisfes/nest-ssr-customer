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
                <div class="flex items-center select-none cursor-pointer">
                    <div class="capitalize text-10 line-height-16 w-16 text-center bg-[var(--icon-color)] text-[var(--base-color)] b-rd-[var(--border-radius)]">
                        {state.value}
                    </div>
                    <div class="p-inline-8">{node.value.label}</div>
                    <element-wrapper name="nest-arrow-switch" color="var(--icon-color)" size={18}></element-wrapper>
                </div>
            </n-popselect>
        )
    }
})
</script>
