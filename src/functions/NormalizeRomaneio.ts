import { romaneioType, romaneioTypeNormalize } from "../types/romaneio";

export function NormalizaRomaneio(romaneio: romaneioType) {
  const romaneioNormalizado: romaneioTypeNormalize = {
    romaneio_emissao: romaneio.Emissao,
    romaneio_carga: romaneio["Cod. Carga"],
    romaneio_documento: romaneio["Documentos"],
    romaneio_cliente: romaneio["Cliente"],
    romaneio_codCliente: romaneio["Cod. Cliente"],
    romaneio_carregamento: romaneio["Dt. Carregamento"],
    romaneio_valor: romaneio["Valor"],
    romaneio_amarrados: romaneio["A"],
    romaneio_bicicletas: romaneio["B"],
    romaneio_caixas: romaneio["C"],
    romaneio_sacos: romaneio["S"],
    romaneio_volumes: romaneio["Volumes"],
    romaneio_end: romaneio["Endereco"],
    romaneio_num: romaneio["Numero"],
    romaneio_bairro: romaneio["Bairro"],
    romaneio_municipio: romaneio["Municipio"],
    romaneio_estado: romaneio["Estado"],
    romaneio_quantPedidos: romaneio["Qnt.Pedidos"],
    romaneio_transporte: romaneio["Transporte"],
    romaneio_id: romaneio['id']
  };

  return romaneioNormalizado;
}
