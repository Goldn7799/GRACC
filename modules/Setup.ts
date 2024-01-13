import fs from 'fs'

async function Setup (path: string): Promise<boolean> {
  try {
    await Promise.resolve(fs.readdirSync(`${path}`))
  } catch (e) {
    try {
      fs.mkdirSync(`${path}`)
    } catch (e) {
      console.error(`Failed to create dir ${path}`)
      return false
    }
  }
  try {
    await Promise.resolve(fs.readFileSync(`${path}/user-data.json`, 'utf-8'))
  } catch (e) {
    try {
      fs.writeFileSync(`${path}`, JSON.stringify([]))
    } catch (e) {
      console.error(`Failed to create dir ${path}/user-data.json`)
      return false
    }
  }
  return true
}

export default Setup
