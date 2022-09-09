export function parseDate(el) {
    return new Date(Date.parse(el)).toLocaleDateString()
}

export function parseTime(el) {
    return new Date(Date.parse(el)).toLocaleTimeString()
}