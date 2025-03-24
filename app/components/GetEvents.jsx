"use client"
import { useState } from 'react';
import { getEvents } from "@/app/api/events/getEvents";

const GetEvents = () => {
	const [events, setEvents] = useState(null);

	const fetchEvents = async () => {
		const response = await getEvents({ searchParameters: "search parameters" });
		setEvents(response);
	};

	return (
		<>
			<button onClick={fetchEvents}>
				Get Events
			</button>
			{events && <div>{JSON.stringify(events)}</div>}
		</>
	);
};

export default GetEvents;
