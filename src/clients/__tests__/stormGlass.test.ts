import { StormGlass } from "@src/clients/stormGlass"; 
import axios, { Axios } from "axios";
import stormGlassWeather3HoursFixture from '@test/fixtures/stormGlass_weather_3_hours.json'
import stormGlassWeatherNormalized3HoursFixture from '@test/fixtures/stormGlass_normalize_response_3_hours.json'

jest.mock('axios');

describe('StormGlass client', () => {
    it('should return the normalized forecast from the StormGlass service', async () => {
        const lat = -33.7927726
        const lng = 151.2899852

        axios.get = jest.fn().mockResolvedValue(stormGlassWeather3HoursFixture);

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoint(lat, lng);
        expect(response).toEqual(stormGlassWeatherNormalized3HoursFixture);
    });
});