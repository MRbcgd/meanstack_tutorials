var mongoose = require('mongoose'),
    Article = mongoose.model('Article');

var getErrorMessage = function(err) {
    if(err.errors) {
        for (var errName in err.errors) {
            if(err.errors[errName].message) {
                return err.errors[errName].message;
            }
        }
    } else{
        return 'Unknown server error';
    }
};

exports.create = function(req,res) {
    var article = new Article(req.body);
    article.creator = req.user;//creator가 user을 참조하고 있는것을 기억

    article.save(function(err) {
        if(err) {
            return res.status(400).send({
                message : getErrorMessage(err)
            });
        }else{
            res.json(article);
        }
    })
};

exports.list = function(req,res) {
  //created 순으로 정렬하고 creator가 user을 참조하고있으므로 user의 username을 가지고온다
    Article.find().sort('-created').populate('creator', 'username')
    .exec(function(err,articles) {
        if(err) {
            return res.status(400).send({
                message : getErrorMessage(err)
            });
        }else{
            res.json(articles);
        }
    });
};


exports.articleByID = function(req,res, next, id) {
    Article.findById(id).populate('creator', 'username')
    .exec(function(err, article) {
        if(err) {
            return next(err);
        }
        if(!article) {
            return (new Error('Failed to load article' + id));
        }

        req.article = article;
        next();
    });
};

exports.read = function(req,res) {
    res.json(req.article);
};

exports.update = function(req,res) {
    var article = req.article;

    article.title = req.body.title;
    article.content = req.body.content;

    article.save(function(err){
        if(err) {
            return res.status(400).send({
                message : getErrorMessage(err)
            });
        } else {
            res.json(article);
        }
    });
};

exports.delete = function(req,res) {
    var article = req.article;

    article.remove(function(err){
        if(err) {
            return res.status(400).send({
                message : getErrorMessage(err)
            });
        } else {
            res.json(article);
        }
    });
};
//작성자가 이 글의 작성자인지 확인한다.
exports.hasAuthorization = function(req,res,next) {
    if(req.article.creator.id !== req.user.id) {
        return res.status(403).send({
            message : 'User is not authorized'
        });
    }
    next();
};
