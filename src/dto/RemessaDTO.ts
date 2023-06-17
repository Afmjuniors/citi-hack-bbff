import { BadRequestError } from "../error/BadRequestError";
import { DadosComVencimento, Detalhe, Header, Registro, Trailer } from "../types";

export class RemessaDTO{
    public validationHeader = (
    TIPO_DE_REGISTRO: unknown,
    OPERACAO: unknown,
    LITERAL_DE_REMESSA: unknown,
    CODIGO_DO_SERVICO: unknown,
    LITERAL_DE_SERVICO: unknown,
    ISPB_PARTICIPANTE: unknown,
    TIPO_PESSOA_RECEBEDOR: unknown,
    CPF_CNPJ: unknown,
    AGENCIA: unknown,
    CONTA: unknown,
    TIPO_CONTA: unknown,
    CHAVE_PIX: unknown,
    DATA_DE_GERACAO: unknown,
    NUMERO_SEQUENCIAL_DA_REMESSA: unknown,
    VERSAO_DO_ARQUIVO: unknown,
    NUMERO_SEQUENCIAL_DO_REGISTRO: unknown
    ):Header =>{
    if(typeof TIPO_DE_REGISTRO !== "string"){
        throw new BadRequestError("Tipo de registro no Header tem que ser uma 'string'")
     
    }
    if(TIPO_DE_REGISTRO !== "0"){
        throw new BadRequestError("Tipo de registro no Header deve ser 0 no arquivo de remessa")
    }
    if(typeof OPERACAO !== "string"){
        throw new BadRequestError("Operação no Header tem que ser uma 'string'")
    }

    if(typeof LITERAL_DE_REMESSA !== "string"){
        throw new BadRequestError("Literal de  no Header tem que ser uma 'string'")
    }

    if(typeof CODIGO_DO_SERVICO !== "string"){
        throw new BadRequestError("Codigo de serviço no Header tem que ser uma 'string'")
    }

    if(typeof LITERAL_DE_SERVICO !== "string"){
        throw new BadRequestError("Literal de serviço no Header tem que ser uma 'string'")
    }

    if(typeof ISPB_PARTICIPANTE !== "string"){
        throw new BadRequestError("ISPB Participante no Header tem que ser uma 'string'")
    }
    if(typeof TIPO_PESSOA_RECEBEDOR !== "string"){
        throw new BadRequestError("Tipo de pessoa recebedor no Header tem que ser uma 'string'")
    }
    if(typeof CPF_CNPJ !== "string"){
        throw new BadRequestError("CPF/CNPJ no Header tem que ser uma 'string'")
    }
    if(typeof AGENCIA !== "string"){
        throw new BadRequestError("Agencia no Header tem que ser uma 'string'")
    }
    if(typeof CONTA !== "string"){
        throw new BadRequestError("Conta no Header tem que ser uma 'string'")
    }
    if(typeof TIPO_CONTA !== "string"){
        throw new BadRequestError("Tipo de conta no Header tem que ser uma 'string'")
    }
    if(typeof CHAVE_PIX !== "string"){
        throw new BadRequestError("Chave pix no Header tem que ser uma 'string'")
    }
    if(typeof DATA_DE_GERACAO !== "string"){
        throw new BadRequestError("Data de geração no Header tem que ser uma 'string'")
    }
    if(typeof NUMERO_SEQUENCIAL_DA_REMESSA !== "string"){
        throw new BadRequestError("Numero sequecial de remessa no Header tem que ser uma 'string'")
    }
    if(typeof VERSAO_DO_ARQUIVO !== "string"){
        throw new BadRequestError("Versão do arquivo no Header tem que ser uma 'string'")
    }
    if(typeof NUMERO_SEQUENCIAL_DO_REGISTRO !== "string"){
        throw new BadRequestError("Numero sequencial do registro no Header tem que ser uma 'string'")
    }

    return {
        TIPO_DE_REGISTRO,
        OPERACAO,
        LITERAL_DE_REMESSA,
        CODIGO_DO_SERVICO,
        LITERAL_DE_SERVICO,
        ISPB_PARTICIPANTE,
        TIPO_PESSOA_RECEBEDOR,
        CPF_CNPJ,
        AGENCIA,
        CONTA,
        TIPO_CONTA,
        CHAVE_PIX,
        DATA_DE_GERACAO,
        NUMERO_SEQUENCIAL_DA_REMESSA,
        VERSAO_DO_ARQUIVO,
        NUMERO_SEQUENCIAL_DO_REGISTRO

    }

    }
    public validationDetalhe = (
        TIPO_DE_REGISTRO:unknown,
        TIPO_DE_PESSOA_RECEBEDOR: unknown,
        CPF_CNPJ: unknown,
        CHAVE_PIX: unknown,
        TIPO_COBRANCA: unknown,
        COD_DE_OCORRENCIA: unknown,
        NUMERO_SEQUENCIAL: unknown
    ):Detalhe=>{
        if(typeof TIPO_DE_REGISTRO !== "string"){
            throw new BadRequestError("Tipo de registro no Detalhe tem que ser uma 'string'")
         
        }
        if(typeof TIPO_DE_PESSOA_RECEBEDOR !== "string"){
            throw new BadRequestError("Tipo de pessoa recebedor no Detalhe tem que ser uma 'string'")
        }
    
        if(typeof CPF_CNPJ !== "string"){
            throw new BadRequestError("CPF/CNPJ no Detalhe tem que ser uma 'string'")
        }
        if(typeof CHAVE_PIX !== "string"){
            throw new BadRequestError("Chave pix no Detalhe tem que ser uma 'string'")
        }
    
        if(typeof TIPO_COBRANCA !== "string"){
            throw new BadRequestError("Tipo de cobrança no Detalhe tem que ser uma 'string'")
        }
    
        if(typeof  COD_DE_OCORRENCIA !== "string"){
            throw new BadRequestError("Codigo de ocorrencia no Detalhe tem que ser uma 'string'")
        }
    
        if(typeof NUMERO_SEQUENCIAL!== "string"){
            throw new BadRequestError("Numero sequencial no Detalhe tem que ser uma 'string'")
        }
     
        return {
            TIPO_DE_REGISTRO,
            TIPO_DE_PESSOA_RECEBEDOR,
            CPF_CNPJ,
            CHAVE_PIX,
            TIPO_COBRANCA,
            COD_DE_OCORRENCIA,
            NUMERO_SEQUENCIAL
        }

    }

