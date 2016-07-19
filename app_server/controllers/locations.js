/* Home page */
module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { title: 'JF Builds' });
};
/* Location Info page */
module.exports.locationInfo = function(req, res, next) {
  res.render('location-info', { title: 'Location Info' });
};
/* Add Review page */
module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { title: 'Add a Review' });
};
