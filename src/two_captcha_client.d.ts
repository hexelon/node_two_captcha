export = TwoCaptchaClient;
declare class TwoCaptchaClient {
    /**
     * Constructor for the 2Captcha client object
     *
     * @param  {string}  key                  Your 2Captcha API key
     * @param  {Object}  [params]             Params for the client
     * @param  {number}  [params.timeout]     milliseconds before giving up on an captcha
     * @param  {number}  [params.polling]     milliseconds between polling for answer
     * @param  {Boolean} [params.throwErrors] Whether the client should throw errors or just log the errors
     * @return {TwoCaptchaClient}             The client object
     */
    constructor(key: string, { timeout, polling, throwErrors }?: {
        timeout: number;
        polling: number;
        throwErrors: boolean;
    });
    key: string;
    timeout: number;
    polling: number;
    throwErrors: boolean;
    /**
     * Get balance from your account
     *
     * @return {Promise<float>} Account balance in USD
     */
    balance(): Promise<any>;
    /**
     * Gets the response from a solved captcha
     *
     * @param  {string} captchaId The id of the desired captcha
     * @return {Promis<Captcha>}  A promise for the captcha
     */
    captcha(captchaId: string): any;
    /**
     * Sends an image captcha and polls for its response
     *
     * @param  {Object} options          Parameters for the requests
     * @param  {string} [options.base64] An already base64-coded image
     * @param  {Buffer} [options.buffer] A buffer object of a binary image
     * @param  {string} [options.path]   The path for a system-stored image
     * @param  {string} [options.url]    Url for a web-located image
     * @param  {string} [options.method] 2Captcha method of image sending. Can be either base64 or multipart
     * @return {Promise<Captcha>}        Promise for a Captcha object
     */
    decode(options?: {
        base64?: string;
        buffer?: any;
        path?: string;
        url?: string;
        method?: string;
    }): Promise<import("./captcha")>;
    /**
     * Sends a ReCaptcha v2 and polls for its response
     *
     * @param  {Object} options           Parameters for the request
     * @param  {string} options.googlekey The google key from the ReCaptcha
     * @param  {string} options.pageurl   The URL where the ReCaptcha is
     * @return {Promise<Captcha>}         Promise for a Captcha object
     */
    decodeRecaptchaV2(options?: {
        googlekey: string;
        pageurl: string;
    }): Promise<import("./captcha")>;
    /**
     * Sends a Geetest challenge and polls for its response
     *
     * @param  {Object} options              Parameters for the request
     * @param  {string} options.gt           Static gt key
     * @param  {string} options.pageurl      Page URL of target page
     * @param  {string} options.challenge    Dynamic challenge value scraped from target page
     * @param  {string} options.api_server   Full URL of the page where you see GeeTest captcha
     * @return {Promise<Captcha>}            Promise for a geettest object
     */
    decodeGeetest(options?: {
        gt: string;
        pageurl: string;
        challenge: string;
        api_server: string;
    }): Promise<import("./captcha")>;
    /**
     * Sends an image captcha and polls for its response
     *
     * @param  {Object} options          Parameters for the requests
     * @param  {string} [options.textcaptcha] An already base64-coded image
     * @return {Promise<Captcha>}        Promise for a Captcha object
     */
    decodeText(options?: {
        textcaptcha: string;
    }): Promise<import("./captcha")>;
    /**
     * @deprecated /load.php route is returning error 500
     * Get current load from 2Captcha service
     *
     * @return {Promise<string>} Promise for an XML containing current load from
     * 2Captcha service
     */
    load(): Promise<string>;
    /**
     * Loads a captcha image and converts to base64
     *
     * @param  {Object} options          The source of the image
     * @param  {string} [options.base64] An already base64-coded image
     * @param  {Buffer} [options.buffer] A buffer object of a binary image
     * @param  {string} [options.path]   The path for a system-stored image
     * @param  {string} [options.url]    Url for a web-located image
     * @return {Promise<string>}         Promise for a base64 string representation of an image
     */
    _loadCaptcha(options?: {
        base64: string;
        buffer: any;
        path: string;
        url: string;
    }): Promise<string>;
    /**
     * Makes a HTTP request for the 2Captcha API
     *
     * @param  {string} action   Path used in the 2Captcha api URL
     * @param  {string} method   HTTP verb to be used
     * @param  {string} payload  Body of the requisition
     * @return {Promise<string>} Promise for the response body
     */
    _request(action: string, method?: string, payload?: string): Promise<string>;
    /**
     * Report incorrectly solved captcha for refund
     *
     * @param  {string} captchaId The id of the incorrectly solved captcha
     * @param {boolean} bad If reporting an incorrectly solved captcha. Default is true.
     * @return {Promise<Boolean>} Promise for a boolean informing if the report
     * was received
     */
    report(captchaId: string, bad?: boolean): Promise<boolean>;
    /**
     * Blocks the code for the specified amount of time
     *
     * @param  {number} ms          The time in milliseconds to block the code
     * @return {Promise<undefined>} Promise for undefined that resolves after ms milliseconds
     */
    _sleep(ms: number): Promise<undefined>;
    /**
     * Get usage statistics from your account
     *
     * @param  {Date} date       Date for the target day
     * @return {Promise<string>} Promise for an XML containing statistics about
     * target day
     */
    stats(date: Date): Promise<string>;
    /**
     * Throws an Error if this.throwErrors is true. If this.throwErrors is false,
     * a warn is logged in the console.
     *
     * @param  {string} message      Message of the error
     * @return {(undefined|Boolean)} If an error wasn't thrown, returns false.
     */
    _throwError(message: string): (undefined | boolean);
    /**
     * Uploads a captcha for the 2Captcha API
     *
     * @param  {Object} options        Parametes for the controlling the requistion
     * @param  {string} options.base64 The base64 encoded image
     * @param  {string} options.method 2Captcha method of image sending. Can be either base64 or multipart
     * @return {Promise<Captcha>}      Promise for Captcha object containing the captcha ID
     */
    _upload(options?: {
        base64: string;
        method: string;
    }): Promise<import("./captcha")>;
    /**
     * Checks if the response from 2Captcha is an Error. It may throw an error if
     * the class parameter throwExceptions is true. If it is false, only a warning
     * will be logged.
     *
     * @param  {string} body         Body from the 2Captcha response
     * @return {(undefined|Boolean)} Returns true if response is valid
     */
    _validateResponse(body: string): (undefined | boolean);
}
