var data = {};

function db(){}

db.prototype.CreateRecipe = function(recipe, callback) {
    data[recipe.id] = recipe;
    callback(null)
}

db.prototype.GetRecipe = function(id, callback) {
    if(!data[id]) {
        callback("recipe not found with id " + id, null)
    } else {
        callback(null, data[id]);
    }
}

var x = new db();

module.exports = x