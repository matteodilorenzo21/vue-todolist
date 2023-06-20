const app = Vue.createApp({
    data() {
      return {
        newTask: '',
        tasks: [
          {
            text: 'fare la spesa',
            done: false,
          },
          {
            text: 'passeggiare il cane',
            done: false,
          },
          {
            text: 'lavare la macchina',
            done: false,
          },
          {
            text: 'firmare il contratto',
            done: false,
          },
        ],
      };
    },
    methods: {
      // Funzione per eliminare il singolo task
      removeTask(targetIndex) {
        this.tasks.splice(targetIndex, 1);
      },
  
      // Funzione per aggiungere una task
      addTask() {
        this.tasks.push({
          text: this.newTask,
          done: false,
        });
        // Resetta il campo di input dopo l'aggiunta della task
        this.newTask = '';
      }
    },
  });
  
  app.mount('#root');