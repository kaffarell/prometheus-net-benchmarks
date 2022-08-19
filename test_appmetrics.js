import http from 'k6/http';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { sleep } from 'k6';

export default function () {
  http.get('http://localhost:5002/weatherforecast');
  sleep(1);
}
export function handleSummary(data) {
  return {
    "appmetrics-summary.html": htmlReport(data),
  };
}
