const { Client } = require("pg");

async function criarEvento(nome, data, totalIngressos, ingressos_vendidos) {
    const client = new Client({
        connectionString:
            "postgresql://postgres:123456@localhost:5432/exercicio_1",
    });
    const evento = {
        nome: `${nome}`,
        data: `${data}`,
        total_ingressos: `${totalIngressos}`,
        ingressos_vendidos: `${ingressos_vendidos}`,
    };

    await client.connect();
    const query = `
    INSERT INTO eventos (nome,data,total_ingressos,ingressos_vendidos) VALUES ($1,$2,$3,$4);`;

    try {
        await client.query(query, [
            evento.nome,
            evento.data,
            evento.total_ingressos,
            evento.ingressos_vendidos,
        ]);
        console.log(`Evento ${evento.nome} criado com sucesso`);
    } catch (error) {
        console.log(error);
    } finally {
        client.end();
        console.log("Desconectado com sucesso");
    }
}

// criarEvento("Festival de Música", "2025-03-15", 500, 150);
// criarEvento("Conferência de Tecnologia", "2025-04-10", 300, 200);
// criarEvento("Workshop de Fotografia", "2025-05-05", 50, 20);
// criarEvento("Exposição de Arte", "2025-06-20", 200, 80);
// criarEvento("Palestra Motivacional", "2025-07-25", 150, 100);
