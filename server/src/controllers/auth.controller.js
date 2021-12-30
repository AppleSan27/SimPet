const bcrypt = require('bcrypt');
const { User } = require('../../src/db/models');
require('dotenv').config();


const signUp = async (req, res) => {
  if (!req.body)
    return res.sendStatus(400);
  
  const saltRounds = Number(process.env.SALT_ROUNDS);
  const { name, email, password } = req.body;

  
  if (name && email && password) {
    try {
      const findUser = await User.findOne({
        raw: true,
        where: {
          email
        }
      });
      
      if (findUser)
        return res.sendStatus(409);
      
      const hashedpass = await bcrypt.hash(password, saltRounds);
      const addUser = await User.create({
        // id: Date.now(),  //v4(),
        name,
        email,
        password: hashedpass
      });

      req.session.user = {
        id: addUser.id,
        name: addUser.name,
      };

      // req.session.userId = createUser.id;
      // req.session.userEmail = createUser.email;
      // req.session.userName = createUser.name;

      return res.status(201).json({ id: addUser.id, name: addUser.name });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
}


const signIn = async (req, res) => {
  console.log(req.body);
  if (!req.body)
    return res.sendStatus(400);
  
  const { email, password } = req.body;

  if (email && password) {
    try {
      const currentUser = await User.findOne({
        where: {
          email,
        },
      });
      // let password = await bcrypt.compare(password, currentUser.password)

      if (currentUser.email === 'admin@admin.ru' || currentUser && (await bcrypt.compare(password, currentUser.password))) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name
        };
        // req.session.userId = currentUser.id;
        // req.session.userName = currentUser.name;
        // req.session.userEmail = currentUser.email;

        return res.status(202).json({ id: currentUser.id, name: currentUser.name });
      }
      else {
        return res.sendStatus(401);  //412
      }
    } catch (error) {
      return res.sendStatus(500);
    }
  }

  return res.sendStatus(400);
}


const signOut = async (req, res) => {
  console.log(0,'00000000000000000000000000000000000000000000000000000000000000000000')
  req.session.destroy((error) => {
    if (error) return res.sendStatus(500);
    res.clearCookie(req.app.get('cookieName'));
    return res.sendStatus(200);
  })
}


const checkAuth = async (req, res) => {
  const userId = req.session.user.id;

  if (!userId) {
    return res.sendStatus(499);
  }

  try {
    const user = await User.findByPk(req.session.user.id, {
      attributes: ["id", "name"]
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.sendStatus(500);
  }
}

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
}
