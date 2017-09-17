let rates = [
    {
        "name": "30 years fixed",
        "rate": "13",
        "years": "30"
    },
    {
        "name": "20 years fixed",
        "rate": "2.8",
        "years": "20"
    }
];

export let findAll = () => new Promise((resolve, reject) => {
    if (rates) {
        setTimeout(resolve(rates), 10000);
    } else {
        reject("No rates");
    }
});