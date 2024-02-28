import { API_BASE_URL } from "@/app/api";



const getInsightData = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/insights`)
            .then(response => response.json())

        // console.log("Post Contact Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Post Contact Error:", error);
        throw error;
    }
};

const insightsService = {
    getInsightData
}
export default insightsService;