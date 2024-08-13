export interface ScheduleProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Schedule {
  private props: ScheduleProps;

  get customer() {
    return this.props.customer;
  }

  get startsAt() {
    return this.props.startsAt;
  }

  get endsAt() {
    return this.props.endsAt;
  }

  constructor(props: ScheduleProps) {
    const { endsAt, startsAt } = props

    if (endsAt <= startsAt) {
      throw new Error('Invalid end date.')
    }

    this.props = props;
  }
}