export const upperCase = (strings, ...values) => {
  if (strings && values) {
    return `${strings[0].charAt(0).toUpperCase()}${strings[0].slice(1)} ${values[0].charAt(0).toUpperCase()}${values[0].slice(1)}`
  }
  return ''
}
