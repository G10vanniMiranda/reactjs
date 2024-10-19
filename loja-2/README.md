#### Como criar um projeto React
* npm create vite@latest
* Selecionar React
* Selecionar Javascript

* cd nomeProjeto
* npm install

#### Como rodar o projeto
npm run dev

#### Criando uma api
* npm install json-server
* criando um arquivo dados.json
* exemplo de arquivo dados.json
{
    "produto": [
        { "id": 1, "nome": "Teclado usb", "quantidade": 10 },
        { "id": 2, "nome": "Teclado sem fio", "quantidade": 10 },
    ]
}
* npx json-server dados.json

#### CDNs usadas index.html

``` Bootstrap
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"  >
```

``` Boostrap Javascript
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" ></script>
```

* Icons
``` Bootstrap 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
```

``` Bootstrap Exemplos
https://icons.getbootstrap.com/
```

``` Font-awesome/
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"  />
```