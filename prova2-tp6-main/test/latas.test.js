const axios = require('axios')

test('Testando criar uma lata', async () => {
    const lata = {
        descricao: "Lata muito grande",
        volume: 150
    }

    const response = await axios.post('http://localhost:3001/latas', lata)

    expect(response.status).toBe(200)
    expect(response.data.descricao).toBe("Lata muito grande")
    expect(response.data.volume).toBe(150)
})

test('Testando busca', async () => {
    const response = await axios.get('http://localhost:3001/latas')

    expect(response.status).toBe(200)
})

test('Testando busca por id', async () => {
    const response = await axios.get('http://localhost:3001/latas/1123')

    expect(response.status).toBe(204)
})

///////////////////////////////

test('Testando atualizar uma lata', async () => {

    const lata = {
        descricao: "Lata muito grande fabio",
        volume: 151
    }

    const response = await axios.get('http://localhost:3001/latas')

    expect(response.status).toBe(200)
})



test('Testando criar uma lata sem dados', async () => {
    const lata = {
        descricao: "",
        volume: 0 
    }

    const response = await axios.post('http://localhost:3001/latas', lata)

    expect(response.status).toBe(200)
    expect(response.data.descricao).toBe("É obrigatorio informar uma descrição!")
    expect(response.data.volume).toBe("É obrigatorio informar um volume")
})

