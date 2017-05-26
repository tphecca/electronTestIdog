
//This is the what the menuFunc function in main.js is
module.exports = function(app, BrowserWindow, Menu, globalShortcut, win, path)
{
  //Call the key events for all events that will happen
  keyEvents(app, globalShortcut);

  //Create the menu
  //Cleaned each MenuItem up to be more neat looking code
  //Comments of what and where the item started
  //Roles are something that is already a 'event' in the app like (role: 'undo' or role: 'minimize')
  //Types are only for Seperators that I currently know of
  const template =
[
  //File
  { 
    label: 'File',
    submenu: [{ label: 'Other', accelerator: 'CmdOrCtrl+T', click() {} },
              { type: 'separator'},
              { label: 'Exit', accelerator: 'CmdOrCtrl+C', click() {app.quit()} }]
  }, 
  //File
  //Test Item
  {  
    label: 'Help',
    submenu: [{ label: 'About', click(){ let child = new BrowserWindow({ width: 480, height: 360, modal: true, show: false, autoHideMenuBar: true, parent: win, title: 'About Isolite Bot System', icon: path.join(__dirname, 'assets/icons/isolite.png')})
                                             child.loadURL('')
                                             child.show()} }]
  }
  //Test Item
]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

//Function for all key events in the program (Won't be much though)
function keyEvents(app, globalShortcut)
{
  //Event for quitting application
  const quit = globalShortcut.register('CmdOrCtrl+C', () => {
    app.quit();
  });
}

//Creating a child window
  /*
  //Parems Modal (Child), show, hidemenubar, parent which is the init window
  let child = new BrowserWindow({ modal: true, show: false, autoHideMenuBar: true, parent: win})
  child.loadURL('INSERT_FILE_OR_LINK')
  child.show()
  */