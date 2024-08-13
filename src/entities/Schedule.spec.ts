import { expect, test } from 'vitest'
import { Schedule } from './Schedule'

test('Instantiate a schedule', () => {
  const startsAt = new Date()
  const endsAt = new Date()

  endsAt.setDate(endsAt.getDate() + 1)

  const schedule = new Schedule({
    customer: 'John Doe',
    startsAt,
    endsAt
  })

  expect(schedule).toBeInstanceOf(Schedule)
  expect(schedule.customer).toEqual('John Doe')
})

test('Cannot instantiate a schedule with end date before start date.', () => {
  const startsAt = new Date()
  const endsAt = new Date()

  endsAt.setDate(endsAt.getDate() - 1)

  expect(() => {
    return new Schedule({
      customer: 'John Doe',
      startsAt,
      endsAt
    })
  }).toThrow()
})