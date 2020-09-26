# Indonesian COVID19 Summary gRPC API written in Typescript

This is a gRPC API sample implementation on Node.JS written with Typescript. 

Live demo on: 52.148.115.205:10080

You can access the live demo with any gRPC client or for GUI client, you can use [BloomRPC](https://github.com/uw-labs/bloomrpc): 
<img width="1436" alt="Screen Shot 2020-09-26 at 15 03 59" src="https://user-images.githubusercontent.com/10259593/94335973-a3ef3280-0009-11eb-8df2-33f25620dbb4.png">

The live demo is hosted on Azure Container service with 1 vCPU and 0.5 GB RAM. I benchmarked the service and it is running quite fast serving ~500 request per second without any optimization: 
<img width="1012" alt="Screen Shot 2020-09-26 at 15 01 39" src="https://user-images.githubusercontent.com/10259593/94335971-a18cd880-0009-11eb-8868-fb72c09763d8.png">

The datasets are retrieved from https://covid19api.com. 

Notes: 
* You will need to compile the .proto files into Typescript definitions to create gRPC API in Typescript. You can follow the steps to do that [here](https://adnanahmed.info/blog/2019/11/01/grpc-with-nodejs-typescript/) and [here](https://medium.com/blokur/how-to-implement-a-grpc-client-and-server-in-typescript-fa3ac807855e). 