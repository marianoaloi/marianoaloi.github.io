import { EventWork } from "@/app/entity/Event"
import { BigComponent, Company, DateCompany, TimelineItem } from "./timeline.styled"

type EventsList = {
    events: EventWork[]
}

export const TimeLine: React.FC<EventsList> = ({ events }) => {
    return (
        <BigComponent>
            {events.map((event: EventWork) => (
                <TimelineItem key={event.dateEvent.getTime()}>
                    <div>
                        <DateCompany>{event.dateEvent.toDateString()}</DateCompany>
                        <Company>{event.company}</Company>
                    </div>
                </TimelineItem>
            ))}
        </BigComponent>
    )
}