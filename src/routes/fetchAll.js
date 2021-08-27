import fetchArticles from "../controllers/fetchArticles.js";
import Router from "express";

const routes = Router();

routes
  .route("/")
  .get(fetchArticles.getHome);

  routes
  .route("/documentacao")
  .get(fetchArticles.getDocs);

  routes.route('/artigos')
  .get(fetchArticles.getAll)
  .post(fetchArticles.insertArticle)
  .delete(fetchArticles.deleteArticleById);

export default routes;
