import axios from "axios";

export const fetchAllGames = async () => {
    try {
        const res = await axios.get('/api/games')
        return {
            data: res.data
        }
    } catch (error) {
        return {
            data: undefined
        }
    }
}
export const fetchById = async (id) => {
    try {
        const res = await axios.get(`/api/games/${id}`)
        return {
            data: res.data
        }
    } catch (error) {
        return {
            data: undefined
        }
    }
}
export const fetchByCatName = async (cat_name) => {
    try {
        const res = await axios.get(`/api/games/${cat_name}`)
        return {
            data: res.data
        }
    } catch (error) {
        return {
            data: undefined
        }
    }
}

export const fetchByCatSpecName = async (cat_spec_name) => {
    try {
        const res = await axios.get(`/api/games/${cat_spec_name}`)
        return {
            data: res.data
        }
    } catch (error) {
        return {
            data: undefined
        }
    }
}