import fs from 'fs'

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
let pathSync: string = ''
let dirPathSync: string = ''
let timeoutSync: number = 0
let users: userStructure[] = []

function syncNow (): void {
  fs.writeFileSync(pathSync, JSON.stringify(users))
  setTimeout(() => {
    if (isSync) {
      syncNow()
    };
  }, timeoutSync)
}

async function startSync (path: string, timeout: number): Promise<boolean> {
  if (path === undefined || timeout < 1000) return false
  isSync = true
  pathSync = path + '/user-data.json'
  dirPathSync = path
  timeoutSync = timeout
  const readFile = async (): Promise<string> => fs.readFileSync(pathSync, 'utf-8')
  users = JSON.parse(await readFile())
  syncNow()
  return true
}

function stopSync (): void {
  isSync = false
}

function getUsers (): userStructure[] {
  return users
}

function getIsSync (): boolean {
  return isSync
}

function getDirPath (): string {
  return dirPathSync
}

const Databases = {
  startSync,
  stopSync,
  getUsers,
  getIsSync,
  getDirPath
}

export default Databases
