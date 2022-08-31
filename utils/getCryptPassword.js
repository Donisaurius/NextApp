import bcrypt from "bcryptjs";

export const getCryptPassword = (password) => {
  console.log(password, "En cript");

  let salt = bcrypt.genSaltSync();
  let hash = bcrypt.hashSync(password, salt);

  return hash;
};
