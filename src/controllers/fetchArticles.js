import Article from "../database/models/articleModel.js";
import path from 'path';

export default {
  getHome(req, res) {
    res.render(path.resolve('src/views/home'))
  },

  getDocs(req, res) {
    res.render(path.resolve('src/views/documentacao'))
  },

  getAll(req, res) {
    Article.find((err, articles) => {
      if (err) return console.error(err);
      res.json(articles);
    });
  },
  insertArticle(req, res) {
    const newArticle = new Article({
      title: req.query.title,
      content: req.query.content,
    });

    newArticle.save((err, newArticle) => {
      if (err) return console.error(err);
      res.send(`New article inserted successfully ${newArticle}`);
    });
  },
  deleteArticleById(req, res) {
    Article.deleteOne({ _id: req.query._id }).exec();
    res.json(`Artigo deletado com sucesso`);
  },
};
