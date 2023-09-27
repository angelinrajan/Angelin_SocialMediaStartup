const thought = require('../models/thought');

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err)
    }
  },
  async getThoughtById(req, res) {
    try {
      const thoughts = await thought.findOne({ _id: req.params.thoughtId });

      if (!thoughts) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
// create a new user
  async createThought(req, res) {
    try {
      const dbUserData = await thought.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    // Wrap the id in the ObjectId class to instantiate a new instance
    //const userID = new ObjectId(req.param.id);
  
    // Use deleteOne() to delete one object
    thought.findOneAndDelete(
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

    async updateThought(req, res) {
      // Wrap the id in the ObjectId class to instantiate a new instance
      //const userID = new ObjectId(req.param.id);
    
      // Use deleteOne() to delete one object
      thought.findOneAndUpdate(
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

      async addReaction(req, res) {
        // Wrap the id in the ObjectId class to instantiate a new instance
        //const userID = new ObjectId(req.param.id);
      
        // Use deleteOne() to delete one object
        thought.findOneAndUpdate(
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


        async removeReaction(req, res) {
          // Wrap the id in the ObjectId class to instantiate a new instance
          //const userID = new ObjectId(req.param.id);
        
          // Use deleteOne() to delete one object
          thought.findOneAndUpdate(
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