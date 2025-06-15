<script lang="tsx">
import { defineComponent, PropType, CSSProperties, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'LayoutCommonClassify',
    props: {
        /**分类系列列表**/
        dataSource: { type: Array as PropType<Array<Omix>>, default: () => [] }
    },
    setup(props) {
        const route = useRoute()

        onMounted(() => console.log(props, route))

        return () => (
            <div class="layout-common-classify h-full flex flex-1 items-center p-inline-24 gap-20 overflow-hidden">
                {props.dataSource.map(item => (
                    <router-link key={item.keyId} to={`/classify/${item.keyId}`}>
                        <n-button text type="primary">
                            {item.en}
                        </n-button>
                    </router-link>
                ))}
                {/* {props.dataSource.map(item => (
                    <n-button key={item.keyId} text tag="a" href={`/classify/${item.keyId}`} type="primary">
                        {item.en}
                    </n-button>
                ))} */}
            </div>
        )
    }
})
</script>
