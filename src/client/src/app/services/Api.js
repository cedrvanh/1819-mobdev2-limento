import axios from 'axios'; 

class Api {
    static URL = '/api/v1';

    static findAllPosts = async (queryParams=null) => {
        let url = `${this.URL}/posts`;
        if (queryParams !== null) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + this.queryParams(queryParams);
        }   
        const response = await fetch(`${url}`);
        return await response.json();
    }

    static findOnePost = async (id) => {
        let url = `${this.URL}/posts/${id}`;
        const response = await fetch(`${url}`);
        return await response.json();
    }

    static createPost = async (post) => {
        let url = `${this.URL}/posts`;
        await axios.post(`${url}`, post);
    }

    static findAllPostTypes = async (queryParams=null) => {
        let url = `${this.URL}/types`;
        if (queryParams !== null) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + this.queryParams(queryParams);
        }   
        const response = await fetch(`${url}`);
        return await response.json();
    }

    static findAllTags = async (queryParams=null) => {
        let url = `${this.URL}/tags`;
        if (queryParams !== null) {
            url += (url.indexOf('?') === -1 ? '?' : '&') + this.queryParams(queryParams);
        }   
        const response = await axios.get(`${url}`);
        return await response.data;
    }

    static findOneUser = async (id) => {
        const response = await fetch(`${this.URL}/users/${id}`);
        return await response.json();
    }

    static queryParams = (params) => {
        return Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
    }
}

export default Api;
