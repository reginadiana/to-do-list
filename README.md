# :octocat: TODO Simpsons - Gerenciador de tarefas do Homer Simpsons

O gerenciador é uma aplicação em frontend para criar e marcar tarefas como concluidas ou não. 

## Entregas 

:heavy_check_mark: Uso de gerenciador de estado (redux).

:heavy_check_mark: Design responsivo.

:heavy_check_mark: Criação de novas tarefas.

:heavy_check_mark: Filtro de tarefas por estado de **concluido**, **não concluido** e **ambos**

### :iphone: Aplicação 

<img src="https://user-images.githubusercontent.com/46378210/173255670-5a93198e-561f-441a-8c48-311f604014b7.png" width="500"/>

### Como executar a aplicação em ambiente local

#### 1. Diretamente na máquina

Clone o projeto:

```bash
$ git clone https://github.com/reginadiana/to-do-list
```

Instale as dependencias:

```
$ yarn install
```

Inicie:

```
$ yarn start
```

#### 2. Com docker

> Para usar o docker, é necessário que o `docker` e o `docker-compose` esteja instalado na máquina

Construa o container:
```
$ docker-compose build
```

Abra o terminal:
```
$ docker-compose run --rm --service-ports app bash  
```

Inicie: 

```
$ yarn start
```

A aplicação fica disponível na rota http://localhost:3001
