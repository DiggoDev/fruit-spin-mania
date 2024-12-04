import axios from 'axios'
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
        const cleanedPath = path.startsWith('/') ? path.substring(1) : path
        console.log('GET path', cleanedPath)
        let url = this.baseUrl + cleanedPath
        console.log('GET url:', url)
        const response = await axios.get(url);
        if (options?.expectedStatus) {
            if (response.status !== options.expectedStatus) throw new Error('Error at GET /get-game-request')
        } 
        return response.data
    }
}