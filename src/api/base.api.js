class HttpClient {
  constructor(options = {}) {
    this.baseURL = options.baseURL || "https://nestbe.herokuapp.com/api/";
    this.headers =  {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      ...options.headers
    };
  }

  async fetchJSON(endpoint, options = {}) {
    const res = await fetch(this.baseURL + endpoint, {
      ...options,
      headers: this.headers
    });

    if (!res.ok) throw new Error(res.statusText);

    if (options.parseResponse !== false && res.status !== 204)
      return res.json();

    return undefined;
  }

  setHeader(key, value) {
    this.headers[key] = value;
    return this;
  }

  getHeader(key) {
    return this.headers[key];
  }

  setBasicAuth(username, password) {
    this.headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
    return this;
  }

  setBearerAuth(token) {
    this.headers.Authorization = `Bearer ${token}`;
    return this;
  }

  get(endpoint, options = {}) {
    return this.fetchJSON(endpoint, {
      ...options,
      method: "GET"
    });
  }

  post(endpoint, body, options = {}) {
    return this.fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: "POST"
    });
  }

  put(endpoint, body, options = {}) {
    return this.fetchJSON(endpoint, {
      ...options,
      body: body ? JSON.stringify(body) : undefined,
      method: "PUT"
    });
  }

  patch(endpoint, operations, options = {}) {
    return this.fetchJSON(endpoint, {
      parseResponse: false,
      ...options,
      body: JSON.stringify(operations),
      method: "PATCH"
    });
  }

  delete(endpoint, options = {}) {
    return this.fetchJSON(endpoint, {
      parseResponse: false,
      ...options,
      method: "DELETE"
    });
  }
}

export default HttpClient;
