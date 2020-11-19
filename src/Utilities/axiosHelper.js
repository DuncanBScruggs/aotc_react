import axios from "axios";

export function axiosHelper(method, url, data={}, body={}) {

    const history = useHistory();

    function success(res){

        if (res.status == 200){
            history.push('/board');
        }
    }

    // const method = 'post';
    // const url = 'http://localhost:8000/register';
    
    // const body = { email: 'bob@gmail.com', password: 'changeme' };
    // const data = { email: 'bob@gmail.com', password: 'changeme' };
    
    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
    }
    axios(
        {
            method,
            url,
            data,
            body,
            headers,
        }
    ).then(res => success(res))
        .catch(err => console.log('error: ', err));

}