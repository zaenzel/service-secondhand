/** @format */

const { user: User } = require('../models');

module.exports = async (req, res, next) => {
  const { userId } = req.userLoggedin;
  const user = await User.findByPk(userId);
  // console.log('ini hasil user', user);
  if (user.address == null || user.phone_number == null || user.city_id == null || user.profile_picture == null) {
    res.status(400).json({
      message: 'Please complete your profile first!',
      error: user,
    });
  } else {
    next();
  }
};
