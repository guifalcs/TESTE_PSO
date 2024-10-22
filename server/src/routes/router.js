const express = require('express')
const router = express.Router()
const Task = require('../models/tarefas')

  router.get('/tasks', async (req, res) => {
    try {
      const tarefas = await Task.findAll();
      res.json(tarefas);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
  });

  router.post('/tasks', async (req, res) => {
    const { titulo, descricao } = req.body;
    try {
      const novaTarefa = await Task.create({ titulo, descricao });
      res.status(201).json(novaTarefa);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
  });

  router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const tarefa = await Task.findByPk(id);
      if (!tarefa) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }
      await tarefa.destroy();
      res.json({ message: 'Tarefa excluída com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir tarefa' });
    }
  });

  router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao } = req.body;
    try {
      const tarefa = await Task.findByPk(id);
      if (!tarefa) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }
      tarefa.titulo = titulo;
      tarefa.descricao = descricao;
      await tarefa.save();
      res.json(tarefa);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar tarefa' });
    }
  });

module.exports = router