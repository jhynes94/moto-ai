"use client"
import { useState } from 'react';
import { getEvents } from "@/app/api/events/getEvents";

const GetEvents = () => {
	const [events, setEvents] = useState(null);

	async function fetchEvents() {
		const response = await getEvents({ query: "Motorcycle track days June 2025 Issaquah Washington" });
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
