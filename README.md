# Desafio Decora

Desenvolver aplicação web contendo os seguintes requisitos:

- A aplicação deverá estar protegida por login e senha

- Deverá existir 2 tipos de perfis (ADMIN e USER)

- Deverá possuir interface para pesquisa dos usuários cadastrados

- Deverá possuir interface para cadastro dos usuários da aplicação

- O usuário com acesso ADMIN poderá executar cadastro de outros usuários, e visualizar os usuários

- O usuário com acesso USER poderá apenas visualizar os usuários do sistema

### Metodologia 
> **Padrão:** Angular

> **Frameworks:** Angular, Angular Material, JSStore

> **Instalação de pacotes:** npm install

> **Desenvolvedor:** Ana Camila Santos Sousa

>  **Método de Desenvolvimento:**  A estrutura do projeto foi criada com a ferramenta [angular-cli](https://github.com/angular/angular-cli) e sua codificação baseada no style guide angular, encontrado em sua [documentação](https://angular.io/guide/styleguide). 
Para o front end foi utilizado o framework [Angular Material](https://material.angular.io/) e para o armazenamento local o framework do Facebook o [JSStore](http://jsstore.net/) implementado através do arquivo [dbService](https://github.com/acamilass/app-decora/blob/master/src/app/shared/helpers/db.service.ts).
 
### Deploy do projeto

**Requisitos:** A ferramenta Node deve estar instalada

##### Passos

Através do terminal clone o projeto
>> git clone https://github.com/acamilass/app-decora.git

Na pasta app-decora baixe os pacotes
>> npm install

Agora execute o comando, para efetuar o deploy de produção
>>  npm run build

Para executar localmente e testar a build de produção, use o seguinte comando
>> npm run serve

Agora você pode testar a sua aplicação através do endereço [http://localhost:3000](http://localhost:3000)


