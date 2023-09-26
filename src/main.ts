type Student = {
    firstName: string
    lastName: string
    age: number
    report: schoolReport[];
}
type schoolReport = {
    class: "Kunst" | "Biologie" | "Chemie" | "Geologie"
    grade: grades[]
}
type grades = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

function printStudent(student: Student) {
    let name = student.firstName + " " + student.lastName + " (" + student.age + ")"
    let noten = student.report.map(r => r.class + ": " + r.grade.map(note => ((note !== undefined) ? note.toString() : '*')).join(", ") + "\n").join("")
    console.log("%c" +
        name + "\n" +
        '='.repeat(name.length - 2) + "\n" +
        "Noten:\n" +
        noten,
        "font-family: system-ui; color: hotpink")
}

// + student.report.map(note => ((note !== undefined) ? note.toString() : '*')).join(", ")
function printStudentList(studentList: Student[]) {
    for (let student of studentList) {
        printStudent(student)
    }
}
function averageGrage(studentList: Student) {
    for(let i = 0; i < studentList.report.length; i++) {
        console.log(studentList.report[i].grade)
    }


}

averageGrage(students)

const students: Student[] = [
    {
        firstName: 'Ming',
        lastName: 'Tay',
        age: 18,
        report: [{class: "Chemie", grade: ["B", 1, undefined]}, {class: "Kunst", grade: ["A", 1]}]
    },
    {
        firstName: 'Helene',
        lastName: 'Pinsuwan',
        age: 17,
        report: [{class: "Chemie", grade: ["B", 2, 3]}, {class: "Kunst", grade: ["A", 1]}]
    },
    {

        firstName: 'Summi',
        lastName: 'Pinsuwan',
        age: 7,
        report: [{class: "Chemie", grade: ["B"]}]

    }]
printStudentList(students)