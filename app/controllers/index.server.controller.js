exports.render = function(req,res) {
    res.render('index', {
        title : 'Hello World',
        username : req.user ? req.user.username : ''
    });
};
// //이 컨트롤러 파일은 기본화면으로 들어오는 사용자에게 보여지는 첫번째 컨트롤러
// exports.render = function(req,res) {
//   if(req.session.lastVisit) {//지난 방문 기록이 session에 있다면
//         console.log(req.session.lastVisit);
//     }
//   var time = new Date();
//   req.session.lastVisit = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate()+" .. "
//   +time.getHours()+"-"+time.getMinutes()+"-"+time.getSeconds();
//
//    res.render('index',{title : 'First Title'});
//  };
