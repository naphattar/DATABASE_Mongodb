const ReligiousPlace = require("../models/religiousplace");

const addMockReligiousPlaces = async (req, res) => {
    try {
      const religiousPlacesData = req.body.data;
      
      const insertedPlaces = await ReligiousPlace.insertMany(religiousPlacesData);
  
      res.status(201).json({
        message: "Religious places added successfully",
        insertedPlaces,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
};

const getAllReligiousPlace = async(req,res) =>{
    try {
        const religiousPlaces = await ReligiousPlace.find({});
        res.status(200).json(religiousPlaces);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
};


const getAllReligiousPlaceByReligious = async(req,res) =>{
    try {
      const religiousPlaces = await ReligiousPlace.find({ religiousType : req.params.religioustype});
      res.status(200).json(religiousPlaces);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getAllApprovedReligiousPlace = async(req,res) =>{
    try {
        const approvedReligiousPlaces = await ReligiousPlace.find({ approveStatus: true });
        res.status(200).json(approvedReligiousPlaces);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
}

module.exports = {
    addMockReligiousPlaces,
    getAllReligiousPlace,
    getAllReligiousPlaceByReligious,
    getAllApprovedReligiousPlace
}