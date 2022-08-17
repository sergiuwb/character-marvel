import axios from "axios";
import React from "react";

const GetCharacters = async (url, character, apikey) => {
    try {
        const data = await axios.get(`${url}nameStartsWith=${character}&ts=1&${apikey}`)
        return data.data.data
    }
    catch (error) {
        console.log(error)
    }
}

export default GetCharacters;
