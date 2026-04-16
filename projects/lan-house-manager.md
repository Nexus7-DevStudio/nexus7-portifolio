# Lan House Manager

- Tipo: Sistema operacional e back-end base
- Status: Publico
- Repositorio publico: [CristianoRFB/Lan-House](https://github.com/CristianoRFB/Lan-House)

## Contexto

Base pensada para uma operacao cliente/servidor em Windows 10, com suporte offline, perfis de usuario, controle de sessoes e administracao centralizada.

## Solucao

O projeto estrutura uma API local em FastAPI, modelagem de dominio para usuarios, maquinas, sessoes, comandos e relatorios, alem de uma fila offline em SQLite para manter a operacao funcionando mesmo sem rede estavel.

## Decisoes que importam para o cliente

- Regras de negocio explicitas por perfil de usuario.
- Operacao resiliente em contexto com conectividade imperfeita.
- Base preparada para evoluir com painel, servico Windows e tempo real.
- Arquitetura pensada para manutencao e crescimento gradual.

## Stack

- Python
- FastAPI
- SQLite
- Testes automatizados

## O que este projeto demonstra

- Modelagem de dominio e fluxo operacional.
- Pensamento de sistema para cenario com restricoes reais.
- Arquitetura preparada para evolucao sem refazer a base.
