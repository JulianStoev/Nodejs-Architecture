const config = {
    server: {
        host: process.env.SERVER_HOST || '',
        port: process.env.SERVER_PORT || ''
    },

    db: {
        user: process.env.DB_USER || '',
        pass: process.env.DB_PASS || '',
        host: process.env.DB_HOST || '',
        database: process.env.DB_DATABASE || ''
    },

    api: {
        prefix: process.env.API_PREFIX || ''
    },

    headers: {
        auth: process.env.HEADERS_AUTH || ''
    }
};

export default config;