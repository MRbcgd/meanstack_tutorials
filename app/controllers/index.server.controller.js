//이 컨트롤러 파일은 기본화면으로 들어오는 사용자에게 보여지는 첫번째 컨트롤러
exports.render = function(req,res) {
   res.render('index',{title : 'First Title'});
 };
