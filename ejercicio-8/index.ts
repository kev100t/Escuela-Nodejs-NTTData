(async () => {
    const fetch = require('node-fetch');
    
    interface currenciesResponse {
        name: string,
        symbol: string,
    }

    interface dataResponse  {
        name: string,
        currencies: currenciesResponse[],
        languages: string[],
        neighborCountries: string[],
    }

    const searchedByCodeCountry = async (alpha3Code: string) => {
        try {
            const res = await fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`);

            const [ country ] = await res.json();

            return country;
        } catch(error) {
            console.log(error);
        }
    }

    const { name, currencies, languages, borders } = await searchedByCodeCountry("PER");

    const dataCurrencies = Object.values(currencies);

    let currencyNames : Array<currenciesResponse> = [];

    dataCurrencies.forEach((currency: any) => {
        const currencyData: currenciesResponse = {
            name: currency.name,
            symbol: currency.symbol,
        };

        currencyNames.push(currencyData);
    });

    let neighborCountryNames : Array<string> = [];

    if (borders) {
        for (const border of borders) {
            const { name } = await searchedByCodeCountry(border)

            const neighborName: string = name.common

            neighborCountryNames.push(neighborName);
        }
    }

    const data: dataResponse = {
        name: name.common,
        currencies: currencyNames,
        languages: Object.values(languages),
        neighborCountries: neighborCountryNames,
    };
    
    console.log(data);
})();

(async () => {
    const precalentarHorno = async () => {
        console.log("Precalentando el horno por 5 segundos.")

        sacarPizza()

        setTimeout(()=>{
            console.log("Bep Bep Beeep! Horno calentado!")

            calentarPizza()
        }, 5000)
    }

    const sacarPizza = async () => {
        console.log("Mientras tanto sacando la pizza, abriendo caja y poniendolo al sartén.")

        setTimeout(()=>{
            console.log("Pizza en la sartén!")

            tomarRefresco()
        }, 3000)
    }

    const tomarRefresco = async () => {
        console.log("Tomando refresco.")
    }

    const calentarPizza = async () => {
        console.log("Calentando la pizza por 10 segundos.")
        mirarTV()

        setTimeout(()=>{
            console.log("Bep Bep Beeep! Pizza lista!")
        }, 10000)
    }

    const mirarTV = async () => {
        console.log("Tomando refresco.")
    }

    await precalentarHorno()
})();