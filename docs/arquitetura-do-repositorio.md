# Arquitetura do repositorio

## Objetivo da estrutura

Este repositorio foi organizado para cumprir duas funcoes ao mesmo tempo:

- servir como vitrine comercial para clientes;
- servir como base editorial e tecnica para novos projetos e estudos de caso.

Por isso a estrutura precisa ser simples, clara e escalavel.

## Estrutura adotada

```text
.
|-- README.md
|-- assets/
|   `-- brand/
|-- case-studies/
|-- docs/
|-- projects/
`-- services/
```

## Papel de cada pasta

### `assets/`

Guarda elementos visuais reutilizaveis do repositorio, como banner, identidade e futuras imagens de apoio. Nao deve virar deposito de arquivos soltos ou exportacoes aleatorias.

### `docs/`

Concentra documentos de orientacao:

- diagnostico;
- posicionamento;
- regras editoriais;
- melhorias recomendadas.

Esses arquivos explicam por que a Nexus7 se apresenta dessa forma.

### `services/`

Agrupa a oferta da Nexus7 com foco comercial. A ideia nao e listar toda tecnologia conhecida, e sim mostrar quais problemas o estudio resolve e em que tipo de escopo faz sentido contratar a equipe.

### `projects/`

Reune resumos executivos de projetos publicados. Cada arquivo deve deixar claro:

- contexto;
- problema;
- solucao;
- stack;
- o que o projeto demonstra para um potencial cliente.

### `case-studies/`

Guarda estudos de caso mais completos. Aqui entram:

- contexto de negocio;
- restricoes;
- decisoes de arquitetura;
- impacto observavel;
- aprendizados;
- links para codigo ou material publico.

## Regras para novos projetos

Quando um novo projeto entrar no repositorio, ele deve seguir este fluxo:

1. Criar um resumo em `projects/`.
2. Criar um estudo de caso em `case-studies/` se houver material publico suficiente.
3. Atualizar o `README.md` principal com o link do projeto.
4. Garantir que o case nao use depoimento, numero ou prova social nao autorizada.

## Padrao editorial recomendado

- Nome de arquivo em `kebab-case`.
- Titulos claros e orientados a negocio.
- Nada de "projeto final", "trabalho da faculdade" ou linguagem parecida.
- Se nao houver metrica publica, declarar isso com honestidade.
- Se houver restricao de confidencialidade, documentar o problema e a abordagem sem expor dado sensivel.

## Definition of done para um case novo

Um case novo so deve ser considerado pronto quando responder, de forma objetiva:

- qual era o problema;
- qual solucao foi proposta;
- quais decisoes tecnicas importaram;
- o que esse trabalho prova sobre a capacidade da Nexus7.
