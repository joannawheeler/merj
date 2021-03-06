var db = require('../db.js');

module.exports = {

  getAllEvents: function(req, res) {
    db.Event.findAll({})
    .then(function(events) {
      events = events.map(function(event) {
        var eventData = event.dataValues;
        return {
          id: eventData.id,
          location: eventData.location,
          date: eventData.date,
          title: eventData.title,
          time: eventData.time,
          category: eventData.category,
          description: eventData.description,
          image: eventData.image
          //id (auto-generated)
          //createdAt (auto-generated)
          //updatedAt (auto-generated)
          //HostId (generated by join)
          //EventId (generated by join)
        }
      });
      res.status(200).json(events);
    })
  },

  getMostRecent: function(req, res) {
    db.Event.findAll({
      order: '"id" DESC'
    })
    .then(function(events) {
       events.map((event) => {
        var eventData = event.dataValues;
          return {
            id: eventData.id,
            location: eventData.location,
            date: eventData.date,
            title: eventData.title,
            time: eventData.time,
            category: eventData.category,
            description: eventData.description,
            image: eventData.image
            //id (auto-generated)
            //createdAt (auto-generated)
            //updatedAt (auto-generated)
            //HostId (generated by join)
            //EventId (generated by join)
          }
        })
      res.status(200).json(events);
    });
  },

  // getMostRecent: function(req, res) {
  //   db.Event.findAll({
  //     limit: 10,
  //     order: '"createdAt" DESC'
  //   })
  //   .then(function(events) {
  //      events.map((event) => {
  //       var eventData = event.dataValues;
  //         return {
  //           location: eventData.location,
  //           date: eventData.date,
  //           title: eventData.title,
  //           time: eventData.time,
  //           category: eventData.category,
  //           description: eventData.description,
  //           image: eventData.image
  //           //id (auto-generated)
  //           //createdAt (auto-generated)
  //           //updatedAt (auto-generated)
  //           //HostId (generated by join)
  //           //EventId (generated by join)
  //         }
  //       })
  //     res.status(200).json(events);
  //   });
  // },

  getEvent: function(req, res) {
     db.Event.findOne({
      where: { id: Number(req.params.id) }
     }) 
    .then(function(event) {
      var eventData = event.dataValues;
        res.status(200).json({
          location: eventData.location,
          date: eventData.date,
          title: eventData.title,
          time: eventData.time,
          category: eventData.category,
          description: eventData.description,
          image: eventData.image
          //id (auto-generated)
          //createdAt (auto-generated)
          //updatedAt (auto-generated)
          //HostId (generated by join)
          //EventId (generated by join)
        });
      });
  },

  postEvent: function(req, res) {
    console.log('Post request')
    var params = {
      location: req.body.location,
      date: req.body.date,
      title: req.body.title,
      time: req.body.time,
      category: req.body.category,
      description: req.body.description,
      image: req.body.image
    }
    db.Event.create(params)
    .then(function(data) {
      res.status(201)
    .send('Post request successful')
    })  
    .catch(function(err) {
      res.status(400).send(err)
    })
    
  }

}