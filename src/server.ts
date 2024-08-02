import fastify from "fastify";

export const app = fastify()

app.listen({port: 8080}, (err, address) => {
    if(err) {
        console.log(err)
    }

    console.log('Server rodando na porta 8080')
})