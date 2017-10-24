export default class Http {
    async get(url, headers) {
        console.log('AAaaaget ', url);
        return await fetch(url, {
            method: 'GET',
            headers: headers
        })
    }

    async post(url, headers, body) {
        return await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body,
        })
    }

    async put(url, headers, body) {
        return await fetch(url, {
            method: 'PUT',
            headers: headers,
            body: body,
        })
    }

    async delete(url, headers, body) {
        return await fetch(url, {
            method: 'DELETE',
            headers: headers,
            body: body,
        })
    }
}