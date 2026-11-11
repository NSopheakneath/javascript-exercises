const getAge = function(person) {
  const end = person.yearOfDeath ?? new Date().getFullYear();
  return end - person.yearOfBirth;
};

const findTheOldest = function(array) {
  return array.reduce((oldest, person) =>
    getAge(person) > getAge(oldest) ? person : oldest
  );
};

// Do not edit below this line
module.exports = findTheOldest;
