const VIACEP_URL = "https://viacep.com.br/ws/";
const API_KEY = "adc509dfda7048f48d06de228869e232";
const GEOCODING_URL = `https://api.opencagedata.com/geocode/v1/json?q=`;

interface EnderecoProps {
  cep: string;
  logradouro: string;
  unidade?: string;
  bairro: string;
  localidade: string;
  uf: string;
  estado: string;
  regiao: string;
  ibge?: string;
  gia?: string;
  ddd?: string;
  siafi?: string;
}

interface Coordenadas {
  results: [
    {
      geometry: { lat: number; lng: number };
    }
  ];
}

export async function GET_ADRESS_COORDENADAS(zipcode: string, numero: string) {
  try {
    const response = await fetch(VIACEP_URL + zipcode + "/json/");
    if (!response.ok) throw new Error("Erro ao buscar informações de endereço");
    const data = (await response.json()) as EnderecoProps;

    const enderecoCompleto = {
      ...data,
      logradouro: `${data.logradouro}, ${numero}`,
    };

    const coordenadas = await GET_COORDENADAS(enderecoCompleto);
    return { data: coordenadas, error: false };
  } catch (error) {
    console.log(error);
    return { data: null, error: true };
  }
}

async function GET_COORDENADAS(endereco_data: EnderecoProps) {
  const endereco = `${endereco_data.logradouro},${endereco_data.bairro},${endereco_data.localidade},${endereco_data.uf}`;
  const endereco_url = encodeURIComponent(endereco);

  try {
    const response = await fetch(
      GEOCODING_URL + `${endereco_url}&key=${API_KEY}`
    );
    if (!response.ok)
      throw new Error("Erro ao buscar informações de coordenadas");
    const data = (await response.json()) as Coordenadas;
    const coordenadas = {
      lat: data.results[0].geometry.lat,
      lng: data.results[0].geometry.lng,
    };
    return coordenadas;
  } catch (error) {
    return null;
  }
}
