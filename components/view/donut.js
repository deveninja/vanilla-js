const renderDonut = ( title, tablet, smartphone ) => {
   let donut = ''

   donut += `<div class='donut'>`
   donut += `  <h1 class='donut'>${title}</h1>`
   donut += `  <span class=''>${tablet}</span>`
   donut += `  <span class=''>${smartphone}</span>`
   donut += `</div>`

   return donut
}

