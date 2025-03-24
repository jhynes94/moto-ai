'use server'

export async function getEvents(searchParameters) {
    try {
        return JSON.stringify({ message: "response!" + JSON.stringify(searchParameters) });
    } catch (err) {
        if (err instanceof Error) {
            return JSON.stringify({ message: err.message });
        }
    }
}

