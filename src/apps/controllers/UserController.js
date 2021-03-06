import User from '../models/User';

class UserController {
  async store(req, res) {
    const { id, name, email, teacher } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      teacher,
    });
  }

  // async update(req, res) {
  //   const { email, oldPassword } = req.body;

  //   const user = await User.findByPk(req.userId);

  //   if (email !== user.email) {
  //     const userExists = await User.findOne({
  //       where: { email },
  //     });

  //     if (userExists) {
  //       return res.status(400).json({ error: 'User already exists.' });
  //     }
  //   }

  //   if (oldPassword && !(await user.checkPassword(oldPassword))) {
  //     return res.status(400).json({ error: 'Password does not match.' });
  //   }

  //   await user.update(req.body);

  //   const { id, name, avatar } = await User.findByPk(req.userId, {
  //     include: [{ model: File, as: 'avatar', attributes: ['id', 'path', 'url'] }],
  //   });

  //   return res.json({
  //     id,
  //     name,
  //     email,
  //     avatar,
  //   });
  // }
}

export default new UserController();
