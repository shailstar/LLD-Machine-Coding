export const list = []
let numberOfItems = 100

for (let i = 0; i < numberOfItems; i++) {
  list.push({
    label: `label ${i}`,
    value: `value ${i}`
  })
}
