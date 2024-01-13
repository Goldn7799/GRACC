import Databases from './Databases'
import Setup from './Setup'

interface thisConfig {
  path: string
  timeout?: null | number
}

async function CreateInstance (config: thisConfig): Promise<boolean> {
  const isSetupSuccess = await Promise.resolve(Setup(config.path))
  if (isSetupSuccess) {
    await Promise.resolve(Databases.startSync(config.path, config.timeout ?? 1000))
    return true
  } else {
    return false
  }
}

export default CreateInstance
