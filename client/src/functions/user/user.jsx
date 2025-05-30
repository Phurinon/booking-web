import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createProfile = async (data) => {
    try{
        const res = await axios.post(`${API_URL}/user/profile/create-profile`, data)
    }catch(err){
        console.error("Error creating profile:", err);
        throw new Error(err.response?.data?.message || "Failed to create profile");
    }
}