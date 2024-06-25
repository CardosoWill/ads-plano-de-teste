const { describe, expect, it } = require('@jest/globals');
const ServicoExercicio = require('../../src/services/pessoa');

describe('Testes do primeiro exercício', () => {
    const service = new ServicoExercicio();

    it('adicionar usuario', async () => {
        const dataTest = { nome: "teste", email: "teste@gmail.com", senha: "123" };
        const { dataValues } = await service.Adicionar(dataTest);

        expect(dataValues.nome).toBe(dataTest.nome);
        expect(dataValues.email).toBe(dataTest.email);
        expect(dataValues.senha).toBe(dataTest.senha);
    });

    it('alterar usuario', async () => {
        const dataTest = { nome: "teste2", email: "teste2@gmail.com", senha: "2" };
        const pessoa = await service.Adicionar(dataTest);
        const novosDados = { nome: "novo", email: "novoemail@gmail.com", senha: "1234" };

        const pessoaAtualizada = await service.Alterar(pessoa.id, novosDados);

        expect(pessoaAtualizada.dataValues.nome).toBe(novosDados.nome);
        expect(pessoaAtualizada.dataValues.email).toBe(novosDados.email);
        expect(pessoaAtualizada.dataValues.senha).toBe(novosDados.senha);
    });

    it('deletar usuario', async () => {
        const dataTest = { nome: "teste", email: "teste@gmail.com", senha: "123" };
        const pessoa = await service.Adicionar(dataTest);

        const pessoaDeletada = await service.Deletar(pessoa.id);

        expect(pessoaDeletada.dataValues.nome).toBe(dataTest.nome);
        expect(pessoaDeletada.dataValues.email).toBe(dataTest.email);
        expect(pessoaDeletada.dataValues.senha).toBe(dataTest.senha);

        const pessoaBusca = await service.Buscar(pessoa.id);
        expect(pessoaBusca).toBeNull();
    });

    it('buscar usuario', async () => {
        const dataTest = { nome: "teste", email: "teste@gmail.com", senha: "123" };
        const pessoa = await service.Adicionar(dataTest);

        const pessoaBuscada = await service.Buscar(pessoa.id);

        expect(pessoaBuscada.dataValues.nome).toBe(dataTest.nome);
        expect(pessoaBuscada.dataValues.email).toBe(dataTest.email);
        expect(pessoaBuscada.dataValues.senha).toBe(dataTest.senha);
    });
});