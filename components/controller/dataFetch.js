const dataFetch = {
   fetchRevenue: () => {
      fetch('./components/data/fakeData.json')
      .then(res => res.json())
      .then(data => {      
         data.details.forEach( detail => {
            if(detail.name == 'revenue') {
               document.getElementById('dynamic-js').appendChild(form.input)
            }
         })
      })
   },

   fetchImpressions: () => {
      fetch('./components/data/fakeData.json')
      .then(res => res.json())
      .then(data => {      
         data.details.forEach( detail => {
            if(detail.name == 'impressions') {
               document.getElementById('dynamic-js').innerHTML += renderDonut(detail.name, detail.tablet, detail.smartphone)
            }
         })
         
      })
   },

   fetchVisits: () => {
      fetch('./components/data/fakeData.json')
      .then(res => res.json())
      .then(data => {      
         data.details.forEach( detail => {
            if(detail.name == 'visits') {
               document.getElementById('dynamic-js').innerHTML += renderDonut(detail.name, detail.tablet, detail.smartphone)
            }
         })
         
      })
   }
}

