
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "Felix Sargent's Resume"});
};

exports.coffee = function(req, res){
    res.render('coffee', { title: 'Coffee' });
};
