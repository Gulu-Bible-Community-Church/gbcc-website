import { API_BASE_URL } from "@/app/api";
import { Comments } from "@/types/comments";


const postComment = async (contactData: Comments) => {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        });

        if (!response.ok) {
            throw new Error('Failed to create contact');
        }

        return response.json(); // Return the created sermon data
    } catch (error) {
        console.error("Create Contact Error:", error);
        throw error;
    }
};




const commentService = {
    postComment 
}
export default commentService;