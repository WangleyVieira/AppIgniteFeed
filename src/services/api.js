// URL da API
const apiUrl = 'http://localhost:5067/WeatherForecast';

export async function fetchUrl() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log(data);
    
    console.log(data);
    
    return data;

  } catch (error) {
    console.error('Houve um problema com a requisição fetch:', error);
  }
}

async function handleData() {
  const data = await fetchUrl();
  console.log('Dados recebidos:', data);
  // Continue com outras operações nos dados aqui
}

handleData();

// fetchUrl();


