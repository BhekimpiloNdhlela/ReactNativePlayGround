import axios from "axios"

const API_ENDPOINT = 'https://expensetracker-956a9-default-rtdb.firebaseio.com/';

export const postExpense = async (expense) => {
    try {
        const response = await axios.post(`${API_ENDPOINT}/expenses.json`, expense);
        return response.data.name;
    } catch (error) {
        console.error(error);
    }
}

export const getExpenses = async () => {
    try {
        const response = await axios.get(`${API_ENDPOINT}/expenses.json`);
        const expenses = [];

        console.log("firebase response:", response);
        for (const key in response.data) {
            expenses.push({
                id: key,
                amount: response.data[key].amount,
                date: new Date(response.data[key].date),
                description: response.data[key].description,
            });
        }
        return expenses;
    } catch (error) {
        console.error(error);
    }
}

export const deleteExpense = async (id) => {
    try {
        const response = axios.delete(`${API_ENDPOINT}/expenses/${id}.json`);
    } catch (error) {
        console.error(error);
    }
}

export const updateExpense = async (id, expense) => {
    try {
        const response = axios.put(`${API_ENDPOINT}/expenses/${id}.json`, expense);
    } catch (error) {
        console.error(error);
    }
}