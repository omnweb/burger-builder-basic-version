export const updateObject = (oldObject, upadateProperties) => {
    return {
        ...oldObject,
        ...upadateProperties
    }
}