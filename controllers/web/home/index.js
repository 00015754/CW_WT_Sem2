const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add_update')
    },
    update: async (req, res) =>{
        res.render('home/add_update')
    },
    about: async (req, res) =>{
        res.render('home/about')
    },
    contacts: async (req, res) =>{
        res.render('home/contacts')
    }  
};
  
module.exports = home_controller;
