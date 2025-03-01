export const useLetterStore = defineStore('letter', () => {
  const letterContents = ref<{ sender: string; content: string }>()
  const setLetterContents = (sender: string, content: string) =>
    (letterContents.value = { sender, content })
  return { letter: letterContents, setLetterContents }
})
