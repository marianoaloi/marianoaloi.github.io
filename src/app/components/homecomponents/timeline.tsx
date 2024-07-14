import { EventWork } from "@/app/entity/Event"
import { BigComponent, Company, DateCompany, TimelineItem } from "./timeline.styled"
import moment from "moment"

type EventsList = {
    events: EventWork[]
}

export const TimeLine: React.FC<EventsList> = ({ events }) => {
    return (
        <BigComponent>
            {events.map((event: EventWork) => (
                <TimelineItem key={event.dateEvent.getTime()}>
                    <div>
                        <DateCompany>{moment(event.dateEvent).format('MM-YYYY')}</DateCompany>
                        <Company>{event.company}</Company>
                    </div>
                </TimelineItem>
            ))}
        </BigComponent>
    )
}