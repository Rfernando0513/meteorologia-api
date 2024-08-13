import { AxiosStatic } from "axios";

export class StormGlass {

    readonly stormGlassApiParams = 'swellDirection%2CswellHeight%2CswellPeriod%2CwaveDirection%2CwaveHeight%2CwindDirection%2CwindSpeed&';
    readonly stormGlassApiSource = 'noaa&lat';

    constructor(protected request: AxiosStatic){};
    public async fetchPoint(lat: number, lng: number): Promise<{}>{
        return this.request.get(`https://api.stormglass.io/v2/weather/point?params=${this.stormGlassApiParams}source=${this.stormGlassApiSource}=${lat}lng=${lng}`);
    };
};