# Lan House Manager

## Contexto

Este projeto foi pensado para uma operacao cliente/servidor em ambiente Windows, com necessidade de controlar usuarios, maquinas, sessoes e regras de uso mesmo quando a conectividade nao e confiavel.

## Desafio

O desafio nao era apenas criar um CRUD. Era organizar um sistema com caracteristicas operacionais claras:

- perfis de usuario diferentes;
- controle de tempo e saldo;
- fila offline;
- relatarios por periodo;
- administracao central;
- preparacao para evolucao futura.

## Abordagem adotada

A base foi estruturada com API local em FastAPI, servicos de dominio e suporte a persistencia offline em SQLite. A proposta prioriza uma fundacao coerente para crescer depois, em vez de empilhar interface em cima de regras ainda mal definidas.

## Decisoes tecnicas relevantes

- Modelagem de dominio separando usuarios, maquinas, sessoes e comandos.
- Fila offline para manter a operacao funcional sem rede constante.
- Regras de negocio explicitas para perfis como Admin, Ghost, Especial e Comum.
- Preparacao para relatorios, servico Windows e camadas futuras de interface.

## Impacto observavel

Nao ha metrica publica de producao associada ao case. O valor demonstrado aqui esta na capacidade de estruturar um sistema com regra operacional real, restricoes tecnicas concretas e caminho de evolucao claro.

## O que este case prova sobre a Nexus7

- Capacidade de modelar dominio com seriedade.
- Criterio para projetar sistemas alem da interface.
- Visao de manutencao e evolucao gradual em cenarios operacionais.

## Links

- Repositorio: [CristianoRFB/Lan-House](https://github.com/CristianoRFB/Lan-House)
- Projeto resumido: [Lan House Manager](../projects/lan-house-manager.md)
