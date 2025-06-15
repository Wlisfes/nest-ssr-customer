<script lang="tsx">
import { defineComponent, ref, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { InputInst } from 'naive-ui'
import { isNotEmpty } from 'class-validator'
import { useState } from '@/hooks/hook-state'
import { useMouse, useStore } from '@/store'
import { enter, fetchHandler } from '@/utils/utils-common'

export default defineComponent({
    name: 'LayoutCommonDeploy',
    setup(props) {
        const inputRef = ref<InputInst>()
        const router = useRouter()
        const { search, keyword, fetchSearchUpdate } = useStore(useMouse)
        const { state, setState } = useState({ visible: false })
        const isEnter = computed(() => {
            return isNotEmpty(keyword.value) && !['/search'].includes(router.currentRoute.value.path)
        })

        onMounted(fetchInitialize)
        async function fetchInitialize() {
            return await nextTick().then(async () => {
                document.addEventListener('keydown', e => 2)
                await inputRef.value!.focus()
                return await setState({ visible: true })
            })
        }

        /**取消搜索**/
        async function fetchCancel(event: MouseEvent) {
            return await fetchSearchUpdate(false, '').then(async () => {
                // return router.back()
            })
        }

        /**聚焦事件**/
        async function fetchInputFocus(event: MouseEvent) {
            console.log(event)
        }

        /**失焦事件**/
        async function fetchInputBlur(event: MouseEvent) {
            return await setState({ visible: false })
        }

        /**回车搜索**/
        async function fetchKeydown(event: KeyboardEvent) {
            return await fetchHandler(['Enter'].includes(event.key) && isEnter.value, async e => {
                return await router.push(`/search`)
            })
        }

        return () => (
            <n-element class="layout-common-search h-full flex flex-1 items-center justify-center gap-20 overflow-hidden">
                <n-popover trigger="click" width="trigger" show-arrow={false} v-model:show={state.visible} style={{ padding: 0 }}>
                    {{
                        trigger: () => (
                            <n-input
                                ref={inputRef}
                                placeholder="搜索"
                                round
                                class={{ 'max-w-420 flex-1': true, 'n-input--focus': isNotEmpty(keyword.value) }}
                                v-model:value={keyword.value}
                                on-focus={fetchInputFocus}
                                on-blur={fetchInputBlur}
                                onKeydown={fetchKeydown}
                            ></n-input>
                        ),
                        default: () => (
                            <n-element class="flex flex-col gap-5 p-be-12 overflow-hidden">
                                <div class="flex items-center text-12 p-inline-12 p-bs-10">
                                    <n-text>热门搜索</n-text>
                                </div>
                                <n-scrollbar class="max-h-200">
                                    <n-element class="flex flex-col gap-10 p-inline-12 overflow-hidden">
                                        <n-button tertiary style={{ '--n-height': '60px' }}></n-button>
                                        <n-button tertiary style={{ '--n-height': '60px' }}></n-button>
                                        <n-button tertiary style={{ '--n-height': '60px' }}></n-button>
                                        <n-button tertiary style={{ '--n-height': '60px' }}></n-button>
                                    </n-element>
                                </n-scrollbar>
                            </n-element>
                        )
                    }}
                </n-popover>
                <n-button class="h-34" type="primary" text focusable={false} onClick={fetchCancel}>
                    Cancel
                </n-button>
            </n-element>
        )
    }
})
</script>
