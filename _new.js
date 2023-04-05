// раскрытие дропдауна на главной странице
$(document).on('click', ".kpi-list-dropdown-arrow", (event)=>{
    event.target.closest('.kpi-list-wrapper').classList.toggle('active')
})
// кнопка добавить (пользователя)
$(document).on('click', ".kpi-aside-list-choose", (event)=>{
    event.target.closest('.kpi-aside-list-dropdown-title').classList.toggle('active')
})

// const errors = {
//     ru:"Все поля должны быть заполнеными",
//     kz:""
// }
// const checkedCriteria = {
//     ru:"В дополнение к критериям предыдущего уровня",
//     kz:""
// }


// let oKPIProgram = {};
// let oKPIGoal = {};
// let oTask = {};

// Главную страницу получаем компонентами
// Должна быть функция вызова боковой страницы по ИД программы
// Боковая страница подгружается компонентами

// Есть 3 состояния программы сотрудника: Постановка целей, Мониторинг, Оценка целей
// Есть 4 статуса документа сотрудника: В работе, Согласование, Архив

// !!!Постановка целей - Черновик
// Редактирование участников - руководитель, руководитель +1, функциональный руководитель, и заказчики
// program.updateMembers(CODE, [MEMBER_ID]);

// !!!Постановка целей - Черновик
// Редактирование целей в программе
// Создание цели
// goal.collectData();
// goal.Create({data});

// Обновление цели
// goal.collectData();
// goal.Update({data});

// Удаление цели
// goal.Delete(GOAL_ID);

// Добавление задач в цели
// Добавление задачи в цель
// goal.collectData();
// goal.taskCreate({data});
// goal.taskAdd([TASK_ID]);

// Обновление задачи

// Вариант 1
// let lifeRequest = {
//     forms: {
//       selectUser() {},
//     },
// };
  
  // Вариант 2
  // coreKPI коллекция функций и параметров для управления активный программой
let coreKPI = {
    param: {
        ownerId: null,
        ownerName:null,
        programId: null,
        programState: null,

        agreementProcessId: null,
    },

    agreement: {
        processId: null,

        request: {
        url: {},

        createProcess() {},

        agreementApply(uid) {},
        agreementDismiss(uid, comment) {},
        },

        view: {
        reload() {},
        },

        action: {
        create() {},
        apply(context) {},
        dismiss(context) {},
        },
    },

    task: {
        request: {
            url: "", // request url like /api/kpi/task...

            create() {},
            update() {},
            delete() {},
        },

        view: {
            create() {},
            update() {},
            delete() {},
        },
    },
    goal: {
        request: {
            url: "", // request url like /api/kpi/goal...

            create() {},
            update() {},
            delete() {},

            getCurState() {
                // fetch
                return {
                    state: 01,
                };
            },
        },

        view: {
            create() {},
            update() {},
            delete() {},
            listItem : null
        },

        action: {
            // op,
        },

        resetForm() {},
        reserProgressPercentage() {},
    },
    program: {
        request: {
            url: "", // request url like /api/kpi/program...

            loadPage(programID) {
                let url = "";
                // получить html контент страницы
                // вызвать aside.init() и вставить html контент страницы aside.setContent()

                // если надо инициализировать обработчики
                const html = showAsideItems()
                aside.init()
                aside.drawContent(html)

            },
        },
    },
    init(programID, programState) {
        this.currentProgramId = programID;
        this.currentProgramState = programState;
        this.program.request.loadPage(this.currentProgramId);
    },
};
  

const kpiOpenAside = (programId) =>{
    coreKPI.init(programId, "state1")
}

const showAsideItems = () =>{
    const html = document.querySelector(".goal-window-inner")
    html.style.display = 'block'
    // coreKPI.goal.view.listItem = html
    return html
}

$('document').ready(() => {
    const ownerId = $("#ownerId")
    const forms = [
        ownerId
    ]
    forms.map((item)=>{
        item.submit((e)=>{
            e.preventDefault()
            if(e.target.id == 'ownerId'){
                //при submit добавление id и имя пользователя в объект
                coreKPI.param.ownerId = e.target.querySelector('.kpi-user-id').value
                coreKPI.param.ownerName = e.target.querySelector(".kpi-owner-name").value
                e.target.closest('.kpi-aside-list-dropdown-title').classList.remove('active')
            }
        })
    })
})




