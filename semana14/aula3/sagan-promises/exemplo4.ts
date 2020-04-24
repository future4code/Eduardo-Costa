import axios, {AxiosResponse} from "axios";

const myPromise:Promise<AxiosResponse> = axios.get("https://jsonplaceholder.typicode.com/poststss/10")

myPromise
.then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.error(err);
});

