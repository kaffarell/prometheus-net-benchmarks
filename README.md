# prometheus-net benchmarks

## Clean webapi
![clean webapi results](https://github.com/kaffarell/prometheus-net-benchmarks/blob/master/img/clean.png?raw=true)


## Webapi with prometheus middleware
![prometheus webapi results](https://github.com/kaffarell/prometheus-net-benchmarks/blob/master/img/prometheus.png?raw=true)

## Quickstart

* Install k6 with winget: `winget install k6`
* Run k6 script with: `k6 run --vus 10 --duration 30s test_clean.js` and `k6 run --vus 10 --duration 30s test_prometheus.js`
