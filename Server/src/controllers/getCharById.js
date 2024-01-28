const axios = require("axios");
const { _handleServerError, CustomError } = require('../helpers/_errorHandler');

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}`);
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin.name,
      location: data.location.name,
      image: data.image,
      status: data.status,
    };

    character.name
      ? res.status(200).json(character)
      : res.status(404).json({ error: "Not found" });
  } catch (error) {
    if (error instanceof CustomError) {
      _handleServerError(res, error);
    } else {
      _handleServerError(res, new CustomError('Internal Server Error', 500));
    }
  }
};

module.exports = getCharById;