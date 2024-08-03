import fastify from "fastify";
import { Routes } from "./routes";
import cors from '@fastify/cors'

export const app = fastify()
app.register(Routes)
app.register(cors, {})

app.listen({port: 8080}, (err, address) => {
    if(err) {
        console.log(err)
    }

    console.log('Server rodando na porta 8080')
})