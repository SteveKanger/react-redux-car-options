export default {
  vehicles: [
    {
      id: 1, 
      name:'1966 AM Cobra', 
      price: 55000,
      engine: [{id: 1, name: '289 cu in 4.7L V8', price: 0},{id: 2, name: '390 cu in 6.7L V8', price: 100000},{id: 3, name: '427 cu in 7.0L V8 Full Racing', price: 945000}]
    },
    {
      id: 2, 
      name:'1940 BMW 328', 
      price: 795000,
      engine: [{id: 1, name: '1,971 cc M328 straight-6', price: '0'},{id: 2, name: '2.0-liter straight-6 Twin-Turbo', price: 12000}]
    },
    {
      id: 3, 
      name:'2018 Porshe 911', 
      price: 91100,
      engine: [{id: 1, name: '3.0-liter twin-turbo flat-six', price: 0},{id: 2, name: ' 3.8-liter twin-turbo flat-six', price: 10000},{ id: 3, name: ' 4.0-liter flat-six', price: 25000}]
    },
    {
      id: 4, 
      name:'1969 Ford Mustang', 
      price: 23960,
      engine: [{id: 1, name: '302 cu in (4.9 L) Windsor V8', price: 0},{id: 2, name: '302 cu in (4.9 L) Boss V8', price: 5000},{id: 3, name: '390 cu in (6.4 L) FE V8 ', price: 12000},{id: 4, name: '429 cu in (7.0 L) Boss V8', price: 27000}]
    },
    {
      id: 5, 
      name:'2018 Lamborgini Aventador', 
      price: 421145,
      engine: [{id: 1, name: '6.5 L 396.5 cu in V12', price: 0},{id: 2, name: '6.5 L 396.5 cu in V12 Bored And Tuned', price: 17000}]
    },
    {
      id: 6, 
      name:'2018 Toyota Tacoma',
      price: 25400,
      engine: [{id: 1, name: '4-Cyl 2.7 Liter', price: 0},{id: 2, name: '3.5-liter V-6', price: 4500}]
    },
    {
      id: 7, 
      name:'2015 Corvette Convertible', 
      price: 26995,
      engine: [{id: 1, name: '6.2 L (376 cu in) LTV4', price: 0},{id: 2, name: '6.2 L (376 cu in) LTV4 Hennessey HPE1000 Supercharged Engine Upgrade', price: 33000}]
    },
    {
      id: 8, 
      name:'2005 Ford Focus',
      price: 2650,
      engine: [{id: 1, name: '	2.0 L CVH I4', price: 0},{id: 2, name: '2.0 L Zetec', price: 1200},{id: 3, name: '2.0 L Duratec', price: 1700},{id: 4, name: '2.3 L Duratec', price: 2300}]
    },
    {
      id: 9, 
      name:'2018 Bentley Continental', 
      price: 218400,
      engine: [{id: 1, name: '6.0 L W12 twin-turbo', price: 0},{id: 2, name: '6.0 L W12 twin-turbo Tuned Performance Package', price: 33000}]
    }
  ],

  colors: [
    {hex: '#FFFFFF', name: 'White'},
    {hex: '#C0392B', name: 'Red'},
    {hex: '#884EA0  ', name: 'Purple'},
    {hex: '#85C1E9', name: 'Sky Blue'},
    {hex: '#34495E', name: 'Navy Blue'},
    {hex: '#D68910', name: 'Orange'},
    {hex: '#BFC9CA', name: 'Light Grey'},
    {hex: '#424949', name: 'Dark Grey'},
    {hex: '#000000', name: 'Black'}
  ],

  interior:[
    {id: 1, name: 'Base Package', price: 0},
    {id: 2, name: 'Premium Leather Seats', price: 1200},
    {id: 3, name: 'Heated Seats', price: 1100},
    {id: 4, name: 'Touch Screen 8,4in Display', price: 1049},
    {id: 5, name: 'Full Surround Sound with Subwoofer', price: 995},
    {id: 6, name: '1 Year Sirius Radio', price: 149},
    {id: 7, name: '1 Year 4g LTE Hotspot', price: 1200},
  ], 

  exterior:[
    {id: 1, name: 'Base Package', price: 0},
    {id: 2, name: '20in Full Custom Alloy Wheels', price: 1600},
    {id: 3, name: 'All Season Performance Tires Upgrade', price: 999},
    {id: 4, name: 'Carbon Fiber Hood', price: 1675},
    {id: 5, name: 'Carbon Fiber Body Kit', price: 2250},
    {id: 6, name: 'Carbon Flash Painted Ground Effects', price: 2950},
  ],
}