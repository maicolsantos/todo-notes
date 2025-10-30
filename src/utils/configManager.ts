export interface TodoNotesConfig {
  pomodoroTime: number
  breakTime: number
}

export const DEFAULT_CONFIG: TodoNotesConfig = {
  pomodoroTime: 10,
  breakTime: 5,
}

export async function getConfig(): Promise<TodoNotesConfig> {
  try {
    const result = await chrome.storage.local.get(DEFAULT_CONFIG)
    return result as TodoNotesConfig
  } catch (error) {
    console.error("Erro ao carregar configurações:", error)
    return DEFAULT_CONFIG
  }
}

export async function setConfig(config: TodoNotesConfig): Promise<void> {
  try {
    await chrome.storage.local.set(config)
  } catch (error) {
    console.error("Erro ao salvar configurações:", error)
    throw error
  }
}
