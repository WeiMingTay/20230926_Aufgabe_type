type Student = {
    firstName: string
    lastName: string
    age: number
    report: schoolReport[]
}
type schoolReport = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F"


let ming = {
    firstName: 'Ming',
    lastName: 'Tay',
    age: 18,
    report: [1, 2, "A", 3, 1, undefined, 3]
}
let helene = {
    firstName: 'Helene',
    lastName: 'Pinsuwan',
    age: 17,
    report: [1, 2, "A", "B", 1, undefined, 3]
}
let sum = {
    firstName: 'Summi',
    lastName: 'Pinsuwan',
    age: 7,
    report: [1, 2, "A", "B", 1, undefined, 3]
}

function printStudent(student: Student) {
    console.log(
        student.firstName + " " + student.lastName + " (" + student.age + ")" + "\n" +
        '='.repeat(30) + "\n" +
        "Noten: " + student.report.map(note => (note !== undefined ? note.toString() : '*')).join(", "))
}

function printStudentList(studentList: Student[]) {
    for (let student of studentList) {
        printStudent(student)
    }
}

const students: Student[] = [ming, helene,
    {

    firstName: 'Summi',
    lastName: 'Pinsuwan',
    age: 7,
    report: [1, 2, "A", "B", 1, undefined, 3]

}]
printStudentList(students)