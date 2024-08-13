import { describe, expect, it } from "vitest";
import { CreateScheduleService } from "./CreateScheduleService";
import { Schedule } from "../../entities/Schedule";

describe('Create Schedule', () => {
  it('Should be able to create a Schedule.', () => {
    const createSchedule = new CreateScheduleService()

    const startsAt = new Date()
    const endsAt = new Date()

    endsAt.setDate(endsAt.getDate() + 1)

    expect(createSchedule.execute({
      customer: 'John Doe',
      startsAt,
      endsAt
    })).resolves.toBeInstanceOf(Schedule)

  })
})
