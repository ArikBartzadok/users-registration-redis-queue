# users-registration-redis-queue
🧧 Application for registering users and sending emails through queues

## Rodando uma imagem redis com docker
```chell
docker run --name redis -p 6379:6379 -d -t redis:alpine
```

## Executando servidor e jobs
```shell
npm run dev
```

## Features futuras
- [ ] Adiconar visualizador para os jobs (bull-board);