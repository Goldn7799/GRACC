import grdb from 'grdb'
import SetupDB from './SetupDB'

async function CheckDB (): Promise<boolean> {
  const readDB = async (): Promise<boolean | object | any[]> => await Promise.resolve(grdb.ReadDB('user-data'))
  const isDBAvaiable = await readDB()
  if (isDBAvaiable !== false) {
    return true
  } else {
    await Promise.resolve(SetupDB())
    return true
  }
}

export default CheckDB
