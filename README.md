## :octocat: TODO Simpsons - Gerenciador de tarefas do Homer Simpsons

O gerenciador é uma aplicação em frontend para criar e marcar tarefas como concluidas ou não. 

## Entregas de Valor 

:heavy_check_mark: Uso de gerenciador de estado (redux).

:heavy_check_mark: Design responsivo.

:heavy_check_mark: Criação de novas tarefas.

:heavy_check_mark: Filtro de tarefas por estado de **concluido**, **não concluido** e **ambos**

### :iphone: Layout 

![layout](https://user-images.githubusercontent.com/46378210/77605004-9342f000-6ef2-11ea-9ca0-d7d37d7194cb.png)

## Resources

- React
- Redux


## How to run application

Clone this project:

```
git clone https://github.com/reginadiana/to-do-list
```

Install dependeces and run with:

```
$ yarn install
$ cd src
$ yarn start
```

## Running with docker

Building container
```
$ docker-compose build
```

Openning terminal
```
$ docker-compose run --rm --service-ports app bash  
```

Inside the docker terminal, you can run projet with `yarn start`

Is possible to see the response of local request acessing http://localhost:3001

If you can and wanted give me some **feedback** about my project or README.md, send me a **Pull Requests**. Advices are many welcome and constructive for me :smile:

Give me a **Star** if this project help or inspired you somehow :star:
