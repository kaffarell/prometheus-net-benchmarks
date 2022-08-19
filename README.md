# prometheus-net benchmarks
## Comparison
![results](https://github.com/kaffarell/prometheus-net-benchmarks/blob/master/img/graph.png?raw=true)



## Clean webapi
![clean webapi results](https://github.com/kaffarell/prometheus-net-benchmarks/blob/master/img/clean.png?raw=true)

```
data_received..................: 20 MB  65 kB/s
data_sent......................: 2.8 MB 9.4 kB/s
http_req_blocked...............: avg=18.01µs min=0s     med=0s     max=10.37ms p(90)=0s      p(95)=0s
http_req_connecting............: avg=5.87µs  min=0s     med=0s     max=4.89ms  p(90)=0s      p(95)=0s
http_req_duration..............: avg=5.26ms  min=1.58ms med=5.02ms max=38.1ms  p(90)=6.7ms   p(95)=7.33ms
{ expected_response:true }...: avg=5.26ms  min=1.58ms med=5.02ms max=38.1ms  p(90)=6.7ms   p(95)=7.33ms
http_req_failed................: 0.00%  ✓ 0         ✗ 29700
http_req_receiving.............: avg=45.35µs min=0s     med=0s     max=4.39ms  p(90)=58.83µs p(95)=508.1µs
http_req_sending...............: avg=15.66µs min=0s     med=0s     max=4.53ms  p(90)=0s      p(95)=0s
http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s
http_req_waiting...............: avg=5.2ms   min=1.34ms med=4.97ms max=38.1ms  p(90)=6.64ms  p(95)=7.28ms
http_reqs......................: 29700  98.663947/s
iteration_duration.............: avg=1.01s   min=1s     med=1.01s  max=1.05s   p(90)=1.01s   p(95)=1.01s
iterations.....................: 29700  98.663947/s
vus............................: 100    min=100     max=100
vus_max........................: 100    min=100     max=100```

## Webapi with prometheus-net middleware
![prometheus webapi results](https://github.com/kaffarell/prometheus-net-benchmarks/blob/master/img/prometheus.png?raw=true)
```
data_received..................: 20 MB  65 kB/s
data_sent......................: 2.8 MB 9.4 kB/s
http_req_blocked...............: avg=11.86µs min=0s     med=0s     max=19.57ms  p(90)=0s      p(95)=0s
http_req_connecting............: avg=3.76µs  min=0s     med=0s     max=6.1ms    p(90)=0s      p(95)=0s
http_req_duration..............: avg=6.25ms  min=1.03ms med=5.4ms  max=179.16ms p(90)=7.45ms  p(95)=8.64ms
{ expected_response:true }...: avg=6.25ms  min=1.03ms med=5.4ms  max=179.16ms p(90)=7.45ms  p(95)=8.64ms
http_req_failed................: 0.00%  ✓ 0         ✗ 29600
http_req_receiving.............: avg=48.46µs min=0s     med=0s     max=7.8ms    p(90)=52.01µs p(95)=507.4µs
http_req_sending...............: avg=14.24µs min=0s     med=0s     max=7ms      p(90)=0s      p(95)=0s
http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s      p(95)=0s
http_req_waiting...............: avg=6.19ms  min=1.03ms med=5.35ms max=178.66ms p(90)=7.36ms  p(95)=8.57ms
http_reqs......................: 29600  98.586147/s
iteration_duration.............: avg=1.01s   min=1s     med=1.01s  max=1.18s    p(90)=1.01s   p(95)=1.01s
iterations.....................: 29600  98.586147/s
vus............................: 100    min=100     max=100
vus_max........................: 100    min=100     max=100
```

## Webapi with App.Metrics middleware (still with prometheus)
![prometheus webapi results](https://github.com/kaffarell/prometheus-net-benchmarks/blob/master/img/appmetrics.png?raw=true)
```
data_received..................: 20 MB  65 kB/s
data_sent......................: 2.8 MB 9.4 kB/s
http_req_blocked...............: avg=14.53µs min=0s     med=0s     max=10.83ms  p(90)=0s       p(95)=0s
http_req_connecting............: avg=6.46µs  min=0s     med=0s     max=8.81ms   p(90)=0s       p(95)=0s
http_req_duration..............: avg=5.09ms  min=1.87ms med=4.54ms max=106.93ms p(90)=6.63ms   p(95)=8.33ms
{ expected_response:true }...: avg=5.09ms  min=1.87ms med=4.54ms max=106.93ms p(90)=6.63ms   p(95)=8.33ms
http_req_failed................: 0.00%  ✓ 0        ✗ 29600
http_req_receiving.............: avg=88.33µs min=0s     med=0s     max=13.63ms  p(90)=178.81µs p(95)=519.59µs
http_req_sending...............: avg=16.68µs min=0s     med=0s     max=10.69ms  p(90)=0s       p(95)=0s
http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s       p(90)=0s       p(95)=0s
http_req_waiting...............: avg=4.98ms  min=1.73ms med=4.47ms max=106.42ms p(90)=6.48ms   p(95)=7.89ms
http_reqs......................: 29600  98.57964/s
iteration_duration.............: avg=1.01s   min=1s     med=1.01s  max=1.11s    p(90)=1.01s    p(95)=1.01s
iterations.....................: 29600  98.57964/s
vus............................: 100    min=100    max=100
vus_max........................: 100    min=100    max=100
```

## Quickstart

* Install k6 with winget: `winget install k6`
* Run k6 script: 
```
$ k6 run --vus 100 --duration 5m test_clean.js
$ k6 run --vus 100 --duration 5m test_appmetrics.js
$ k6 run --vus 100 --duration 5m test_prometheus.js
```