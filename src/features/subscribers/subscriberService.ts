import { API_BASE_URL } from "@/app/api";
import { Subscribers } from "@/types/subscriber";



const createSubscription = async (data: Subscribers) => {
    try {
        const response = await fetch(`${API_BASE_URL}/subscribers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to subscribe');
        }

        return response.json(); // Return the created sermon data
    } catch (error) {
        console.error("Create Subscribe Error:", error);
        throw error;
    }
};



const subscriberService = {
    createSubscription
}
export default subscriberService