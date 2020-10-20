export = HTTPRequest;
/**
 * Class with static methods used in HTTP requests
 * @class
 */
declare class HTTPRequest {
    /**
     * Performs a GET to an URL and returns a promise to its body as a Buffer
     *
     * @param  {string} url      URL of the desired content to GET
     * @return {Promise<Buffer>} Buffer with the content of the body from the HTTP response
     */
    static openDataURL(url: string): Promise<any>;
    /**
     * Performs a request and returns a promise to the body as a string
     *
     * @param  {Object} options           Object with the parameters to the request
     * @param  {string} options.url       URL of the request
     * @param  {string} [options.method='get']  HTTP verb of the request
     * @param  {Object} [options.payload={}] Body content of the requisition
     * @param  {number} [options.timeout=60000] Timeout of the request in miliseconds
     * @return {Promise<string>}
     */
    static request(options?: {
        url: string;
        method: string;
        payload: any;
        timeout: number;
    }): Promise<string>;
}
