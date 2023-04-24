import { filterResponseInterface } from "../interfaces/tools.interface";

export function filterResponse(data: filterResponseInterface) {
    const result = {
        [data.name]: {} as any
    };

    switch (true) {
        case !data.response:
            result[data.name].success = 0;
            result[data.name].message = 'No data';
            break;

        case data.response.sqlMessage !== undefined:
            result[data.name].success = 0;
            result[data.name].message = data.response.sqlMessage;
            result[data.name].sql = data.response.sql;
            break;

        default:
            result[data.name].success = 1;
            result[data.name] = (data.rows !== undefined && data.response[data.rows] ? data.response[data.rows] : data.response);
    }

    return result;
}