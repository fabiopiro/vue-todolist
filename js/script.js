/*
Creare con Vue una to-do list, in cui ogni elemento è un oggetto composto da:
- testo
- "completed", un booleano settato inizialmente a false.

Stampare in pagina un item per ogni elemento della to-do list.

Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista.

Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure cliccando su un pulsante, il testo digitato viene aggiunto alla lista (all'interno di un nuovo oggetto con proprietà "completed" settata a false).

BONUS:
Al click sull'intero elemento della lista, si modifica il valore della proprietà completed da false a true, e viceversa in caso di successivi click (toggle).

Quando un elemento ha la proprietà "completed" settata a true, il testo corrispondente sarà mostrato barrato (esisterà una proprietà CSS per ottenere questo effetto???).
*/

var app = new Vue(
    {
        el: "#root",

        data:{
            toDoList: [

                {
                    task: "Cosa da fare UNO",
                    flag: false,
                },

                {
                    task: "Cosa da fare DUE",
                    flag: false,
                },

                {
                    task: "Cosa da fare TRE",
                    flag: false,
                },

                {
                    task: "Cosa da fare QUATTRO",
                    flag: false,
                },

                {
                    task: "Cosa da fare CINQUE",
                    flag: false,
                },
            ],
            newToDo: {
                task:"",
                flag: false,
            },
        },

        methods:{

            removeToDo: function(indexToRemove) {
                // ".splice(indice da rimuovere, quanti indici da rimuovere) --> X GLI ARRAY!"
                this.toDoList.splice(indexToRemove, 1);
            },

            addTask: function () {

                if (this.newToDo.task.trim().length > 0) {

                    this.toDoList.push(this.newToDo);
                    
                    this.newToDo = {
                        task:"",
                        flag: false,
                    }

                }

            },

            toggle: function(indexToChange) {
                if (this.toDoList[indexToChange].flag == false) {
                    this.toDoList[indexToChange].flag = true;
                } else {
                    this.toDoList[indexToChange].flag = false;
                }
            }
        },
    }
);