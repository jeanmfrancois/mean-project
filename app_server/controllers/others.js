/* Other pages */
module.exports.about = function(req, res, next) {
  res.render('index', { title: 'About JF Builds' });
};
