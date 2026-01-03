# Reposit-rio-3-Testes-de-API-com-K6

Execução dos Testes de API com k6

Os testes de API deste projeto foram implementados utilizando k6, uma ferramenta voltada para testes de API e performance.

Pré-requisitos:
Antes de executar os testes, é necessário ter o k6 instalado na máquina.
Instalação do k6

Windows (Chocolatey):
choco install k6

macOS (Homebrew):
brew install k6


Linux (APT):
sudo apt install k6

Para validar a instalação:
k6 version

Como executar os testes:

Acesse a pasta do projeto de testes de API:
cd k6-api-tests
Execute o script de testes:
k6 run jsonplaceholder_test.js

O que é validado nos testes
Os testes automatizados com k6 validam:
Teste GET
Endpoint: /comments
Validação do status code 200
Validação do conteúdo da resposta
Teste POST
Endpoint: /albums
Validação do status code 201
Validação dos dados retornados na resposta

Resultado da execução
Após a execução, o k6 exibe no terminal:
Status dos checks (PASS / FAIL)
Tempo de resposta
Informações de execução do teste

Exemplo de saída:
✓ GET status is 200
✓ POST status is 201
✓ Response body validated

Execução via GitHub Actions
Os testes de API com k6 também podem ser executados automaticamente por meio do GitHub Actions, conforme configurado no pipeline:
.github/workflows/api-tests.yml

Esse pipeline é acionado automaticamente sempre que houver alterações na pasta k6-api-tests.

Considerações Finais
Os testes de API com k6 foram implementados com foco em:
Validação funcional de endpoints
Automação via CI/CD
Clareza e simplicidade de execução
