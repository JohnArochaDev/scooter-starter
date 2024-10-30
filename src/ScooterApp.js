const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = {houston: [], denver: [], coloradoSprings: []}
    this.registeredUsers = []
  }

  registerUser(username, password, age) {
    if (!this.registeredUsers.includes(username) && age >= 18) {
      this.registeredUsers.push(new User(username, password, age))
      console.log('user has been registered')
      return username
    } else if(this.registeredUsers.includes(username)) {
      throw new Error('already registered')
    } else if (age < 18) {
      throw new Error('too young to register')
    }
  }

  loginUser(username, password) {
    const user = this.registeredUsers.find(user => user.username === username)
    user.login(password)
  }

  logoutUser(username) {
    const user = this.registeredUsers.find(user => user.username === username)
    if (user.loggedIn) {
      user.logout()
    } else {
      throw new Error('no such user is logged in')
    }
  }

  createScooter(station) {
    if (this.stations[station]) {
      this.stations[station].push(new Scooter(station));
      console.log('created new scooter')
    } else {
      throw new Error('no such station error')
    }
  }

  dockScooter(scooter, station) {
    if (scooter.station == station) {
      throw new Error('scooter already at station')
    } else if (!this.stations[station]) {
      throw new Error('no such station')
    } else {
      scooter.station = station
      console.log('scooter is docked')
    }
  }

  rentScooter(scooter, user) {
    if (scooter.station == null) {
      throw new Error('scooter already rented')
    } else {
      scooter.rent(user)
    }
  }

  print() {
    console.log('Registered users: \n', this.registeredUsers)
    console.log('Stations: \n', this.stations)
  }
}

module.exports = ScooterApp