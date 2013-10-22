module.exports = {
  name: 'detail',
  model: 'user',
  select: 'id firstName lastName email',
  map: function(u) {
    return {
      id: u.id,
      fullName: u.firstName + ' ' + u.lastName,
      email: u.email,
      firstName: u.firstName,
      lastName: u.lastName
    };
  }
};
