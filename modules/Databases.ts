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
