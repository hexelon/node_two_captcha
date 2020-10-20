export = Captcha;
/**
 * Represents a captcha
 * @class
 */
declare class Captcha {
    set id(arg: string);
    /**
     * Captcha ID, as provided from 2Captcha
     *
     * @return {string} Captcha ID
     */
    get id(): string;
    _id: string;
    set text(arg: string);
    /**
     * Text from captcha
     *
     * @return {string} Captcha text
     */
    get text(): string;
    _text: string;
    set apiResponse(arg: string);
    /**
     * API response for captcha request
     *
     * @return {string} API response
     */
    get apiResponse(): string;
    _apiResponse: string;
    /**
     * If the captcha sent was tile-like, this function returns the indexes of the
     * clicks on an array.
     *
     * @return {Number[]}  An array of indexes clicked
     */
    indexes(): number[];
    /**
     * If the captcha sent was a image, this function returns the coordinates
     * (X, Y) clicked
     *
     * @return {Number[][]}  An array of coordinate tuples
     */
    coordinates(): number[][];
}
