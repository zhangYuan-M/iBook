let search_btn = document.getElementById('search_btn')
let inputBox = document.getElementById('input-box')
// 设置点击监听事件
search_btn.addEventListener('click', () => {
  const inputValue = inputBox.value
  window.location.href = `/books/search/${inputValue}`
})
