import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep } from 'k6';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export default function () {
  http.get('http://localhost:5000/weatherforecast');
  sleep(1);
}
export function handleSummary(data) {
  return {
    "stdout": textSummary(data, { indent: ' ', enableColors: true }),
    "clean-summary.html": htmlReport(data),
  };
}
