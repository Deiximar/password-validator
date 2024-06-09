module.exports.validatePassword = function (string) {

  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(string);
}
module.exports.validatePasswordWithMessage = function (password) {
  const numberOfCharacterText = "Tu contraseña debe tener al menos 8 caracteres";
  const upperCaseText = "Tu contraseña debe tener al menos una letra mayúscula";
  const lowerCaseText = "Tu contraseña debe tener al menos una letra minúscula";
  const numberText = "Tu contraseña debe tener al menos un número";
  const alfanumericText = "Tu contraseña debe contener solo caracteres alfanuméricos";
  const successPassword = "Tu contraseña está correcta";

  if (password.length < 8) {
    return numberOfCharacterText;
  }

  if (!/[A-Z]/.test(password)) {
    return upperCaseText;
  }

  if (!/[a-z]/.test(password)) {
    return lowerCaseText;
  }

  if (!/[0-9]/.test(password)) {
    return numberText;
  }

  if (!/^[A-Za-z0-9]+$/.test(password)) {
    return alfanumericText;
  }

  return successPassword;
}

module.exports.validatePasswordRequirement = function (password) {
  const wrongPassword = "Tu contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y solo contener caracteres alfanuméricos (puedes omitir una de ellas)";
  const successPassword = "Tu contraseña está correcta";

  let validations = 0;

  if (password.length >= 8) {
    validations += 1;
  }

  if (/[A-Z]/.test(password)) {
    validations += 1;
  }

  if (/[a-z]/.test(password)) {
    validations += 1;
  }

  if (/[0-9]/.test(password)) {
    validations += 1;
  }

  if (/^[A-Za-z0-9]+$/.test(password)) {
    validations += 1;
  }

  if (validations >= 4) {
    return successPassword;
  } else {
    return wrongPassword;
  }

}

