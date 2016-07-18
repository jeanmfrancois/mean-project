module.exports.homepageController = homepageController = function(req, res, next) {
  res.render('index', { title: 'JF Builds' });
};
