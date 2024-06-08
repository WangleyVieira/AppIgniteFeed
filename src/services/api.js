// URL da API
const apiUrl = 'https://localhost:7085/Mensagem';

export async function fetchUrl() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    
    return data;

  } catch (error) {
    console.error('Houve um problema com a requisição fetch:', error);
  }
}

// fetchUrl();




