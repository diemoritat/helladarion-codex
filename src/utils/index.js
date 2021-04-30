export const onLoadEditableElements = () => {
  const monsterId = new URLSearchParams(window.location.search).get('id')
  Object.keys(localStorage).forEach(key => {
    if (key.includes(`${monsterId}-`)) {
      const id = key.replace(`${monsterId}-`, '')
      const element = document.querySelector(`#${id}`)
      if (element) {
        if (element.type === 'textarea') {
          element.defaultValue = localStorage.getItem(key)
        } else {
          element.innerHTML = localStorage.getItem(key)
        }
      }
    }
  })
}

export const onSaveEditable = () => {
  const monsterId = new URLSearchParams(window.location.search).get('id')
  const editableElements = document.querySelectorAll('[contenteditable]')

  editableElements.forEach(el => {
    el.addEventListener('keyup', () => {
      if (el.type === 'textarea') {
        localStorage.setItem(`${monsterId}-${el.id}`, el.value)
      } else {
        localStorage.setItem(`${monsterId}-${el.id}`, el.innerHTML)
      }
    })
  })
}

export const onManuallySaveEditable = text => {
  const monsterId = new URLSearchParams(window.location.search).get('id')
  const editableElements = document.querySelectorAll('[contenteditable]')

  Array.from(editableElements).forEach(el => {
    localStorage.setItem(`${monsterId}-${el.id}`, text)
  })
}
