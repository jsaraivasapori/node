const TagModel = require("../models/TagModel.js");

class TagController {
  async index(req, res) {
    try {
      const tags = await TagModel.findAll();

      res.status(200).json(tags);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async show(req, res) {
    try {
      const { tagId } = req.params;

      const target = await TagModel.findById(tagId);
      console.log(target);

      res.status(200).json(target);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async save(req, res) {
    try {
      const { name } = req.body;
      if (!name)
        return res.status(400).json({ message: "Nome invalido para tag" });

      const newTag = await TagModel.create(name);

      res.status(200).json(newTag);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { tagId } = req.params;
      const data = req.body;
      if (!tagId) return res.status(400).json({ message: "TagId vazio/nulo" });
      if (!data || Object.keys(data).length === 0)
        return res.status(400).json({ message: "body vazio/nulo" });
      const updatedTag = await TagModel.update(tagId, data);
      if (!updatedTag)
        return res
          .status(400)
          .json({ message: "Tag não encontrada para atualizar" });

      res.status(200).json(updatedTag);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    const tagId = req.params.tagId;

    console.log(tagId);
    try {
      const toDelete = await TagModel.delete(tagId);

      if (!toDelete) return res.status(400).json({ message: "nao encontrado" });

      res.status(200).json(toDelete);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new TagController();
