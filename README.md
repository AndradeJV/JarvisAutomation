# Jarvis Automation - Back End

## Informações Gerais
- Squad: Julliet
- API: GTM Billing - DEV
    - URL Base: https://idp-dev-api.interplayers.com.br/GTM-BILLING-API/api
    
## Tecnologias utilizadas:
- Cypress

---

## Pastas
### .github
workflows
    Arquivos de integração contínua
    - develop.yml
        - Arquivo de integração contínua que olha para a branch develop
    - main.yml
        - Arquivo de integração contínua que olha para a branch develop

### cypress
fixtures
  - Arquivos de massa de dados
  - Nomenclatura conforme os nomes dos endpoints contido na pastas requests
  - Nomes contidos segue com verbo HTTP antes do nome do arquivo

---

### integration
Arquivos onde os testes são executados

Nomenclatura:
- Nome do verbo + _ + Endpoint.spec.js

- Ex:
GET_ApprovalMatrix.spec.js

Extensão ".spec" é para definir o arquivo como teste


- GET: arquivos de testes do tipo GET
- POST: arquivos de testes do tipo POST
- PUT: arquivos de testes do tipo PUT

---

### plugins
Arquivo de inserção de plugins para complementar framework Cypress


---

### requests
Arquivos de funções de testes

---

### support
- Configuração de arquivos para o framework

---

## Arquivos na raíz do projeto

### node_modules
- Pacote de instalação do NPM que não é armazenado no repositório, somente de forma local

### .gitignore
- Arquivo que restringe o versionamento do código

### cypress.json
- Configurações do cypress

- Ex: arquivo para exportar relatório ao cypress

### package.json
- Configurações do projeto
- Armazenamento de configurações de dependências extras ao node
- Nome
- Versão
- Inicialização