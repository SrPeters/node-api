import { Schedule } from "../../entities/Schedule";

interface CreateScheduleRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateScheduleResponse = Schedule

export class CreateScheduleService {
  async execute({
    customer,
    startsAt,
    endsAt
  }: CreateScheduleRequest): Promise<CreateScheduleResponse> {

    const schedule = new Schedule({
      customer,
      startsAt,
      endsAt
    })

    return schedule
  }
}