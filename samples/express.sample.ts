import express from 'express'

const app = express()

app.set('trust proxy', true)

console.error('Express app initialized.')

export default app
