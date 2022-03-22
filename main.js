//2. Create Object according to your variant (1)
//3. Create Array with minimum of 5 elements with type Object(according to your variant) (1)
let teachers = [{
    name: 'Teacher 1',
    school: 'School 1',
    experience: 3,
    salary: 7000
},
{
    name: 'Teacher 2',
    school: 'School 2',
    experience: 2,
    salary: 6000
},
{
    name: 'Teacher 3',
    school: 'School 3',
    experience: 4,
    salary: 8000
},
{
    name: 'Teacher 4',
    school: 'School 4',
    experience: 10,
    salary: 14000
},
{
    name: 'Teacher 5',
    school: 'School 5',
    experience: 6,
    salary: 10000
},
];

// 4. Display Array of Objects in web page, using JavaScript (10)
const teachersContainer = document.querySelector('.teachers__container');

const displayTeachers = () => {
    teachersContainer.innerHTML = '';

    teachers.forEach(teacher => {
        teachersContainer.innerHTML += `
            <div class="teacher">
                <div>
                    ${teacher.name}
                </div>

                <div>
                    ${teacher.school}
                </div>

                <div>
                    ${teacher.experience} years
                </div>

                <div>
                    ${teacher.salary} MDL
                </div>
            </div>
        `;
    });
}

// 5. Add functionality that allow user to add new element with Object type in your Array (10)
const addTeacher = () => {
    let name = document.querySelector('.adding__form-name');
    let school = document.querySelector('.adding__form-school');
    let experience = document.querySelector('.adding__form-experience');
    let salary = document.querySelector('.adding__form-salary');

    let newTeacher = {
        name: name.value,
        school: school.value,
        experience: +experience.value,
        salary: +salary.value
    }

    teachers.push(newTeacher);

    name.value = '';
    school.value = '';
    experience.value = '';
    salary.value = '';

    displayTeachers();
    calculateTotal();
}


document.addEventListener('DOMContentLoaded', () => {
// 4. Display Array of Objects in web page, using JavaScript (10)
    displayTeachers();

});