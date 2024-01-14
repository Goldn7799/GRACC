import grdb from 'grdb'

interface userStructure {
  id: string // 12 character default
  authCode: string // 24 character default
  email: string // Must include @
  username: string
  password: string // min 8 char default
  isBanned: boolean
  isVerified: boolean
  isAdmin: boolean
  lastLogin: number // Timestamp
}

let isSync: boolean = false
let users: userStructure[] = []

function syncNow (): void {
  grdb.WriteDB('user-data', users)
  setTimeout(() => {
    if (isSync) {
      syncNow()
    }
  }, 1000)
}

async function startSync (): Promise<void> {
  const readDB = async (): Promise<any[]> => JSON.parse(JSON.stringify(await Promise.resolve(grdb.ReadDB('user-data'))))
  users = await readDB()
  isSync = true
  syncNow()
}

function stopSync (): void {
  isSync = false
}

const Databases = {
  startSync,
  stopSync
}

export default Databases
