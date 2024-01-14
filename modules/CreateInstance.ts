import grdb from 'grdb'

interface configProperties {
  path: string
}

async function CreateInstance (config: configProperties): Promise<boolean> {}