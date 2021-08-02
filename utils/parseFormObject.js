function parseFormObject(data) {
  const fieldsKeys = Object.keys(data).map(key => {
    const keyArray = key.split('[')
    keyArray[1] = keyArray[1].replace(']', '')
    return keyArray
  })

  const fields = fieldsKeys.reduce((obj, keys, index) => {
    const value = Object.values(data)[index]
    const dataValue = Number(value) || value

    return {
      ...obj,
      [keys[0]]: {
        ...obj[keys[0]],
        [keys[1]]: dataValue,
      },
    }
  }, {})

  return fields
}

export default parseFormObject
