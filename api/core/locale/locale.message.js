

module.exports = function message(req,res,msg){
    var locale = 'en';
    if('locale' in req.params)
        locale = req.params('locale') 
    return sails.__({phrase:msg,locale:locale})
}