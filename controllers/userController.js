const User = require('../models/User');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
// create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {

   User.findOneAndDelete(
      // This is the filter. We delete only the document that matches the _id provided in the request body.
      { _id: req.params.userId }
    )
      .then(results => {
        console.log(results);
        res.send(
         'Document deleted'
        );
      })
      .catch(err => {
        if (err) throw err;
        res.status(500).json(err);
      });
    },

    async updateUser(req, res) {

     User.findOneAndUpdate(
        // This is the filter. We delete only the document that matches the _id provided in the request body.
        { _id: req.params.userId },
        {$set:req.body},
        {new:true, runValidators:true}
      )
        .then(results => {
          console.log(results);
          res.json(
           results
          );
        })
        .catch(err => {
          if (err) throw err;
          res.status(500).json(err);
        });
      },

      async addFriend(req, res) {

       User.findOneAndUpdate(
          // This is the filter. We delete only the document that matches the _id provided in the request body.
          { _id: req.params.userId },
          {$push:{friends:req.params.friendId}},
          {new:true, runValidators:true}
        )
          .then(results => {
            console.log(results);
            res.json(
             results
            );
          })
          .catch(err => {
            if (err) throw err;
            res.status(500).json(err);
          });
        },


        async removeFriend(req, res) {

         User.findOneAndUpdate(
            // This is the filter. We delete only the document that matches the _id provided in the request body.
            { _id: req.params.userId },
            {$pull:{friends:req.params.friendId}},
            {new:true, runValidators:true}
          )
            .then(results => {
              console.log(results);
              res.json(
               results
              );
            })
            .catch(err => {
              if (err) throw err;
              res.status(500).json(err);
            });
          }
};

