import { toRefs } from 'vue'
import { defineStore } from 'pinia'
import { useState } from '@/hooks/hook-state'
import { imageNames, fetchDelay } from '@/utils/utils-common'

export interface HomeStore {
    loading: boolean
    initialize: boolean
    columns: Array<Omix>
    carousels: Array<Omix>
    browses: Array<Omix>
}

export const useHomeStore = defineStore('HOME_STORE', () => {
    const { state, setState } = useState<HomeStore>({
        loading: true,
        initialize: true,
        columns: [],
        carousels: [],
        browses: []
    })

    /**获取一级分类栏目**/
    async function fetchBaseColumns() {
        return await setState({
            columns: [
                { keyId: 1, name: 'Cloud Gateway', cover: imageNames['cloud-gateway'] },
                { keyId: 2, name: 'SMS Gateway', cover: imageNames['sms-gateway'] },
                { keyId: 3, name: 'Voip Gateway', cover: imageNames['voip-gateway'] },
                { keyId: 4, name: 'Proxy Gateway', cover: imageNames['proxy-gateway'] },
                { keyId: 5, name: 'SMS Modem', cover: imageNames['sms-modem'] },
                { keyId: 6, name: 'GOIP Gateway', cover: imageNames['goip-gateway'] }
            ]
        })
    }

    /**获取轮播数据**/
    async function fetchBaseCarousels() {
        return await setState({
            carousels: [
                { keyId: 1, name: 'Cloud Gateway', cover: `https://oss.lisfes.cn/cloud/cover/2022-09/1748172093591.jpg` },
                { keyId: 2, name: 'SMS Gateway', cover: `https://oss.lisfes.cn/cloud/cover/2022-09/1748172093592.jpg` },
                { keyId: 3, name: 'Voip Gateway', cover: `https://oss.lisfes.cn/cloud/cover/2022-09/1748172093593.jpg` },
                { keyId: 4, name: 'Proxy Gateway', cover: `https://oss.lisfes.cn/cloud/cover/2022-09/1748172093594.jpg` },
                { keyId: 5, name: 'SMS Modem', cover: `https://oss.lisfes.cn/cloud/cover/2022-09/1748172093595.jpg` },
                { keyId: 6, name: 'GOIP Gateway', cover: `https://oss.lisfes.cn/cloud/cover/2022-09/1748172093596.jpg` }
            ]
        })
    }

    /**核心产品数据**/
    async function fetchBaseBrowses() {
        return await setState({
            browses: [
                {
                    keyId: 1,
                    name: 'Next-Gen PTZ Cameras',
                    document: 'Featuring advanced AI, powerful zoom, and all-weather performance.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_ai-ptz.f6723d2b.jpg`
                },
                {
                    keyId: 2,
                    name: 'AI Horn Speaker',
                    document: 'All-weather PoE horn speaker with AI alerts and flexible wall, corner, or pole mounting.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_ai-horn-speaker.8e064980.jpg`
                },
                {
                    keyId: 3,
                    name: 'WAN Switches',
                    document: '10G WAN Switch linking two Shadow Mode UniFi Gateways to a single ISP.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_wan-switching.f8e6d453.jpg`
                },
                {
                    keyId: 4,
                    name: 'Pro XG PoE Switches',
                    document: '10G WAN Switch linking two Shadow Mode UniFi Gateways to a single ISP.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_wan-switching.f8e6d453.jpg`
                },
                {
                    keyId: 5,
                    name: '10G Ethernet Adapter',
                    document: 'Plug-and-play, Ethernet adapter with USB-C for seamless 10GbE network connectivity.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_ethernet-adapter-10g.eb2982b5.jpg`
                },
                {
                    keyId: 6,
                    name: 'Gen 6 Cameras',
                    document: 'Outdoor-ready 1/1.8" 4K 8MP image sensor and Multi-TOPS AI Engine.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_gen6-cameras.59046ded.png`
                },
                {
                    keyId: 7,
                    name: 'UDB Pro Sector',
                    document: '5 GHz point-to-multipoint AP that wirelessly bridges 40+ UDB Pro clients.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_udb-pro-sector.61123efc.png`
                },
                {
                    keyId: 8,
                    name: 'U7 Pro XG APs',
                    document: 'WiFi 7 APs with 10/5/2.5/1 GbE support.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_pro-xg-aps.0a0dc870.jpg`
                },
                {
                    keyId: 9,
                    name: 'U7 Lite',
                    document: 'Compact ceiling WiFi 7 AP with 4 streams and 2.5GbE uplink.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_u7-lite.77082cd8.jpg`
                },
                {
                    keyId: 10,
                    name: 'U7 In-Wall',
                    document: 'Wall-mounted WiFi 7 AP with 4 streams and 2.5GbE PoE switch for hospitality.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_u7-iw.7f7b6d00.jpg`
                },
                {
                    keyId: 11,
                    name: 'Cloud Gateway Fiber',
                    document: '10G Cloud Gateway with PoE switch, NVR storage, and full UniFi support.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_ucg-fiber.5969872f.jpg`
                },
                {
                    keyId: 12,
                    name: 'UniFi Express 7',
                    document: 'Mesh-scalable, super-compact 10G Cloud Gateway with integrated WiFi 7.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_ux7.c382bea9.jpg`
                },
                {
                    keyId: 13,
                    name: 'Dream Router 7',
                    document: '10G Cloud Gateway with WiFi 7, PoE, microSD, and UniFi application support.',
                    cover: `https://assets.ecomm.ui.com/_next/static/media/landing_udr7.081ce0c5.jpg`
                }
            ]
        })
    }

    /**初始化**/
    async function fetchMouseInitialize() {
        try {
            await Promise.all([fetchBaseColumns(), fetchBaseCarousels(), fetchBaseBrowses()])
            return await setState({ initialize: false, loading: false })
        } catch (err) {
            return await setState({ initialize: false, loading: false })
        }
    }

    return { ...toRefs(state), fetchBaseColumns, fetchMouseInitialize }
})
