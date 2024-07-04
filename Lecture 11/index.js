import axios from "axios";

const getData = async () => {
    try {
        const data = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
        console.log(data.data.message);
    } catch (error) {
        console.log(error);
    }
};

getData();