const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }

    const overdue = () => {
      var i
      var overdue_lst = [];
      for (i in all) {
        if (all[i].dueDate < today) {
          overdue_lst.push(all[i])
        }
      }
      return overdue_lst
    }

    const dueToday = () => {
      var i
      var dueToday_lst = []
      for (i in all) {
        if (all[i].dueDate === today) {
          dueToday_lst.push(all[i])
        }
      }
      return dueToday_lst
    }

    const dueLater = () => {
      var i
      var dueLater_lst = []
      for (i in all) {
        if (all[i].dueDate > today) {
          dueLater_lst.push(all[i])
        }
      }
      return dueLater_lst
    }

    const toDisplayableList = (list) => {
      var i
      var displayList = []
      for (i=0;i<list.length;i++) {
        if (list[i].completed === false) {
          if (list[i].dueDate === today) {
            displayList.push(`[ ] ${list[i].title}`)
          }
          else {
            displayList.push(`[ ] ${list[i].title} ${list[i].dueDate}`)
          }
        }
        else {
          // `[x] ${i.title} ${i.dueDate}`
          if (list[i].dueDate===today) {
            displayList.push(`[x] ${list[i].title}`)
          }
          else {
            displayList.push(`[x] ${list[i].title} ${list[i].dueDate}`)
          }          
        }
      }

      return displayList.join('\n')
    }

    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList }
  }

  const todos = todoList()

  const formattedDate = d => {
    return d.toISOString().split('T')[0]
  }

  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )

  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

  console.log('My Todo-list\n\n')

  console.log('Overdue')
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log('\n\n')

  console.log('Due Today')
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log('\n\n')

  console.log('Due Later')
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log('\n\n')
