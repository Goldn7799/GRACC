import grdb from 'grdb'
import MakeID from './MakeID'

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

const userTemplate: userStructure[] = [{
  id: MakeID(12),
  authCode: MakeID(24),
  email: 'admin@example.com',
  username: 'admin',
  password: 'admin',
  isBanned: false,
  isVerified: true,
  isAdmin: true,
  lastLogin: Date.now()
}]

async function SetupDB (): Promise<void> {
  grdb.RemoveDB('user-data')
  grdb.AddDB('user-data', 'array')
  grdb.WriteDB('user-data', userTemplate)
}

export default SetupDB
