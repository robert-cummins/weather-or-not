
//import test from 'tape'

import { shapeData } from '../client/actions';

test('sends Data through to global state', t => {
  const action = {
    type: 'SEND_DATA',
    data: {
      activities: ['hello', 'world'],
      city: '123',
      cityName: 'HELLO'
    }
  }
  const expected = {
    activities: ['hello', 'world'],
    city: '123',
    cityName: 'HELLO'
  }

  const actual = shapeData(action)

  expect(actual.data.data).toEqual(expected)

  // t.deepEqual(actual, expected, 'success')
  // t.end()
})