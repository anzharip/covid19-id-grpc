import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import { CovidStatusResponse, EmptyRequest } from './proto/covid-status/covid-status_pb';
import { CovidStatusService, ICovidStatusClient, ICovidStatusServer, ICovidStatusService } from './proto/covid-status/covid-status_grpc_pb';

function getCovidStatus(call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<CovidStatusResponse>) {
    const covidStatusResponse = new CovidStatusResponse();
    covidStatusResponse.setMessage('Hello')
    callback(null, covidStatusResponse);
}

function main() {
    const server = new grpc.Server();
    server.addService(CovidStatusService, {
        getCovidStatus: getCovidStatus
    });
    server.bindAsync('0.0.0.0:10080', grpc.ServerCredentials.createInsecure(), function(err, port) {
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