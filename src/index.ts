import * as grpc from '@grpc/grpc-js';
import * as http from 'https';

import { CovidStatusResponse, EmptyRequest } from './proto/covid-status/covid-status_pb';
import { CovidStatusService, ICovidStatusClient, ICovidStatusServer, ICovidStatusService } from './proto/covid-status/covid-status_grpc_pb';
// import { CovidSummary } from './db';

async function getCovidStatus(call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<CovidStatusResponse>) {
    const covidStatusResponse = new CovidStatusResponse();

    const options = {
        "method": "GET",
        "hostname": "api.covid19api.com",
        "port": null,
        "path": "/summary",
        "headers": {
            "content-length": "0"
        }
    };

    let covidSummary: any = {};

    const req = http.request(options, (res) => {
        const chunks: any[] = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", () => {
            const body = Buffer.concat(chunks);
            // console.log(body.toString());
            covidSummary = JSON.parse(body.toString('utf-8'));

            const covidSummaryIndonesia = covidSummary.Countries.find((i: { CountryCode: string; }) => i.CountryCode === 'ID')

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

        });
    });
    req.end();
}

function main() {
    const server = new grpc.Server();
    server.addService(CovidStatusService, {
        getCovidStatus: getCovidStatus
    });
    server.bindAsync('0.0.0.0:10080', grpc.ServerCredentials.createInsecure(), function (err, port) {
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