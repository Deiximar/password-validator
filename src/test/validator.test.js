const { validatePassword, validatePasswordWithMessage, validatePasswordRequirement } = require('../js/validator');

describe('Validate a basic password', () => {
  test('password should have at least 8 characters', () => {
    const password = '123';
    expect(validatePassword(password)).toBeFalsy();
  });
  test('password should have at least 1 uppercase', () => {
    const password = 'terracota23';
    expect(validatePassword(password)).toBeFalsy();
  });
  test('password should have at least 1 lowercase', () => {
    const password = 'TERRACOTA23';
    expect(validatePassword(password)).toBeFalsy();
  });
  test('password should have at least a number', () => {
    const password = 'Terracota';
    expect(validatePassword(password)).toBeFalsy();
  });
  test('password should only have alphanumeric characters', () => {
    const password = 'Terracota@23';
    expect(validatePassword(password)).toBeFalsy();
  });
  test('password should be valid', () => {
    const password = 'Terracota23';
    expect(validatePassword(password)).toBeTruthy();
  })
})

describe('Validate a password and notify why the password is not valid', () => {
  const numberOfCharacterText = "Tu contraseña debe tener al menos 8 caracteres";
  const upperCaseText = "Tu contraseña debe tener al menos una letra mayúscula";
  const lowerCaseText = "Tu contraseña debe tener al menos una letra minúscula";
  const numberText = "Tu contraseña debe tener al menos un número";
  const alfanumericText = "Tu contraseña debe contener solo caracteres alfanuméricos";
  const successPassword = "Tu contraseña está correcta";

  test('password should have at least 8 characters', () => {
    const password = '123';
    expect(validatePasswordWithMessage(password)).toBe(numberOfCharacterText);
  });
  test('password should have at least 1 uppercase', () => {
    const password = 'terracota23';
    expect(validatePasswordWithMessage(password)).toBe(upperCaseText);
  });
  test('password should have at least 1 lowercase', () => {
    const password = 'TERRACOTA23';
    expect(validatePasswordWithMessage(password)).toBe(lowerCaseText);
  });
  test('password should have at least a number', () => {
    const password = 'Terracota';
    expect(validatePasswordWithMessage(password)).toBe(numberText);
  });
  test('password should only have alphanumeric characters', () => {
    const password = 'Terracota@23';
    expect(validatePasswordWithMessage(password)).toBe(alfanumericText);
  });
  test('password should be valid', () => {
    const password = 'Terracota23';
    expect(validatePasswordWithMessage(password)).toBe(successPassword);
  })
});


describe('validate a password that meets at least 4 requirements', () => {
  const wrongPassword = "Tu contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y solo contener caracteres alfanuméricos (puedes omitir una de ellas)";
  const successPassword = "Tu contraseña está correcta";
  test('password is less than 8 characters', () => {
    const password = 'Ter123';
    expect(validatePasswordRequirement(password)).toBe(successPassword);
  });
  test('password is less than 8 characters and doesnt have uppercase', () => {
    const password = 'ter123';
    expect(validatePasswordRequirement(password)).toBe(wrongPassword);
  });
  test('password doesnt have lowercase', () => {
    const password = 'TERRACOTA23';
    expect(validatePasswordRequirement(password)).toBe(successPassword);
  });
  test('password doesnt have number', () => {
    const password = 'Terracota';
    expect(validatePasswordRequirement(password)).toBe(successPassword);
  });
  test('password doesnt have number nor lowercase', () => {
    const password = 'TERRACOTA';
    expect(validatePasswordRequirement(password)).toBe(wrongPassword);
  });
  test('password have special characters', () => {
    const password = 'Terracota@23';
    expect(validatePasswordRequirement(password)).toBe(successPassword);
  });
  test('password have special characters but not uppercase', () => {
    const password = 'terracota@23';
    expect(validatePasswordRequirement(password)).toBe(wrongPassword);
  });
  test('password have special characters and  lowercase', () => {
    const password = 'TERRACORA@@23';
    expect(validatePasswordRequirement(password)).toBe(wrongPassword);
  })
})