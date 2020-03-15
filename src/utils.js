export const upperCase = (strings, ...values) => {
  if (strings && values) {
    return `${strings[0].charAt(1).toUpperCase()}${strings[0].slice(2)} ${values[0].charAt(1).toUpperCase()}${values[0].slice(2)}`
  }
  return ''
}
