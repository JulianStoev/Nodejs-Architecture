import { fetchMethod, fetchRequest } from "./fetch.interface";

function Fetch(data: fetchRequest, method: fetchMethod): Promise<any> {

    const url = '';
    
    const toSend = {
        method: method,
        mode: 'cors' as RequestMode,
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: ''
    };

    if (data.urlencoded) {
        toSend.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

    if (data.data) {
        (method === 'GET') ? data.uri += '?' + new URLSearchParams(data.data) : toSend.body = JSON.stringify(data.data);
    }

    return new Promise((resolve, reject) => {
        const fetchFn = async (): Promise<any> => {
            try {
                await fetch(url + data.uri, toSend)
                    .then(response => response.ok ? response.text() : Promise.reject(response))
                    .then(response => {
                        // convert the response to text first to avoid error in case of no response when parsing directly to json
                        const json = (response ? JSON.parse(response) : {});
                        resolve(json);
                        return json;
                    });
            } catch(err) {
                if (data.errors === false) {
                    console.error('[Fetch error]', err);
                } else {
                    const response = {
                        status: 0,
                        statusText: '',
                        body: err
                    };

                    if (err instanceof Response) {
                        const parseTextFn = async (errror: Response) => {
                            let body = await errror.text();
                            try {
                                // safely check if valid json
                                body = JSON.parse(body);
                            } catch(err) {
                                console.error(err);
                            }
        
                            response.status = errror.status;
                            response.statusText = errror.statusText;
                            response.body = body;
                        };
                        parseTextFn(err);
                    }

                    reject(response);
                }
            }
        };
        fetchFn();
    });
}

export const post      = (data: fetchRequest): Promise<any> => Fetch(data, 'POST');
export const put       = (data: fetchRequest): Promise<any> => Fetch(data, 'PUT');
export const get       = (data: fetchRequest): Promise<any> => Fetch(data, 'GET');
export const patch     = (data: fetchRequest): Promise<any> => Fetch(data, 'PATCH');
export const head      = (data: fetchRequest): Promise<any> => Fetch(data, 'HEAD');
export const options   = (data: fetchRequest): Promise<any> => Fetch(data, 'OPTIONS');
export const del       = (data: fetchRequest): Promise<any> => Fetch(data, 'DELETE');