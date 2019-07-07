const orm = require("../config/orm.js");

const pot = {
    all: function(cb) {
        orm.all("pots", res => {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("pots", cols, vals, res => {
            cb(res);
        })
    },
    
}