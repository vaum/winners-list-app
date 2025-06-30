export const useWinners = () => {
  return useAsyncData<Winner[]>(
    'winners',
    async () => {
      const { data } = await $fetch<{ data: Winner[] }>('https://scholarshipowl.com/jsonapi/winner')
      
      return data.map(item => ({
        ...item,
        attributes: {
          ...item.attributes
        }
      }), {
        server: true,
      })
    }
  )
}
