import axios, { AxiosResponse } from 'axios'
import { serverHostname, serverPort, serverProtocol } from '../config/server-config'

const doubleSpaceRegex = /\/{2,}/g

export interface ApiRequestOptions {
    expectedStatus?: number
}

export class ApiRequest {
    protected baseUrl: string

    constructor(baseUrl: string) {
        this.baseUrl = `${serverProtocol}://${serverHostname}:${serverPort}${baseUrl.startsWith('/') ? '' : '/'}${baseUrl}${baseUrl.endsWith('/') ? '' : '/'}`
        console.log('baseUrl: ' + this.baseUrl)
    }

    protected async makeGet(path: string, options?: ApiRequestOptions) {
        const url = this.getUrl(path)
        const response = await axios.get(url);
        this.checkResponse('GET', response, url, options)
        return response.data
    }

    protected async makePost(path: string, body: any, options?: ApiRequestOptions) {
        const url = this.getUrl(path)
        const response = await axios.get(url);
        this.checkResponse('POST', response, url, options)
        return response.data
    }

    private getUrl(path: string) {
        const cleanedPath = path.startsWith('/') ? path.substring(1) : path
        let url = this.baseUrl + cleanedPath
        return url
    }

    private checkResponse(requestType: 'GET' | 'POST', response: AxiosResponse, url: string, options?: ApiRequestOptions) {
        if (options?.expectedStatus) {
            if (response.status !== options.expectedStatus) throw new Error(`Error at ${requestType} ${url}`)
        }
    }
}