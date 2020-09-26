import * as grpc from '@grpc/grpc-js';
import Axios from 'axios';
import { CovidStatusService } from './proto/covid-status/covid-status_grpc_pb';
import { CovidStatusResponse } from './proto/covid-status/covid-status_pb';

// Store covidSummaryIndonesia info in-memory
var covidSummaryIndonesia: any;


const httpRequest = () => {
    Axios.get('https://api.covid19api.com/summary').then((value) => {
        const covidSummary = value.data
        covidSummaryIndonesia = covidSummary.Countries.find((i: { CountryCode: string; }) => i.CountryCode === 'ID')
        console.log('Retrieving data... ');
    }).catch((err) => {
        console.log(err);
    });
}

// Initial retrieval
httpRequest()

// Retrieve data every 3 hours
setInterval(async () => {
    httpRequest();
}, 10800000)


const getCovidStatus = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<CovidStatusResponse>) => {
    const covidStatusResponse = new CovidStatusResponse();
    covidStatusResponse.setCountry(covidSummaryIndonesia.Country)
    covidStatusResponse.setCountryCode(covidSummaryIndonesia.CountryCode)
    covidStatusResponse.setSlug(covidSummaryIndonesia.Slug)
    covidStatusResponse.setNewConfirmed(covidSummaryIndonesia.NewConfirmed)
    covidStatusResponse.setTotalConfirmed(covidSummaryIndonesia.TotalConfirmed)
    covidStatusResponse.setNewDeaths(covidSummaryIndonesia.NewDeaths)
    covidStatusResponse.setTotalDeaths(covidSummaryIndonesia.TotalDeaths)
    covidStatusResponse.setNewRecovered(covidSummaryIndonesia.NewRecovered)
    covidStatusResponse.setTotalRecovered(covidSummaryIndonesia.TotalRecovered)
    covidStatusResponse.setDate(covidSummaryIndonesia.Date)
    callback(null, covidStatusResponse);
}

function main() {
    const server = new grpc.Server();
    server.addService(CovidStatusService, {
        getCovidStatus: getCovidStatus
    });
    server.bindAsync('0.0.0.0:10080', grpc.ServerCredentials.createInsecure(), function (err: any, port: any) {
        try {
            if (err) {
                throw err
            }
            console.log('Server running on port: ' + JSON.stringify(port));
            server.start()
        } catch (error) {
            console.log('An error occured: ' + JSON.stringify(error));
        }
    });
}


main();