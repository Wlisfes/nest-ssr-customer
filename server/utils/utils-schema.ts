/**枚举文案转换**/
export function fetchEnumProperty<T>(data: Omix<T>) {
    return data.items.map(item => `</br> ${item.label}：${item.value}`)
}

/**枚举描述转换**/
export function fetchEnumComment(name: string, data: Omix) {
    const items = data.items.map(item => `${item.value}-${item.label}`)
    return items.length === 0 ? name : `${name}：${items.join('、')}`
}
