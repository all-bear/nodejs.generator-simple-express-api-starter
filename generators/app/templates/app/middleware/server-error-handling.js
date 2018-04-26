module.exports = function() {
  this.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
      code: err.code || err.name,
      error: err,
    });
  });
};
