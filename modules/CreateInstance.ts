import Setup from './Setup'

interface thisConfig {
  path: string
  timeout?: null | number
}

async function CreateInstance (config: thisConfig): Promise<boolean> {
  const isSetupSuccess = await Promise.resolve(Setup(config.path))
  if (isSetupSuccess) {
    console.log('debug!!!!')
    return true
  } else {
    return false
  }
}

export default CreateInstance
