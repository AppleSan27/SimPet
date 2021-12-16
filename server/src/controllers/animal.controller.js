const { Animal, Todo, Task, Action, Category } = require('../db/models');


/*---------------------------------------------------------------------------*/
const createAnimal = async (animal, res) => {
  try {
    const addAnimal = await Animal.create(animal);
    return res.status(201).json(addAnimal);
  } catch (err) {
    console.error(err);
    return null;
  }
}

const createAnimalWhithAvatar = async (request, res) => {
  console.log('createAnimalWhithAvatar files ', request.files);
  console.log('createAnimalWhithAvatar bode ', request.body);
  const sampleFile = request.files.file;
  const fileName = sampleFile.name.split(' ').join('');
  const fullname = `${new Date().getTime()}_${fileName}`;
  const uploadPath = `${process.env.PWD}/src/uploads/`;

  sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {
    if (err) {
      console.log('createAnimalWhithAvatar ERROR', request);
      return res.status(500).send(err);
    }

    try {
      const addAnimal = await Animal.create({
        type: request.body.type,
        avatar: fullname,
        name: request.body.name,
        breed: request.body.breed,
        sex: request.body.sex,
        age: request.body.age,
        weight: request.body.weight,
        user_id: request.body.user_id
      });
  
      return res.status(201).json(addAnimal);
    } catch (err) {
      console.error(err);
      return res.sendStatus(500);
    }
  });
}
/*---------------------------------------------------------------------------*/


const getAllAnimal = async (req, res) => {
  try {
    const animals = await Animal.findAll({
      raw: true
    });
    return res.status(200).json(animals);
  } catch (error) {
    return res.sendStatus(500);
  }
}


const addAnimal = async (req, res) => {
  console.log(req.body);
  if (!req.body)
    return res.sendStatus(400);
  
  const { type, name, breed, sex, age, weight, user_id } = req.body;

  if (type && name && breed && sex && age && weight && user_id) {
    if (!req.files || Object.keys(req.files).length === 0) {
      try {
        const addAnimal = await Animal.create(req.body);
        return res.status(201).json(addAnimal);
      } catch (err) {
        console.error(err);
        return res.sendStatus(500);
      }
    }

    // await createAnimalWhithAvatar(req, res);

    const sampleFile = req.files.file;
    const fileName = sampleFile.name.split(' ').join('');
    const fullname = `${new Date().getTime()}_${fileName}`;
    const uploadPath = `${process.env.PWD}/public/uploads/`;

    sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {
      if (err) {
        return res.status(500).send(err);
      }

      try {
        const addAnimal = await Animal.create({
          type,
          avatar: fullname,
          name,
          breed,
          sex,
          age,
          weight,
          user_id
        });
  
        return res.status(201).json(addAnimal);
      } catch (err) {
        console.error(err);
      return res.sendStatus(500);
      }
    });
  }

  return res.sendStatus(400);
}


const getAnimal = async (req, res) => {
  try {
    const animals = await Animal.findAll({
      // raw: true
      where: { user_id: req.params.id }
    });

    return res.status(200).json(animals);
  } catch (error) {
    return res.sendStatus(500);
  }
}


const editAnimal = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    try {
      await Animal.update({ ...req.body }, {
        where: { id: req.params.id }
      });

      res.status(200).json(req.body); //sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(424);  //418
    }
  }

  const sampleFile = req.files.file;
  const fileName = sampleFile.name.split(' ').join('');
  const fullname = `${new Date().getTime()}_${fileName}`;
  const uploadPath = `${process.env.PWD}/public/uploads/`;
  sampleFile.mv(`${uploadPath}/${fullname}`, async (err) => {
    console.log('try load file');
    console.log('load path ', `${uploadPath}/${fullname}`);
    if (err) {
      return res.status(500).send(err);
    }
    
    console.log('file is load');
    try {
      await Animal.update({
        ...req.body,
        avatar: fullname
      }, {
        where: { id: req.params.id }
      });

      res.status(200).json(req.body); //sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(424);  //418
    }
  });
}

const deleteAnimal = async (req, res) => {
  try {
    await Animal.destroy({ where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
}


module.exports = {
  getAllAnimal,
  addAnimal,
  getAnimal,
  editAnimal,
  deleteAnimal
}