    public validationDadosComVencimento = (
        TIPO_DE_REGISTRO: unknown,
        NUMERO_SEQUENCIAL_DO_REGISTRO: unknown
    ):DadosComVencimento =>{
        if(typeof TIPO_DE_REGISTRO !== "string"){
            throw new BadRequestError("Tipo de registro no Dados especificos de cobrança com vencimento tem que ser uma 'string'")
         
        }
        if(typeof NUMERO_SEQUENCIAL_DO_REGISTRO !== "string"){
            throw new BadRequestError("Numero sequencial do registro recebedor no Dados especificos de cobrança com vencimento tem que ser uma 'string'")
        }
        return{
            TIPO_DE_REGISTRO,
            NUMERO_SEQUENCIAL_DO_REGISTRO
        }
    }
    public validationTrailer = (
        TIPO_DE_REGISTRO: unknown,
        VALOR: unknown,
        QTDE_DE_REGISTROS: unknown,
        NUMERO_SEQUENCIAL: unknown
    ):Trailer =>{
        if(typeof TIPO_DE_REGISTRO !== "string"){
            throw new BadRequestError("Tipo de registro no Trailer tem que ser uma 'string'")
         
        }
        if(typeof VALOR !== "string"){
            throw new BadRequestError("Valor no Trailer tem que ser uma 'string'")
        }
        if(typeof  QTDE_DE_REGISTROS !== "string"){
            throw new BadRequestError("Qauntidade de registro do registro recebedor no Trailer tem que ser uma 'string'")
        }
        if(typeof NUMERO_SEQUENCIAL !== "string"){
            throw new BadRequestError("Numero sequencial do registro recebedor no Trailer tem que ser uma 'string'")
        }

        return {
            TIPO_DE_REGISTRO,
            VALOR,
            QTDE_DE_REGISTROS,
            NUMERO_SEQUENCIAL
        }
    }


}