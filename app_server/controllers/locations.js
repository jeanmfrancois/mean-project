/* Home page */
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { title: 'JF Builds' });
};
/* Location Info page */
module.exports.locationInfo = function(req, res, next) {
  res.render('index', { title: 'Location Info' });
};
/* Add Review page */
module.exports.addReview = function(req, res, next) {
  res.render('index', { title: 'Add a Review' });
};
