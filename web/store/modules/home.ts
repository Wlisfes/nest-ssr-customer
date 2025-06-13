import { toRefs, computed } from 'vue'
import { defineStore } from 'pinia'
import { useState } from '@/hooks/hook-state'
import { useCoutext, AUTH } from '@/hooks/hook-context'
import { Logger } from '@/plugins'
import * as Service from '@/api'

export const useMouse = defineStore('APP_NEST_HOME_STORE', () => {})
