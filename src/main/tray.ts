import { BrowserWindow, Menu, Tray } from 'electron'

export function createTray(window: BrowserWindow) {
  const tray = new Tray('./resources/rotionTemplate.png')

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    { type: 'separator' },
    { label: 'Documentos recentes', enabled: false },
    {
      label: 'Discover',
      accelerator: 'CommandOrControl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Ignite',
      accelerator: 'CommandOrControl+2',
      acceleratorWorksWhenHidden: false,
    },
    {
      label: 'Rocketseat',
      accelerator: 'CommandOrControl+3',
      acceleratorWorksWhenHidden: false,
    },
    { type: 'separator' },
    {
      label: 'Sair do Rotion',
      role: 'quit',
    },
  ])

  tray.setContextMenu(contextMenu)
}
