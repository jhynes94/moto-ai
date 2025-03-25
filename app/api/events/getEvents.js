'use server'

import { getTrackDaysFromDeepSeek } from "@/app/api/events/deepseek";

export async function getEvents({ query }) {
    try {
        return getTrackDaysFromDeepSeek(query);
    } catch (err) {
        if (err instanceof Error) {
            return JSON.stringify({ message: err.message });
        }
    }
}
