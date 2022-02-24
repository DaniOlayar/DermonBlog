

/*

? Change search box functionality

function search() {
  const searchInput = document.getElementById('search-box')
  const searchFilter = searchInput.value.toLowerCase()

  const cards = document.getElementById('cards')
  const card = cards.getElementsByClassName('card')

  for (let i = 0; i < card.length; i++) {
    const cardDisplay = card[i]
    const textValue = cardDisplay.textContent || cardDisplay.innerText
    if (textValue.toLowerCase().indexOf(searchFilter) > -1) {
      card[i].style.display = ''
    } else {
      card[i].style.display = 'none'
    }

  }

}

*/