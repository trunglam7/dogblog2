import {createClient} from 'contentful';

const client = createClient({
    space: 'cjy6wcf5u1iq',
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_API_KEY
})

export default client;