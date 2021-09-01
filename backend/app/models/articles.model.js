module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("articles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contain: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      category: {
        type: Sequelize.TEXT,
      },
      archived: {
        type: Sequelize.INTEGER,
      },
    });
  
    return Article;
  };