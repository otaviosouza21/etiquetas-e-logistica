export interface romaneioType {
    ['Emissao']: string;
    ['Cod. Carga']: string;
    ['Documentos']: string;
    ['Cliente']: string;
    ['Cod. Cliente']: string;
    ['Dt. Carregamento']: string;
    ['Valor']: number;
    ['A']: number;
    ['B']: number;
    ['C']: number;
    ['S']: number;
    ['Volumes']: number;
    ['Endereco']: string;
    ['Numero']: string;
    ['Bairro']: string;
    ['Municipio']: string;
    ['Estado']: string;
    ['Qnt.Pedidos']: number;
    ['Transporte']: string;
    ['CEP']: string;
    ['id']: number;
  }
  


export interface romaneioTypeNormalize {
  romaneio_emissao: string;
  romaneio_carga: string;
  romaneio_documento: string;
  romaneio_cliente: string;
  romaneio_codCliente: string;
  romaneio_carregamento: string;
  romaneio_valor: number;
  romaneio_amarrados: number;
  romaneio_bicicletas: number;
  romaneio_caixas: number;
  romaneio_sacos: number;
  romaneio_volumes: number;
  romaneio_end: string;
  romaneio_num: string;
  romaneio_bairro: string;
  romaneio_municipio: string;
  romaneio_estado: string;
  romaneio_quantPedidos: number;
  romaneio_transporte: string;
  romaneio_cep: string;
  romaneio_id: number
}
