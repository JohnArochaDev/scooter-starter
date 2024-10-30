const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
const joeBloggs = new User("Joe Bloggs", "test123", 21);
const scooter = new Scooter('denver')
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});

// log in
describe('testing the loginUser method', () => {
  test('should log in user', () => {
    let user = scooterApp.loginUser("Joe Bloggs", "test123")
    expect(user.loggedIn).toEqual(true)
  })
})

// log out
describe('testing the logoutUser method', () => {
  test('should log out user', () => {
    let user = scooterApp.logoutUser("Joe Bloggs")
    expect(user.loggedIn).toEqual(false)
  })
  test('should throw an error', () => {
    expect(() => scooterApp.logoutUser("Joe Bloggz")).toThrow('no such user is logged in')
  })
})

// dock scooter
describe('Testing the dock method', () => {
  test('should dock the scooter', () => {
    scooter.station = null
    scooterApp.dockScooter(scooter, 'denver')
    expect(scooter.station).toBe('denver')
  })
  test('should throw an error', () => {
    expect(() => scooterApp.dockScooter(scooter, 'denver')).toThrow('scooter already at station')
  })
  test('should throw an error', () => {
    expect(() => scooterApp.dockScooter(scooter, 'Denver')).toThrow('no such station')
  })
})


// rent scooter
