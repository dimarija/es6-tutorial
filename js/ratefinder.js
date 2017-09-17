import * as service from './rate-service-mock';

console.log("Before find all");
service.findAll()
    .then(rates => {
        let html = '';
        rates.forEach(rate => html += `<tr><td>${rate.name}</td><td>${rate.years}</td><td>${rate.rate}%</td></tr>`);
        document.getElementById("rates").innerHTML = html;
        console.log("then n")
    })
    .catch(e => console.log(e));
console.log("After find all");