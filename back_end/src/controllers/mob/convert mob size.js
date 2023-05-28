
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}

const beastCount = (mob) => {
  let number
  switch (mob.groupSize) {
    case 'small':
      number = getRandomInt(0, 10)
      console.log('small Mob')
      return multiplyMob(mob, number)

    case 'medium':
      number = getRandomInt(10, 20)
      console.log('medium Mob')
      return multiplyMob(mob, number)

    case 'large':
      console.log('large Mob')
      number = getRandomInt(20, 50)
      return multiplyMob(mob, number)

    case 'horde':
      console.log('horde Mob')
      number = getRandomInt(50, 100)
      return multiplyMob(mob, number)
    default:
      console.log(`mob size has not been instructed correctly on the server`)
  }
}

const multiplyMob = (mob, number) => {
  const array = []
  for (let i = 0; i < number; i++) {
    if(i === 0){
      const beastie = {
        beast: mob.beast, mobSize: mob.mobSize, damage: mob.damage, description: mob.description, health:mob.health, mobType:mob.type, index: i
      }
      array.push(beastie)
    } else {
      const beastie = {
        beast: mob.beast, damage: mob.damage, health:mob.health, index: i
      }
      array.push(beastie)
    }
  }
  return array
}

module.exports = {
  beastCount
}