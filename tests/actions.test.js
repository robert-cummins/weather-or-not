test('test is working', function() {
    expect(1+1).toEqual(2)
})

import {setDay} from '../client/actions'

test('set day returns the correct array index', (done) => {
    setDay(3, (err, actual) => {
        const expected = {dayIndex:3, type: "SET_DAY"}
        expect (err).toBeNull()
        expect(actual).toEqual(expected)
        done() 
    })
   
})


// import {
//   addToCart,
//   navigate,
//   ADD_TO_CART,
//   NAVIGATE } from '../client/actions'

// test('Add to cart has correct info', t => {
//   const expected = {
//     id: 4,
//     type: ADD_TO_CART
//   }

//   const actual = addToCart(4)

//   t.deepEqual(actual, expected, 'actions are the same')
//   t.end()
// })

// test('Navigate has correct info', t => {
//   const expected = {
//     destination: 'cart',
//     type: NAVIGATE
//   }

//   const actual = navigate('cart')

//   t.deepEqual(actual, expected, 'actions are the same')
//   t.end()
// })