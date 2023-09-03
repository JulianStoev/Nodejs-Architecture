export type fetchMethod = 'POST' | 'PUT' | 'GET' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'DELETE';

export interface fetchRequest {
    urlencoded?: boolean; // used for file uploads and formData, defaults to json
    data?: {[name: string]: any}; // data object to be send to the backend
    errors?: boolean; // pass true if you want to consume the fetch errors where you are calling it
    uri: string;
}

export interface ajaxErrorResponse<bodyType> {
    status: number;
    statusText: string;
    body: bodyType;
}
